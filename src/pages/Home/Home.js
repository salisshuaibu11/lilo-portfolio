import "../styles/Home.css";
import HeaderImage from "../../assets/images/headerImage.png";

import managementIcon from "../../assets/icons/management.svg";
import learningIcon from "../../assets/icons/learning.svg";
import marketingIcon from "../../assets/icons/marketing.svg";
import programmingIcon from "../../assets/icons/programming.svg";

import featureFirstIcon from "../../assets/images/featureFirst.png";
//import featureSecondIcon from "../../assets/images/featureSecond.png";
import featureThirdIcon from "../../assets/images/featureThird.png";
import about from "../../assets/images/about.png";
import project from "../../assets/images/project.png";
//import contactImage from "../../assets/images/contact.png";

import users from "../../assets/icons/user.svg";
import client from "../../assets/icons/client.svg";

import ProjectSmall from '../../components/Project/ProjectSmall';
import Companies from '../../components/Companies';

import Contact from "../../components/Contact";
import Subscribe from "../../components/Subscribe";

function Home() {
  const empty = new Array(5);
  return (
    <>
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
                  <img className="w-6" src={managementIcon} alt="Management Icon" />
                  <span>Management</span>
                </div>
                <div className="flex bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={learningIcon} alt="Learning Icon" />
                  <span>Learning</span>
                </div>
              </div>
              <div className="header__right__bottom space-y-4">
                <div className="flex bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={marketingIcon} alt="Marketing Icon" />
                  <span>Marketing</span>
                </div>
                <div className="flex programming bg-white shadow-lg rounded-full py-3 px-10 items-center space-x-3">
                  <img className="w-6" src={programmingIcon} alt="Programming Icon" />
                  <span>Programming</span>
                </div>
              </div>
            </div>
            <img src={HeaderImage} alt="Header background" />
          </article>
        </div>
        <div className="w-full header__companies flex justify-evenly">
          <Companies />
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
        <div className="text-center px-24 mx-auto" style={{width: '70%'}}>
          <h2 style={{ color: "#FF5C00" }}>Our Project</h2>
          <h4 className="font-bold my-2">
            We are your Best choice, now and ever?
          </h4>
          <p className="font-extralight mb-3">
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
          {
            empty.fill(0, 0).map((e, i)=>{
              return (
                <div className="bg-white" style={{ height: "24rem" }} key={i}>
                  <ProjectSmall />
                </div>
              );
            })
          }
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
      <Subscribe />
      <Contact />
    </>
  );
}

export default Home;