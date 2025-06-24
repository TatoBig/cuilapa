'use client'
import { Disclosure } from '@headlessui/react'
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaFolderOpen, FaFileDownload, FaPhone } from 'react-icons/fa'
import Link from 'next/link'
import { Fragment } from 'react'

const navItems = [
  { href: '#inicio', label: 'Inicio', icon: <FaHome /> },
  { href: '#sobre', label: 'Sobre la Plataforma', icon: <FaInfoCircle /> },
  { href: '#secciones', label: 'Secciones', icon: <FaFolderOpen /> },
  { href: '#recursos', label: 'Recursos', icon: <FaFileDownload /> },
  { href: '#contacto', label: 'Contacto', icon: <FaPhone /> },
]

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-800 text-white fixed w-full z-50 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="font-bold text-lg">Guía Preanalítica</span>
              </div>
              <div className="hidden md:flex space-x-6 text-sm">
                {navItems.map(({ href, label, icon }) => (
                  <Link key={label} href={href} className="flex items-center gap-1 hover:text-yellow-300">
                    {icon} {label}
                  </Link>
                ))}
              </div>
              <div className="md:hidden flex items-center">
                <Disclosure.Button className="text-white hover:text-yellow-300">
                  {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
            {navItems.map(({ href, label, icon }) => (
              <Link key={label} href={href} className="flex items-center gap-2 py-2 text-sm hover:text-yellow-300">
                {icon} {label}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
