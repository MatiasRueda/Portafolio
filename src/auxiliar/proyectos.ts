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
  },

  pila: {
    lenguajes: [LENGUAJE.C],
    titulo: "Pila",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Esta pila es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo, con la caracteristica de ser una estructura LIFO ( Last in, First Out ), osea que todo elemento que se agregue ira al tope de la pila y siempre que se quiera sacar se sacara el tope de la pila.",
    github: "https://github.com/MatiasRueda/TDA-Pila"
  },

  cola: {
    lenguajes: [LENGUAJE.C],
    titulo: "Cola",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Esta cola es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo, con la característica de ser una estructura FIFO ( First in, First Out ). Osea que el primer elemento en agregarse, sera el primero en sacarse.",
    github: "https://github.com/MatiasRueda/TDA-Cola"
  },

  lista: {
    lenguajes: [LENGUAJE.C],
    titulo: "Lista",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Este Hash es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo. Esta asocia llaves o claves con valores y su principal operacion que realiza de manera eficiente es la busqueda.",
    github: "https://github.com/MatiasRueda/TDA-Lista"
  },

  hash: {
    lenguajes: [LENGUAJE.C],
    titulo: "Tabla hash",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Este ABB es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo. Es un árbol binario tal que el valor de cada nodo es mayor que los valores de su subárbol izquierdo y es menor que los valores de su subárbol derecho y, además, ambos subárboles son árboles binarios de búsqueda.",
    github: "https://github.com/MatiasRueda/TDA-Hash"
  },

  abb: {
    lenguajes: [LENGUAJE.C],
    titulo: "ABB",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Este ABB es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo. Es un árbol binario tal que el valor de cada nodo es mayor que los valores de su subárbol izquierdo y es menor que los valores de su subárbol derecho y, además, ambos subárboles son árboles binarios de búsqueda.",
    github: "https://github.com/MatiasRueda/TDA-ABB"
  },

  heap: {
    lenguajes: [LENGUAJE.C],
    titulo: "Heap",
    descripcion: "Trabajo practico de algoritmo y programación 2 de la Facultad de Ingeniería Universidad de Buenos Aires. Esta lista es un tipo de dato abstracto que te permite almacenar" + 
    " elementos de cualquier tipo. En particular heap esta siendo utilizado para implementar una cola de prioridad y de esta forma tener los elementos ordenados",
    github: "https://github.com/MatiasRueda/TDA-Heap"
  },

  matriz: {
    lenguajes: [LENGUAJE.ASSEMBLY],
    titulo: "Matriz",
    descripcion: "Trabajo practico de la materia Organizacion del computador de la Facultad de Ingeniería Universidad de Buenos Aires La idea detrás de este proyecto es poner en practica los distintos conocimientos sobre Assembler Intel x86. El programa le servirá como una mini calculadora para realizar operaciones con matrices cuadradas. ( sumar, restar, entre otras cosas ).",
    github: "https://github.com/MatiasRueda/Matriz"
  },

  portafolio: {
    lenguajes: [LENGUAJE.TYPESCRIPT],
    framework: [FRAMEWORK.NEXTJS],
    imagen:  Array.from({length: 2}, (_, i) => i + 1),
    otros: [OTROS.CSS],
    titulo: "Portafolio",
    descripcion: "Es este mismo proyecto",
    github: "https://github.com/MatiasRueda/Portafolio",
    demo: "https://portafolio-one-wine.vercel.app"
  }
}