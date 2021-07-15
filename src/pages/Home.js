import "./Home.css";
import HeaderImage from "../assets/images/headerImage.png";

import managementIcon from "../assets/icons/management.svg";
import learningIcon from "../assets/icons/learning.svg";
import marketingIcon from "../assets/icons/marketing.svg";
import programmingIcon from "../assets/icons/programming.svg";

import featureFirstIcon from "../assets/images/featureFirst.png";
import featureSecondIcon from "../assets/images/featureSecond.png";
import featureThirdIcon from "../assets/images/featureThird.png";
import about from "../assets/images/about.png";
import contactImage from "../assets/images/contact.png";

import userOne from "../assets/images/user.png";
import perxels from "../assets/icons/perxels.svg";
import udemy from "../assets/icons/udemy.svg";
import google from "../assets/icons/google.svg";
import uplers from "../assets/icons/uplers.svg";

import users from "../assets/icons/user.svg";
import project from "../assets/icons/project.svg";
import client from "../assets/icons/client.svg";

import time from "../assets/icons/time.svg";
import projectDetail from "../assets/icons/project.svg";
import dollar from "../assets/icons/dollar.svg";

function Home() {
  return (
    <>
      <nav className="flex justify-end pr-5 w-screen">
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
      <section className="w-screen mt-1 px-14 header h-screen">
        <div className="w-full h-full flex">
          <div className="header__left  py-16">
            <div className="header__top">
              <h1 className="text-2xl">
                Empower your <span style={{ color: "#FF5C00" }}>Business</span>,
                Skill, Education and Project with{" "}
                <span style={{ color: "#FF5C00" }}>professionals</span>
              </h1>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                vitae sit congue venenatis hac viverra imperdiet viverra
                volutpat.
              </p>
            </div>
            <div className="header__bottom space-x-4">
              <button
                style={{ backgroundColor: "#FF5C00" }}
                className="text-white rounded-full px-6 py-2"
              >
                Enroll now
              </button>
              <button
                style={{ border: "1px solid #FF5C00" }}
                className="rounded-full px-6 py-2"
              >
                Contact Us
              </button>
            </div>
          </div>
          <article className="header__right flex items-center">
            <div className="header__right__cards z-50">
              <div className="header__right__top space-y-4">
                <div className="flex bg-white shadow-lg management rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={managementIcon} alt="Management" />
                  <span>Management</span>
                </div>
                <div className="flex bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={learningIcon} alt="Management" />
                  <span>Learning</span>
                </div>
              </div>
              <div className="header__right__bottom space-y-4">
                <div className="flex bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={marketingIcon} alt="Management" />
                  <span>Marketing</span>
                </div>
                <div className="flex programming bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={programmingIcon} alt="Management" />
                  <span>Programming</span>
                </div>
              </div>
            </div>
            <img src={HeaderImage} alt="Header background image" />
          </article>
        </div>
        <div className="w-full header__companies flex justify-evenly">
          <img src={perxels} alt="pexels" />
          <img src={udemy} alt="udemy" />
          <img src={google} alt="google" />
          <img src={uplers} alt="uplers" />
        </div>
      </section>
      <section className="w-screen mt-32 services">
        <div className="text-center">
          <h2 style={{ color: "#FF5C00" }}>Our services</h2>
          <h4 className="font-bold">
            What are the best offers we have for you?
          </h4>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            interdum dolor enim justo.
          </p>
        </div>
        <div className="p-1" style={{ backgroundColor: "#FEE9C1" }}>
          <div className="bg-white clip text-center h-full rounded-lg">
            <div className="buttons space-x-6 z-50 font-thin">
              <button className="font-bold">Marketing</button>
              <button>Education</button>
              <button>Others</button>
            </div>
            <div className="services__cards grid grid-cols-3 gap-10 p-20">
              <div className="service text-center">
                <h3 className="font-bold">SEO</h3>
                <p className="my-8 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra neque, augue morbi ullamcorper enim urna nam pharetra.
                  Euismod vivamus sit bib endum accumsan, non at. Vitae vitae
                  leo imperdiet tristique fermentum.
                </p>
                <button
                  className="text-white py-2 rounded-full"
                  style={{ backgroundColor: "#FF5C00", width: "80%" }}
                >
                  Learn more
                </button>
              </div>
              <div className="service text-center">
                <h3 className="font-bold">Email Marketing</h3>
                <p className="my-8 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra neque, augue morbi ullamcorper enim urna nam pharetra.
                  Euismod vivamus sit bib endum accumsan, non at. Vitae vitae
                  leo imperdiet tristique fermentum.
                </p>
                <button
                  className="text-white py-2 rounded-full"
                  style={{ backgroundColor: "#FF5C00", width: "80%" }}
                >
                  Learn more
                </button>
              </div>
              <div className="service text-center">
                <h3 className="font-bold">Paid Media Advertising</h3>
                <p className="my-8 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra neque, augue morbi ullamcorper enim urna nam pharetra.
                  Euismod vivamus sit bib endum accumsan, non at. Vitae vitae
                  leo imperdiet tristique fermentum.
                </p>
                <button
                  className="text-white py-2 rounded-full"
                  style={{ backgroundColor: "#FF5C00", width: "80%" }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features mt-32">
        <div className="text-center">
          <h2 style={{ color: "#FF5C00" }}>features</h2>
          <h4 className="font-bold">What do you gain working with us?</h4>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            interdum dolor enim justo.
          </p>
        </div>
        <div className="features__cards grid grid-cols-3 gap-10 p-20">
          <div className="feature feature__one text-center p-5">
            <img
              className="mx-auto"
              src={featureFirstIcon}
              alt="First feature icon"
            />
            <h3 className="font-bold mt-5" style={{ color: "#FF5C00" }}>
              Lorem ipsum dolor sit amet
            </h3>
            <p className="my-8 text-justify font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              fusce blandit facilisis enim potenti vulputate quisque. Nunc
              suspendisse urna lobortis quisque pellentesque tempor,
              pellentesque tortor. Est, vitae volutpat ullamcorper enim.
            </p>
          </div>
          <div className="feature text-center feature__two bg-white shadow-lg p-5">
            <img
              className="mx-auto"
              src={featureFirstIcon}
              alt="First feature icon"
            />
            <h3 className="font-bold mt-5" style={{ color: "#FF5C00" }}>
              Lorem ipsum dolor sit amet
            </h3>
            <p className="my-8 text-justify font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              fusce blandit facilisis enim potenti vulputate quisque. Nunc
              suspendisse urna lobortis quisque pellentesque tempor,
              pellentesque tortor. Est, vitae volutpat ullamcorper enim.
            </p>
          </div>
          <div className="feature feature__three text-center p-5">
            <img
              className="mx-auto"
              src={featureThirdIcon}
              alt="First feature icon"
            />
            <h3 className="font-bold mt-5" style={{ color: "#FF5C00" }}>
              Lorem ipsum dolor sit amet
            </h3>
            <p className="my-8 text-justify font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              fusce blandit facilisis enim potenti vulputate quisque. Nunc
              suspendisse urna lobortis quisque pellentesque tempor,
              pellentesque tortor. Est, vitae volutpat ullamcorper enim.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 px-32 py-5">
        <div className="text-center">
          <h2 style={{ color: "#FF5C00" }}>Success History</h2>
          <h4 className="font-bold my-2">Do you know why we are the best?</h4>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce
            blandit facilisis enim potenti vulputate quisque. Nunc suspendisse
            urna lobortis quisque pellentesque tempor, pellentesque tortor. Est,
            vitae volutpat ullamcorper enim.
          </p>
        </div>
        <div className="grid mt-3 grid-cols-3 justify-items-center">
          <div className="space-y-2">
            <h3>We are trusted by</h3>
            <p className="flex space-x-3 items-center justify-center">
              <img src={users} alt="Users " />{" "}
              <span className="font-bold text-lg">5K+</span>
            </p>
          </div>
          <div className="space-y-2">
            <h3>Project realized</h3>
            <p className="flex space-x-3 items-center justify-center">
              <img src={project} alt="Users " />{" "}
              <span className="font-bold text-lg">200+</span>
            </p>
          </div>
          <div className="space-y-2">
            <h3>Happy Clients</h3>
            <p className="flex space-x-3 items-center justify-center">
              <img src={client} alt="Users " />{" "}
              <span className="font-bold text-lg">600+</span>
            </p>
          </div>
        </div>
      </section>
      <section className="projects w-screen mt-10">
        <div className="text-center px-24">
          <h2 style={{ color: "#FF5C00" }}>Our Project</h2>
          <h4 className="font-bold my-2">
            We are your Best choice, now and ever?
          </h4>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce
            blandit facilisis enim potenti vulputate quisque. Nunc suspendisse
            urna lobortis quisque pellentesque tempor, pellentesque tortor. Est,
            vitae volutpat ullamcorper enim.
          </p>
        </div>
        <div
          style={{ height: "fit-content" }}
          className="bg-gray-900 px-24 py-10 grid grid-cols-3 gap-5"
        >
          <div className="bg-white" style={{ height: "24rem" }}>
            <div className="project__header rounded-md h-full">
              <div className="project__header__top">
                <div className="w-full flex items-start p-2 justify-between">
                  <span className="flex items-center">
                    <img className="mr-3" src={time} alt="Time" /> 13/07/2021
                  </span>
                  <div className="flex items-start">
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                  </div>
                </div>

                <div className="project__header__bottom p-2 bg-gray-50 opacity-60">
                  <p className="flex items-center">
                    <img src={client} className="mr-3" alt="" /> Author of
                    publication
                  </p>
                  <p className="flex items-center">
                    <img src={projectDetail} className="w-5 mr-3" alt="" />{" "}
                    Duration of projects
                  </p>
                  <p className="flex items-center">
                    <img src={dollar} className="w-5 mr-3" alt="" /> 6000.00
                  </p>
                </div>
              </div>
              <div className="project__footer text-center py-3">
                <p className="mb-2">Lorem ipsum dolor sit amet!</p>
                <button
                  className="rounded-full text-white py-2"
                  style={{ width: "80%", backgroundColor: "#FF5C00" }}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white" style={{ height: "24rem" }}>
            <div className="project__header rounded-md h-full">
              <div className="project__header__top">
                <div className="w-full flex items-start p-2 justify-between">
                  <span className="flex items-center">
                    <img className="mr-3" src={time} alt="Time" /> 13/07/2021
                  </span>
                  <div className="flex items-start">
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                  </div>
                </div>

                <div className="project__header__bottom p-2 bg-gray-50 opacity-60">
                  <p className="flex items-center">
                    <img src={client} className="mr-3" alt="" /> Author of
                    publication
                  </p>
                  <p className="flex items-center">
                    <img src={projectDetail} className="w-5 mr-3" alt="" />{" "}
                    Duration of projects
                  </p>
                  <p className="flex items-center">
                    <img src={dollar} className="w-5 mr-3" alt="" /> 6000.00
                  </p>
                </div>
              </div>
              <div className="project__footer text-center py-3">
                <p className="mb-2">Lorem ipsum dolor sit amet!</p>
                <button
                  className="rounded-full text-white py-2"
                  style={{ width: "80%", backgroundColor: "#FF5C00" }}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white" style={{ height: "24rem" }}>
            <div className="project__header rounded-md h-full">
              <div className="project__header__top">
                <div className="w-full flex items-start p-2 justify-between">
                  <span className="flex items-center">
                    <img className="mr-3" src={time} alt="Time" /> 13/07/2021
                  </span>
                  <div className="flex items-start">
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                    <img
                      className="object-contain"
                      src={userOne}
                      alt="user one"
                    />
                  </div>
                </div>

                <div className="project__header__bottom p-2 bg-gray-50 opacity-60">
                  <p className="flex items-center">
                    <img src={client} className="mr-3" alt="" /> Author of
                    publication
                  </p>
                  <p className="flex items-center">
                    <img src={projectDetail} className="w-5 mr-3" alt="" />{" "}
                    Duration of projects
                  </p>
                  <p className="flex items-center">
                    <img src={dollar} className="w-5 mr-3" alt="" /> 6000.00
                  </p>
                </div>
              </div>
              <div className="project__footer text-center py-3">
                <p className="mb-2">Lorem ipsum dolor sit amet!</p>
                <button
                  className="rounded-full text-white py-2"
                  style={{ width: "80%", backgroundColor: "#FF5C00" }}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about w-screen relative px-32 mt-10">
        <div style={{left: '32rem', top: '-1rem', zIndex: '-999'}} className="h-32 w-32 bg-red-300 absolute"></div>
        <div style={{top: '15rem', left: '7rem', zIndex: '-999'}} className="h-32 w-32 bg-red-300 absolute"></div>
        <div className="w-full h-full flex items-center">
          <div className="project__image">
            <img src={about} alt="About us" />
          </div>
          <div className="px-24 project__content">
            <h2 className="font-thin">About Us</h2>
            <h4 className="font-bold my-2">
              Who are we and why we are?
            </h4>
            <p className="font-thin text-justify mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci fusce
              blandit facilisis enim potenti vulputate quisque. Nunc suspendisse
              urna lobortis quisque pellentesque tempor, pellentesque tortor. Est,
              vitae volutpat ullamcorper enim.
            </p>
            <button className="p-2 text-white rounded-md" style={{backgroundColor: '#FF5C00', width: '219px'}}>Read more</button>
          </div>
        </div>
      </section>
      <section className="subscribe px-14 mt-10">
        <div className="px-32 h-72 rounded-lg py-5 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-center">
          <h4>Subscribe to the news-letter to recieve latest informtion about our services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum</p>
          <form className="w-full mt-10 relative">
            <input className="w-full outline-none rounded-full py-3 px-5" placeholder="input your email address for best offers" />
            <button style={{right: '0.1rem', top: '0.2rem'}} className="text-white bg-red-400 px-10 py-2 absolute rounded-full">Subscribe</button>
          </form>
        </div>
      </section>
      <section className="contact w-screen px-32 mt-10">
        <form className="w-full px-14 py-3 bg-gray-300">
          <h2 className="mb-5">Contact form</h2>
          <div className="w-4/5 mb-5">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl" placeholder="Full Name"/>
          </div>
          <div className="w-4/5 mb-5">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl" placeholder="Full Name"/>
          </div>
          <div className="w-4/5 mb-5">
              <label htmlFor="message">Message</label>
              <textarea
                rows="7"
                id="message"
                name="message"
                className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl">
                </textarea>
          </div>
          <div className="w-4/5 mb-5">
              <button style={{width: "222px"}} type="button" className="py-2 bg-white text-center rounded-full">Envoyez</button>
          </div>
        </form>
      </section>
      <footer class="w-screen bg-gray-900 px-20 py-10 mt-10">
        <div className="flex">
        	<div className="flex flex-col lg:flex-row">
        		<div className="mr-20 mb-10">
        			<h2 className="uppercase text-xl font-bold text-white">Address</h2>
        			<a href="/" className="block font-thin mb-2 text-white">Comapny Name</a>
        			<a href="/about" className="block font-thin mb-2 text-white">+977-981234567</a>
        			<a href="/career" className="block font-thin mb-2 text-white">Sales@mycompany.com</a>
        			<a href="/courses" className="block font-thin mb-2 text-white">technical@myconpany.com</a>
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
    </>
  );
}

export default Home;
