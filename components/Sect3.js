export default function Sect3() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mb-3">🧪 Orden de llenado en extracciones múltiples</h3>
      <p className="text-sm text-gray-700 mb-4">Orden aplicable a tubos disponibles en el Hospital Regional de Cuilapa.</p>
      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Color</th>
              <th className="px-4 py-2">Tipo de Tubo</th>
              <th className="px-4 py-2">Uso Principal</th>
              <th className="px-4 py-2">Observaciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">1️</td>
              <td className="px-4 py-2">N/A</td>
              <td className="px-4 py-2">Hemocultivo</td>
              <td className="px-4 py-2">Infecciones en sangre</td>
              <td className="px-4 py-2">Siempre primero para evitar contaminación</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2️</td>
              <td className="px-4 py-2 text-red-600">🔴 Rojo</td>
              <td className="px-4 py-2">Tubo seco sin aditivo</td>
              <td className="px-4 py-2">Banco de sangre, especiales</td>
              <td className="px-4 py-2">Evita interferencia por aditivos</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3️</td>
              <td className="px-4 py-2 text-yellow-600">🟡 Amarillo</td>
              <td className="px-4 py-2">Gel + activador de coagulación</td>
              <td className="px-4 py-2">Química, inmunología</td>
              <td className="px-4 py-2">Dejar coagular antes de centrifugar</td>
            </tr>
            <tr>
              <td className="px-4 py-2">4️</td>
              <td className="px-4 py-2 text-blue-600">🔵 Celeste</td>
              <td className="px-4 py-2">Citrato de sodio</td>
              <td className="px-4 py-2">Coagulación</td>
              <td className="px-4 py-2">Relación 9:1. Llenado exacto</td>
            </tr>
            <tr>
              <td className="px-4 py-2">5️</td>
              <td className="px-4 py-2 text-purple-600">🟣 Morado</td>
              <td className="px-4 py-2">EDTA K₂</td>
              <td className="px-4 py-2">Hematología</td>
              <td className="px-4 py-2">Preserva células. No usar antes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-red-700 mb-6">
        ⚠️ No respetar el orden puede provocar contaminación entre aditivos, alterando los resultados.
      </p>

      <h3 className="text-lg font-semibold text-blue-800 mb-3">✅ Volumen requerido para cada tubo</h3>
      <p className="text-sm text-gray-700 mb-4">Es crucial llenar hasta la marca indicada para garantizar una proporción adecuada.</p>

      <div className="overflow-auto">
        <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Color</th>
              <th className="px-4 py-2">Tipo de Tubo</th>
              <th className="px-4 py-2">Volúmenes Comerciales</th>
              <th className="px-4 py-2">Observaciones</th>
              <th className="px-4 py-2">Adulto</th>
              <th className="px-4 py-2">Pediatrico</th>

            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">🟣 Morado</td>
              <td className="px-4 py-2">EDTA K₂</td>
              <td className="px-4 py-2">0.5–5 mL</td>
              <td className="px-4 py-2">Llenar hasta la marca. No exceder</td>
              <td className="px-4 py-2"><img src="/l2.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
              <td className="px-4 py-2"><img src="/l1.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
            </tr>
            <tr>
              <td className="px-4 py-2">🔵 Celeste</td>
              <td className="px-4 py-2">Citrato 3.2%</td>
              <td className="px-4 py-2">1.8–4.5 mL</td>
              <td className="px-4 py-2">Llenado exacto. Relación 9:1</td>
              <td className="px-4 py-2"><img src="/a2.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
              <td className="px-4 py-2"><img src="/a1.jpeg" alt="Tubo rojo pediátrico" className="w-20" /></td>
            </tr>
            <tr>
              <td className="px-4 py-2">🟡 Amarillo</td>
              <td className="px-4 py-2">Gel + activador</td>
              <td className="px-4 py-2">3.5–7 mL</td>
              <td className="px-4 py-2">Llenar hasta la marca. Suero adecuado</td>
              <td className="px-4 py-2"><img src="/ama.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
            </tr>
            <tr>
              <td className="px-4 py-2">🔴 Rojo</td>
              <td className="px-4 py-2">Tubo seco</td>
              <td className="px-4 py-2">0.5–10 mL</td>
              <td className="px-4 py-2">Sin marca visible. Llenar completo</td>
              <td className="px-4 py-2"><img src="/r1.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
              <td className="px-4 py-2"><img src="/r2.png" alt="Tubo rojo pediátrico" className="w-20" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-green-800 mt-6 mb-3">🔄 Inversión de tubos con anticoagulante</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li><strong>Tubo morado (EDTA):</strong> 8–10 inversiones suaves</li>
        <li><strong>Tubo celeste (Citrato):</strong> 3–4 inversiones suaves</li>
        <li><strong>Tubo verde (Heparina, si aplica):</strong> 8–10 inversiones</li>
      </ul>
      <p className="text-sm text-red-700">
        ⚠️ No agitar. Agitar con fuerza puede causar hemólisis o burbujas.
      </p>
      <p className="text-sm text-gray-600 italic">
        No invertir = formación de coágulos, resultados erróneos, rechazo de muestra.
      </p>
    </>
  )
}
