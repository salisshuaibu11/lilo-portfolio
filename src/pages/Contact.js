import React from "react";

import contact from "../assets/images/contact_header_image.png";

import ContactComponent from "../components/Contact";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer/Footer";

import "./styles/Contact.css";

function Contact() {
  return (
    <>
      <header className="bg-gray-900 text-white h-52">
        <nav className="flex justify-end pr-5 w-screen py-2">
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
      </header>
      <section className="w-screen -mt-20">
        <div className="mx-auto text-center" style={{width: '80%'}}>
          <img className="mx-auto" src={contact} alt="" style={{width: "60%"}}/>
          <div>
            <h3 className="font-bold my-5 text-3xl">Get In Touch With Us</h3>
            <p className="font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Orci fusce blandit  facilisis enim potenti vulputate quisque.
              Nunc suspendisse urna lobortis quisque pellentesque tempor, pellentesque
            </p>
          </div>
        </div>
      </section>
      <ContactComponent />
      <Subscribe />
      <section className="mt-20">
        <div className="text-center mx-auto" style={{width: '50%'}}>
          <h2>FAQ</h2>
          <h4 className="font-bold my-2">Do you know why we are the best?</h4>
          <p className="font-extralight">
            Qet all type of anwsers to any question you need to know or solution
            to any challenge you have been facing. Do well to consult them bellow
          </p>
        </div>
        <div className="w-full md:w-3/5 mx-auto p-8">
          <div className="shadow-md">

            <div class="tab w-full overflow-hidden border-t mb-3">
             <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs" />
             <label class="block p-5 leading-normal bg-gray-200 cursor-pointer" for="tab-multi-one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.?</label>
             <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
             </div>
            </div>

            <div class="tab w-full overflow-hidden border-t mb-3">
             <input class="absolute opacity-0 " id="tab-multi-two" type="checkbox" name="tabs" />
             <label class="block p-5 leading-normal bg-gray-200 cursor-pointer" for="tab-multi-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.?</label>
             <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
             </div>
            </div>

            <div class="tab w-full overflow-hidden border-t mb-3">
             <input class="absolute opacity-0 " id="tab-multi-three" type="checkbox" name="tabs" />
             <label class="block p-5 leading-normal bg-gray-200 cursor-pointer" for="tab-multi-three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.?</label>
             <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
             </div>
            </div>

            <div class="tab w-full overflow-hidden border-t mb-3">
             <input class="absolute opacity-0 " id="tab-multi-four" type="checkbox" name="tabs" />
             <label class="block p-5 leading-normal bg-gray-200 cursor-pointer" for="tab-multi-four">Lorem ipsum dolor sit amet, consectetur adipiscing elit.?</label>
             <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p class="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
             </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact;
