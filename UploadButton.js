//U22978120

import React, { useState } from 'react';

const UploadButton = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUploading(true); // Set uploading state for feedback
    // Handle file upload logic (using appropriate libraries)
    onUpload(file); // Call parent function with uploaded file
    setUploading(false); // Reset uploading state after upload completes
  };

  return (
    <div className="upload">
      <input type="file" onChange={handleUpload} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default UploadButton;
