export default function NewsLetter() {
  return (
    <div>
      <h4 className="font-semibold mb-3">Join Our Newsletter</h4>
      <p className="text-sm text-gray-500 mb-4">
        Be the first to know about new arrivals, exclusive offers, and seasonal sales.
      </p>
      <form className="flex">
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-2 rounded-l text-black text-sm focus:outline-none w-full"
        />
        <button
          type="submit"
          className="bg-red-600 px-4 py-2 text-sm rounded-r hover:bg-red-700 whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
