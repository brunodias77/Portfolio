"use client"
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import D from "../../../public/icone-d.svg";
import Image from 'next/image';

const Header = () => {

    const [state, setState] = useState(false);

    const navigation = [
        {
            title: "Home",
            path: "#",
        },
        {
            title: "About",
            path: "#about",
        },
        {
            title: "Work",
            path: "#work",
        },
        {
            title: "Projects",
            path: "#project",
        },
        {
            title: "Contact",
            path: "#",
        },
    ];

    return (
        <nav className="bg-background_secondary w-full md:static">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div className="text-white flex items-center justify-center gap-3">
                        <Image
                            src={D}
                            alt="Logo Bruno Dias"
                            height={23}
                            width={23}
                            className=""
                        />
                        <div className=''>
                            <span className="font-bold text-xl">Bruno</span>
                            <span className="text-green_400 font-bold text-sm">Dias</span>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'flex' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:text-green_400">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <ul className="flex align-center justify-between text-text_gray_100 text-xs font-light gap-2">
                        <li><a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={20} color="white" /> <span className="ml-1">Github</span></a></li>
                        <li><a href="" className="flex items-center justify-center hover:text-green_400"><AiFillLinkedin size={20} color="white" /> <span className="ml-1">Linkedin</span></a></li>
                        <li><a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center hover:text-green_400"><AiFillInstagram size={20} color="white" /> <span className="ml-1">Instagram</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
