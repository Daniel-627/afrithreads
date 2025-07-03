'use client'

import Link from 'next/link'

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
