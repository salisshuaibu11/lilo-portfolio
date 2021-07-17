import React from 'react';

import perxels from "../assets/icons/perxels.svg";
import udemy from "../assets/icons/udemy.svg";
import google from "../assets/icons/google.svg";
import uplers from "../assets/icons/uplers.svg";

const Companies = ( props )=>{
	return (
    <>
      <img src={perxels} alt="pexels" />
      <img src={udemy} alt="udemy" />
      <img src={google} alt="google" />
      <img src={uplers} alt="uplers" />
    </>
  );
}
export default Companies;