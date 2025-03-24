import Card from "@/components/card";
import { useAirportStore } from "@/store/useAirportStore";

export default function GeneralDetail() {
  const { selectedAirport } = useAirportStore();

  return (
    <Card height="h-55">
      <h2 className="font-black absolute text-2xl text-gradient">Información General</h2>
      <p className="pt-12"><strong>Código IATA:</strong> {selectedAirport?.iata_code}</p>
      <p><strong>Código ICAO:</strong> {selectedAirport?.icao_code}</p>
      <p><strong>País:</strong> {selectedAirport?.country_name}</p>
      <p><strong>Ciudad IATA:</strong> {selectedAirport?.city_iata_code}</p>
      <p><strong>Teléfono:</strong> {selectedAirport?.phone_number || "No disponible"}</p>
    </Card>
  );
}
