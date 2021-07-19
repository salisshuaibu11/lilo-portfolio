import React from 'react';
import { NavLink } from "react-router-dom";

import Companies from '../../components/Companies';
import ProjectSmall from '../../components/Project/ProjectSmall';


import HeaderImage from '../../assets/images/Project-detail-header-backdrop.png';
import HeaderImageSm from '../../assets/images/Project-detail-header-small.png';
import HistoryBackdrop from '../../assets/images/Project-detail-History-backdrop.png';
import StoryboardImg from '../../assets/images/Project-detail-storyboard.png';
import AnalysisImg from '../../assets/images/Project-detail-analysis.png';
import objMethOne from '../../assets/images/Project-detail-obj-circle1.png';
import objMethTwo from '../../assets/images/Project-detail-obj-circle2.png';
import objMethThree from '../../assets/images/Project-detail-obj-circle3.png';
import teamOne from '../../assets/images/Project-detail-team1.png';
import teamTwo from '../../assets/images/Project-detail-team2.png';
import teamThree from '../../assets/images/Project-detail-team3.png';
import teamFour from '../../assets/images/Project-detail-team4.png';
import galleryOne from '../../assets/images/Project-detail-team-office1.png';
import galleryTwo from '../../assets/images/Project-detail-team-office2.png';
import galleryThree from '../../assets/images/Project-detail-team-office3.png';
import galleryFour from '../../assets/images/Project-detail-team-office4.png';

import { ReactComponent as ArrowRight } from "../../assets/icons/Vector (1).svg";
import client from "../../assets/icons/client.svg";
import time from "../../assets/icons/time.svg";
import user from "../../assets/images/user.png";
import project from "../../assets/icons/project.svg";
import dollar from "../../assets/icons/dollar.svg";

