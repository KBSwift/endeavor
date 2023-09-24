const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer'); // for handling file uploads
const app = express();
const PORT = 5000;
const FormData = require('form-data');
const { Readable } = require('stream');

dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/testPinataAuth', async (req, res) => {
    try {
        const response = await axios.get('https://api.pinata.cloud/data/testAuthentication', {
            headers: {
                'accept': 'application/json',
                'authorization': `Bearer ${process.env.PINATA_JWT}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error testing Pinata Authentication:", error);
        res.status(500).json({ success: false, message: 'Error testing Pinata Authentication' });
    }
});

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

const upload = multer({ storage: multer.memoryStorage() }); // store the file in memory

app.post('/pinFileToServer', upload.fields([{ name: 'file' }, { name: 'image' }]), async (req, res) => {
    if (!req.files.file) {
        return res.status(400).send('No file uploaded');
    }

    const formData = new FormData();
    formData.append('file', req.files.file[0].buffer, {
        filename: req.files.file[0].originalname,
        contentType: req.files.file[0].mimetype
    });

    // Check and append the image if present
    if (req.files.image) {
        formData.append('image', req.files.image[0].buffer, {
            filename: req.files.image[0].originalname,
            contentType: req.files.image[0].mimetype
        });
    }
    
    const pinataMetadata = {
        name: 'BlogPostContent',
        keyvalues: {
            author: req.body.author || 'AuthorName', // Default to 'AuthorName' if no author provided
            date: req.body.date || new Date().toISOString(), // Default to current date if none provided
            tags: req.body.tags || '' // Default to empty string if no tags provided
        }
    };
    formData.append('pinataMetadata', JSON.stringify(pinataMetadata));

    const pinataOptions = {
        cidVersion: 0
    };
    formData.append('pinataOptions', JSON.stringify(pinataOptions));

    try {
        const pinataResponse = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': 'multipart/form-data; boundary=${formData._boundary}',
                'Authorization': `Bearer ${process.env.PINATA_JWT}`           }
        });
        res.json(pinataResponse.data);
    } catch (error) {
        console.error('Error pinning file to IPFS:', error);
        res.status(500).send('Error pinning file to IPFS');
    }
});

// chatbot api call
app.post('/ask', async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v2/engines/davinci/completions', {
            prompt: req.body.question,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                'Content-Type': 'application/json'
            }
        });

        res.json({ answer: response.data.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch response from OpenAI.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});