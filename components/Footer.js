import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sección Galería y Recursos */}
        <div>
          <h4 className="text-lg font-semibold mb-4">📸 Galería Visual</h4>
          <p className="mb-3">
            <a
              href="https://drive.google.com/drive/folders/17FE8fSKb9VJ34dCxK7zqJWW97BndV5cW?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Errores e interferencias en el laboratorio clínico
            </a>
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            📄 Recursos Descargables
          </h4>
          <p className="mb-2 font-medium">📥 Descarga directa:</p>
          <ul className="list-disc list-inside space-y-1 text-blue-300">
            <li>✅ Infografía: Tubos por color y uso</li>
            <li>✅ Hemocultivo</li>
            <li>✅ Información de horarios y pruebas especiales</li>
          </ul>
          <p className="mt-2">
            <a
              href="https://drive.google.com/drive/folders/1ydgQbpRpU6Mj4W5e2JUQ3jkpime6Dp0_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Carpeta de Recursos
            </a>
          </p>
        </div>

        {/* Sección Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            📞 Contacto / Soporte Técnico
          </h4>
          <p className="mb-3">
            ¿Tienes dudas, sugerencias o detectaste un error en la plataforma?
          </p>
          <p className="mb-4">
            📧 Correo de contacto:{" "}
            <a
              href="mailto:galvarados5@miumg.edu.gt"
              className="text-blue-400 hover:underline"
            >
              galvarados5@miumg.edu.gt
            </a>
          </p>
          <p className="italic text-gray-400">
            Gracias por contribuir al mejoramiento del proceso preanalítico en
            nuestro hospital.
          </p>
        </div>

        {/* Sección Proyecto con logo */}
        <div className="text-sm text-gray-400 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
            Proyecto de Práctica Profesional Supervisada – PPS 2025
          </h4>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Escudo_de_la_universidad_Mariano_G%C3%A1lvez_Guatemala.svg/2048px-Escudo_de_la_universidad_Mariano_G%C3%A1lvez_Guatemala.svg.png"
            alt="Escudo Universidad Mariano Gálvez"
            className="w-24 mb-4"
          />
          <p className="mb-2 text-center md:text-left">
            Realizado por: Grisceld Galilea Alvarado Soto
          </p>
          <p className="mb-2 text-center md:text-left">
            Universidad Mariano Gálvez de Guatemala
          </p>
          <p className="mb-4 text-center md:text-left">Versión: Mayo 2025</p>
          <p className="text-center text-xs text-gray-500 mt-auto select-none w-full">
            &copy; {new Date().getFullYear()} Hospital Regional de Cuilapa.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
