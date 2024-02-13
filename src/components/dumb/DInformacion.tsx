export default function DInformacion(props: {
  titulo: string;
  informacion: string;
}): JSX.Element {
  return (
    <div className="cont-informacion">
      <p>
        {props.titulo[0].toUpperCase() +
          props.titulo.substring(1).toLowerCase()}
        :
      </p>
      <p>{props.informacion}</p>
    </div>
  );
}
