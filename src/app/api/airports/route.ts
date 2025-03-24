import { NextResponse } from "next/server";
import { fetchAirports } from "@/lib/aviationstack";

interface Airport {
  id: string;
  iata_code: string;
  airport_name: string;
  country_name: string | null;
  country_iso2: string;
  phone_number: string | null;
  timezone: string;
}

export async function GET(req: Request) {
  const data = await fetchAirports();
  return NextResponse.json({
    airports: data.airports,
    pagination: { total: data.airports.length },
  });
}
