import "./Home.css";
import HeaderImage from "../assets/images/headerImage.png";
import managementIcon from "../assets/icons/management.svg";
import learningIcon from "../assets/icons/learning.svg";
import marketingIcon from "../assets/icons/marketing.svg";
import programmingIcon from "../assets/icons/programming.svg";

import perxels from "../assets/icons/perxels.svg";
import udemy from "../assets/icons/udemy.svg";
import google from "../assets/icons/google.svg";
import uplers from "../assets/icons/uplers.svg";

function Home() {
    return(
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
                    <li style={{color: '#FF5C00'}}>
                        <a href="/">Login</a>
                    </li>
                    <li style={{backgroundColor: '#FF5C00'}} className="px-6 py-1 rounded-md text-white">
                        <a href="/">Enroll now</a>
                    </li>
                </ul>
            </nav>
            <section className="w-screen mt-1 px-14 header h-screen">
                <div className="w-full h-full flex">
                    <div className="header__left  py-16">
                        <div className="header__top">
                            <h1 className="text-2xl">
                                Empower your <span style={{color: '#FF5C00'}}>Business</span>, Skill,
                                Education and Project with <span style={{color: '#FF5C00'}}>professionals</span>
                            </h1>
                            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu vitae sit congue venenatis hac viverra imperdiet viverra volutpat.</p>
                        </div>
                        <div className="header__bottom space-x-4">
                            <button 
                                style={{backgroundColor: '#FF5C00'}} 
                                className="text-white rounded-full px-6 py-2">Enroll now</button>
                            <button style={{border: '1px solid #FF5C00'}} className="rounded-full px-6 py-2">Contact Us</button>
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
                        <img src={HeaderImage} alt="Header background image"/>
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
                    <h2 style={{color: '#FF5C00'}}>Our services</h2>
                    <h4 className="font-bold">What are the best offers we have for you?</h4>
                    <p className="font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat interdum dolor enim justo.</p>
                </div>
                <div className="p-1" style={{backgroundColor: '#FEE9C1'}}>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, 
                                    augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bib
                                    endum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                                </p>
                                <button className="text-white py-2 rounded-full" style={{backgroundColor: '#FF5C00', width: '80%'}}>Learn more</button>
                            </div>
                            <div className="service text-center">
                                <h3 className="font-bold">Email Marketing</h3>
                                <p className="my-8 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, 
                                    augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bib
                                    endum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                                </p>
                                <button className="text-white py-2 rounded-full" style={{backgroundColor: '#FF5C00', width: '80%'}}>Learn more</button>
                            </div>
                            <div className="service text-center">
                                <h3 className="font-bold">Paid Media Advertising</h3>
                                <p className="my-8 text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra neque, 
                                    augue morbi ullamcorper enim urna nam pharetra. Euismod vivamus sit bib
                                    endum accumsan, non at. Vitae vitae leo imperdiet tristique fermentum.
                                </p>
                                <button className="text-white py-2 rounded-full" style={{backgroundColor: '#FF5C00', width: '80%'}}>Learn more</button>
                            </div>
                        </div>
                    </div>        
                </div>
            </section>
        </>
    )
}

export default Home;