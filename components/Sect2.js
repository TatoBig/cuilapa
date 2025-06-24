export default function Sect2() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mt-4 mb-2">
        A. Etiquetado de Tubos
      </h3>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
        <li>
          Nombre y apellido del paciente (dos nombres y un apellido o viceversa
          según boleta)
        </li>
        <li>Etiqueta legible, sin tachones y bien adherida</li>
      </ul>

      <h4 className="text-md font-semibold text-gray-800 mt-3">
        📝 En la boleta correspondiente:
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
        <li>Nombre completo del paciente</li>
        <li>Sexo y edad</li>
        <li>Número de registro</li>
        <li>Servicio que solicita</li>
        <li>Pruebas a realizar</li>
        <li>Sello del médico solicitante</li>
      </ul>

      <p className="text-red-700 font-medium text-sm mb-4">
        ⚠️ Boletas sin sello o fecha visible serán rechazadas. Las muestras
        rechazadas deben registrarse con su motivo en el apartado
        correspondiente.
      </p>

      <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-2">
        B. Etiquetado de Recipientes Especiales
      </h3>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
        <li>Nombre completo del paciente</li>
        <li>Tipo de muestra (esputo, LCR, etc.)</li>
        <li>
          Etiqueta firme con teipe o etiqueta blanca, escrita con marcador
          indeleble
        </li>
      </ul>

      <h4 className="text-md font-semibold text-gray-800 mt-3">
        📝 En la boleta de solicitud:
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
        <li>Nombre completo, edad, sexo</li>
        <li>Servicio</li>
        <li>Prueba solicitada y tipo de muestra</li>
        <li>Fecha y hora de recolección (inicio y fin si aplica)</li>
        <li>Sello del médico</li>
      </ul>

      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Tipo de muestra</th>
            <th className="px-4 py-2">Requisito especial</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Orina de 24 horas</td>
            <td className="px-4 py-2">
              Contenedor oscuro, con fecha y hora de inicio y finalización
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Líquidos biológicos</td>
            <td className="px-4 py-2">Etiquetado firme, sin abreviaturas</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Esputo</td>
            <td className="px-4 py-2">
              Recolectado en la mañana, frasco cerrado
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Urocultivo</td>
            <td className="px-4 py-2">
              Técnica de chorro medio, frasco estéril bien cerrado
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="text-md font-bold text-red-700 mt-4">
        ❌ Errores que provocan rechazo inmediato
      </h4>
      <ul className="list-disc list-inside text-sm text-red-700 mb-4">
        <li>Tubo o recipiente sin nombre</li>
        <li>Boleta sin sello médico</li>
        <li>Datos en el tubo que no coinciden con la boleta</li>
        <li>Etiqueta ilegible o desprendida</li>
        <li>Boleta sin fecha o incompleta</li>
      </ul>

      <p className="text-sm text-gray-700 mb-6 italic">
        ✅ Todo el personal debe verificar que los datos en la muestra y la
        boleta coincidan exactamente. El rechazo retrasa el diagnóstico y
        tratamiento.
      </p>

      <h3 className="text-lg font-semibold text-blue-800 mt-6 mb-2">
        ❌ Errores comunes y su impacto
      </h3>
      <h4 className="font-medium mt-2">🧪 A. En tubos de recolección</h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-4">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Error común</th>
            <th className="px-4 py-2">Impacto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Tubo sin nombre</td>
            <td className="px-4 py-2">
              Rechazo inmediato; muestra sin identificar
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Nombre ilegible</td>
            <td className="px-4 py-2">Confusión, posible error diagnóstico</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Etiquetado tardío</td>
            <td className="px-4 py-2">Confusión entre muestras</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Boleta sin sello</td>
            <td className="px-4 py-2">Rechazo hasta corregir</td>
          </tr>
        </tbody>
      </table>

      <h4 className="font-medium mt-2">🧪 B. En recipientes especiales</h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2">Error común</th>
            <th className="px-4 py-2">Impacto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">Recipiente sin identificación</td>
            <td className="px-4 py-2">No se puede procesar</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Etiqueta mal adherida o tinta no permanente
            </td>
            <td className="px-4 py-2">Se borra; riesgo de error</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Recipiente inadecuado</td>
            <td className="px-4 py-2">Contaminación de muestra</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Falta de fecha y hora (ej. orina 24h)</td>
            <td className="px-4 py-2">No válida para análisis cuantitativo</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold text-green-800 mt-6 mb-2">
        🛡️ ¿Cómo evitar el rechazo?
      </h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
        <li>
          <strong>1. Verificar identidad del paciente:</strong> confirmar nombre
          con paciente o brazalete
        </li>
        <li>
          <strong>2. Etiquetar inmediatamente después de la toma:</strong> no
          dejar tubos sin rotular
        </li>
        <li>
          <strong>3. Asegurar legibilidad y adherencia:</strong> usar marcador
          indeleble, no lápiz
        </li>
        <li>
          <strong>4. Coincidencia entre muestra y boleta:</strong> datos
          exactos, fecha y sello médico
        </li>
        <li>
          <strong>5. Usar recipiente adecuado:</strong> tubos o frascos según
          muestra; etiqueta o teipe
        </li>
        <li>
          <strong>6. Agregar datos adicionales cuando se requiera:</strong> en
          orina 24h, líquidos o secreciones
        </li>
      </ul>

      <p className="text-sm text-gray-500 italic mt-4">
        (Aquí aún colocaré imágenes de los recipientes)
      </p>
    </>
  );
}
