// src/components/FileUpload.js

import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    // Send formData to backend (Flask)
    // Implement this part later
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Upload a File</h1>
      <input type="file" onChange={handleChange} className="mb-4" />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}

export default FileUpload;
