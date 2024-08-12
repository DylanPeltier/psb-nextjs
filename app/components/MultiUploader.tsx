"use client";
import { useCallback, useRef, useState } from "react";
import { useUploadThing } from "./utils/uploadthing";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "@nextui-org/react";

export function MultiUploader({
  onFilesUploaded,
}: {
  onFilesUploaded: (urls: string[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (file: File) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const { startUpload, permittedFileInfo } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      setUploading(false);
      setUploadedUrls(res.map((file) => file.url));
      onFilesUploaded(res.map((file) => file.url)); // Notify parent component
    },
    onUploadError: (error) => {
      setUploading(false);
      alert(`Error while uploading: ${error.message}`);
    },
    onUploadBegin: () => {
      setUploading(true);
    },
  });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  const handleClick = () => {
    fileInputRef.current?.click(); // Trigger file input click
  };

  // Function to format file size
  const formatSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / 1048576).toFixed(2)} MB`;
  };

  return (
    <div>
      <div
        {...getRootProps()}
        className="dropzone"
        onClick={(e) => e.preventDefault()} // Prevent file chooser from opening
      >
        <input
          {...getInputProps()}
          ref={fileInputRef} // Assign ref to the file input
          className="hidden" // Hide the file input
        />
        <div className="flex items-center justify-center h-72 border-2 gap-2 border-gray-300 border-dashed rounded-md flex-col p-2">
          {files.length === 0 && (
            <>
              <Button type="button" color="primary" onClick={handleClick}>
                Drop files here or click to select files
              </Button>
              <p className="text-sm">MAX SIZE: 4MB - MAX FILES: 10</p>
            </>
          )}
          {files.length > 0 && (
            <>
              <div className="flex flex-col gap-2 mt-2 max-h-48 overflow-y-auto w-full">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-between w-full gap-2 p-3"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`preview ${index}`}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 flex flex-col ml-2">
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        {formatSize(file.size)}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="bg-red-500 text-white text-xs rounded-md px-2 py-1 flex items-center justify-center"
                      onClick={() => removeFile(file)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <Button
                type="button"
                color="primary"
                className="px-4 py-2 text-white rounded-xl mt-2 text-sm"
                onClick={() => startUpload(files)}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : `Upload ${files.length} Image(s)`}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
