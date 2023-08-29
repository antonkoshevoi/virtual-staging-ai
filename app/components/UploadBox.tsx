"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";

import Container from "./layout/Container";
import Loader from "./Loader";
import { BiUpload } from "react-icons/bi";
import { FaSearchengin } from "react-icons/fa";
import uploadImage from "../utils/uploadImage";
import { saveToLocalStorage } from "../utils/localStorage";

const UploadBox = () => {
  const [editedImageUrl, setEditedImageUrl] = useState("");
  const [originalImage, setOriginalImage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    setLoading(true);

    try {
      if (!originalImage) {
        toast.error("No image added");
        return;
      }
      const { data } = await axios.post("/api/upload", {
        image: originalImage,
      });
      setEditedImageUrl(data);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file, setOriginalImage);
    }
    setLoading(false);
  };

  return (
    <Container>
      <h1 className="text-2xl text-center mt-5">Virtual Staging App</h1>
      <div className="flex items-center justify-center">
        <label
          htmlFor="input-image"
          className={`flex items-center gap-2 cursor-pointer mt-3 border rounded-md p-2 bg-black text-white border-white hover:bg-black/80 transition-colors ${
            loading && "bg-black/60 pointer-events-none cursor-none"
          }`}
        >
          Upload image
          <BiUpload />
        </label>
        <input
          id="input-image"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex items-center justify-between mt-3 mb-6">
        {originalImage && (
          <div className="relative w-[45%] h-[430px] drop-shadow-lg">
            <Image
              src={originalImage}
              alt="before-image"
              fill
              className="object-contain object-top"
            />
            <span className="absolute top-0 left-1/2 -translate-x-[50%] p-3 text-2xl bg-white/80 uppercase">
              before
            </span>
          </div>
        )}
        {editedImageUrl && (
          <div className="relative w-[45%] h-[430px] drop-shadow-lg">
            <Image
              src={editedImageUrl}
              alt="after-image"
              fill
              className="object-contain object-top"
            />
            <span className="absolute top-0 left-1/2 -translate-x-[50%] p-3 text-2xl bg-white/80 uppercase">
              after
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mt-auto gap-2">
        <button
          disabled={!originalImage || loading || !!editedImageUrl}
          onClick={handleImageUpload}
          className="flex gap-2 items-center border rounded-md p-2 bg-black text-white border-white hover:bg-black/80 transition-colors disabled:bg-black/60"
        >
          Start the thinking process <FaSearchengin />
        </button>
        <button
          disabled={!originalImage || loading || !editedImageUrl}
          onClick={() => {
            setEditedImageUrl("");
            setOriginalImage("");
          }}
          className="flex gap-2 items-center border rounded-md p-2 bg-red-600 text-white border-white hover:bg-red-600/80 transition-colors disabled:bg-red-600/80"
        >
          Reset
        </button>
      </div>

      {loading && <Loader />}
      {originalImage && editedImageUrl && (
        <button
          onClick={() => saveToLocalStorage([originalImage, editedImageUrl])}
          className="bg-teal-600 text-white hover:bg-teal-600/80 rounded-md p-2 transition-colors "
        >
          Save to my results
        </button>
      )}
    </Container>
  );
};

export default UploadBox;
