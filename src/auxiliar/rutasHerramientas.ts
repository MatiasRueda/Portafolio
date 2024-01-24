import { Proyecto, Ruta } from "@/types/type";
import { proyectos } from "./proyectos";
import { TIPO } from "./definiciones";

const todos: Ruta = {
	nombre: "Todos",
	tipo: TIPO.TODOS,
	direccion: "/proyectos"
}

function crearRuta(nombre: string, tipo: TIPO): Ruta {
	return {
		nombre: nombre[0].toUpperCase() + nombre.substring(1).toLowerCase(),
		tipo: tipo,
		direccion: `/proyectos/${tipo.toLowerCase()}/${nombre.toLowerCase()}`
	}
}

function crearRutas(): Ruta[] {
	const tipos = new Set<string>();
	const rutas: Ruta[] = [];

	Object.values(proyectos)
		.forEach(proyecto => {
			Object.values(TIPO).forEach((tipo: string, indice: number) => {
				(proyecto[tipo.toLowerCase() as keyof Proyecto] as string[])
					?.forEach(e => {
						if (tipos.has(e))
							return;
						tipos.add(e);
						rutas.push(crearRuta(e, Object.values(TIPO)[indice]))
					})
			})
		})
	return rutas;
}



export const rutasHerramientas: Ruta[] = [todos, ...crearRutas()];
