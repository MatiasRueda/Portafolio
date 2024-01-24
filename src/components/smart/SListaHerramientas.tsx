import Image from "next/image";
import { Fragment } from "react";

export default function SListaHerramientas(props: { herramientas: string[] }): JSX.Element {
  return (
    <Fragment>
      {Object.values(props.herramientas)
              .map(e => 
                <Image key={e} alt={e} title={e}
                       src={"/herramientas/"+ e+".png"} 
                       height={50} width={50}/>)}
    </Fragment>

  )
}
