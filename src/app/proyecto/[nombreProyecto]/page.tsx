import { proyectos } from "@/auxiliar/proyectos";
import ASlider from "@/components/animation/ASlider";
import DEspecificoProyecto from "@/components/dumb/DEspecificoProyecto";
import DImgEspecificaProyecto from "@/components/dumb/DImgEspecificaProyecto";
import DLink from "@/components/dumb/DLink";
import SImgEspecificaProyecto from "@/components/smart/SImgEspecificaProyecto";
import SProyectos from "@/components/smart/SProyectos";
import { Proyecto } from "@/types/type";

export default function Proyecto({ params }: { params: { nombreProyecto: string } }): JSX.Element {
  const proyecto: Proyecto = proyectos[params.nombreProyecto];
  return (
    <div className="cont-proyecto-especifico">
      <DEspecificoProyecto proyecto={proyecto}
                           demo={!!proyecto.demo && <DLink nombre="Demo" link={proyecto.demo}/>}/>
      <SImgEspecificaProyecto proyecto={proyecto}/>
    </div>
  )
}
