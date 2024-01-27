import { proyectos } from "@/auxiliar/proyectos";
import DEspecificoProyecto from "@/components/dumb/DEspecificoProyecto";
import DLink from "@/components/dumb/DLink";
import SImgEspecificaProyecto from "@/components/smart/SImgEspecificaProyecto";

import { Proyecto } from "@/types/type";
import { Fragment } from "react";

export default function Proyecto({ params }: { params: { nombreProyecto: string } }): JSX.Element {
  const proyecto: Proyecto = proyectos[params.nombreProyecto];
  return (
    <Fragment>
      <DEspecificoProyecto proyecto={proyecto}
                           demo={!!proyecto.demo && <DLink nombre="Demo" link={proyecto.demo}/>}/>
      <SImgEspecificaProyecto proyecto={proyecto}/>
    </Fragment>
  )
}
