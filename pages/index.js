import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <section
        id="inicio"
        className="pt-28 pb-16 px-4 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
          📲 Guía interactiva para el personal de salud
        </h1>
        <p className="text-xl text-gray-800 mb-4">
          ¡Bienvenido/a a la plataforma preanalítica del Laboratorio Clínico Hospital Regional de
          Cuilapa!
        </p>
        <p className="text-md text-gray-700 mb-4">
          Esta herramienta está diseñada para guiar al personal de salud en la
          toma, conservación, rotulado y envío correcto de muestras clínicas.
        </p>
        <p className="text-md text-gray-700 mb-4">
          📌 Aquí encontrarás guías rápidas, infografías, videos e información
          clave para mejorar la calidad en la toma y manejo de muestras.
        </p>
        <p className="mt-4 text-blue-800 font-semibold text-lg">
          ➡️ Haz clic en el apartado que necesites para obtener instrucciones
          específicas.
        </p>
      </section>

      <section id="sobre" className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            ℹ️ Sobre la Plataforma
          </h2>

          <p className="text-md text-gray-800 mb-4">
            Esta plataforma digital fue creada como parte del proyecto de{" "}
            <span className="font-semibold">
              Práctica Profesional Supervisada 2025
            </span>
            , con el objetivo de reducir errores en la fase preanalítica del
            laboratorio clínico del Hospital Regional de Cuilapa.
          </p>

          <p className="text-md text-gray-800 mb-8">
            👉 El uso correcto de esta plataforma te ayudará a evitar errores
            que pueden causar el{" "}
            <span className="font-semibold text-red-600">
              rechazo de la muestra
            </span>{" "}
            al momento de ingresarla al laboratorio.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-xl font-semibold mb-2">
                📝 ¿Por qué es importante?
              </h3>
              <p className="text-sm text-gray-700">
                Un alto porcentaje de errores en el laboratorio ocurren antes
                del análisis.
                <br />
                Afectan la calidad del diagnóstico y la seguridad del paciente.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-xl font-semibold mb-2">
                🎯 ¿A quién va dirigida?
              </h3>
              <p className="text-sm text-gray-700">
                Personal de enfermería, auxiliares, personal médico, técnicos de
                laboratorio y todo el equipo encargado de la toma y envío de
                muestras al laboratorio.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3 className="text-xl font-semibold mb-2">📲 ¿Cómo se usa?</h3>
              <p className="text-sm text-gray-700">
                Escanea el código QR en tu área.
                <br />
                Accede desde tu celular a guías, videos y recursos descargables.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Sections />
      <Footer />
    </>
  );
}
