import SListaHerramientas from "./SListaHerramientas";

export default function SHerramientasIconos(props: { titulo:string , elementos: string[] }): JSX.Element {
  return (
    <div className="cont-elementos-lenguajes-frameworks-tests-otros">
      <p>{props.titulo}:</p>
      <div className="cont-elementos-lenguajes-frameworks-tests-otros-imagenes">
        <SListaHerramientas herramientas={Object.values(props.elementos)}/>
      </div>
    </div>
  )
}
