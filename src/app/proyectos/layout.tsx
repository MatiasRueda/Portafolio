import "../../styles/Proyectos.css"
import SSelect from "@/components/smart/SSelect";
import SLenguajes from "@/components/smart/SLenguajes";

export const metadata = {
  title: 'Proyectos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="proyectos">
      <SLenguajes/>
      <div className="cont-elecciones">
        <p>Filtrar por:</p>
        <SSelect/>
      </div>
      {children}
    </section>
  )
}
