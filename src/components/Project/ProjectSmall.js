import React from 'react';
import { NavLink } from 'react-router-dom';

import './ProjectSmall.css';


const ProjectSmall = ( {time, userOne, client, projectDetail, dollar} )=>{
	return (
		<div className="project-small rounded-md h-full">
      <div className="project-small__header">
        <div className="project-small__header__top w-full flex items-start p-2 justify-between">
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

        <div className="project-small__header__bottom p-2 bg-gray-50 opacity-60">
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
      <div className="project-small__footer text-center py-3">
        <p className="mb-2">Lorem ipsum dolor sit amet!</p>
        <NavLink to='/project/1'>
          <button
            className="rounded-full text-white py-2"
            style={{ width: "80%", backgroundColor: "#FF5C00" }}
          >
            More Details
          </button>
        </NavLink>
      </div>
    </div>
	);
}
export default ProjectSmall;
