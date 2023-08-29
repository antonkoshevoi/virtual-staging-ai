import React from "react";
import ResultsList from "../../components/results/ResultsList";

const ResultsPage = () => {
  return (
    <div>
      <h2 className="text-center text-2xl mt-4 mb-3">Saved images</h2>
      <ResultsList />
    </div>
  );
};

export default ResultsPage;
