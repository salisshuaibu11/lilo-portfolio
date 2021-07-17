import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = ( props )=>{
	return (
		<footer className="w-screen bg-gray-900 px-20 py-10 mt-10">
      <div className="flex">
      	<div className="flex flex-col lg:flex-row">
      		<div className="mr-20 mb-10">
      			<h2 className="uppercase text-xl font-bold text-white">Address</h2>
      			<a href="/" className="block font-thin mb-2 text-white">Comapny Name</a>
      			<a href="/about" className="block font-thin mb-2 text-white">+977-981234567</a>
      			<a href="/career" className="block font-thin mb-2 text-white">Sales@mycompany.com</a>
      			<a href="/courses" className="block font-thin mb-2 text-white">technical@myconpany.com</a>
      		</div>
          <div className="text-white">
            <h5>Social Media</h5>
            <div className="space-x-5">
              <a href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#insta"><FontAwesomeIcon icon={faInstagram} /></a>

              <a href="#twiter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
      	</div>
      	<div className="mr-20 mb-10">
      		<h2 className="uppercase text-xl font-bold text-white">Our Services</h2>
      		<a href="#test" className="block font-thin mb-2 text-white">
      			Marketing
      		</a>
      		<a href="#test" className="block font-thin mb-2 text-white">
      			Education
      		</a>
      		<a href="#test" className="block font-thin text-white">
      			System development
      		</a>
          <a href="#test" className="block font-thin text-white">
            Merge & Acquisition
          </a>
      	</div>

        <div className="mr-20 mb-10">
          <h2 className="uppercase text-xl font-bold text-white">Links</h2>
          <a href="#test" className="block font-thin mb-2 text-white">
            Projects
          </a>
          <a href="#test" className="block font-thin mb-2 text-white">
            Our Team
          </a>
          <a href="#test" className="block font-thin text-white">
            Our Service
          </a>
          <a href="#test" className="block font-thin text-white">
            Blog
          </a>
        </div>

        <div className="mr-20 mb-10">
          <h2 className="uppercase text-xl font-bold text-white">Town (Head Office)</h2>
          <a href="#test" className="block font-thin mb-2 text-white">
            +977-981234567
          </a>
          <a href="#test" className="block font-thin mb-2 text-white">
            760 Market Street, floor 10
            San Francisco, CA, 94102
          </a>
        </div>
      </div>
      <p className="text-center text-center">copyright, company@2021</p>
    </footer>
	);
}
export default Footer;