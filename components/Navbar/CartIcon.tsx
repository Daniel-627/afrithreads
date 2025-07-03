'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CartIcon() {
  // Placeholder count
  const cartCount = 2

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-6 w-6 text-gray-800" />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
          {cartCount}
        </span>
      )}
    </Link>
  )
}
