import Brand from './Brand'
import Info from './Info'
import Shop from './Shop'
import LinkAndTime from './LinkAndTime'
import NewsLetter from './NewsLetter'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand + Info stacked */}
        <div>
          <Brand />
          <div className="mt-4">
            <Info />
          </div>
        </div>

        {/* Column 2: Shop Links */}
        <Shop />

        {/* Column 3: Site Links & Hours */}
        <LinkAndTime />

        {/* Column 4: Newsletter */}
        <NewsLetter />
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-300 pt-4 px-4 text-sm text-gray-500 text-center">
        <p>&copy; {new Date().getFullYear()} AfriThreads. All rights reserved.</p>
      </div>
    </footer>
  )
}
