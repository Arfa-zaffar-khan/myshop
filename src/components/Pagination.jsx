import React, { memo } from "react";

function Pagination({ totalPages, paginate, currentPage }) {
  return (
    <div className="flex items-center justify-center my-3 ">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 ${currentPage===1?"invisible":"visible"}`}
        aria-label="Previous Page"
      >
        &larr; Previous
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={`page-${i + 1}`}
          onClick={() => paginate(i + 1)}
          className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold ${
            i + 1 === currentPage
              ? "text-white bg-black"
              : "text-gray-900 bg-gray-200 hover:bg-gray-300"
          }`}
          aria-label={`Page ${i + 1}`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-gray-300 ${currentPage===totalPages?"invisible":"visible"}`}
        aria-label="Next Page"
      >
        Next &rarr;
      </button>
    </div>
  );
}

export default memo(Pagination)