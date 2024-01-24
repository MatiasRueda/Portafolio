import { FRAMEWORK, LENGUAJE, OTROS, TEST, TIPO } from "@/auxiliar/definiciones"

export type Ruta = {
    nombre: string,
    tipo?: TIPO,
    direccion: string
}

export type Proyecto = {
    lenguajes: LENGUAJE[],
    framework?: FRAMEWORK[],
    tests?: TEST[],
    otros?: OTROS[],
    titulo: string
    descripcion: string,
    imagen?: number[],
    github: string,
    demo?: string,
}