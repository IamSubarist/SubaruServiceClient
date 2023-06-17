import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex mt-8 gap-2">
      {pageNumbers.map((pageNumber) => (
        <p
          key={pageNumber}
          className={`text-lg px-2 rounded-md cursor-pointer transition-all duration-500 ease-in-out ${
            pageNumber === currentPage && "text-white bg-blue-900"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
