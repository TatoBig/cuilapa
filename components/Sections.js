'use client'
import { Disclosure } from '@headlessui/react'
import { FaChevronDown, FaFolderOpen } from 'react-icons/fa'
import Sect1 from './Sect1'
import Sect2 from './Sect2'
import Sect3 from './Sect3'
import Sect4 from './Sect4'
import Sect5 from './Sect5'
import Sect6 from './Sect6'
import Sect7 from './Sect7'
import Sect8 from './Sect8'
import Sect9 from './Sect9'

const sections = [
  {
    title: '1. Tipos de Tubos',
    content: [<Sect1 />]
  },
  {
    title: '2. Correcto Etiquetado de Muestras',
    content: [<Sect2 />]
  },
  {
    title: '3. Llenado y Manejo de Tubos de Recolección',
    content: [<Sect3 />]
  },
  {
    title: '4. Criterios de Rechazo de Muestras',
    content: [<Sect4 />]
  },
  {
    title: '5. Conservación y Transporte de Muestras',
    content: [<Sect5 />]
  },
  {
    title: '6. Identificación y Manejo de Interferencias',
    content: [<Sect6 />]
  },
  {
    title: '7. Exámenes de Emergencia y Procesos Especiales',
    content: [<Sect7 />]
  },
  {
    title: '8. Pruebas Especiales y Requisitos Preanalíticos',
    content: [<Sect8 />]
  },
  {
    title: '9. Horarios de Recepción de Pruebas Especiales',
    content: [<Sect9 />]
  }
]

export default function Sections() {
  return (
    <section id="secciones" className="bg-white py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <FaFolderOpen /> Secciones
      </h2>
      <p className="text-gray-700 mb-6">Accede a cada uno de los apartados temáticos:</p>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full bg-blue-100 text-blue-900 px-4 py-3 text-left text-sm font-medium rounded-lg hover:bg-blue-200 transition">
                  <span>✅ {section.title}</span>
                  <FaChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 pt-2 text-sm text-gray-700 bg-gray-50 rounded-b-lg border border-t-0 border-gray-200">
                  <ul className="list-disc list-inside space-y-1">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  )
}
