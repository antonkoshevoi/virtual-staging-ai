"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { AiOutlineDelete } from "react-icons/ai";
import { deleteFromLocalStorage } from "../utils/localStorage";

interface ResultsItemProps {
  item: { id: string; images: string[] };
}
const ResultsItem: React.FC<ResultsItemProps> = ({ item }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-around border border-black py-2 rounded-xl drop-shadow-md shadow-xl relative group hover:bg-black/20 transition-all">
      <div className="w-72 h-48 relative rounded-md overflow-hidden ">
        <Image src={item.images[0]} fill alt="before-image" objectFit="cover" />
      </div>
      <div className="w-72 h-48 relative  rounded-md overflow-hidden">
        <Image src={item.images[1]} fill alt="before-image" objectFit="cover" />
      </div>
      <button
        onClick={() => {
          deleteFromLocalStorage(item.id);
          router.refresh();
        }}
        className="h-10 bg-black text-white hidden absolute z-30 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-md group-hover:flex px-2 transition-all"
      >
        Delete
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default ResultsItem;
