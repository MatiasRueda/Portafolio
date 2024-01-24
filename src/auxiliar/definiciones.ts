import { Ruta } from "@/types/type"
import { CSSProperties } from "react"

export const contacto: Record<string, string> = {
  telefono: "11-3208-1297",
  email: "mdrueda@fi.uba.ar",
  locacion: "Argentina, Buenos Aires"
}

export const noElegido: CSSProperties = { 
  backgroundColor: "black",
  cursor: "pointer",
  color: "white" 
}

export const elegido: CSSProperties = { 
  backgroundColor: "white",
  pointerEvents: "none",
  cursor:"default",
  color: "black" 
}

export enum LENGUAJE {
  TYPESCRIPT = "Typescript",
  JAVA = "Java",
  C = "C",
  JAVASCRIPT = "Javascript",
  PYTHON = "Python",
  CLOJURE = "Clojure",
  ASSEMBLY = "Assembly"
}

export enum TEST {
  JEST = "Jest",
  JUNIT = "Junit"
}

export enum FRAMEWORK {
  SPRING = "Spring",
  REACT = "React",
  NEXTJS = "NextJs"
}

export enum OTROS {
  CSS = "CSS",
  HTML = "Html",
  MYSQL = "Mysql"
}

export enum TIPO {
  TODOS = "Todos",
  LENGUAJES = "Lenguajes",
  TESTS = "Tests",
  FRAMEWORK = "Framework",
  OTROS = "Otros"
}

export enum DEV {
  VSCODE = "Vscode",
  GITHUB = "Github"
}

export const tiposHerramientas = [OTROS , FRAMEWORK, TEST, DEV , LENGUAJE];

export const navs: Ruta[] = [
  {
    nombre: "Inicio",
    direccion: "/"
  },

  { 
    nombre: "Sobre mi",
    direccion: "sobremi"
  },

  {
    nombre: "Proyectos",
    direccion: "proyectos/lenguajes"
  },

] 
