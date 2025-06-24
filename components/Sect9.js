import React from "react";

export default function Sect9() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        ✅ 9. Horarios de Recepción de Pruebas Especiales
      </h3>
      <p className="text-sm text-gray-700 mb-6">
        El Laboratorio Clínico del Hospital Regional de Cuilapa brinda atención
        las 24 horas del día, todos los días del año. Sin embargo, ciertas
        pruebas especiales tienen horarios de recepción limitados por sus
        características técnicas, necesidad de ayuno, estabilidad de la muestra
        o coordinación con laboratorios de referencia.
      </p>

      <section className="mb-6">
        <h4 className="text-base font-semibold mb-2">
          🕛 Horario límite para recepción de pruebas especiales
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>
            <strong>De lunes a viernes:</strong> Hasta las 12:00 p.m.
          </li>
          <li>
            <strong>Fines de semana y feriados:</strong> No se reciben pruebas
            especiales, salvo autorización directa de la Jefa del Laboratorio.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h4 className="text-base font-semibold mb-2">📋 Pruebas Especiales</h4>
        <table className="w-full text-sm text-left text-gray-700 border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-3 py-2">
                Prueba especial
              </th>
              <th className="border border-gray-300 px-3 py-2">
                Motivo de restricción
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">
                Perfil de lípidos
              </td>
              <td className="border border-gray-300 px-3 py-2">
                Requiere ayuno de 12–14 horas. Si se toma en la tarde, el
                paciente ya ha ingerido alimentos.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">
                Orina de 24 horas
              </td>
              <td className="border border-gray-300 px-3 py-2">
                El paciente debe iniciar la recolección antes del mediodía del
                día anterior, ya que no se aceptan después de medio día en el
                laboratorio.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">
                Tiroideas (TSH, T3, T4)
              </td>
              <td className="border border-gray-300 px-3 py-2">
                Procesamiento controlado; algunas se envían a laboratorio
                externo.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">TORCH</td>
              <td className="border border-gray-300 px-3 py-2">
                Ensayos agrupados por lote; deben recibirse antes del mediodía.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">CCP</td>
              <td className="border border-gray-300 px-3 py-2">
                Requiere programación; procesamiento específico.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">Chagas</td>
              <td className="border border-gray-300 px-3 py-2">
                Estudio especializado; posible envío externo.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">
                Marcadores tumorales
              </td>
              <td className="border border-gray-300 px-3 py-2">
                Se procesan con controles específicos, no rutinarios.
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-3 py-2">
                Panel prostático
              </td>
              <td className="border border-gray-300 px-3 py-2">
                Requiere condiciones de ayuno y programación especial.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <p className="text-sm text-red-600 font-semibold mb-2">
          ⚠️ Importante:
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Las muestras entregadas después de las 12:00 p.m. se recibirán, pero
          serán procesadas hasta el siguiente día hábil, salvo autorización
          expresa de la Jefa del Laboratorio.
        </p>
        <p className="text-sm text-gray-700">
          📞 En casos especiales, el jefe de servicio debe comunicarse con la
          jefa de laboratorio para justificar la urgencia y garantizar que se
          cumplan los requisitos preanalíticos.
        </p>
      </section>
    </>
  );
}
