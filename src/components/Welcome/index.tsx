import React from 'react';
import Image from "next/image";
import FotoBruno from "../../../public/fotoHome.svg";

const Welcome = () => {
    return (
        <section id='' className='bg-background_primary px-4 py-10'>
            <div className='container mx-auto'>
                <div className="flex flex-col items-center justify-between lg:flex-row bg-green-700">
                    <div id="welcome" className="flex flex-col ml-3 w-4/12 bg-red-500">
                        <span className="text-white text-base">Olá, eu sou o Bruno Dias 👋🏻</span>
                        <span className="text-5xl lg:text-7xl text-white font-black mt-3"><span className=" text-green_400">Full</span> Stack</span>
                        <span className="text-5xl lg:text-7xl text-white font-black ">Developer</span>
                        <span className="text-sm  text-text_gray_100 mt-4 leading-7">Sou um desenvolvedor brasileiro fascinado por tecnologia, apaixonado por criar sites e aplicações web inovadoras.</span>
                        <div id="buttons" className="">
                            <a href="currículoBrunoDias.pdf" download>
                                <button className="bg-green_400 hover:brightness-75	rounded-md px-1 py-2 md:px-5 mt-5 text-black ">Download cv</button>
                            </a>
                            <button className="border rounded-md px-1 md:px-5 py-2 mt-5 text-white ml-5">Contato</button>
                        </div>
                    </div>
                    <div className="w-6/12 lg:w-5/12 flex-shrink-0 flex items-center justify-center bg-blue-700 ">
                        <Image src={FotoBruno} alt="Logo Bruno Dias" className="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;