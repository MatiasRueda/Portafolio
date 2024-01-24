import SCrearHerramientasIconos from "@/components/smart/SCrearHerramientasIconos";
import "../../styles/SobreMi.css";
import SContacto from "@/components/smart/SContacto";


export const metadata = {
  title: 'Sobre Mi',
}

export default function SobreMi(): JSX.Element {
  return (
      <section className="descripcion">
        <div className="cont-presentacion">
          <h2>!Buenas</h2>
          <p>En la actualidad me encuentro estudiando en la Facultad de Ingeniería de la Universidad de Buenos Aires (FIUBA), Licenciatura en Analisis de Sistemas (tercer año)<br/>
             En mis tiempos libres realizo distintos proyectos personales y me dedico a aprender nuevas tecnologias.<br/>
             En cuanto mi situacion laboral, estoy desocupado y con muchas ganas de entrar mi oportunidad para ingresar al mundo laboral.</p>
        </div>
        <div className="cont-informacion-it">
          <div className="cont-lenguajes-frameworks-tests-otros">   
            <h2>Lenguajes y herramientas mas utilizadas:</h2>  
            <SCrearHerramientasIconos/>            
          </div>
          <div className="cont-contactos">
            <h2>Contactos:</h2>
            <SContacto/>
          </div>
        </div>
      </section>
  )
}
