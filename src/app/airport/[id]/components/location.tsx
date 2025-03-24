import Card from "@/components/card";
import { useAirportStore } from "@/store/useAirportStore";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Location() {
  const { selectedAirport } = useAirportStore();

  return (
    <div>
      <Card height="h-50">
        <h2 className="font-black absolute text-2xl text-gradient">
          Ubicación
        </h2>
        <p className="pt-12">
          <strong>Latitud:</strong> {selectedAirport?.latitude}
        </p>
        <p>
          <strong>Longitud:</strong> {selectedAirport?.longitude}
        </p>
        <p>
          <strong>ID Geoname:</strong> {selectedAirport?.geoname_id}
        </p>
      </Card>
      {selectedAirport?.latitude && selectedAirport?.longitude && (
        <Map
          latitude={selectedAirport.latitude}
          longitude={selectedAirport.longitude}
        />
      )}
    </div>
  );
}
