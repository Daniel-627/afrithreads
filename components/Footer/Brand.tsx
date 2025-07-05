import Link from 'next/link'

export default function Brand() {
  return (
    <div>
      <Link href="/" className="text-2xl font-bold tracking-wide text-gray-950">
        AfriThreads
      </Link>
      <p className="mt-2 text-sm text-gray-600">
        Crafted with love. Worn with pride.
      </p>
    </div>
  )
}
