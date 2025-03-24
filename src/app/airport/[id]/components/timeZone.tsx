import Card from "@/components/card";
import { useAirportStore } from "@/store/useAirportStore";
import { getLocalTime } from "@/utils/localTime";

export default function TimeZone() {
  const { selectedAirport } = useAirportStore();

  return (
    <div>
      <Card height="h-55">
        <h2 className="font-black absolute text-2xl text-gradient">
          Zona horaria
        </h2>
        <p className="pt-12">
          <strong>Zona horaria:</strong> {selectedAirport?.timezone}
        </p>
        <p>
          <strong>GMT:</strong> {selectedAirport?.gmt}
        </p>
      </Card>
      <br/>
      <Card height="h-55">
        <h2 className="font-black absolute text-2xl text-gradient">
          Hora local
        </h2>
        <p className="pt-12">{getLocalTime(selectedAirport?.timezone || "")}</p>
      </Card>
    </div>
  );
}
