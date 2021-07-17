function Navbar() {
  return (
    <nav className="flex justify-end pr-5 w-screen py-2">
      <ul className="flex items-center space-x-3">
        <li className="border-b border-red-300">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li style={{ color: "#FF5C00" }}>
          <a href="/">Login</a>
        </li>
        <li
          style={{ backgroundColor: "#FF5C00" }}
          className="px-6 py-1 rounded-md text-white"
        >
          <a href="/">Enroll now</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
