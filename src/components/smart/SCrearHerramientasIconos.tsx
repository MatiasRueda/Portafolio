import { Fragment } from "react";
import { tiposHerramientas } from "@/auxiliar/definiciones";
import SHerramientasIconos from "./SHerramientasIconos";

export default function SCrearHerramientasIconos(): JSX.Element {
  const tituloHerramientas: string[] = [
    "Frameworks",
    "Test",
    "Otros",
    "Dev",
    "Lenguajes",
  ];
  return (
    <Fragment>
      {tiposHerramientas.map((e, indice) => (
        <SHerramientasIconos
          key={indice}
          titulo={tituloHerramientas[indice]}
          elementos={Object.values(e)}
        />
      ))}
    </Fragment>
  );
}
