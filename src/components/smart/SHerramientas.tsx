import { FRAMEWORK, LENGUAJE, OTROS, TEST } from "@/auxiliar/definiciones";
import { Fragment } from "react";

export default function SHerramientas(props: { titulo: string, herramientas?: (LENGUAJE | FRAMEWORK | TEST | OTROS)[] }): JSX.Element | false {
  return (
    <Fragment>
      {props.herramientas && <div className="cont-herramientas">
                               <p>{props.titulo}</p>
                               <div className="cont-herramienta">
                                {props.herramientas.map(herramienta => <img key={herramienta}
                                                                            src={"/herramientas/"+ herramienta.toLowerCase() +".png"} 
                                                                            alt={herramienta} 
                                                                            title={herramienta}
                                                                            height={40} 
                                                                            width={40}/>)}
                               </div>
                             </div>}
    </Fragment>
  )
}
