"use client";
import React, { useEffect, useState } from "react";

import ResultsItem from "./ResultsItem";
import Container from "../layout/Container";
import { getFromLocalStorage } from "@/app/utils/localStorage";

export type ImageType = {
  images: string[];
  id: string;
};

const ResultsList = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    const localImages = getFromLocalStorage();
    if (localImages) {
      setImages(JSON.parse(localImages));
    }
  }, []);

  if (!images) {
    return null;
  }
  return (
    <Container>
      <div className=" columns-2 space-y-4">
        {images.map((item) => (
          <ResultsItem key={item.id} item={item} setImages={setImages} />
        ))}
      </div>
    </Container>
  );
};

export default ResultsList;
