"use client";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Elemento com ID ${href.substring(1)} não encontrado.`);
            }
        }
    };

    return (
        <Link href={href} className="" onClick={handleClick}>
            {title}
        </Link>
    );
};

export default NavLink;