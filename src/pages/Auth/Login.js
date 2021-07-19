import "../styles/Signup.css";
import { NavLink, Link } from "react-router-dom";

import image1 from "../../assets/images/signupImage.png";
import image2 from "../../assets/images/signupImage2.png";
import ladyWithCmp from '../../assets/images/login.png';
import { ReactComponent as GooglePlus } from '../../assets/icons/gmail.svg';
import { ReactComponent as Facebook } from '../../assets/icons/FB.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import PWord from '../../assets/images/pword.png';

function Login() {
  return (
    <>
      <div className="flex items-center header" style={{paddingLeft: '12rem'}}>
        <div className="header__left">
          <img src={image1} alt="" />
        </div>
        <div className="header__center text-center py-3 text-white">
          <div className="header__center__top space-x-5">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/projects">Project</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <div className="header__center__bottom text-5xl">
            Login
          </div>
        </div>
        <div className="header__right">
          <img src={image2} alt="" />
        </div>
      </div>
      <section className="mt-32 flex flex-row">
        <div className="mr-2 my-auto shadow-2xl px-10 pb-10 divide-y divide-grey-300 w-1/2">
          <form className='pt-10 pb-2'>
            <div className="w-full flex flex-row justify-between items-center mb-5">
                <label htmlFor="username" className='w-2/12'>Username</label>
                <div className="flex flex-row w-10/12 ml-5 text-gray-600 bg-gray-200 rounded-full outline-none">
                  <div className='bg-gray-900 w-2/12 py-3 px-8 rounded-l-full'>
                    <Email />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-10/12 px-4 py-2 md:px-8 text-gray-600 bg-white rounded-r-full outline-none focus:shadow-xl border-b-2 border-t-2 border-r-2 border-gray-300"
                  />
                </div>
            </div>

            <div className="w-full flex justify-between items-center mb-5">
                <label htmlFor="password" className='w-2/12'>Password</label>
                <div className="flex flex-row w-10/12 ml-5 text-gray-600 bg-gray-200 rounded-full outline-none">
                  <div className='bg-gray-900 w-2/12 py-3 px-8 rounded-l-full'>
                    <img src={PWord} alt="Password" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-10/12 px-4 py-2 md:px-8 text-gray-600 bg-white rounded-r-full outline-none focus:shadow-xl border-b-2 border-t-2 border-r-2 border-gray-300"
                  />
                </div>
            </div>
            <div className='flex flex-row mx-20 justify-between'>
              <button className='rounded-full bg-sky-600 text-white h-10 py-1 px-5'>Login</button>
              <p className='py-1 ml-3'>I don't have an account yet <Link className='font-bold' to='/signup'>Sign Up?</Link></p>
            </div>
          </form>
          <div className='w-2/3 mx-auto'>
            <h3 className='text-xl py-3 text-center font-bold'>Sign in with</h3>
            <div className='flex flex-row justify-between text-gray-600'>
              <div className='flex flex-row'>
                <Facebook />
                <p className='font-bold ml-3 py-2'>Facebook</p>
              </div>
              <div className='flex flex-row'>
                <GooglePlus />
                <p className='font-bold ml-3 py-2'>Gmail</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <img src={ladyWithCmp} alt="Lady with computer illustration" />
        </div>
      </section>
    </>
  )
}

export default Login;
