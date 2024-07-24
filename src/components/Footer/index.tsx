import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className=" bg-background_primary px-4 py-10">
            <div className="container mx-auto text-xs">
                <div className="flex items-center justify-between">
                    <div className=" text-white"><span className="font-bold text-xl">Bruno</span><span className="text-green_400 font-bold">Dias</span> </div>
                    <span className="text-text_gray_100 hidden text-sm ">© @bdias.dev 2024 - Todos os direitos reservados.</span>
                    <span className="text-text_gray_100 hidden md:block ">© Bruno Dias (@bdias.dev)  2024 - Todos os direitos reservados.</span>
                    <nav className="flex items-center justify-center gap-2">
                        <a href=""><AiOutlineTwitter size={25} color="white" /></a>
                        <a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={25} color="white" /></a>
                        <a href="" className="flex items-center justify-center"><AiFillLinkedin size={25} color="white" /> </a>
                        <a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center"><AiFillInstagram size={25} color="white" /></a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;