'use client'

import Link from 'next/link'

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileMenu() {
  return (
    <nav className="md:hidden bg-white border-t px-4 py-4 shadow">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-gray-800 text-base font-medium hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
