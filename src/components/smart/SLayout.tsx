"use client"
import { elegido, noElegido } from "@/auxiliar/definiciones";
import { navs } from "@/auxiliar/definiciones";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function SLayout(): JSX.Element {
  const path = usePathname().split("/");
  const direccion = (path.length === 2) && (!path[1])? navs[0].nombre.toLowerCase() : path[1];

  return (
    <Fragment>
      {navs.map(nav => <Link key={nav.nombre}
                             style={direccion === nav.nombre.split(" ").join("").toLowerCase()? elegido : noElegido}
                             id="nav"
                             href={"/" + nav.direccion}>
                                {nav.nombre}
                       </Link>)}
    </Fragment>
  )
}
