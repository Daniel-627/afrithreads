export default function NewsLetter() {
  return (
    <form className="mt-4 md:mt-0 flex items-center">
      <input
        type="email"
        placeholder="Your email"
        className="px-3 py-2 rounded-l text-black text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-red-600 px-4 py-2 text-sm rounded-r hover:bg-red-700"
      >
        Subscribe
      </button>
    </form>
  )
}
