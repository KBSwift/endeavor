import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const PinTextFileComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorContent, setEditorContent] = useState('');

    const onFileChange = event => {
        const file = event.target.files[0];
        if (file && file.type === "text/plain") {
            setSelectedFile(file);
        } else {
            console.error("Please select a valid text file.");
            setSelectedFile(null);
        }
    };
    
    const pinContentToIPFS = async () => {
        let contentToPin;
    
        if (editorContent) {
            contentToPin = new Blob([editorContent], { type: 'text/plain' });
        } else if (selectedFile) {
            contentToPin = selectedFile;
        } else {
            console.error("No content to pin");
            return;
        }
    
        const formData = new FormData();
        formData.append('file', contentToPin);
    
        try {
            // Send the content to your server, which will handle the pinning to Pinata
            const res = await axios.post("http://localhost:5000/pinFileToServer", formData);
            console.log(res.data);
        } catch (error) {
            console.error("Error pinning content to IPFS:", error);
        }
    };
    

    return (
        <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
                <h5 className="card-title">Upload or Write Content for Blog Post</h5>

                <div className="mb-3">
                    <label className="form-label">Write your content:</label>
                    <ReactQuill value={editorContent} onChange={setEditorContent} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="fileInput">Or choose a text file:</label>
                    <input 
                        type="file" 
                        id="fileInput"
                        className="form-control" 
                        onChange={onFileChange} 
                        accept=".txt"
                    />
                </div>

                <button 
                    onClick={pinContentToIPFS} 
                    className="btn btn-primary"
                    disabled={!selectedFile && !editorContent}
                >
                    Pin Content to IPFS
                </button>
            </div>
        </div>
    );
};

export default PinTextFileComponent;
