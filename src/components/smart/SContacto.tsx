import { contacto } from "@/auxiliar/definiciones";
import DInformacion from "../dumb/DInformacion";
import Link from "next/link";
import Image from "next/image";

export default function SContacto(): JSX.Element {
  return (
    <div className="cont-informacion-contactos">
      {Object.keys(contacto).map((llave) => (
        <DInformacion
          key={llave}
          titulo={llave}
          informacion={contacto[llave]}
        />
      ))}
      <div className="cont-informacion">
        <p>Redes: </p>
        <div className="cont-redes">
          <Link href={"https://github.com/MatiasRueda"}>
            <Image
              src={"/herramientas/github.png"}
              alt="github"
              height={50}
              width={50}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/matias-rueda-00b787291"}>
            <Image
              src={"/herramientas/linkedin.png"}
              alt="linkedin"
              height={50}
              width={50}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
