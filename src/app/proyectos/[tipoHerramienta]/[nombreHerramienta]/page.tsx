import SPreviewProyectos from "@/components/smart/SPreviewProyectos";

export default function Nombre({ params }: { params: { tipoHerramienta: string , nombreHerramienta: string } }): JSX.Element {
  return <SPreviewProyectos tipoHerramienta = {params.tipoHerramienta}
                            nombreHerramienta = {params.nombreHerramienta}/>
}
