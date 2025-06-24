export default function Sect5() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        Hospital Regional de Cuilapa – Área Preanalítica
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Una muestra correctamente conservada y transportada garantiza resultados
        confiables y evita repeticiones innecesarias. Aunque en algunas áreas no
        se dispone de refrigeración inmediata, es clave seguir las siguientes
        recomendaciones.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mt-4 mb-2">
        Cómo almacenar muestras correctamente:
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>Mantener los tubos en posición vertical.</li>
        <li>No exponer a sol, calor excesivo ni humedad.</li>
        <li>Evitar agitación brusca durante el transporte.</li>
        <li>Usar bandeja limpia y protegida; separar tipos de muestra.</li>
        <li>Entregar orina lo antes posible, con rotulación clara.</li>
      </ul>

      <h4 className="text-base font-semibold text-gray-800 mt-6 mb-2">
        ⏰ Tiempo máximo para entrega al laboratorio:
      </h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Tipo de muestra</th>
            <th className="px-4 py-2">Tiempo recomendado</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Sangre en tubo EDTA</td>
            <td className="px-4 py-2">Máximo 2 horas</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Sangre con citrato (coagulación)</td>
            <td className="px-4 py-2">Enviar inmediatamente (&lt;1 hora)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Tubo amarillo (química)</td>
            <td className="px-4 py-2">Máximo 2 horas antes de centrifugar</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Esputo, LCR, líquidos y secreciones</td>
            <td className="px-4 py-2">Inmediato, antes de 30 minutos</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Orina</td>
            <td className="px-4 py-2">
              Dentro de 1 hora (si no hay refrigeración)
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-blue-700 mb-6">
        ⚠️ Cuanto antes llegue la muestra al laboratorio, mejor será la
        estabilidad de los analitos.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mt-4 mb-2">
        ❄️ ¿Qué pasa con las pruebas que requieren refrigeración?
      </h4>
      <p className="text-sm text-gray-700 mb-4">
        Aunque algunas pruebas requieren cadena de frío (PCR, hormonas,
        serología), en el Hospital Regional de Cuilapa el procedimiento
        institucional es:
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>Recolectar la muestra correctamente.</li>
        <li>Entregarla lo antes posible al laboratorio.</li>
        <li>Evitar dejarla más de una hora en la unidad.</li>
        <li>Informar al laboratorio si hay retraso inevitable.</li>
      </ul>

      <p className="text-sm text-blue-700">
        📝 Recomendación institucional: Toda muestra debe ser trasladada de
        forma prioritaria y sin interrupciones al laboratorio. Las muestras
        fuera de tiempo pueden ser rechazadas si comprometen la estabilidad.
      </p>
    </>
  );
}
