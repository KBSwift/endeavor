import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getPinnedFiles from '../util/getPinnedFiles';

function ArtGallery() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function fetchFiles() {
            const pinnedFiles = await getPinnedFiles();
            setFiles(pinnedFiles);
        }

        fetchFiles();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {files.map(file => (
                    <div key={file.ipfs_pin_hash} className="col-md-4 mb-4">
                        <div className="card">
                            {/* Assuming you have image files in your pinlist */}
                            <img src={`https://ipfs.io/ipfs/${file.ipfs_pin_hash}`} alt="Pinned content" className="card-img-top"/>                            <div className="card-body">
                                <h5 className="card-title">{file.name || 'Unnamed'}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArtGallery;
