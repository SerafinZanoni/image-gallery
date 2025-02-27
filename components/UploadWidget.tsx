"use client";

import { CldUploadWidget } from "next-cloudinary";

export default function UploadComponent() {
  return (
    <CldUploadWidget uploadPreset="upload-unsigned-images">
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
}
