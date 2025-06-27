
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza Ventas en 24 Horas." subheadline="Transforma tu negocio con una web lista en un día y soporte 24/7. Olvida las complicaciones y vende online fácilmente." cta1="Inicia Ahora" />
<How step1Title="Contáctanos" step1Desc="Hablemos sobre digitalizar tus ventas." step2Title="Creamos tu web" step2Desc="Sitio de ventas en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para tu tranquilidad." />
<Aboutus headline="WebGo: Digitaliza tu negocio hoy" subheadline="Transformamos tus recomendaciones en ventas online, mientras tú te enfocas en crecer." beneficiotitulo1="Aumento de Ventas" beneficio1="Convertimos recomendaciones en ventas efectivas." beneficiotitulo2="Gestión Simplificada" beneficio2="Nosotros gestionamos todo por ti." />
<Services heading="Impulsa Tus Ventas Online" description="asda transforma tu tienda en línea en 24 horas y ofrece soporte 24/7." services={[{"name":"Diseño Rápido","icon":"flash","description":"Web lista en menos de 24 horas."},{"name":"SEO Optimización","icon":"search","description":"Aumenta visibilidad en buscadores."},{"name":"Gestión Integral","icon":"tools","description":"Nos encargamos de todo por ti."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia continua y personalizada."},{"name":"Integración E-commerce","icon":"cart","description":"Añade funcionalidades de venta online."},{"name":"Analytics Avanzado","icon":"chart","description":"Datos claros para decisiones inteligentes."}]} />
<BeforeAndAfter subheadline="Transformamos tu visión en realidad con resultados excepcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi pequeño negocio?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo digital con estrategias efectivas para aumentar tus ventas en línea, incluso si actualmente solo vendes por recomendaciones. Nuestro equipo se encarga de todo, para que no te preocupes por la gestión del sitio web."},{"pregunta":"¿Cuáles son los beneficios de usar los servicios de WebGo?","respuesta":"Con WebGo, obtienes un sitio web optimizado para atraer más clientes y aumentar tus ventas. No solo ahorras tiempo, sino que también te aseguras de tener una presencia en línea que funciona para tu negocio, resolviendo tus desafíos de venta."},{"pregunta":"¿WebGo puede ayudarme si no sé cómo generar ventas online?","respuesta":"Sí, WebGo está diseñado para personas como tú. Nos especializamos en crear estrategias de venta online que funcionan, incluso si no tienes experiencia previa. Te guiamos en cada paso del camino."},{"pregunta":"¿Qué hace que WebGo sea diferente de otras empresas de digitalización?","respuesta":"Lo que diferencia a WebGo es nuestro enfoque personalizado. Nos centramos en las necesidades específicas de los dueños de pequeños negocios en Santiago, asegurando que nuestros servicios se adapten perfectamente a tus objetivos de venta."},{"pregunta":"¿Cuánto tiempo necesito dedicarle a la gestión de mi sitio web con WebGo?","respuesta":"Con WebGo, no necesitas dedicarle mucho tiempo a gestionar tu sitio web. Nosotros nos encargamos de todas las tareas técnicas y de optimización para que puedas centrarte en lo que mejor haces: dirigir tu negocio."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Digitales" 
                      description="Con WebGo, digitaliza tus ventas sin complicaciones. Aumenta tus ingresos sin necesitar tiempo extra."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
