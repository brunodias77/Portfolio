"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Container from '../container';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import NavLink from './nav-link';

const navLinks = [
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

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 90) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }

        // Cleanup the event listener on component unmount
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    return (
        <header className={`fixed top-0 w-full bg-background_primary px-4 py-10 ${active ? 'bg-background_primary/70 backdrop-blur-sm' : ''}`} >
            <div className='container mx-auto flex items-center justify-between'>
                <div className="text-white flex-1">
                    <span className="font-bold text-xl">Bruno</span>
                    <span className="text-green_400 font-bold text-sm">Dias</span>
                </div>
                <nav className='flex-1'>
                    <ul className='flex align-center justify-center text-white font-bold gap-8'>
                        {navLinks.map((link) => (
                            <li key={link.title} className="hover:text-green_400">
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex-1 flex justify-end">
                    <ul className="flex align-center justify-between text-text_gray_100 text-xs font-light gap-4">
                        <li><a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={20} color="white" /> <span className="ml-1">Github</span></a></li>
                        <li><a href="" className="flex items-center justify-center hover:text-green_400"><AiFillLinkedin size={20} color="white" /> <span className="ml-1">Linkedin</span></a></li>
                        <li ><a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center hover:text-green_400"><AiFillInstagram size={20} color="white" /> <span className="ml-1">Instagram</span></a></li>
                    </ul>
                </div>
            </div>
        </header >
    );
};

export default Header;