import React from "react";

export default function Sect8() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        8. Pruebas Especiales y sus Requisitos Preanalíticos
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        Las pruebas especiales requieren condiciones preanalíticas específicas
        para garantizar la validez de los resultados. Un error en esta fase
        puede generar resultados erróneos o no interpretables, lo cual afecta el
        diagnóstico y tratamiento del paciente.
      </p>

      <section className="mb-6">
        <h4 className="text-base font-semibold text-yellow-600 mb-2">
          🟡 1. Perfil de lípidos (colesterol total, HDL, LDL, triglicéridos)
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-2">
          <li>
            <strong>Tipo de muestra:</strong> Suero (tubo amarillo)
          </li>
          <li>
            <strong>Condición indispensable:</strong> Ayuno estricto de 12 a 14
            horas
          </li>
          <li>
            <strong>Restricciones previas:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>
              Evitar alimentos grasos, alcohol y bebidas azucaradas 24 horas
              antes
            </li>
            <li>Evitar actividad física intensa el día previo</li>
          </ul>
          <li>
            <strong>Errores comunes:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>Ayuno incompleto (menos de 8 horas)</li>
            <li>Toma de muestra después del desayuno</li>
          </ul>
          <li>
            <strong>Observación:</strong> Esta muestra debe recolectarse en la
            mañana, idealmente antes de las 10:00 a.m.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h4 className="text-base font-semibold text-blue-600 mb-2">
          🔵 2. Orina de 24 horas
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-2">
          <li>
            <strong>Tipo de muestra:</strong> Orina recolectada durante 24 horas
            en frasco grande, limpio y oscuro
          </li>
          <li>
            <strong>Instrucciones:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>
              Iniciar la recolección descartando la primera micción del día
            </li>
            <li>
              A partir de ese momento, recolectar toda la orina durante 24 horas
              completas
            </li>
            <li>Anotar fecha y hora exacta de inicio y fin en el recipiente</li>
          </ul>
          <li>
            <strong>Errores comunes:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>No recolectar una micción durante el período</li>
            <li>Uso de recipientes contaminados o sin rotular</li>
            <li>No mantener la muestra en condiciones frescas</li>
          </ul>
          <li>
            <strong>Observación:</strong> La boleta debe incluir nombre
            completo, edad, sexo y servicio, y estar debidamente rotulada con la
            hora de inicio y fin.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h4 className="text-base font-semibold text-yellow-800 mb-2">
          🟤 3. Recolección de esputo
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-2">
          <li>
            <strong>Tipo de muestra:</strong> Secreción broncopulmonar
            expectorada
          </li>
          <li>
            <strong>Condiciones preanalíticas:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>
              La muestra debe tomarse en la mañana, antes de comer, beber o
              cepillarse los dientes
            </li>
            <li>
              Se recomienda enjuagarse con agua previamente (sin antiséptico
              bucal)
            </li>
          </ul>
          <li>
            <strong>Errores comunes:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>Contaminación con saliva</li>
            <li>Muestra insuficiente</li>
            <li>Uso de frascos inadecuados (no estériles)</li>
          </ul>
          <li>
            <strong>Indicaciones:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>
              El paciente debe toser profundamente para obtener secreción de
              vías respiratorias bajas
            </li>
            <li>Usar recipiente estéril con tapa de rosca</li>
          </ul>
        </ul>
      </section>

      <section>
        <h4 className="text-base font-semibold text-gray-500 mb-2">
          ⚪ 4. Urocultivo
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>
            <strong>Tipo de muestra:</strong> Orina media de la primera micción
            del día
          </li>
          <li>
            <strong>Indicaciones:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>Higiene previa (lavado genital con agua y jabón)</li>
            <li>Recoger el chorro medio en frasco estéril</li>
            <li>
              En mujeres: separar los labios mayores y tomar la muestra sin
              contaminar
            </li>
            <li>En hombres: retraer el prepucio si aplica</li>
          </ul>
          <li>
            <strong>Errores comunes:</strong>
          </li>
          <ul className="list-disc list-inside ml-5 text-gray-600">
            <li>Contaminación con secreciones vaginales o fecales</li>
            <li>Muestra tomada sin aseo adecuado</li>
            <li>Uso de frascos no estériles</li>
          </ul>
          <li>
            <strong>Observación:</strong> No debe tomarse del recolector de
            orina (bolsa). La muestra debe ser transportada al laboratorio antes
            de 2 horas o refrigerada.
          </li>
        </ul>
      </section>
    </>
  );
}
