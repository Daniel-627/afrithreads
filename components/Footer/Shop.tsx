import Link from 'next/link'

export default function Shop() {
  return (
    <div>
      <h4 className="font-semibold mb-3">Shop</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><Link href="/new-arrivals">New Arrivals</Link></li>
        <li><Link href="/best-sellers">Best Sellers</Link></li>
        <li><Link href="/sale">Sale</Link></li>
        <li><Link href="/gift-cards">Gift Cards</Link></li>
      </ul>
    </div>
  )
}
