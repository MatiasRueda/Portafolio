import Link from "next/link";

export default function DLink(props: {
  nombre: string;
  link: string;
}): JSX.Element {
  return (
    <div className="cont-link">
      <p>{props.nombre}:</p>
      <Link href={props.link}>{props.link}</Link>
    </div>
  );
}
