import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer class="w-screen bg-gray-900 xl:px-20 px-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 pt-10">
        <div className="flex flex-col">
          <div className="mr-20 mb-10">
            <h2 className="text-md font-bold text-white mb-2">Address</h2>
            <a href="/" className="block font-bold mb-2 text-white">Comapny Name</a>
            <a href="/about" className="block font-thin mb-2 text-white">
              <i className="text-white fas fa-phone-square-alt"></i> +977-981234567
            </a>
            <a href="/career" className="block font-thin mb-2 text-white">Sales@mycompany.com</a>
            <a href="/courses" className="block font-thin mb-2 text-white">technical@myconpany.com</a>
          </div>
          <div className="text-white">
            <h5>Social Media</h5>
            <div className="space-x-5">
              <a href="#facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#insta"><FontAwesomeIcon icon={faInstagram} /></a>

              <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>
        <div className="mr-20 mb-10">
          <h2 className="text-md font-bold text-white mb-2">Our Services</h2>
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
          <h2 className="text-md font-bold text-white mb-2">Links</h2>
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
          <h2 className="text-md font-bold text-white mb-2">Town (Head Office)</h2>
          <a href="#test" className="block font-thin mb-2 text-white">
            +977-981234567
          </a>
          <a href="#test" className="block font-thin mb-2 text-white">
            760 Market Street, floor 10
            San Francisco, CA, 94102
          </a>
        </div>
      </div>
      <p className="text-center text-white pb-2 mt-10">copyright, company@2021</p>
    </footer>
  )
}

export default Footer;
