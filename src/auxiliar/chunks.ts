import { Proyecto } from "@/types/type";

export default function separador(arr: Record<string, Proyecto>): Record<string, Proyecto>[] {
  const chunkSize = 4;
  const chunks: Record<string, Proyecto>[] = [];
  for (let i = 0; i < Object.keys(arr).length; i += chunkSize) {
    const objeto: Record <string, Proyecto> = Object.entries(arr)
                                                    .slice(i, i + chunkSize)
                                                    .reduce((acc: Record<string, Proyecto>, [k,v]) => (acc[k]=v , acc), {})
    chunks.push(objeto);
  }
  return chunks;
}