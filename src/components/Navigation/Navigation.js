import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className="flex justify-end pr-5 w-screen">
      <ul className="flex items-center space-x-3">
        <li className="border-b border-red-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact us</NavLink>
        </li>
        <li style={{ color: "#FF5C00" }}>
          <NavLink to="/">Login</NavLink>
        </li>
        <li
          style={{ backgroundColor: "#FF5C00" }}
          className="px-6 py-1 rounded-md text-white"
        >
          <NavLink to="/">Enroll now</NavLink>
        </li>
      </ul>
    </nav>
	);
}
export default Navigation;