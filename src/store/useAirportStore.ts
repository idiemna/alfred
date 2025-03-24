import { create } from "zustand";

interface Airport {
  id: string;
  iata_code: string;
  airport_name: string;
  country_name?: string;
  city_iata_code: string;
  icao_code: string;
  phone_number: string;
  latitude: string;
  longitude: string;
  geoname_id: string;
  timezone: string;
  gmt: string;
}

interface AirportStore {
  loading: boolean;
  airports: Airport[];
  filteredAirports: Airport[];
  searchQuery: string;
  hasSearched: boolean;
  currentPage: number;
  itemsPerPage: number;
  selectedAirport: Airport | null;
  searchHistory: string[];
  getAirports: (search?: string) => void;
  setSearchQuery: (query: string) => void;
  setAirports: (airports: Airport[]) => void;
  setFilteredAirports: (search: string) => void;
  setHasSearched: (value: boolean) => void;
  setCurrentPage: (page: number) => void;
  selectAirportById: (id: string) => void;
  addToSearchHistory: (query: string) => void;
}

export const useAirportStore = create<AirportStore>((set, get) => ({
  loading: false,
  airports: [],
  filteredAirports: [],
  searchQuery: "",
  hasSearched: false,
  currentPage: 1,
  itemsPerPage: 9,
  selectedAirport: null,
  searchHistory: [],
  getAirports: async (search?: string) => {
    set({ loading: true });
    const response = await fetch(`/api/airports`);
    const fetchedAirports = await response.json();

    let airports = fetchedAirports.airports;
    let filteredAirports = [];

    if (search?.trim()) {
      filteredAirports = airports.filter(
        (airport: Airport) =>
          airport.airport_name.toLowerCase().includes(search.toLowerCase()) ||
          airport.iata_code.toLowerCase().includes(search.toLowerCase()) ||
          airport.country_name?.toLowerCase().includes(search.toLowerCase())
      );

      get().addToSearchHistory(search);
    }

    set({
      currentPage: 1,
      hasSearched: true,
      airports: airports,
      filteredAirports: search ? filteredAirports : airports,
      loading: false,
    });
  },
  setSearchQuery: (query) => set({ searchQuery: query }),
  setAirports: (airports) => set({ airports, filteredAirports: airports }),
  setFilteredAirports: (search: string) => {
    const aiports = get().airports;
    if (search.length === 0) {
      set({ filteredAirports: aiports });
      return;
    }
    const filteredAirports = aiports.filter(
      (airport: Airport) =>
        airport.airport_name.toLowerCase().includes(search.toLowerCase()) ||
        airport.iata_code.toLowerCase().includes(search.toLowerCase()) ||
        airport.country_name?.toLowerCase().includes(search.toLowerCase())
    );

    get().addToSearchHistory(search);

    set({ filteredAirports });
  },
  setHasSearched: (value) => set({ hasSearched: value }),
  setCurrentPage: (page) => set({ currentPage: page }),
  selectAirportById: (id) => {
    const airport = get().airports.find((a) => a.id === id);
    if (airport) {
      set({ selectedAirport: airport });
    }
  },
  addToSearchHistory: (query) => {
    const history = get().searchHistory;
    if (!history.includes(query)) {
      set({ searchHistory: [...history, query] });
    }
  },
}));
