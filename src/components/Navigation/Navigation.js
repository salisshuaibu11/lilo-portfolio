import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	useEffect(() => {
		document.getElementById("hamburger").onclick = function toggleMenu() {
		  const navToggle = document.getElementsByClassName("toggle");
		  for (let i = 0; i < navToggle.length; i++) {
		    navToggle.item(i).classList.toggle("hidden");
		  }
		};
	})
	return (
		<nav class="flex flex-wrap items-center text-white justify-between p-2 bg-gray-900">
		{/*hamburger */}
		<div className="flex md:hidden bg-white">
		  <button id="hamburger">
		    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
		    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
		  </button>
		</div>

		{/* links */}
		<div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
		  <NavLink activeStyle={{color: '#3C59FF'}} to="/" className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</NavLink>
		  <NavLink activeStyle={{color: '#3C59FF'}} to="/about" className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">About Us</NavLink>
		  <NavLink activeStyle={{color: '#3C59FF'}} to="/projects" className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Projects</NavLink>
		  <NavLink activeStyle={{color: '#3C59FF'}} to="/contact" className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</NavLink>
			<NavLink activeStyle={{color: '#3C59FF'}} to="/login" className="block md:inline-block hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Login</NavLink>
		</div>

		{/* cta */}
		<NavLink to="/register" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right hover:bg-blue-500 text-white md:rounded">Enroll Now</NavLink>
		</nav>
	);
}
export default Navigation;
