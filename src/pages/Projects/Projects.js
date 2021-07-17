import "./Projects.css";
import HeaderImage from "../../assets/images/projects-headerImage.png";
import LetsStartImage from "../../assets/images/Ellipse 86.png";

import UpComingOne from '../../assets/images/upcoming-project1.png';
import UpComingTwo from '../../assets/images/upcoming-project2.png';
import UIUXBanner from '../../assets/images/banner-design 1.png';
import { ReactComponent as LetsTalk } from "../../assets/icons/Vector.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/Vector (1).svg";
/* 
import featureFirstIcon from "../../assets/images/featureFirst.png";
import featureSecondIcon from "../../assets/images/featureSecond.png";
import featureThirdIcon from "../../assets/images/featureThird.png";
import about from "../../assets/images/about.png";
import contactImage from "../../assets/images/contact.png";

import users from "../../assets/icons/user.svg";
import project from "../../assets/icons/project.svg";
import client from "../../assets/icons/client.svg";

import projectDetail from "../../assets/icons/project.svg";
import dollar from "../../assets/icons/dollar.svg";

 */
import ProjectSmall from '../../components/Project/ProjectSmall';
import Companies from '../../components/Companies';

function Projects() {
  const emptyFive = new Array(5);
  const emptySix = new Array(6);
  return (
    <>
      <section className="bg-gray-900 text-white w-screen mt-1 px-14 header h-50">
        <div className="w-full h-full flex">
          <div className="mt-24 p-16 w-2/3">
            <div className="">
              <h1 className="text-2xl">
                Achieve our goal with professionals or guarantee success
              </h1>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                vitae sit congue venenatis hac viverra imperdiet viverra
                volutpat.
              </p>
              <label for="input" class="flex flex-row rounded-md h-14 ml-3 mr-9">
                <input type="text" name="input" className='w-5/6 rounded-l-md'/>
                <div style={{ backgroundColor: "#FF5C00" }} className='w-1/6 rounded-r-md px-11 py-4'>/</div>
              </label>
            </div>
            <div className="header__bottom mt-10 flex flex-row relative">
              <img src={LetsStartImage} alt="Lets start" width='60' height='60'/>
              <span className='bg-gray-800 rounded-md m-0 mt-4 h-6 w-max px-2'>Lets Chat</span>
              <LetsTalk 
                alt="Lets Talk"
                className='w-8 h-8 absolute -bottom-2 left-10' />
              {/* space-x-4
                style={{ backgroundColor: "#FF5C00" }}
                className="text-white rounded-full px-6 py-2"
                style={{ border: "1px solid #FF5C00" }}
                className="rounded-full px-6 py-2"
              */}
            </div>
          </div>
          <article className="header__right w-1/3 flex items-center relative">
            <div style={{
              backgroundImage: `url(${HeaderImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
            }} className='h-96 w-80 z-40 transform scale-y-110 scale-y-105'></div>
            {/*<img src={} alt="Header background image" className='' />*/}
            <div className='bg-white h-80 w-80 absolute white-backdrop z-10'></div>
            <div className='bg-transparent border-2 border-black -skew-y-6 h-96 w-80 absolute black-border z-0 transform -translate-y-6 translate-x-6'></div>
          </article>
        </div>
      </section>
      <section className="bg-gray-200 w-full header__companies flex justify-evenly">
        <Companies />
      </section>
      <section className="bg-white text-black w-screen mt-1 px-14 header h-50">
        <div
          style={{ height: "fit-content" }}
          className="py-10 grid grid-cols-3 gap-5"
        >
          <div className="bg-white" style={{ height: "24rem" }}>
            <h1 className="text-2xl font-bold">
              Our Top and awarded Projects lately
            </h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              vitae sit congue venenatis hac viverra imperdiet viverra
              volutpat.
            </p>
            <div className='rounded-full h-10 w-10 bg-btnOrange'>
              <ArrowRight className='p-1 h-10 w-10'/>
            </div>
          </div>
          {
            emptyFive.fill(0, 0).map((e, i)=>{
              return (
                <div className="bg-white" style={{ height: "24rem" }} key={i}>
                  <ProjectSmall />
                </div>
              );
            })
          }
        </div>
      </section>
      <section className="bg-white text-black w-screen mt-1 px-14 header h-50">
        <img src={UIUXBanner} alt="UI/UX" />
      </section>
      <section className="bg-checkerWhite text-black w-screen mt-1 p-14 header h-50">
        {/* Header */}
        <div className="w-full h-full flex flex-col">
          <div className="bg-cartonBrown flex flex-row rounded-t-lg">
            <div className="bg-cartonBrown text-xl text-center p-4 text-btnOrange w-3/12 rounded-t-lg">
              Projects done
            </div>
            <div className='bg-checkerWhite w-9/12 h-max rounded-bl-lg'></div>
          </div>
          <div className="bg-cartonBrown header__bottom py-5 flex flex-col relative rounded-b-lg rounded-tr-lg">
            <p className="my-2 mx-20 px-20 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              vitae sit congue venenatis hac viverra imperdiet viverra
              volutpat.
            </p>
            <div className='flex flex-row space-x-6 text-center text-xl m-auto'>
              <p className='border-b-2 border-black font-bold'>All Project</p>
              <p>Marketing Project</p>
              <p>Programming Project</p>
              <p>Other Project</p>
            </div>
          </div>
        </div>
        {/* Main */}
        <div
          style={{ height: "fit-content" }}
          className="py-10 grid grid-cols-3 gap-5"
        >
          {
            emptySix.fill(0, 0).map((e, i)=>{
              return (
                <div className="bg-white" style={{ height: "24rem" }} key={i}>
                  <ProjectSmall />
                </div>
              );
            })
          }
        </div>
      </section>
      <section className="bg-white text-black w-screen mt-1 p-14 header h-50">
        {/* Header */}
        <div className="w-full h-full flex flex-col">
          <h1 className="text-2xl text-center">
            Upcoming Projects
          </h1>
          <p className="my-5 px-20 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            vitae sit congue venenatis hac viverra imperdiet viverra
            volutpat.
          </p>
        </div>
        {/* Main */}
        <div
          style={{ height: "fit-content" }}
          className="py-10 flex flex-col"
        >
          <div className='flex flex-row'>
            <div className='h-max w-1/2'>
              <img src={UpComingOne} alt="Upcoming Project One" className='h-max' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-xl font-bold text-center py-5'>Project Title</h2>
              <p className='px-10 py-10 text-sm text-lg-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
              </p>
            </div>
          </div>
          <div className='flex flex-row-reverse'>
            <div className='h-max w-1/2'>
              <img src={UpComingTwo} alt="Upcoming Project Two" className='h-max' />
            </div>
            <div className='w-1/2'>
              <h2 className='text-xl font-bold text-center py-5'>Project Title</h2>
              <p className='px-10 py-10 text-sm text-lg-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
                Lorem ipsum dolor sit amet consectetur adipisicing,
                elit. Fugiat, quidem nobis veritatis voluptatibus quo
                mollitia, voluptatum, eaque blanditiis recusandae
                temporibus iure, quibusdam amet ea! Adipisci,
                impedit. Repudiandae totam, modi eius!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
