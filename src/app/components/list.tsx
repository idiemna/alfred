"use client";

import { useAirportStore } from "@/store/useAirportStore";
import Pagination from "./pagination";
import Card from "../../components/card";
import Link from "next/link";
import { useMemo } from "react";
import CardSkeleton from "@/components/cardSkeleton";

export default function AirportList() {
  const { filteredAirports, currentPage, itemsPerPage, loading } =
    useAirportStore();

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAirports.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAirports, currentPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full overflow-y-scroll lg:overflow-y-hidden h-full max-h-[60vh] sm:max-h-[80vh]">
        {loading ? (
          Array.from({ length: itemsPerPage }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : currentItems?.length > 0 ? (
          currentItems.map((airport) => (
            <Link href={`/airport/${airport.id}`} key={airport.id}>
              <Card>
                <h2 className="font-bold dark:text-white-900 text-lg">
                  {airport.airport_name}
                </h2>
                <p className="dark:text-white-900">
                  {airport.country_name || "Desconocido"}
                </p>
                <p className="font-black text-2xl text-gradient absolute bottom-5">
                  {airport.city_iata_code}
                </p>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-red-500"></p>
        )}
      </div>
      <Pagination />
    </>
  );
}
