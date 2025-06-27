export default function Sect4() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-sm text-gray-700 space-y-6 mt-6">
        <p>
          El rechazo de una muestra ocurre cuando no cumple con los requisitos
          mínimos de calidad preanalítica necesarios para garantizar resultados
          confiables. Estos errores pueden retrasar el diagnóstico, generar
          repeticiones innecesarias y poner en riesgo la atención del paciente.
        </p>

        <h4 className="font-semibold text-red-700">
          ❌ 1. Tubos o boletas mal rotuladas
        </h4>
        <ul className="list-disc list-inside">
          <li>
            El tubo no tiene nombre o el nombre está incompleto o ilegible.
          </li>
          <li>La boleta no coincide con el tubo.</li>
          <li>La boleta está sin sello médico o sin fecha de solicitud.</li>
          <li>
            El etiquetado se hizo después de la toma, fuera de la vista del
            paciente.
          </li>
        </ul>
        <p className="text-blue-700">
          📌 Toda muestra mal identificada debe ser descartada, según norma de
          trazabilidad.
        </p>

        <h4 className="font-semibold text-red-700">
          🩸 2. Muestras coaguladas, hemolizadas o diluidas
        </h4>
        <table className="min-w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2">Tipo de alteración</th>
              <th className="px-3 py-2">¿Qué significa?</th>
              <th className="px-3 py-2">Ejemplos de impacto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-3 py-2">Coagulada</td>
              <td>Sangre con coágulos en tubo con anticoagulante</td>
              <td>Rechazo en hemograma, TP/TTPa</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Hemolizada</td>
              <td>Destrucción de glóbulos rojos (plasma rosado)</td>
              <td>Afecta K+, LDH, TGO, bilirrubinas</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Diluida</td>
              <td>
                Muestra con exceso de anticoagulante o contaminada con solución
              </td>
              <td>Falsos resultados en hematología o química</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-700">
          📌 La hemólisis y coagulación son errores técnicos evitables mediante
          una buena toma y manejo de tubos.
        </p>

        <div className="mt-8 space-y-10">
          <div>
            <h4 className="text-base font-semibold text-red-700 mb-2">
              Muestra hemolizada en tubo con EDTA
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              La hemólisis se evidencia por el color rojo intenso y homogéneo
              del plasma, producto de la ruptura de los eritrocitos y liberación
              de hemoglobina al medio.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Este tipo de muestra no es adecuada para realizar pruebas
              hematológicas ni bioquímicas, ya que puede alterar los resultados
              e interferir en la interpretación clínica.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              📌 <strong>Posibles causas:</strong> mala técnica de venopunción,
              uso de agujas muy delgadas, agitación excesiva del tubo o demora
              en el procesamiento.
            </p>
            <img
              src="/m1.png"
              alt="Muestra hemolizada en tubo con EDTA"
              className="mt-2 rounded shadow-md max-w-md w-20 mx-auto"
            />
          </div>

          <div>
            <h4 className="text-base font-semibold text-red-700 mb-2">
              Muestra diluida
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Esta muestra presenta un plasma de aspecto pálido y poco turbio, y
              una capa eritrocitaria reducida, lo cual sugiere hemodilución.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              La causa más común es la recolección de sangre en un brazo que
              recibió recientemente una infusión intravenosa (como solución
              salina o glucosada), lo que altera la concentración real de los
              componentes sanguíneos.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              📌 <strong>Consecuencias:</strong> los resultados de hemograma,
              electrolitos, proteínas y otros parámetros pueden verse falsamente
              disminuidos, afectando la interpretación clínica.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              ✅ <strong>Recomendación:</strong> Evitar tomar muestras del brazo
              con línea venosa activa o esperar al menos 5 minutos después de
              cerrar la infusión y desechar los primeros mililitros de sangre.
            </p>
            <img
              src="/m2.png"
              alt="Muestra diluida"
              className="mt-2 rounded shadow-md max-w-md w-20 mx-auto"
            />
          </div>

          <div>
            <h4 className="text-base font-semibold text-red-700 mb-2">
              Muestra coagulada en tubo con EDTA
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              La presencia de coágulos en un tubo con anticoagulante evidencia
              una mezcla inadecuada de la sangre con el aditivo.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              📌 <strong>Posibles causas:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-2 space-y-1">
              <li>
                No invertir el tubo suavemente de 8 a 10 veces inmediatamente
                después de la toma.
              </li>
              <li>Tiempo prolongado entre la toma y la mezcla con el EDTA.</li>
              <li>
                Volumen insuficiente de sangre (proporción anticoagulante/sangre
                alterada).
              </li>
            </ul>
            <p className="text-sm text-gray-700 mb-2">
              ❌ Esta muestra no es válida para realizar hemograma ni otras
              pruebas hematológicas, ya que los coágulos atrapan células
              sanguíneas y distorsionan los resultados.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              ✅ <strong>Recomendación:</strong> Siempre invertir el tubo
              suavemente inmediatamente después de la toma, sin agitar
              bruscamente, y verificar el volumen adecuado.
            </p>
            <img
              src="/m3.png"
              alt="Muestra coagulada en tubo con EDTA"
              className="mt-2 rounded shadow-md max-w-md w-20 mx-auto"
            />
          </div>
        </div>

        <h4 className="font-semibold text-red-700">3. Volumen insuficiente</h4>
        <p>
          Cada tubo debe llenarse hasta el volumen mínimo indicado por el
          fabricante. No hacerlo altera la proporción sangre:aditivo y puede
          invalidar resultados.
        </p>
        <ul className="list-disc list-inside">
          <li>Citrato: falsos tiempos prolongados.</li>
          <li>EDTA: artefactos en recuentos celulares.</li>
          <li>Tubo seco o amarillo: volumen insuficiente de suero.</li>
        </ul>
        <p className="text-blue-700">
          📌 Toda muestra rechazada debe registrarse en boletas rechazadas y el
          personal debe ser notificado.
        </p>
        <div>
          <p className="font-semibold text-gray-800">
            Ejemplo de llenado incorrecto en tubos con anticoagulante
          </p>
          <p>
            Volumen inadecuado afecta proporción sangre/anticoagulante y
            distorsiona resultados.
          </p>
          <p>
            📌 En tubo con EDTA: puede causar microcitosis artificial,
            disminución del hematocrito, falsas disminuciones de plaquetas.
          </p>
          <p>
            📌 En tubo con citrato: falsos tiempos prolongados de coagulación
            por exceso de citrato.
          </p>
          <p className="text-blue-700">
            ✅ Recomendación: llenar hasta la marca indicada y no procesar
            muestras mal llenadas.
          </p>
          <img
            src="m4.png"
            alt="Llenado incorrecto"
            className="my-2 w-20 max-w-md mx-auto"
          />
        </div>
      </div>
      ,
    </>
  );
}
