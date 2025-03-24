import Image from "next/image";

import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/airport.jpg"
        alt="Fondo optimizado"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[rgb(209,213,220,0.3)] dark:bg-[rgb(30,41,57,0.9)] transition-all duration-200"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center">
        {children}
      </div>
    </div>
  );
}
