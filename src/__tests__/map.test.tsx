import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import dynamic from "next/dynamic";

jest.mock("react-leaflet", () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer"></div>,
  Marker: () => <div data-testid="marker"></div>,
}));

const Map = dynamic(() => import("@/components/map"), { ssr: false });

describe("Map Component", () => {
  it("renderiza el mapa", async () => {
    await act(async () => {
      render(<Map latitude={40.7128} longitude={-74.006} />);
    });

    expect(screen.getByTestId("map")).toBeInTheDocument();
    expect(screen.getByTestId("tile-layer")).toBeInTheDocument();
    expect(screen.getByTestId("marker")).toBeInTheDocument();
  });
});
