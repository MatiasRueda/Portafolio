export default function Inicio(): JSX.Element {
  return (
      <section className="inicio">
        <div className="cont-bienvenida">
          <p>Estudiante de Licenciatura en Analisis de Sistemas y Desarrollador Full Stack</p>
          <h1>Matias Daniel Rueda</h1>
          <p className="cont-breve-descripcion">Tengo experiencia desarrollando paginas web, api y aplicaciones. <br/> 
            Dejo en esta pagina los proyectos más destacados espero que sean de su agrado &#128512; </p>
        </div>
        <img src={"/otros/libro.png"}  alt="libro"/>
      </section>
  )
}
