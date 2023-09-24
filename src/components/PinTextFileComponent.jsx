import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const PinTextFileComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [editorContent, setEditorContent] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [tags, setTags] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const onFileChange = event => {
        const file = event.target.files[0];
        if (file && file.type === "text/plain") {
            setSelectedFile(file);
        } else {
            console.error("Please select a valid text file.");
            setSelectedFile(null);
        }
    };
    
    const onImageChange = event => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
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
        formData.append('author', author);
        formData.append('date', date);
        formData.append('tags', tags);
        if (selectedImage) {
            formData.append('image', selectedImage);
        }
    
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
                    <label className="form-label">Author Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date:</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Tags (comma-separated):</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={tags}
                        onChange={(e) => setTags(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Blog Image:</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        onChange={onImageChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Write your content:</label>
                    <ReactQuill value={editorContent} onChange={setEditorContent} style={{ height : '300px'}} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="fileInput"></label>
                    <p><br />Or choose a text file:</p>
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
