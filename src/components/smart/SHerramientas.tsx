import { FRAMEWORK, LENGUAJE, OTROS, TEST } from "@/auxiliar/definiciones";
import Image from "next/image";
import { Fragment } from "react";

export default function SHerramientas(props: {
  titulo: string;
  herramientas?: (LENGUAJE | FRAMEWORK | TEST | OTROS)[];
}): JSX.Element | false {
  return (
    <Fragment>
      {props.herramientas && (
        <div className="cont-herramientas">
          <h3>{props.titulo}</h3>
          <div className="cont-herramienta">
            {props.herramientas.map((herramienta) => (
              <Image
                key={herramienta}
                src={"/herramientas/" + herramienta.toLowerCase() + ".png"}
                alt={herramienta}
                title={herramienta}
                height={40}
                width={40}
              />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
}
