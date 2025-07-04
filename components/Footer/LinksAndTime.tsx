import Link from 'next/link'

export default function LinkAndTime() {
  return (
    <div>
      <h4 className="font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/faq">FAQs</Link></li>
        <li><Link href="/returns">Returns & Exchanges</Link></li>
      </ul>

      <h4 className="font-semibold mt-5 mb-2">Working Hours</h4>
      <p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
    </div>
  )
}
