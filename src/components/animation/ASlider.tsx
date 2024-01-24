"use client"
import { AnimatePresence , wrap , motion, Variants } from "framer-motion";
import { useState } from "react";

function ASlider(props:{ elementos?: JSX.Element[], nombre: string }): JSX.Element {
    const [[indice, direction], setIndice] = useState<number[]>([0, 0]);
    const imagenIndex = wrap(0, (props.elementos? props.elementos.length : 0), indice);

    const paginate = (newDirection: number) => {
        setIndice([indice + newDirection, newDirection]);
    };

    const variants: Variants = {
        enter: (direction: number) => {
          return {
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
          };
        },
        center: {
          zIndex: 1 ,
          x: 0,
          opacity: 1
        },
        exit: (direction: number) => {
          return {
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            transition: {
              type: 'easyOut',
              duration: 0.1 
            }
          };
        }
      };

    return (
        <div className={"cont-slider-"+ props.nombre}>
            <button aria-label="anterior" className={props.nombre + "-prev"} 
                 onClick={() => paginate(-1)}>
                  {"<"}
            </button>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                    className={`cont-marco-${props.nombre}`}
                    key={indice}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: 'easyOut' , delay: 0.3 }}>
                      {props.elementos != undefined && props.elementos[imagenIndex]}
              </motion.div>
            </AnimatePresence>
            <button aria-label="siguiente" className={props.nombre + "-next"} 
                 onClick={() => paginate(1)}>
                  {">"}
            </button>
        </div>
    )
}
export default ASlider;

/**
 *                       style={{ height: "35rem", width: "100%", 
                               display: "flex", justifyContent:"center",
                               alignItems: "center"}}
 */