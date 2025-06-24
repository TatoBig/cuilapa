import React from "react";

export default function Sect7() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        Exámenes de Emergencia y Procesos Especiales
      </h3>

      <p className="text-sm text-gray-700 mb-4">
        • Tiempo de respuesta esperado para pruebas urgentes (STAT)
        <br />
        En medicina hospitalaria, los exámenes marcados como STAT deben ser
        procesados de forma inmediata, ya que sus resultados influyen
        directamente en decisiones clínicas vitales. Este nivel de prioridad
        exige que el laboratorio tenga protocolos definidos para garantizar
        Tiempos de Respuesta (TAT) óptimos y trazables.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mb-2">
        ⏱️ Tiempo de respuesta recomendado para pruebas STAT
      </h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Prueba</th>
            <th className="px-4 py-2">TAT ideal</th>
            <th className="px-4 py-2">Tipo de muestra</th>
            <th className="px-4 py-2">Uso clínico urgente</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Hemograma completo (STAT)</td>
            <td className="px-4 py-2">30–60 minutos</td>
            <td className="px-4 py-2">Sangre total (EDTA)</td>
            <td className="px-4 py-2">
              Evaluación de anemia aguda, leucocitosis, plaquetopenia
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Glucosa (STAT)</td>
            <td className="px-4 py-2">15–30 minutos</td>
            <td className="px-4 py-2">Suero o sangre capilar</td>
            <td className="px-4 py-2">Hipoglucemia, cetoacidosis diabética</td>
          </tr>
          <tr>
            <td className="px-4 py-2">TP y TTPa (coagulación STAT)</td>
            <td className="px-4 py-2">45–60 minutos</td>
            <td className="px-4 py-2">Plasma citratado</td>
            <td className="px-4 py-2">
              Cirugías urgentes, hemorragias, control anticoagulantes
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Grupo y Rh</td>
            <td className="px-4 py-2">30–45 minutos</td>
            <td className="px-4 py-2">Sangre total (EDTA)</td>
            <td className="px-4 py-2">
              Transfusión urgente, embarazos con isoinmunización
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Prueba de embarazo (hCG)</td>
            <td className="px-4 py-2">15–30 minutos</td>
            <td className="px-4 py-2">Suero</td>
            <td className="px-4 py-2">
              Dolor abdominal agudo, descartar embarazo ectópico
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Orina simple (STAT)</td>
            <td className="px-4 py-2">30–60 minutos</td>
            <td className="px-4 py-2">Orina fresca</td>
            <td className="px-4 py-2">
              Evaluación de infección urinaria severa
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-blue-700 mb-4 font-semibold">
        ⚠️ Importante: La urgencia también se comunica, no solo se entrega
      </p>

      <p className="text-sm text-gray-700 mb-4">
        En el Laboratorio Clínico, comprendemos que muchas pruebas deben
        procesarse con rapidez para salvar vidas o tomar decisiones médicas
        inmediatas. Sin embargo, no basta con dejar la muestra:
      </p>

      <p className="text-sm text-gray-700 mb-4">
        📌 Toda muestra urgente (STAT) debe ser comunicada activamente al
        personal del laboratorio. Muchas veces ocurren inconvenientes como:
      </p>

      <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
        <li>
          Muestras urgentes que se dejan sin aviso en el área de recepción.
        </li>
        <li>
          Falta de rotulación clara como “STAT” en la boleta o en el tubo.
        </li>
        <li>
          Reclamos por retraso, cuando en realidad la muestra nunca fue
          notificada como urgente.
        </li>
      </ul>

      <p className="text-sm text-red-600 font-semibold mb-4">
        🛑 ¿Por qué es importante avisar?
      </p>

      <p className="text-sm text-gray-700 mb-6">
        Porque el laboratorio recibe decenas de muestras al día, y si no hay una
        notificación verbal o identificación clara, no se puede distinguir
        cuáles requieren prioridad inmediata.
      </p>

      <p className="text-sm text-gray-700 mb-4 font-semibold">
        ✅ Recomendaciones para evitar confusiones:
      </p>

      <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
        <li>Siempre marcar en la boleta la palabra STAT o URGENTE.</li>
        <li>
          Comunicar verbalmente a recepción de laboratorio o al personal
          presente.
        </li>
        <li>
          Evitar enviar muestras urgentes con terceros sin asegurarse que hayan
          entregado correctamente.
        </li>
        <li>
          Si hay múltiples muestras de distintos pacientes, avisar cuáles deben
          procesarse con prioridad.
        </li>
      </ul>

      <p className="text-sm text-gray-700 font-semibold">🤝 Recordatorio:</p>
      <p className="text-sm text-gray-700">
        Todos los servicios somos un equipo. La coordinación efectiva entre
        personal médico, de enfermería y laboratorio evita errores, reclamos
        innecesarios y, sobre todo, mejora la atención al paciente.
      </p>
    </>
  );
}
