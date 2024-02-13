export default function DImgEspecificaProyecto(props: {
  src: string;
  llave: number;
  alt: string;
}): JSX.Element {
  return (
    <div className="cont-imagen-proyecto">
      <img
        id="img-proyecto"
        key={props.llave}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}
