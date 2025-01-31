import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                    key={page}
                    className={`mx-1 px-4 py-2 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;