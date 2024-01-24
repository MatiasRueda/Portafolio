"use client"
import { TIPO } from "@/auxiliar/definiciones";
import { usePathname, useRouter } from "next/navigation"

export default function SSelect(): JSX.Element {
  const router = useRouter();
  const path: string = usePathname();
  const tipo: string = path.split("/")[2];
  return (
      <select name="elecciones" 
              value={tipo}
              onChange={e => router.push(`/proyectos/${e.target.value}`)}>
                {Object.values(TIPO).map(tipo => {
                  if (tipo === TIPO.TODOS)
                    return;
                  return <option key={tipo} 
                                 value={tipo.toLowerCase()}>
                                  {tipo}
                         </option>
                })}
      </select>
  )
}
