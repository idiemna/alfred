import { fetchAirports } from "@/lib/aviationstack";

global.fetch = jest.fn();

describe("fetchAirports", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("hace una solicitud a la API y devuelve los aeropuertos", async () => {
    const mockResponse = {
      data: [{ iata_code: "TEST", airport_name: "Test" }],
      pagination: { total: 1 },
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchAirports();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("aviationstack.com/v1/airports")
    );
    expect(result.airports).toEqual(mockResponse.data);
    expect(result.pagination).toEqual(mockResponse.pagination);
    expect(result.error).toBeNull();
  });

  it("maneja errores cuando la API falla", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    const result = await fetchAirports();

    expect(result.airports).toEqual([]);
    expect(result.pagination).toBeNull();
    expect(result.error).toBeDefined();
  });
});
