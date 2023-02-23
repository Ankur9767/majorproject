import React, { useState } from 'react';
import '../Style/fileupload.css';
import {  
  Link
} from "react-router-dom";

function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append('file', selectedFile);

    // Add additional form data here, such as user ID or metadata
    // formData.append('userId', userId);

    fetch('http://example.com/api/upload', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        console.log(response);
        alert('File uploaded successfully.');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to upload file.');
      });
  };

  return (
    <div>
      <div className="container fileupload">
        <div className="inputandupload">
       <input type="file" name="file"  onChange={handleFileChange} />
      <button onClick={handleFileUpload} className="mt-5">Upload</button>
      </div>
      <Link to="/dashboard"   className="dashboard"> Generate </Link>
      </div>
    </div>
  );
}

export default Fileupload;
