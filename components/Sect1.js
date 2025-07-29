import React from "react";

export default function Sect1() {
  return (
    <>
      <p className="mb-4">
        A continuación, se encontrará descripción de los diferentes tubos de
        recolección utilizados en el laboratorio clínico, sus aditivos, usos
        específicos.
      </p>

      <h4 className="text-lg font-semibold text-blue-800 mt-6 mb-2">
        🧪 TUBOS DE RECOLECCIÓN: USOS Y DIFERENCIAS
      </h4>

      {/* TUBO MORADO */}
      <h5 className="text-md font-bold text-purple-700 mt-4">
        🟣 TUBO CON TAPA MORADA O LILA
      </h5>
      <div className="flex gap-4 items-center my-2">
        <img src="/a-lila.jpeg" alt="Tubo lila adulto" className="w-20 max-w-md mx-auto" />
        <img src="/p-lila.png" alt="Tubo lila pediátrico" className="w-20 max-w-md mx-auto" />
      </div>
      <ul className="list-disc list-inside text-sm mb-4 text-gray-700">
        <li><strong>Aditivo:</strong> EDTA K₂ / K₃ (ácido etilendiaminotetraacético)</li>
        <li><strong>Uso principal:</strong> Hematología</li>
        <li><strong>Presentaciones:</strong> Adulto (4–5 mL) y pediátrico (0.5–2 mL)</li>
        <li><strong>Usos:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Hemograma, frotis, VSG, HbA1c, prueba de amonio</li>
            <li>Tipificación sanguínea, pruebas cruzadas</li>
            <li>Inmunológicas: Recuento CD3, CD4, CD8</li>
          </ul>
        </li>
      </ul>

      {/* TUBO CELESTE */}
      <h5 className="text-md font-bold text-blue-700 mt-4">
        🔵 TUBO DE TAPA CELESTE
      </h5>
      <div className="flex gap-4 items-center my-2">
        <img src="/a-azul.png" alt="Tubo azul adulto" className="w-20 max-w-md mx-auto" />
        <img src="/p-azul.png" alt="Tubo azul pediátrico" className="w-20 max-w-md mx-auto" />
      </div>
      <ul className="list-disc list-inside text-sm mb-4 text-gray-700">
        <li><strong>Aditivo:</strong> Citrato de sodio 3.2%</li>
        <li><strong>Uso principal:</strong> Pruebas de coagulación</li>
        <li><strong>Presentaciones:</strong> Adulto (2.7 mL), Pediátrico (1.8 mL)</li>
        <li><strong>Usos:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>TP, TTPa, Tiempo de trombina, Fibrinógeno, Dímero D</li>
          </ul>
        </li>
      </ul>

      {/* TUBO AMARILLO */}
      <h5 className="text-md font-bold text-yellow-600 mt-4">
        🟡 TUBO DE TAPA AMARILLA
      </h5>
      <div className="flex gap-4 items-center my-2">
        <img src="/a-amarillo.png" alt="Tubo amarillo adulto" className="w-20 max-w-md mx-auto" />
      </div>
      <ul className="list-disc list-inside text-sm mb-4 text-gray-700">
        <li><strong>Aditivo:</strong> Gel separador + activador de coagulación</li>
        <li><strong>Uso principal:</strong> Química clínica e inmunología</li>
        <li><strong>Adulto:</strong> Tapa amarilla (2.7 mL). <strong>Pediátrico:</strong> Tapa roja (1.8 mL)</li>
        <li><strong>Perfiles:</strong>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Hepático:</strong> AST, ALT, Bilirrubinas, FA, GGT</li>
            <li><strong>Renal:</strong> Urea, Creatinina, Ácido úrico</li>
            <li><strong>Lipídico:</strong> Colesterol total, HDL, LDL, Triglicéridos</li>
            <li><strong>Endocrino:</strong> TSH, T3, T4</li>
            <li><strong>Cardíaco:</strong> Troponinas, CK-MB, LDH</li>
            <li><strong>Electrolitos:</strong> Na⁺, K⁺, Cl⁻, Ca, P, Mg</li>
            <li><strong>Marcadores tumorales:</strong> PSA, AFP, CA 125, 15-3, 19-9, CEA</li>
            <li><strong>Inmunología:</strong> Ferritina, IL-6, anti-HBs, VIH, VDRL, etc.</li>
            <li><strong>Autoinmunes:</strong> ANA, Anti-TPO, Anti-CCP, FR, ASO</li>
            <li><strong>Serología:</strong> Toxoplasma, Rubéola, CMV, HSV (IgG / IgM)</li>
          </ul>
        </li>
        <li className="text-yellow-700">
          ⚠️ En pediatría se usa tubo rojo (sin gel) por menor volumen requerido.
        </li>
      </ul>

      {/* TUBO ROJO */}
      <h5 className="text-md font-bold text-red-600 mt-4">
        🔴 TUBO DE TAPA ROJA – TUBO SECO
      </h5>
      <div className="flex gap-4 items-center my-2">
        <img src="/rojo.png" alt="Tubo rojo adulto" className="w-20 max-w-md mx-auto" />
        <img src="/p-rojo.png" alt="Tubo rojo pediátrico" className="w-20 max-w-md mx-auto" />
      </div>
      <ul className="list-disc list-inside text-sm mb-4 text-gray-700">
        <li><strong>Aditivo:</strong> Ninguno (tubo seco)</li>
        <li><strong>Uso principal:</strong> Suero sin interferencia (líquidos biológicos, banco de sangre)</li>
        <li><strong>Volumen:</strong> 5 mL</li>
        <li><strong>Observaciones:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Requiere coagulación natural (20–30 min)</li>
            <li>No tiene gel ni activadores</li>
            <li>No recomendado para hematología</li>
            <li>No debe confundirse con tubo amarillo</li>
          </ul>
        </li>
      </ul>

      <p className="mt-6 text-gray-600 text-sm italic">
        En el Hospital Regional de Cuilapa, el tubo rojo se usa ocasionalmente
        para líquidos biológicos o procesos específicos, no como rutina.
      </p>

      {/* TABLA */}
      <div className="overflow-x-auto mt-10">
        <h3 className="text-lg font-bold text-blue-800 mb-4">
          📊 Diferencias de cada tubo
        </h3>
        <table className="min-w-full border border-gray-300 bg-white text-sm text-left text-gray-700">
          <thead className="bg-blue-100 text-blue-900">
            <tr>
              <th className="px-4 py-2 font-semibold">Característica</th>
              <th className="px-4 py-2">🟣 Morado</th>
              <th className="px-4 py-2">🔵 Celeste</th>
              <th className="px-4 py-2">🟡 Amarillo</th>
              <th className="px-4 py-2">🔴 Rojo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2 font-medium">Aditivo</td>
              <td className="px-4 py-2">EDTA K₂ o K₃</td>
              <td className="px-4 py-2">Citrato de sodio 3.2%</td>
              <td className="px-4 py-2">Gel + activador de coagulación</td>
              <td className="px-4 py-2">Ninguno (tubo seco)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Tipo de muestra</td>
              <td className="px-4 py-2">Sangre total</td>
              <td className="px-4 py-2">Plasma (tras centrifugación)</td>
              <td className="px-4 py-2">Suero (tras coagulación y centrifugación)</td>
              <td className="px-4 py-2">Suero (tras coagulación y centrifugación)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Uso principal</td>
              <td className="px-4 py-2">Hematología</td>
              <td className="px-4 py-2">Pruebas de coagulación</td>
              <td className="px-4 py-2">Química clínica e inmunología</td>
              <td className="px-4 py-2">Líquidos biológicos / banco de sangre</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Volumen estándar</td>
              <td className="px-4 py-2">4–5 mL (adulto)</td>
              <td className="px-4 py-2">2.7 mL (adulto)</td>
              <td className="px-4 py-2">4–5 mL (adulto)</td>
              <td className="px-4 py-2">5 mL (adulto)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Requiere inversión</td>
              <td className="px-4 py-2">✅ Sí, 8–10 veces</td>
              <td className="px-4 py-2">✅ Sí, 3–4 veces</td>
              <td className="px-4 py-2">❌ No (solo coagular)</td>
              <td className="px-4 py-2">❌ No (coagulación natural)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Tiempo de coagulación</td>
              <td className="px-4 py-2">No aplica</td>
              <td className="px-4 py-2">No coagula (anticoagulante)</td>
              <td className="px-4 py-2">20–30 min antes de centrifugar</td>
              <td className="px-4 py-2">~30 min antes de centrifugar</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Color del tapón</td>
              <td className="px-4 py-2">Morado</td>
              <td className="px-4 py-2">Celeste</td>
              <td className="px-4 py-2">Amarillo</td>
              <td className="px-4 py-2">Rojo</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium">Observaciones clave</td>
              <td className="px-4 py-2">Conserva células íntegras</td>
              <td className="px-4 py-2">Requiere llenado exacto (9:1)</td>
              <td className="px-4 py-2">Facilita separación de suero con gel</td>
              <td className="px-4 py-2">Sin aditivo ni gel; separación manual</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
