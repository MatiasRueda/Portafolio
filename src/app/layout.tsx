import "../styles/Inicio.css";
import Link from "next/link";
import SLayout from "@/components/smart/SLayout"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Inicio',
  icons: {
    icon: [
      {
        url: "programacion.png"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="titulo" href={"/"}>
            <h1>Mi Portafolio</h1>
          </Link>
          <section className="layout">
            <SLayout/>
          </section>
        </header>
        {children}

      </body>
    </html>
  )
}
