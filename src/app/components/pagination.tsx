"use client";

import { useAirportStore } from "@/store/useAirportStore";
import { useMemo } from "react";

export default function Pagination() {
  const {
    currentPage,
    setCurrentPage,
    filteredAirports,
    itemsPerPage,
    hasSearched,
  } = useAirportStore();

  const totalPages = useMemo(
    () => Math.ceil(filteredAirports.length / itemsPerPage),
    [filteredAirports, itemsPerPage]
  );

  if (!hasSearched || totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 dark:text-white dark:bg-gray-700 rounded disabled:opacity-50 cursor-pointer"
      >
        ← Anterior
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? "bg-blue-500 text-white font-bold"
              : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 dark:text-white dark:bg-gray-700 rounded disabled:opacity-50 cursor-pointer"
      >
        Siguiente →
      </button>
    </div>
  );
}
