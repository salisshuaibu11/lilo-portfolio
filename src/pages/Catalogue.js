import { useEffect } from "react";

import "./styles/Catalogue.css";

import image2 from "../assets/images/signupImage2.png";
import perxels from "../assets/icons/perxels.svg";
import udemy from "../assets/icons/udemy.svg";
import google from "../assets/icons/google.svg";
import uplers from "../assets/icons/uplers.svg";

import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";
import digital from "../assets/projects/digital.png";

import marketing from "../assets/projects/marketing.png";
import education from "../assets/projects/education.png";
import design from "../assets/projects/design.png";
import employment from "../assets/projects/employment.png";
import trading from "../assets/projects/trading.png";
import programming from "../assets/projects/programming.png";
import seo from "../assets/projects/seo.png";

import userOne from "../assets/images/user.png";
import time from "../assets/icons/time.svg";
import projectDetail from "../assets/icons/project.svg";
import dollar from "../assets/icons/dollar.svg";
import client from "../assets/icons/client.svg";

import Project from "../components/Project";
import Footer from "../components/Footer/Footer";

function Catalogue() {
  useEffect(() => {
    window.$('.testimonials').slick({
			dots: true,
			infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: false
		});
  })
  return(
    <>
      <header className="bg-gray-900">
        <nav className="flex text-white justify-end pr-5 w-screen py-2">
          <ul className="flex items-center space-x-3">
            <li className="">
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
          </ul>
        </nav>
        <div className="w-full items-center py-10 flex px-32 mt-13">
          <div className="catalogue__left" style={{marginRight: "12rem"}}>
            <h1 className="text-2xl font-bold text-white">
              Achieve your goal with professionals or guarantee success
            </h1>
            <p className="my-5 font-thin text-white">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Arcu vitae sit congue venenatis hac .
            </p>
            <button
              className="bg-white rounded-md px-6 py-3"
            >
              Add New Project
            </button>
          </div>
          <div className="catalogue__right">
            <img src={image2} alt="" />
          </div>
        </div>
      </header>
      <section className="w-full header__companies py-2 flex justify-evenly">
        <img src={perxels} alt="pexels" />
        <img src={udemy} alt="udemy" />
        <img src={google} alt="google" />
        <img src={uplers} alt="uplers" />
      </section>
      <section className="w-screen top__ranked px-24 bg-gray-100">
        <h3 className="mb-3 text-lg">Top ranked projects</h3>
        <article className="w-screen flex space-x-3 mb-5">
          <img src={project1} alt="Project One" />
          <img src={project2} alt="Project Two" />
          <img src={project3} alt="Project Three" />
          <img src={project4} alt="Project Four" />
        </article>
        <article className="w-scree">
          <img style={{width: '95%', height: '20%'}} src={digital} alt="" />
        </article>
      </section>
      <section className="projects w-screen py-10 px-24 bg-gray-200">
        <div className="projects__header">
          <h2 className="w-44 text-center py-2 rounded-tl-lg rounded-tr-lg bg-white font-bold">Project Header</h2>
          <article className="bg-white grid grid-cols-7 gap-3 pt-8 pb-2 rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <div>
              <img className="mx-auto" src={marketing} alt="Marketing" />
              <h4 className="text-xl text-center">Marketing</h4>
            </div>
            <div>
              <img className="mx-auto" src={education} alt="Marketing" />
              <h4 className="text-xl text-center">Education</h4>
            </div>
            <div>
              <img className="mx-auto" src={design} alt="Marketing" />
              <h4 className="text-xl text-center">Design</h4>
            </div>
            <div>
              <img className="mx-auto" src={employment} alt="Marketing" />
              <h4 className="text-xl text-center">Employment</h4>
            </div>
            <div>
              <img className="mx-auto" src={trading} alt="Marketing" />
              <h4 className="text-xl text-center">Trading</h4>
            </div>
            <div>
              <img className="mx-auto" src={programming} alt="Marketing" />
              <h4 className="text-xl text-center">Programming</h4>
            </div>
            <div>
              <img className="mx-auto" src={seo} alt="Marketing" />
              <h4 className="text-xl text-center">SEO</h4>
            </div>
          </article>
        </div>

        <div className="mt-10">
          <h2 className="text-xl -mb-8">Marketing Project</h2>
          <article
            style={{ height: "fit-content" }}
            className="py-10 testimonials">
            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

          </article>
        </div>

        <div className="mt-10">
          <h2 className="text-xl -mb-8">Education</h2>
          <article
            style={{ height: "fit-content" }}
            className="py-10 testimonials">
            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

            <Project
              userOne={userOne}
              time={time}
              projectDetail={projectDetail}
              dollarSign={dollar}
              client={client}
              price="6,000.00"
            />

          </article>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Catalogue;
