import { Proyecto } from "@/types/type";
import SHerramientas from "../smart/SHerramientas";
import DLink from "./DLink";

export default function DEspecificoProyecto(props: { proyecto: Proyecto , demo?: JSX.Element | false } ): JSX.Element {
  return (
    <div className="cont-proyecto-informacion">
      <h1>{props.proyecto.titulo}</h1>
      <p>{props.proyecto.descripcion}</p>
      <SHerramientas titulo="Lenguajes utilizados para este proyecto: " 
                     herramientas={props.proyecto.lenguajes}/>
      <SHerramientas titulo="Frameworks utilizados para este proyecto: " 
                     herramientas={props.proyecto.framework}/>
      <SHerramientas titulo="Test utilizados usadas:  "
                     herramientas={props.proyecto.tests}/>
      <SHerramientas titulo="Otras tecnologias usadas:  "
                     herramientas={props.proyecto.otros}/>
      <DLink nombre="Repositorio" link={props.proyecto.github}/>
      {props.demo}
    </div>
  )
}
