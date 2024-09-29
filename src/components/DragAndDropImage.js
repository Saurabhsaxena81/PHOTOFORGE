import React, { useState, useEffect, useRef } from "react";
import fileIcon from "./../Photos/file.svg";
const DragAndDropImage = ({ setImage, image }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const inputRef = useRef(null);

  // Function to handle both drag-and-drop and input file selection
  const handleImageUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file); // Set image in Home component
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle drop event for drag-and-drop functionality
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  // Handle file selection via file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Reset imageSrc when image in Home component is cleared
  useEffect(() => {
    if (!image) {
      setImageSrc(null); // Reset image preview
    }
  }, [image]);

  return (
    <div>
      <div
        style={{
          border: "2px dashed yellow",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => inputRef.current.click()} // Trigger hidden file input on click
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Uploaded"
            style={{ width: "100%", maxWidth: "400px", maxHeight: "400px" }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",

              background: "", // this will make sure the content is centered in the viewport
            }}
            className="bg-opacity-50 bg-green-100 "
          >
            <img
              src={fileIcon}
              alt="upload"
              style={{
                maxWidth: "100px",
                height: "100px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
            />
            <p>Drag & Drop an image here or click to upload</p>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: "none" }} // Ensure input is hidden
      />
    </div>
  );
};

export default DragAndDropImage;