const ProjectDetails = ()=>{
	const projectOutline = [
		'Project History',
		'Project Problem',
		'Analysis',
		'Objectives',
		'Methodology',
		'Team',
		'Gallery',
	];
	const empty = new Array(3);
	return (
		<>
      <section className="bg-gray-900 text-white w-screen mt-1 px-14 h-screen">
        <nav className="flex justify-end pr-24 w-screen text-white py-2">
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
        <div className="w-full h-full flex relative z-0" style={{
              backgroundImage: `url(${HeaderImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
            <div className="w-4/5 h-72 flex absolute z-10 inset-x-20 top-10" style={{
              backgroundImage: `url(${HeaderImageSm})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} ></div>
            <div className='mt-96 ml-80 pl-32'>
            	<h1 className='text-2xl font-bold'>Project Head Outline</h1>
            	<div className='flex flex-col flex-wrap h-40'>
	            	{
	            		projectOutline.map((outline, i)=>{
		            		return (
		            			<span key={i} className='text-xl pl-5'>
			            			{`
			            				${i+1}.)
			            				${outline}
			            			`}
			            		</span>
			            	)

	            		})
	            	}
            	</div>
            </div>
          {/* <div className="mt-24 p-16 w-2/3">
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
                <input type="text" name="input" className='w-5/6 text-black pl-2 rounded-l-md'/>
                <div style={{ backgroundColor: "#FF5C00" }} className='w-1/6 rounded-r-md px-11 py-4'>/</div>
              </label>
            </div>
            <div className="mt-10 flex flex-row relative">
              <img src={LetsStartImage} alt="Lets start" width='60' height='60'/>
              <span className='bg-gray-800 rounded-md m-0 mt-4 h-6 w-max px-2'>Lets Chat</span>
              <LetsTalk
                alt="Lets Talk"
                className='w-8 h-8 absolute -bottom-2 left-10' />
            </div>
          </div>
          <div className="w-1/3 flex items-center relative">
            <div style={{
              backgroundImage: `url(${HeaderImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)'
            }} className='h-96 w-80 z-40 transform scale-y-110 scale-y-105'></div>
            <div className='bg-white h-80 w-80 absolute white-backdrop z-10'></div>
            <div className='bg-transparent border-2 border-black -skew-y-6 h-96 w-80 absolute black-border z-0 transform -translate-y-6 translate-x-6'></div>
          </div> */}
        </div>
      </section>
      <section className="bg-gray-200 w-full flex-wrap header__companies flex justify-evenly">
        <Companies />
      </section>
      <section className="bg-white text-white w-screen mt-1 px-14 pt-20" style={{height: '800px'}}>
        <div className="w-full h-full flex relative z-0" style={{
              backgroundImage: `url(${HistoryBackdrop})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }} >
          <div className='text-black bg-btnOrange w-1/2 ml-10 px-16 py-5 z-10'>
          	<h1 className='text-4xl font-bold'>History behind the project</h1>
          	<p className='py-3 text-sm text-gray-900'>
	          	Lorem, ipsum dolor sit amet consectetur adipisicing,
	          	elit. Veritatis quidem nemo, accusamus aspernatur.
          	</p>
          	<h3 className='text-xl font-bold'>Story Board</h3>
          	<p className='py-3 text-sm text-gray-900'>
	          	Lorem, ipsum dolor sit amet consectetur adipisicing,
	          	elit. Veritatis quidem nemo, accusamus aspernatur
	          	velit molestiae vel repudiandae iure ad aperiam,
	          	nobis, harum itaque. Aliquid in consectetur
	          	illo, ab dolor ex.
	          </p>
	          <p className='py-3 text-sm text-gray-900'>
	          	Lorem, ipsum dolor sit amet consectetur adipisicing,
	          	elit. Veritatis quidem nemo, accusamus aspernatur.
          	</p>
          	<p className='py-3 text-sm text-gray-900'>
	          	Lorem, ipsum dolor sit amet consectetur adipisicing,
	          	elit. Veritatis quidem nemo, accusamus aspernatur
	          	velit molestiae vel repudiandae iure ad aperiam,
	          	nobis, harum itaque. Aliquid in consectetur
	          	illo, ab dolor ex.
          	</p>
          </div>
          <div className='bg-gray-900 text-center w-full z-20 absolute bottom-20'>
	          <p className='py-6 px-48 text-sm'>
	          	Lorem, ipsum dolor sit amet consectetur adipisicing,
	          	elit. Veritatis quidem nemo, accusamus aspernatur
	          	velit molestiae vel repudiandae iure ad aperiam. 
          	</p>
          </div>
        </div>
      </section>
      <section className="bg-white text-black w-screen mt-1 px-14 pt-20">
      	<div className='flex flex-col my-10'>
	      	<div className='w-4/12'>
            <h3 className='text-xl text-btnOrange py-3 font-bold'>Problem Statement</h3>
            <p className='py-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla odit accusamus officia illum nisi unde dolores
              impedit provident, excepturi fugiat incidunt, quia.
            </p>
            <div className='rounded-full h-10 w-10 bg-btnOrange my-8 ml-2'>
              <ArrowRight className='p-1 h-10 w-10'/>
            </div>
          </div>
      		<div className='flex flex-row my-10' style={{ justifyContent: 'space-between' }}>
            <div className='w-4/12 mb-10 mx-5 transform translate-y-2/3'>
              <img src={StoryboardImg} alt="Story board"/>
            </div>
            <div className='w-6/12 mx-10'>
              <h3 className='text-xl text-btnOrange font-bold'>Story Board</h3>
              <p className='py-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur
                velit molestiae vel repudiandae iure ad aperiam,
                nobis, harum itaque. Aliquid in consectetur
                illo, ab dolor ex.
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur.
              </p>
              <p className='py-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur
                velit molestiae vel repudiandae iure ad aperiam,
                nobis, harum itaque. Aliquid in consectetur
                illo, ab dolor ex.
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur.
              </p>
              <p className='py-3'>
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur
                velit molestiae vel repudiandae iure ad aperiam,
                nobis, harum itaque. Aliquid in consectetur
                illo, ab dolor ex.
                Lorem, ipsum dolor sit amet consectetur adipisicing,
                elit. Veritatis quidem nemo, accusamus aspernatur.
              </p>
            </div>
          </div>
      		<div className='flex flex-row my-10'>
      			<div className='w-2/3 px-16 py-10'>
	      			<h3 className='text-xl text-btnOrange font-bold'>Analysis</h3>
	      			<p className='py-3'>
		          	<span className='font-bold'>1.)</span>
								{' '}Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque. Aliquid in consectetur
		          	illo, ab dolor ex.
		          </p>
		          <p className='py-3'>
		          	<span className='font-bold'>2.)</span>
								{' '}Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque. Aliquid in consectetur
		          	illo, ab dolor ex.
	          	</p>
	          	<p className='py-3'>
		          	<span className='font-bold'>3.)</span>
								{' '}Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque. Aliquid in consectetur
		          	illo, ab dolor ex.
								{' '}Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque. Aliquid in consectetur
		          	illo, ab dolor ex.
	          	</p>
      			</div>
      			<div className='w-2/5'>
	      			<img src={AnalysisImg} alt="Analysis"/>
      			</div>
      		</div>
      		<div className='flex flex-col my-10'>
		      	<div className='flex flex-row-reverse'>
			      	<div className='w-4/12'>
		      			<h3 className='text-xl text-btnOrange font-bold text-right'>Objectives & Methodology</h3>
		            <p className='py-3 text-right'>
		              Lorem ipsum dolor sit amet consectetur.
		              Nulla odit accusamus officia illum nisi unde dolores
		              impedit provident, excepturi fugiat incidunt, quia.
		            </p>
		            <div className='rounded-full h-10 w-10 bg-btnOrange my-8 ml-56'>
		              <ArrowRight className='p-1 h-10 w-10'/>
		            </div>
		          </div>
	          </div>
      			<div className='flex flex-row'>
	      			<div className='w-2/3 py-10 grid grid-cols-2 grid-rows-3 gap-y-10 gap-x-16'>
		      			<div className=''>
			      			<h3 className='text-btnOrange font-bold text-center'>Objectives 1</h3>
			      			<p className='py-3 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing,
				          	elit. Veritatis quidem nemo, accusamus aspernatur
				          	velit molestiae vel repudiandae iure ad aperiam,
				          	nobis, harum itaque.
				          </p>
		      			</div>
		      			<div className='row-start-1 row-end-3 col-start-2 self-center'>
			      			<h3 className='text-btnOrange font-bold text-center'>Methodology 1</h3>
			      			<p className='py-3 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing,
				          	elit. Veritatis quidem nemo, accusamus aspernatur
				          	velit molestiae vel repudiandae iure ad aperiam,
				          	nobis, harum itaque.
				          </p>
		      			</div>
		      			<div className='row-start-2 col-start-1'>
			      			<h3 className='text-btnOrange font-bold text-center'>Objectives 2</h3>
			      			<p className='py-3 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing,
				          	elit. Veritatis quidem nemo, accusamus aspernatur
				          	velit molestiae vel repudiandae iure ad aperiam,
				          	nobis, harum itaque.
				          </p>
		      			</div>
		      			<div className='row-start-2 row-end-4 col-start-2 self-center'>
			      			<h3 className='text-btnOrange font-bold text-center'>Methodology 2</h3>
			      			<p className='py-3 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing,
				          	elit. Veritatis quidem nemo, accusamus aspernatur
				          	velit molestiae vel repudiandae iure ad aperiam,
				          	nobis, harum itaque.
				          </p>
		      			</div>
	      			</div>
	      			<div className='w-1/3 py-10 ml-10 grid grid-cols-3 gap-2'>
	      				<img src={objMethOne} alt="Objective and methodology One" className='col-start-2 col-end-4 justify-self-center self-center' />
	      				<img src={objMethTwo} alt="Objective and methodology Two" className='col-start-1 col-end-3 justify-self-center self-center' />
	      				<img src={objMethThree} alt="Objective and methodology Three" className='col-start-2 col-end-4 justify-self-center self-center' />
	      			</div>
      			</div>
      		</div>
      		<div className='flex flex-col my-5'>
		      	<div className='w-6/12 mx-auto text-center'>
	      			<h3 className='text-xl text-btnOrange font-bold'>Strength of the Project</h3>
	            <p className='py-3'>
	              Lorem ipsum dolor sit amet consectetur.
	              Nulla odit accusamus officia illum nisi unde dolores.
	            </p>
	          </div>
      			<div className='flex flex-row'>
	      			<p className='py-3 text-justify px-3'>
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.

		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		          </p>
	      			<p className='py-3 text-justify px-3'>
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.

		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		      			Lorem, ipsum dolor sit amet consectetur adipisicing,
		          	elit. Veritatis quidem nemo, accusamus aspernatur
		          	velit molestiae vel repudiandae iure ad aperiam,
		          	nobis, harum itaque.
		          </p>
      			</div>
      		</div>
      	</div>
      </section>
      <section className="bg-gray-200 text-black w-screen mt-1 px-14 py-10">
      	<div className='flex flex-col'>
	      	<div className='w-6/12 mx-auto text-center'>
      			<h3 className='text-xl text-btnOrange font-bold'>Team</h3>
            <p className='py-3'>
              Lorem ipsum dolor sit amet consectetur.
              Nulla odit accusamus officia illum nisi unde dolores.
            </p>
          </div>
      		<div className='grid grid-cols-4 gap-5'>
	      		<img src={teamOne} alt="Team One" />
	      		<img src={teamTwo} alt="Team Two" />
	      		<img src={teamThree} alt="Team Three" />
	      		<img src={teamFour} alt="Team Four" />
      		</div>
      	</div>
      </section>
      <section className="bg-white text-black w-screen mt-1 px-14 py-10">
      	<div className='flex flex-col'>
	      	<div className='w-6/12 mx-auto text-center'>
      			<h3 className='text-xl text-btnOrange font-bold'>Gallery</h3>
            <p className='py-3'>
              Lorem ipsum dolor sit amet consectetur.
              Nulla odit accusamus officia illum nisi unde dolores.
            </p>
          </div>
      		<div className='grid grid-cols-4 grid-cols-4 gap-5'>
	      		<img src={galleryOne} alt="Gallery One" className='row-start-1 row-end-5 col-start-1 col-end-3' />
	      		<img src={galleryTwo} alt="Gallery Two" className='row-start-1 row-end-3 col-start-3 col-end-5' />
	      		<img src={galleryThree} alt="Gallery Three" className='row-start-3 row-end-5 col-start-3 col-end-4' />
	      		<img src={galleryFour} alt="Gallery Four" className='row-start-3 row-end-5 col-start-4 col-end-5' />
      			{/* <div className='row-start-1 row-end-3 col-start-2 self-center'> */}
      		</div>
      	</div>
      </section>
      <section className="bg-gray-200 text-black w-screen mt-1 px-14 py-10">
      	<div className='flex flex-col'>
	      	<div className='w-6/12 mx-auto text-center'>
      			<h3 className='text-xl text-btnOrange font-bold'>Explore Similar Projects</h3>
            <p className='py-3'>
              Lorem ipsum dolor sit amet consectetur.
              Nulla odit accusamus officia illum nisi unde dolores.
            </p>
          </div>
      		<div className="flex grid grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-5">
	          {
	            empty.fill(0, 0).map((e, i)=>{
	              return (
	                <div className="bg-white" style={{ height: "24rem" }} key={i}>
	                <ProjectSmall
	                  time={time}
	                  userOne={user}
	                  client={client}
	                  projectDetail={project}
	                  dollar={dollar}/>
	                </div>
	              );
	            })
	          }
      		</div>
      	</div>
      </section>
		</>
	);
}
export default ProjectDetails;