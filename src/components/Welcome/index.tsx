import React from 'react';
import Image from "next/image";
import FotoBruno from "../../../public/fotoHome.svg";
import { FaArrowDownLong } from "react-icons/fa6";

const Welcome = () => {
    return (
        <section id='' className='bg-background_secondary flex flex-col items-center justify-around w-full  md:static h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-4 max-w-screen-xl mx-auto  sm:px-6 md:px-8 '>
                <div id="welcome" className="md:col-span-2 flex flex-col items-center justify-center">
                    <span className="text-white text-base">Olá, eu sou o Bruno Dias 👋🏻</span>
                    <span className="text-5xl lg:text-7xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                    <span className="text-5xl lg:text-7xl text-white font-black ">Developer</span>
                    <span className=" text-xs md:text-sm text-text_gray_100 mt-4 leading-7 text-justify">Sou um desenvolvedor brasileiro fascinado por tecnologia, apaixonado por criar sites e aplicações web inovadoras.</span>
                    <div id="buttons" className="">
                        <a href="currículoBrunoDias.pdf" download>
                            <button className="bg-green_400 hover:brightness-75 rounded-md px-1 py-2 md:px-5 mt-5 text-black">Download cv</button>
                        </a>
                        <button className="border rounded-md px-1 md:px-5 py-2 mt-5 text-white ml-5">Contato</button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={FotoBruno} alt="Logo Bruno Dias" className="" />
                </div>
            </div>
            <div className='animate-bounce cursor-pointer'>
                <FaArrowDownLong color='#64F4AC' />
            </div>
        </section>
    );
};

export default Welcome;
