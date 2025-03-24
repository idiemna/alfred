export const getLocalTime = (time:string) => {
    if (!time) return "No disponible";

    try {
      const formatter = new Intl.DateTimeFormat("es-ES", {
        timeZone: time,
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      return formatter.format(new Date());
    } catch (error) {
      return "Zona horaria inválida";
    }
  };
