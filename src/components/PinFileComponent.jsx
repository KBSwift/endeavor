import React, { useState } from 'react';
import axios from 'axios';

const PinFileComponent = () => {
    const jwtToken = import.meta.env.VITE_PINATA_JWT;
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);
    const [feedback, setFeedback] = useState(null);

    const onFileChange = event => {
        const file = event.target.files[0];
        setSelectedFile(file);
        // Create a URL for the uploaded image to preview it
        const url = URL.createObjectURL(file);
        setPreviewURL(url);
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
            setFeedback("File uploaded successfully!");

            // Alternatively, if you want to clear the preview and feedback after a certain time:
            setTimeout(() => {
                setPreviewURL(null);
                setFeedback(null);
            }, 10000); // Clear after 10 seconds

        } catch (error) {
            console.log(error);
            setFeedback("Error uploading the file.");
        }

    };

    return (
        <div className="card border-0 shadow-sm mt-4" style={{paddingLeft: "30%", paddingRight:"30%"}}>
            <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center"}}>Upload Images</h5>
                <div className="mb-3">
                    <label className="form-label" htmlFor="fileInput">Choose an image:</label>
                    <input
                        type="file"
                        id="fileInput"
                        className="form-control"
                        onChange={onFileChange}
                    />
                </div>
                {previewURL &&
                    <div className="mb-3">
                        <img
                            src={previewURL}
                            alt="Preview"
                            className="img-fluid rounded"
                            style={{ maxWidth: '400px', maxHeight: '300px', display: 'block', margin: '0 auto' }}
                        />
                    </div>
                }
                {feedback &&
                    <div className="alert alert-info mt-3">
                        {feedback}
                    </div>
                }
                <button
                    onClick={pinFileToIPFS}
                    className="btn btn-primary"
                    disabled={!selectedFile}
                >
                    Pin File to IPFS
                </button>
            </div>

        </div>
    );
};

export default PinFileComponent;