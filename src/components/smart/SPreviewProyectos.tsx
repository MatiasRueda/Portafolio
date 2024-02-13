"use client";
import { proyectos } from "@/auxiliar/proyectos";
import separador from "@/auxiliar/chunks";
import { Proyecto } from "@/types/type";
import SProyectos from "./SProyectos";
import ASlider from "../animation/ASlider";
import { Fragment } from "react";

export default function SPreviewProyectos(props: {
  tipoHerramienta: string;
  nombreHerramienta?: string;
}): JSX.Element {
  const proyectosFiltrados: Record<string, Proyecto> = Object.fromEntries(
    Object.entries(proyectos).filter(
      ([llave, proyecto]) =>
        (!props.nombreHerramienta &&
          !!proyecto[props.tipoHerramienta as keyof Proyecto]) ||
        (proyecto[props.tipoHerramienta as keyof Proyecto] as string[])?.find(
          (e) => e.toLowerCase() === props.nombreHerramienta
        )
    )
  );

  return (
    <Fragment>
      {Object.keys(proyectosFiltrados).length <= 4 ? (
        <SProyectos
          proyectosFiltrados={proyectosFiltrados}
          pocos={true}
          lenguaje={props.tipoHerramienta}
        />
      ) : (
        <ASlider
          nombre="caja-proyectos"
          elementos={separador(proyectosFiltrados).map((proyectos) => (
            <SProyectos
              proyectosFiltrados={proyectos}
              pocos={false}
              lenguaje={props.tipoHerramienta}
            />
          ))}
        />
      )}
    </Fragment>
  );
}
