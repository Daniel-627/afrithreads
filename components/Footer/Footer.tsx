import Brand from './Brand'
import Info from './Info'
import LinkAndTime from './LinkAndTime'
import Shop from './Shop'
import NewsLetter from './NewsLetter'

export default function Footer() {
  return (
    <footer className=" pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <Brand />
        <Info />
        <Shop />
        <LinkAndTime />
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} AfriThreads. All rights reserved.</p>
        <NewsLetter />
      </div>
    </footer>
  )
}
