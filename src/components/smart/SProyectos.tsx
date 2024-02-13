import { Proyecto } from "@/types/type";
import DProyecto from "../dumb/DProyecto";
import { motion } from "framer-motion";
import { Fade } from "@/auxiliar/animacion.ts/motion";

export default function SProyectos(props: {
  proyectosFiltrados: Record<string, Proyecto>;
  pocos: boolean;
  lenguaje?: string;
}): JSX.Element {
  return (
    <motion.div
      className="cont-proyectos"
      style={{
        justifyContent:
          Object.keys(props.proyectosFiltrados).length === 1
            ? "center"
            : "space-between",
      }}
      {...Fade}
    >
      {Object.entries(props.proyectosFiltrados).map(
        ([llave, proyecto], indice) => (
          <DProyecto
            key={proyecto.titulo}
            estilo={{
              marginTop: indice >= 2 ? "2rem" : "0rem",
              backgroundImage: `url('/proyectos/${
                proyecto.imagen
                  ? proyecto.titulo.toLowerCase() + proyecto.imagen[0]
                  : ""
              }.png')`,
            }}
            path={`/proyecto/${llave}`}
            tituloEstilo={{
              visibility: proyecto.imagen ? "hidden" : "visible",
            }}
            {...proyecto}
          />
        )
      )}
    </motion.div>
  );
}
