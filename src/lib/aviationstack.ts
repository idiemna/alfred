export async function fetchAirports() {
  const API_KEY = process.env.NEXT_PUBLIC_AVIATIONSTACK_KEY;
  const API_URL = `https://api.aviationstack.com/v1/airports?access_key=${API_KEY}&limit=10000`;

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error en la API");

    const data = await res.json();
    console.log(data);
    return {
      airports: data.data,
      pagination: data.pagination,
      error: null,
    };
  } catch (error) {
    console.error("Error al obtener aeropuertos:", error);
    return {
      airports: [],
      pagination: null,
      error: (error as Error).message || "Error desconocido",
    };
  }
}
