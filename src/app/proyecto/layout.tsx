import "../../styles/Proyecto.css"

export const metadata = {
  title: 'Proyecto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="proyecto">
      {children}
    </section>
  )
}
