"use client";
import React from "react";
import Link from "next/link";

import { Dna } from "react-loader-spinner";

const TryButton = () => {
  return (
    <div className="flex items-center justify-center mt-28">
      <Link
        href="/create"
        className="uppercase  p-4 border bg-black text-white hover:bg-black/80 transition-colors text-2xl flex gap-1"
      >
        Try experiencing it right now
        <Dna
          visible={true}
          height="30"
          width="40"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </Link>
    </div>
  );
};

export default TryButton;
