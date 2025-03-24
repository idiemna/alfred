import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "@/app/components/searchBar";

const setSearchQueryMock = jest.fn();
const getAirportsMock = jest.fn();
const setFilteredAirportsMock = jest.fn();

jest.mock("@/store/useAirportStore", () => ({
  useAirportStore: jest.fn(() => ({
    setSearchQuery: setSearchQueryMock,
    getAirports: getAirportsMock,
    setFilteredAirports: setFilteredAirportsMock,
    airports: [],
    hasSearched: false,
  })),
}));

describe("SearchBar Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("mostrar el input y el botón busqueda", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Buscar aeropuertos...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
  });

  it("actualiza el estado al escribir en el input", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Buscar aeropuertos...");

    fireEvent.change(input, { target: { value: "JFK" } });

    expect(input).toHaveValue("JFK");
  });

  it("llama funciontes al hacer submit", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Buscar aeropuertos...");
    const button = screen.getByRole("button", { name: /buscar/i });

    fireEvent.change(input, { target: { value: "JFK" } });
    fireEvent.click(button);

    expect(setSearchQueryMock).toHaveBeenCalledTimes(1);
    expect(setSearchQueryMock).toHaveBeenCalledWith("JFK");
    expect(getAirportsMock).toHaveBeenCalledTimes(1);
    expect(getAirportsMock).toHaveBeenCalledWith("JFK");
  });
});
