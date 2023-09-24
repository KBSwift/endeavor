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
    try {
        const formData = new FormData();
        formData.append('file', req.files['file'][0].buffer, req.files['file'][0].originalname);
        if (req.files['image']) {
            formData.append('image', req.files['image'][0].buffer, req.files['image'][0].originalname);
        }

        const pinataMetadata = {
            name: 'BlogPostContent',
            keyvalues: {
                author: req.body.author || 'AuthorName',
                date: req.body.date || new Date().toISOString(),
                tags: req.body.tags || ''
            }
        };
        formData.append('pinataMetadata', JSON.stringify(pinataMetadata));

        const pinataOptions = {
            cidVersion: 0
        };
        formData.append('pinataOptions', JSON.stringify(pinataOptions));

        const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${process.env.PINATA_JWT}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error pinning content to IPFS:", error);
        res.status(500).send("Error pinning content to IPFS");
    }
});

// chatbot api call
app.post('/ask', async (req, res) => {
    const data = {
        model: "gpt-3.5-turbo",
        messages: req.body.messages
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});