import { Proyecto } from "@/types/type";
import { FRAMEWORK, LENGUAJE, OTROS, TEST } from "./definiciones";

export const proyectos: Record<string, Proyecto> = {
  dolar: {
    lenguajes: [LENGUAJE.TYPESCRIPT],
    framework: [FRAMEWORK.REACT],
    otros: [OTROS.HTML, OTROS.CSS],
    titulo: "Dolar",
    descripcion: "Proyecto personal creado para mostrar mis conocimientos en React TypeScript. Este pequeño proyecto ofrece al usuario una calculadora del dólar, para poder ayudar en sus cuentas",
    imagen: Array.from({length: 1}, (_, i) => i + 1),
    github: "https://github.com/MatiasRueda/Dolar",
    demo: "https://startling-stardust-162ed8.netlify.app"
  },
  cine: {
    lenguajes: [LENGUAJE.JAVA],
    otros: [OTROS.MYSQL, OTROS.CSS],
    titulo: "Cine",
    descripcion: "Proyecto personal terminado, utilizado para poder demostrar mis conocimientos en Java. La aplicación ofrece simular la compra de productos de un cine (entradas o alimentos) a través de una interfaz grafica y guarda los datos de estos usuarios con sus compras realizadas.",
    imagen: Array.from({length: 2}, (_, i) => i + 1),
    github: "https://github.com/MatiasRueda/Cine"
  },
  ajedrez: {
    lenguajes: [LENGUAJE.JAVA],
    otros: [OTROS.CSS],
    tests: [TEST.JUNIT],
    titulo: "Ajedrez",
    descripcion: "Trabajo practico de la materia algoritmo y programación 3 de la Facultad de Ingeniería Universidad de Buenos Aires. La idea principal es demostrar los distintos conocimientos en patrones de diseño y en el patron de arquitectura (MVC).",
    imagen: Array.from({length: 4}, (_, i) => i + 1),
    github: "https://github.com/MatiasRueda/Ajedrez",
  },
  
  compras: {
    lenguajes: [LENGUAJE.TYPESCRIPT],
    framework: [FRAMEWORK.REACT],
    otros: [OTROS.HTML, OTROS.CSS, OTROS.MYSQL],
    tests: [TEST.JEST],
    titulo: "Compras",
    descripcion: "Proyecto personal para aplicar mis conocimientos en React Typescript. La pagina ofrece al cliente la posibilidad de comprar los distintos productos ( algunos en oferta ), se puede crear un usuario y se puede modificar, canjear a través de puntos ( que se consiguen con las compras ) y además también poder suscribirse.",
    imagen: Array.from({length: 1}, (_, i) => i + 1),
    github: "https://github.com/MatiasRueda/Mi_compras_cliente",
    demo: "https://sprightly-bienenstitch-598a97.netlify.app"
  },

  memotest: {
    lenguajes: [LENGUAJE.TYPESCRIPT],
    framework: [FRAMEWORK.REACT],
    otros: [OTROS.HTML, OTROS.CSS, OTROS.MYSQL],
    tests: [TEST.JEST],
    titulo: "Memotest",
    descripcion: "Proyecto personal para aplicar mis conocimientos en Typescript React. La pagina ofrece un juego completo de memotest y también incluye competencias entre otros jugadores.",
    imagen: Array.from({length: 2}, (_, i) => i + 1),
    github: "https://github.com/MatiasRueda/Memotest_cliente",
    demo: "https://gleaming-pudding-4d279d.netlify.app"
  },

  smemotest: {
    lenguajes: [LENGUAJE.TYPESCRIPT],
    framework: [FRAMEWORK.REACT],
    otros: [OTROS.HTML, OTROS.CSS, OTROS.MYSQL],
    tests: [TEST.JEST],
    titulo: "Server Memotest",
    descripcion: "Proyecto personal para aplicar mis conocimientos en Typescript React. La pagina ofrece un juego completo de memotest y también incluye competencias entre otros jugadores.",
    github: "https://github.com/MatiasRueda/Memotest_cliente",
    demo: "https://gleaming-pudding-4d279d.netlify.app"
  },

  microservicio: {
    lenguajes: [LENGUAJE.JAVA],
    framework: [FRAMEWORK.SPRING],
    otros: [OTROS.HTML, OTROS.CSS, OTROS.MYSQL],
    titulo: "Microservicios",
    descripcion: "Proyecto personal creado para mostrar mis conocimientos sobre Java y Spring. Lo que se busca con este proyecto es crear distintos microserivicios que se comunican entre si para poder formar un server de reservas.",
    github: "https://github.com/MatiasRueda/Microservicios_reservas"
  },

  tareas: {
    lenguajes: [LENGUAJE.JAVA],
    framework: [FRAMEWORK.SPRING],
    otros: [OTROS.HTML, OTROS.CSS, OTROS.MYSQL],
    titulo: "Tareas",
    descripcion: "Proyecto personal creado para mostrar los conocimientos sobre Java y Spring Boot. El proyecto ofrece al usuario una lista de tareas, a las cuales se las puede agregar mas tareas, eliminarlas o actualizarlas.",
    github: "https://github.com/MatiasRueda/Tareas",
  }
}