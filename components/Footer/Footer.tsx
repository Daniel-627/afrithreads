import Brand from './Brand'
import Info from './Info'
import Shop from './Shop'
import LinkAndTime from './LinkAndTime'
import NewsLetter from './NewsLetter'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <Brand />
        <Info />
        <Shop />
        <LinkAndTime />
        <NewsLetter />
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 px-4 text-sm text-gray-400 text-center">
        <p>&copy; {new Date().getFullYear()} AfriThreads. All rights reserved.</p>
      </div>
    </footer>
  )
}
