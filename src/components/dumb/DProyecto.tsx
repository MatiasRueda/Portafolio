import Link from "next/link";
import { CSSProperties } from "react";

export default function DProyecto(props: {
  titulo: string;
  path: string;
  estilo: CSSProperties;
  tituloEstilo: CSSProperties;
}): JSX.Element {
  return (
    <Link className="cont-proyecto" style={props.estilo} href={props.path}>
      <p style={props.tituloEstilo}>{props.titulo}</p>
    </Link>
  );
}
