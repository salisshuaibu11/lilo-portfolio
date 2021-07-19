import React from "react";
import "./styles/About.css";

import descriptionImage from "../assets/images/about/description.png";
import philosopy from "../assets/images/about/philosopy.png";
import history from "../assets/images/about/history.png";
import leadership from "../assets/images/about/leadership.png";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <header className="bg-gray-900 text-white about__page h-52">
        <nav className="flex justify-end pr-5 w-screen text-red-500 py-2">
          <ul className="flex items-cente5 px-5 space-x-3">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-screen">
        <div className="w-8/12 mx-auto text-center px-10 py-5">
          <h3 className="mb-10 border-b border-black inline-block pb-5">Let's go places</h3>
          <p className="font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Orci fusce blandit  facilisis enim potenti vulputate quisque.
            Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque
          </p>
        </div>
        <div className="bg-gray-200 about__group mt-5 flex justify-center">
          <span>Description</span>
          <span>Philosopy in Practice</span>
          <span>Our History</span>
          <span>Our Leardership</span>
          <span>Our Partners</span>
        </div>

        <article className="my-5 text-center">
          <h3
            style={{color: '#F55800', borderBottom: '1px solid #F55800'}}
            className="mb-10 inline-block pb-5">Description</h3>
            <div className="xl:w-8/12 w-full px-10 mx-auto">
              <div>
                  <img style={{display: 'block', width: '100%'}} src={descriptionImage} alt="" />
              </div>
              <div className="description">
                <h4 className="py-5">What Describe Us</h4>
                <p className="font-extralight xl:text-left text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit.</p>
              </div>
            </div>
        </article>

        <article className="text-center bg-gray-100">
          <h3
            style={{color: '#F55800', borderBottom: '1px solid #F55800'}}
            className="mb-10 inline-block py-5">Philosopy in Practice</h3>
            <div className="xl:w-8/12 w-full px-10 mx-auto">
              <div>
                  <img style={{display: 'block', width: '100%'}} src={philosopy} alt="" />
              </div>
              <div className="description mt-10 flex xl:flex-row flex-wrap space-x-0 xl:space-x-10">
                <div className="description__left text-left">
                  <p className="text-red-300 border-b border-black pb-1">You are what drives Us</p>
                  <p className="text-gray-400 border-b border-gray-200 pb-1">Our Mission</p>
                  <p className="text-gray-400 border-b border-gray-200 pb-1">Giving Back</p>
                </div>
                <div className="description__right font-thin text-left flex-1">
                  <h3 className="mb-3">Our Purpose</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                    aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend
                    lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque.
                  </p>
                </div>
              </div>
            </div>
        </article>

        <article className="text-center">
          <h3
            style={{color: '#F55800', borderBottom: '1px solid #F55800'}}
            className="mb-10 inline-block py-5">Our History</h3>
            <div className="xl:w-8/12 w-full px-10 mx-auto">
              <div>
                  <img style={{display: 'block', width: '100%'}} src={history} alt="" />
              </div>
              <div className="description mt-10">
                <h3 className="text-red-400 mb-5 border-b pb-4 border-red-400 inline-block">Where we’ve gone and where we’re going</h3>
                <div className="grid xl:grid-cols-2 font-thin grid-cols-1 gap-5">
                  <div className="description__left xl:text-left text-justify">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                    aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend
                    lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque.
                    </p>
                  </div>
                  <div className="description__right xl:text-left text-justify">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
                      aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend
                      lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque. Tortor scelerisque id ut egestas ac blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum. Velit suscipit habitant laoreet aliquam viverra bibendum neque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </article>

        <article className="my-5 text-center bg-gray-100">
          <h3
            style={{color: '#F55800', borderBottom: '1px solid #F55800'}}
            className="mb-10 inline-block py-5">Our Leardership</h3>
            <div className="xl:w-8/12 w-full px-10 mx-auto">
              <div>
                  <img style={{display: 'block', width: '100%'}} src={leadership} alt="" />
              </div>
              <div className="description">
                <h4 className="py-5">Meet the people who drive us forward</h4>
                <div style={{height: '1px'}} className="my-5 opacity-50 w-28 mx-auto bg-black"></div>
                <p className="font-extralight pb-5 xl:text-justify xl:text-center">
                  We build cars and trucks that help you and your family go places reliably and safely.
                  And it's our people who power those vehicles. Meet the team leaders who live and work
                  in the communities where you do.
                </p>
              </div>
            </div>
        </article>

      </section>
    </>
  )
}

export default About;
