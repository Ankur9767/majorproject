import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../Style/fileupload.css';
import bg from '../Media/bg2.png'

function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadButtonClick = () => {
    // Upload logic here
  };
 
  return (
    <div className="file-uploader-container">
    <div className="container box">
    <label for="file-input">
    <img src={bg} alt="Upload Image" />
    
     </label>
      <input
        type="file"
        id="file-input"
        className="input-file"
        onChange={handleFileInputChange}
      />
      </div>
      <label htmlFor="file-input" className="file-input-label">
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </label>
      <Link to="dashboard">
      <button
        onClick={handleUploadButtonClick}
        disabled={!selectedFile}
        className="upload-button"
      >
        Upload
      </button>
      </Link>
    </div>
  );
}

export default Fileupload;
