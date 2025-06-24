export default function Sect4() {
  return (
    <>
      <h3 className="text-lg font-semibold text-red-700 mb-4">
        Hospital Regional de Cuilapa – Laboratorio Clínico
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        El rechazo de una muestra ocurre cuando no cumple con los requisitos
        mínimos de calidad preanalítica. Estos errores pueden retrasar el
        diagnóstico y poner en riesgo la atención del paciente.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mt-4 mb-2">
        ❌ 1. Tubos o boletas mal rotuladas
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>El tubo no tiene nombre o el nombre está incompleto/ilegible.</li>
        <li>La boleta no coincide con el tubo.</li>
        <li>Boleta sin sello médico o fecha.</li>
        <li>Etiquetado posterior a la toma, fuera de vista del paciente.</li>
      </ul>
      <p className="text-sm text-red-700 mb-4">
        📌 Toda muestra mal identificada debe ser descartada, según norma de
        trazabilidad.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mt-6 mb-2">
        🩸 2. Muestras coaguladas, hemolizadas o diluidas
      </h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">¿Qué significa?</th>
            <th className="px-4 py-2">Impacto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Coagulada</td>
            <td className="px-4 py-2">
              Sangre con coágulos en tubo con anticoagulante
            </td>
            <td className="px-4 py-2">Rechazo en hemograma, TP/TTPa</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Hemolizada</td>
            <td className="px-4 py-2">
              Plasma rosado por ruptura de eritrocitos
            </td>
            <td className="px-4 py-2">Afecta K+, LDH, bilirrubinas, etc.</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Diluida</td>
            <td className="px-4 py-2">
              Contaminada o exceso de anticoagulante
            </td>
            <td className="px-4 py-2">Parámetros alterados</td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-gray-700 mb-2">
        📌 La hemólisis y coagulación se evitan con buena técnica y manejo
        adecuado.
      </p>
      <p className="text-sm text-gray-700 mb-6">
        ✅ Recomendación: Evitar toma en brazo con infusión. Invertir los tubos
        suavemente y verificar volumen adecuado.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mt-6 mb-2">
        ❌ 3. Volumen insuficiente
      </h4>
      <p className="text-sm text-gray-700 mb-2">
        Cada tubo debe llenarse hasta el volumen mínimo requerido por el
        fabricante.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>
          <strong>Citrato (celeste):</strong> falsos tiempos prolongados.
        </li>
        <li>
          <strong>EDTA (morado):</strong> alteraciones hematológicas
          artificiales.
        </li>
        <li>
          <strong>Amarillo/Rojo:</strong> insuficiencia de suero para análisis.
        </li>
      </ul>
      <p className="text-sm text-red-700">
        📌 Rechazar, registrar y solicitar nueva muestra si no cumple el
        volumen.
      </p>

      <p className="text-sm text-gray-700 italic mt-4">
        Ejemplo: en tubo con EDTA, poco volumen altera el hematocrito y puede
        generar microcitosis. En citrato, distorsiona los tiempos de
        coagulación.
      </p>
    </>
  );
}
