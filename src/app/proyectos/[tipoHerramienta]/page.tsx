import SPreviewProyectos from "@/components/smart/SPreviewProyectos";

export default function Lenguaje({ params }: { params: { tipoHerramienta: string } }): JSX.Element {
  return <SPreviewProyectos tipoHerramienta = {params.tipoHerramienta}/>
}
