"use client";

import Tabs from "@/components/tabs";
import { useAirportStore } from "@/store/useAirportStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import GeneralDetail from "./components/generalDetail";
import Location from "./components/location";
import TimeZone from "./components/timeZone";

export default function AirportPage() {
  const { id } = useParams<{ id: string }>();

  const { selectAirportById, airports, getAirports, selectedAirport } =
    useAirportStore();

  useEffect(() => {
    airports.length === 0 ? getAirports() : selectAirportById(id);
  }, [id, airports]);

  const tabs = [
    { id: "general", label: "General", content: <GeneralDetail /> },
    {
      id: "ubicacion",
      label: "Ubicación",
      content: <Location />,
    },
    {
      id: "zona-horaria",
      label: "Zona Horaria",
      content: <TimeZone />,
    },
  ];

  return (
    <div className="min-h-screen w-full h-full p-2 sm:p-20 ">
      <h2 className="font-black text-4xl mb-2 text-gradient">
        {selectedAirport?.iata_code}
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
