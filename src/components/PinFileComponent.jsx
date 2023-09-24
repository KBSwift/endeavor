import React, { useState } from 'react';
import axios from 'axios';


const PinFileComponent = () => {
    const jwtToken = import.meta.env.VITE_PINATA_JWT;

    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    const pinFileToIPFS = async () => {
        if (!selectedFile) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const pinataMetadata = JSON.stringify({
            name: 'File name',
        });
        formData.append('pinataMetadata', pinataMetadata);

        const pinataOptions = JSON.stringify({
            cidVersion: 0,
        });
        formData.append('pinataOptions', pinataOptions);

        try {
            const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
                maxBodyLength: "Infinity",
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${jwtToken}`
                }                
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={pinFileToIPFS}>Pin File to IPFS</button>
        </div>
    );
};

export default PinFileComponent;