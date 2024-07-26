import React from 'react';
import LogoCasaSonho from "../../../public/logoCasaSonho.svg";
import Image from "next/image";

const Works = () => {
    return (
        <section className="bg-background_primary">
            <div className="container mx-auto flex flex-col items-center gap-5 p-7">
                <div>
                    <h2 className="text-3xl text-center text-white font-black">Experiências</h2>
                    <hr className="w-6 h-1 mx-auto my-4 bg-green_400 border-0 rounded-lg"></hr>
                </div>
                <div className="container mx-auto flex flex-col items-center rounded py-4 px-8 mt-2 justify-center md:gap-10  ">
                    <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-10 md:gap-1">
                        <Image src={LogoCasaSonho} alt="Logo da empresa casa e sonho ltda" className='rounded' height={150} width={150} />
                        <span className="text-white font-bold text-xl">Programador Front-End Júnior - Casa e Sonho</span>
                        <span className="text-green_400">Jan 2022 - Dec 2023</span>
                    </div>
                    <p className="text-text_gray_100 text-sm text-justify"> Como programador front-end júnior na Casa e Sonho, desempenhei um papel vital em projetos web, trabalhando colaborativamente em equipes para desenvolver soluções inovadoras. Apliquei conhecimentos em várias linguagens de programação, incluindo HTML, CSS e JavaScript, contribuindo para todo o ciclo de vida dos projetos. Além disso, assumi a responsabilidade de manter sites e aplicativos, aprimorando minhas habilidades de resolução de problemas e garantindo a funcionalidade contínua dos sistemas. Minha experiência não apenas solidificou minhas habilidades técnicas, mas também desenvolveu minha capacidade de trabalhar de forma proativa em ambientes dinâmicos, preparando-me para desafios futuros.</p>
                </div>
            </div>
        </section>
    );
};

export default Works;
