// import React, { useState } from 'react';
// import {Link} from 'react-router-dom'
// import '../Style/fileupload.css';
// import bg from '../Media/bg2.png'

// function Fileupload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUploadButtonClick = () => {
//     // Upload logic here
//   };
 
//   return (
//     <div className="file-uploader-container">
//     <div className="container box">
//     <label for="file-input">
//     <img src={bg} alt="Upload Image" />
    
//      </label>
//       <input
//         type="file"
//         id="file-input"
//         className="input-file"
//         onChange={handleFileInputChange}
//       />
//       </div>
//       <label htmlFor="file-input" className="file-input-label">
//         {selectedFile ? selectedFile.name : 'Choose a file'}
//       </label>
//       <Link to="dashboard">
//       <button
//         onClick={handleUploadButtonClick}
//         disabled={!selectedFile}
//         className="upload-button"
//       >
//         Upload
//       </button>
//       </Link>
//     </div>
//   );
// }

// export default Fileupload;
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import '../Style/fileupload.css';
import bg from '../Media/bg2.png'


function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Event handler for file input changes
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
   const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name);

    // Make a POST request using Axios
    axios.post('http://127.0.0.1:5000/Upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    
    <form  className="file-uploader-container" onSubmit={handleSubmit}>
    <div className="container box">
    <label for="file-input">
    <img src={bg} alt="Upload Image" />
    
     </label>
      <input type="file" name="file" onChange={handleFileInputChange} />
      </div>
      <label htmlFor="file-input" className="file-input-label">
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </label>
      <Link to="dashboard">
      <button type="btn btn-submit">Upload</button>
      </Link>
    </form>
  );
}

export default Fileupload;

