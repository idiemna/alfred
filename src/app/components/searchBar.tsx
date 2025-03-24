"use client";

import { useState } from "react";
import { useAirportStore } from "@/store/useAirportStore";
import Image from "next/image";

export default function SearchBar() {
  const {
    setSearchQuery,
    getAirports,
    airports,
    setFilteredAirports,
    hasSearched,
  } = useAirportStore();
  const [search, setSearch] = useState("");

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setSearchQuery(search);

    if (airports.length > 0) {
      setFilteredAirports(search);
    } else {
      getAirports(search);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`mb-4 flex flex-col items-center justify-center gap-2 transition-all duration-1000 ${
        hasSearched ? "sm:flex-row" : ""
      }`}
    >
      <h1
        className={`text-gradient font-black shadow-text drop-shadow-md border-blue-500 p-2 duration-300 ${
          !hasSearched
            ? "text-2xl sm:text-7xl w-full mb-20"
            : "text-xl sm:text-4xl w-full sm:w-2/6"
        }`}
      >
        SkyConnect Explorer
      </h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar aeropuertos..."
        className={`border px-4 py-2 rounded-3xl bg-white text-sky-700 text-lg font-medium transition-all duration-1000 ${
          !hasSearched ? "w-full sm:w-4/6" : "w-full sm:w-3/6"
        }`}
      />
      <button
        type="submit"
        className={`cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded transition-all duration-200 flex items-center justify-center gap-2 w-40`}
      >
        <Image
          src="/find.png"
          alt="Buscar"
          width={20}
          height={20}
          quality={100}
          priority
        />
        <span>Buscar</span>
      </button>
    </form>
  );
}
