"use client";
import { elegido, noElegido } from "@/auxiliar/definiciones";
import { TIPO } from "@/auxiliar/definiciones";
import { rutasHerramientas } from "@/auxiliar/rutasHerramientas";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SLenguajes(): JSX.Element {
  const path: string = usePathname();
  const partes: string[] = path.split("/");
  const tipo: string = partes[2];
  const nombre = partes.length === 3 ? "Todos" : partes[3];
  return (
    <div className="cont-lenguajes">
      {rutasHerramientas
        .filter(
          (herramienta) =>
            herramienta.tipo === TIPO.TODOS ||
            herramienta.tipo?.toLowerCase() === tipo.toLowerCase()
        )
        .map((herramienta) => (
          <Link
            key={herramienta.nombre}
            style={
              nombre.toLowerCase() === herramienta.nombre.toLowerCase()
                ? elegido
                : noElegido
            }
            href={`${
              herramienta.direccion +
              (herramienta.tipo === TIPO.TODOS ? "/" + partes[2] : "")
            }`}
          >
            {herramienta.nombre}
          </Link>
        ))}
    </div>
  );
}
