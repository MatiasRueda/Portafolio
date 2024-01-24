import { Fragment } from "react";
import ASlider from "../animation/ASlider";
import DImgEspecificaProyecto from "../dumb/DImgEspecificaProyecto";
import { Proyecto } from "@/types/type";

export default function SImgEspecificaProyecto(props: { proyecto: Proyecto }): JSX.Element {
  return (
    <Fragment>
      { !props.proyecto.imagen && <DImgEspecificaProyecto llave={1}
                                                          src={`/proyectos/backend.png`}
                                                          alt={props.proyecto.titulo}/> }
                                                          
      { props.proyecto.imagen?.length === 1 &&
            <DImgEspecificaProyecto llave={1}
                                    src={`/proyectos/${props.proyecto.titulo}1.png`}
                                    alt={props.proyecto.titulo}/>}

      { !!props.proyecto.imagen && props.proyecto.imagen.length != 1 && 
        <ASlider nombre="imagen"
                 elementos={props.proyecto.imagen?.map(indice => 
                                <DImgEspecificaProyecto llave={indice}
                                                        src={`/proyectos/${props.proyecto.titulo.toLowerCase() + indice}.png`}
                                                        alt={props.proyecto.titulo}/>)}/>}
    </Fragment>
  )
}