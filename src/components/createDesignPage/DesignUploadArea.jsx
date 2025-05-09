import React, { useRef } from 'react';

function DesignUploadArea({ onUpload }) {
  const inputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => onUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => onUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => inputRef.current.click()}
      className="absolute border-2 border-dashed border-gray-400 w-full h-full flex items-center justify-center text-xs bg-white/50 cursor-pointer"
    >
      Drag or click to upload
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default DesignUploadArea;
