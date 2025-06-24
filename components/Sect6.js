import React from "react";

export default function Sect6() {
  return (
    <>
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        6. Identificación y Manejo de Interferencias en Muestras
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Hemólisis, lipemia, ictericia y dilución
        <br />
        Las interferencias preanalíticas pueden alterar gravemente los
        resultados de laboratorio, por lo que es fundamental reconocerlas desde
        la toma y evitar su aparición.
      </p>

      <h4 className="text-base font-semibold text-gray-800 mb-2">
        🔍 Tabla: ¿Qué interferencias pueden identificarse antes o después de la
        centrifugación?
      </h4>
      <table className="min-w-full text-sm text-left border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Interferencia</th>
            <th className="px-4 py-2">¿Cuándo se detecta?</th>
            <th className="px-4 py-2">Cómo se ve</th>
            <th className="px-4 py-2">Impacto en resultados</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-2">🩸 Hemólisis</td>
            <td className="px-4 py-2">Después de centrifugar</td>
            <td className="px-4 py-2">Plasma o suero rosado a rojo</td>
            <td className="px-4 py-2">↑ K+, LDH, TGO, bilirrubina</td>
          </tr>
          <tr>
            <td className="px-4 py-2">🟡 Ictericia</td>
            <td className="px-4 py-2">Después de centrifugar</td>
            <td className="px-4 py-2">Suero amarillo verdoso intenso</td>
            <td className="px-4 py-2">
              Interfiere en mediciones colorimétricas
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">🥛 Lipemia</td>
            <td className="px-4 py-2">Después de centrifugar</td>
            <td className="px-4 py-2">Suero o plasma blanco lechoso</td>
            <td className="px-4 py-2">Interfiere en absorbancia óptica</td>
          </tr>
          <tr>
            <td className="px-4 py-2">💧 Dilución</td>
            <td className="px-4 py-2">Antes de centrifugar</td>
            <td className="px-4 py-2">
              Sangre muy líquida o clara, hematocrito bajo
            </td>
            <td className="px-4 py-2">
              Parámetros alterados: Hb, Na+, glucosa
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm text-blue-700 mb-4">
        🔔 <strong>Nota importante:</strong>
        <br />
        Algunas interferencias, como la hemólisis, lipemia o ictericia, solo
        pueden detectarse después de la centrifugación, cuando el laboratorio ya
        ha procesado parcialmente la muestra. Por este motivo, el personal de
        laboratorio puede llamar para solicitar una nueva muestra, incluso si
        aparentemente la muestra estaba en buenas condiciones al entregarla.
      </p>

      <p className="text-sm text-gray-700 mb-4">
        ⚠️ Esta solicitud no es un capricho, sino una medida necesaria para
        garantizar la validez de los resultados y evitar reportes erróneos que
        puedan afectar el diagnóstico del paciente. Entre las causas más
        frecuentes que obligan a repetir la toma están:
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>Presencia de coágulos en tubos con anticoagulante</li>
        <li>Dilución evidente que impide obtener valores confiables</li>
        <li>Hemólisis severa que interfiere con múltiples pruebas</li>
      </ul>

      <p className="text-sm font-semibold mb-2">
        ⚠️ Errores comunes en la toma que las provocan:
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>
          Uso de agujas finas o presión fuerte al llenar el tubo → hemólisis
        </li>
        <li>No respetar el ayuno de 12 horas → lipemia</li>
        <li>Tomar muestra del mismo brazo canalizado con suero → dilución</li>
        <li>
          Prolongar el uso del torniquete → concentración falsa de proteínas, Hb
          y electrolitos
        </li>
        <li>Agitación brusca del tubo → hemólisis</li>
      </ul>

      <p className="text-sm font-semibold mb-2">🛡️ ¿Cómo evitarlas?</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-6 space-y-1">
        <li>Utilizar el calibre adecuado de aguja (21–22G)</li>
        <li>No tomar muestra por vía con solución activa</li>
        <li>Cumplir ayuno y advertir sobre medicamentos/lípidos</li>
        <li>Evitar agitar los tubos: invertir suavemente</li>
        <li>Llevar en el tiempo estimado para centrifugación</li>
      </ul>

      <p className="text-sm text-blue-700">
        🧪 Recomendación institucional: Toda muestra con evidencia visible de
        interferencia debe ser evaluada y registrada. Si compromete los
        resultados, debe ser rechazada y solicitada nuevamente.
      </p>
    </>
  );
}
