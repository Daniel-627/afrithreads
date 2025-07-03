'use client'

import Link from 'next/link'

const categories = [
  { slug: 'dresses', label: 'Dresses' },
  { slug: 'accessories', label: 'Accessories' },
  { slug: 'shirts', label: 'Shirts' },
]

export default function CategoryDropdown() {
  return (
    <div className="relative group">
      <button className="text-gray-700 font-medium hover:text-red-500 transition">
        Categories
      </button>
      <div className="absolute left-0 hidden group-hover:block bg-white shadow p-3 mt-2 z-10">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="block px-4 py-2 hover:bg-gray-100 rounded text-sm"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
