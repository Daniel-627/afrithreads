import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Info() {
  return (
    <div>
      <h4 className="font-semibold mb-3">Customer Care</h4>
      <ul className="space-y-2 text-sm text-gray-400 mb-4">
        <li>support@afrithreads.com</li>
        <li>+254 700 123 456</li>
        <li>Nairobi, Kenya</li>
      </ul>
      <div className="flex space-x-4">
        <Link href="#"><Facebook className="h-5 w-5 hover:text-red-500" /></Link>
        <Link href="#"><Instagram className="h-5 w-5 hover:text-red-500" /></Link>
        <Link href="#"><Twitter className="h-5 w-5 hover:text-red-500" /></Link>
      </div>
    </div>
  )
}
