import React from 'react';
import SectionTitle from '../section-title';
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiDotnet, SiTailwindcss, SiCsharp, SiPrisma, SiJest, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
    return (
        <section id='about' className='bg-background_primary w-full md:static'>
            <div className='items-center p-7 max-w-screen-xl mx-auto md:flex md:flex-col md:p-9'>
                <SectionTitle title='Sobre' />
                <div className="flex flex-col justify-center items-center  lg:items-start lg:flex-row gap-10">
                    <div className="md:w-1/2 flex flex-col items-center gap-4">
                        <h1 className="text-2xl font-bold mb-6 text-white">Conheça um pouco mais sobre mim!</h1>
                        <p className="text-text_gray_100 mt-2 text-base text-initial text-justify">
                            Olá! Eu sou o Bruno Dias, um entusiasta de tecnologia de 28 anos, formado em Sistemas de Informação pelo UNIVEM - Centro Universitário Eurípides de Marília. Minha paixão é criar experiências web envolventes e funcionais. No mundo do Front-End, utilizo o poderoso ReactJS para desenvolver interfaces interativas, enquanto no Back-End, utilizo todo o ecossistema C#/.NET, acredito no impacto transformador da tecnologia para tornar ideias realidade, e estou sempre em busca de desafios para impulsionar meu crescimento profissional. Vamos construir algo incrível juntos!
                        </p>
                    </div>

                    <div className="text-center md:w-1/2 flex flex-col items-center gap-4">
                        <h1 className="text-2xl font-bold mb-6 text-white">Minhas Habilidades</h1>
                        <div className="flex flex-wrap flex-row gap-3 justify-center md:justify-start">
                            <IoLogoHtml5 size={40} color="#97979F" />
                            <IoLogoCss3 size={40} color="#97979F" />
                            <IoLogoJavascript size={40} color="#97979F" />
                            <IoLogoReact size={40} color="#97979F" />
                            <BsFillBootstrapFill size={40} color="#97979F" />
                            <SiTypescript size={40} color="#97979f" />
                            <SiCsharp size={40} color="#97979F" />
                            <SiDotnet size={40} color="#97979F" />
                            <IoLogoNodejs size={40} color="#97979F" />
                            <SiPrisma size={40} color="#97979F" />
                            <TbBrandNextjs size={40} color="#97979F" />
                            <SiTailwindcss size={40} color="#97979F" />
                            <SiJest size={40} color="#97979f" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;