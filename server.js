const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');
const FormData = require('form-data');
const fs = require('fs');

dotenv.config();

const app = express();
const PORT = 5000;

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

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = 'C:\\Users\\sammi\\OneDrive\\Desktop\\tenor.gif';
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'DMG gif', 
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': `Bearer ${process.env.PINATA_JWT}`
        }        
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});