"use client"
import Image from "next/image";
import DtMoney from "../../../public/dt_money_01.png";
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoReact } from "react-icons/io5";
import { AiFillGithub } from 'react-icons/ai';
import { FiArrowRightCircle } from "react-icons/fi";

const technologies = [
    { icon: IoLogoReact, color: "#64F4AC" },
    { icon: SiTailwindcss, color: "#64F4AC" },
    { icon: SiTypescript, color: "#64F4AC" }
];

const links = [
    { text: "web site", icon: FiArrowRightCircle, color: "#64F4AC" },
    { text: "repositorio", icon: AiFillGithub, color: "#64F4AC" }
];

const CardProject = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-background_secondary w-full rounded-2xl keen-slider__slide">
            <div className="col-span-1 rounded-tl-2xl rounded-bl-2xl py-12 px-6 flex flex-col items-center justify-center gap-4">
                <h2 className="text-4xl text-white font-bold">DT Money</h2>
                <div className='flex items-center justify-center gap-3'>
                    {technologies.map((tech, index) => (
                        <tech.icon key={index} size={20} color={tech.color} />
                    ))}
                </div>
                <p className="text-text_gray_100 text-xs lg:text-sm text-justify">
                    DT Money é um controle de contas financeiro pessoal que cadastra contas de entrada e saída, totaliza em cards utilizando uma biblioteca de Fake API MirajeJS que utiliza o formato JSON para fazer os cadastros.
                </p>
                <div className="flex items-center justify-between w-full mt-10">
                    {links.map((link, index) => (
                        <div key={index} className="flex items-center justify-center gap-2 cursor-pointer py-1 px-2 rounded-md border border-green_400 hover:scale-105">
                            <span className="text-green_400">{link.text}</span>
                            <link.icon color={link.color} className="transition duration-300 ease-in-out" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-2 w-full h-full">
                <Image src={DtMoney} alt="foto de um projeto de bruno dias" className="rounded-tr-2xl rounded-br-2xl" />
            </div>
        </div>
    );
};

export default CardProject;
