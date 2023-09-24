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

app.post('/pinFileToServer', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const formData = new FormData();
    formData.append('file', req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype
    });
    
    const pinataMetadata = {
        name: 'BlogPostContent',
        keyvalues: {
            author: 'AuthorName', // You can customize this
            date: new Date().toISOString()
        }
    };
    formData.append('pinataMetadata', JSON.stringify(pinataMetadata));

    const pinataOptions = {
        cidVersion: 0
    };
    formData.append('pinataOptions', JSON.stringify(pinataOptions));

    try {
        const pinataResponse = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${process.env.PINATA_JWT}`
            }
        });
        res.json(pinataResponse.data);
    } catch (error) {
        console.error('Error pinning file to IPFS:', error);
        res.status(500).send('Error pinning file to IPFS');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});