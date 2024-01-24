import { contacto } from "@/auxiliar/definiciones";
import DInformacion from "../dumb/DInformacion";

export default function SContacto(): JSX.Element {
  return (
    <div className="cont-informacion-contactos">
      {Object.keys(contacto).map(llave => <DInformacion key={llave} 
                                                        titulo={llave}
                                                        informacion={contacto[llave]}/>)}
    </div>
  )
}
