import Image from "next/image";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  height?: string;
}

export default function Card({ children, height }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transition-shadow text-left bg-blue-200 dark:bg-gray-800 overflow-hidden shadow-xs shadow-stone-800 dark:shadow-white cursor-pointer">
      <div className={`relative w-full ${height ? height : "h-45"}`}>
        <div
          className={`flex items-center justify-center gap-2 absolute z-5 top-2 right-2 bg-blue-300 w-10 h-10 rounded-full`}
        >
          <Image
            src="/airplaneIcon.png"
            alt="Buscar"
            width={20}
            height={20}
            quality={100}
            priority
          />
        </div>
        <div className="w-4/9 h-full absolute right-0 z-2">
          <Image
            src="/airplane.jpg"
            alt="Fondo optimizado"
            fill
            className="object-cover w-full h-full"
            quality={100}
            priority
          />

          <div className="absolute inset-0 bg-[rgb(209,213,220,0.2)] dark:bg-[rgb(30,41,57,0.6)] transition-all duration-200"></div>
        </div>

        <div className="pl-8 pt-5 w-full z-3 absolute w-full h-full z-1">
          {children}
        </div>
      </div>
    </div>
  );
}
