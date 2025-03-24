# Alfred Prueba tecnica

## Instalación y configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/idiemna/alfred.git
   cd alfred
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto y agrega tu clave de API:
   ```env
   NEXT_PUBLIC_AVIATIONSTACK_KEY=a0af9526a75bdc308fea93b1de65268c
   ```

## Ejecutar el proyecto

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Accede a la aplicación en: [http://localhost:3000](http://localhost:3000)

## Ejecutar pruebas
Para ejecutar los tests:
```bash
npm test