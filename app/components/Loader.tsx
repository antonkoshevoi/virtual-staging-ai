import React from "react";

import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute w-screen h-screen bg-black/80 flex flex-col items-center justify-center top-0 left-0 z-20">
      <Dna
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h3 className="text-white text-2xl uppercase">AI is thinking...</h3>
    </div>
  );
};

export default Loader;
