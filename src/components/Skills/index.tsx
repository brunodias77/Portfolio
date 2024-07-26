import React from 'react';
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiDotnet, SiTailwindcss, SiCsharp, SiPrisma, SiJest, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const Skills = () => {
    return (
        <section className=" bg-background_primary px-4 py-14">
            <div className="container mx-auto flex flex-col items-center justify-center ">
                <h2 className="text-3xl text-center text-white font-black">My Skills</h2>
                <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded"></hr>
                <span className="text-text_gray_100 mt-2"> Technologies I’ve been working with recently</span>
                <div className="flex items-center opacity-20 mt-10 gap-6 ">
                    <IoLogoHtml5 size={60} color="#97979F" />
                    <IoLogoCss3 size={60} color="#97979F" />
                    <IoLogoJavascript size={60} color="#97979F" />
                    <IoLogoReact size={60} color="#97979F" />
                    <BsFillBootstrapFill size={60} color="#97979F" />
                    <SiTypescript size={60} color="#97979f" />
                    <SiCsharp size={60} color="#97979F" />
                    <SiDotnet size={60} color="#97979F" />
                    <IoLogoNodejs size={60} color="#97979F" />
                    <SiPrisma size={60} color="#97979F" />
                    <TbBrandNextjs size={60} color="#97979F" />
                    <SiTailwindcss size={60} color="#97979F" />
                    <SiJest size={60} color="#97979f" />
                    <SiJest size={60} color="#97979f" />
                    <SiJest size={60} color="#97979f" />
                </div>
            </div>
        </section>
    );
};

export default Skills;