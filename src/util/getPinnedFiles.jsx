import axios from 'axios';

const PINATA_API_ENDPOINT = 'https://api.pinata.cloud/data/pinList';
const jwtToken = import.meta.env.VITE_PINATA_JWT;

async function getPinnedFiles() {
    const response = await axios.get(PINATA_API_ENDPOINT, {
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    });
    return response.data.rows;
}

export default getPinnedFiles;