"use client"
import { Fade } from "@/auxiliar/animacion.ts/motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Raleway } from "next/font/google"
import { usePathname } from "next/navigation";

const roboto = Raleway({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function Template({ children }: { children: ReactNode }) {
  const path: string = usePathname();
  return (
    <motion.main 
      key={path}
      className={roboto.className}
      style={{ height:"100%", width: "100%" }}
      {...Fade}>
        {children}
    </motion.main>)
}