import "../styles/Signup.css";
import { NavLink } from "react-router-dom";

import image1 from "../../assets/images/signupImage.png";
import image2 from "../../assets/images/signupImage2.png";
import signup from "../../assets/icons/signup.svg";

function Signup() {
  return (
    <>
      <div className="flex items-center header" style={{paddingLeft: '12rem'}}>
        <div className="header__left">
          <img src={image1} alt="" />
        </div>
        <div className="header__center text-center py-3 text-white">
          <div className="header__center__top space-x-5">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </div>
          <div className="header__center__bottom text-5xl">
            Sign Up
          </div>
        </div>
        <div className="header__right">
          <img src={image2} alt="" />
        </div>
      </div>
      <section className="mt-32 signup">
        <form className="mx-auto shadow-lg px-10 pb-10" style={{width: '70%'}}>
          <img className="text-center mx-auto mb-10" src={signup} alt="" style={{width: "20%"}}/>
          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="name" className="mr-32">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>
          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="name">Surname</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>
          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>
          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="date">Birth Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>
          <div className="w-full flex justify-between items-center mb-5">
              <p>Country</p>
              <div className="grid w-9/12 pl-10 gap-5 grid-cols-2">
                <select className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl">
                  <option>Egypt</option>
                </select>
                <div>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    placeholder="Postal Code"
                    className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
                  />
                </div>
              </div>
          </div>
          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="name">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>

          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="name">Phone Number</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>

          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>

          <div className="w-full flex justify-between items-center mb-5">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="confirm_password"
                id="confirm_password"
                name="password"
                className="w-full px-4 py-2 text-gray-600 bg-gray-200 rounded-full outline-none md:px-8 focus:shadow-xl"
              />
          </div>
        </form>
      </section>
    </>
  )
}

export default Signup;
