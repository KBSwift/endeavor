// Module imports
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const pinataSDK = require('@pinata/sdk');
const { Readable } = require('stream');

// Configurations
dotenv.config();
const app = express();
const PORT = 5000;
const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT});

// Middleware setups
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Endpoint to test Pinata authentication
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

// Endpoint to pin files to IPFS through Pinata
const upload = multer({ storage: multer.memoryStorage() }); // store the file in memory
app.post('/pinFileToServer', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    const readableStreamForFile = new Readable().push(req.file.buffer).push(null);
    const options = {
        pinataMetadata: {
            name: 'MyCustomName',
            keyvalues: {
                customKey: 'customValue',
                customKey2: 'customValue2'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };

    try {
        const pinataResponse = await pinata.pinFileToIPFS(readableStreamForFile, options);
        res.json(pinataResponse);
    } catch (error) {
        console.error('Error pinning file to IPFS:', error);
        res.status(500).json({ success: false, message: 'Error pinning file to IPFS' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
