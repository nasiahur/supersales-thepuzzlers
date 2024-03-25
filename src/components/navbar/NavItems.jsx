"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TryNow } from "./TryNow";
import { OutsideClick } from "../utils/OutsideClick";

export const NavItems = () => {
    const pathName = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const boxOutsideClick = OutsideClick(navbarRef);

    const links = [
        { title: "Home", path: "/"},
        { title: "Features", path: "/features"},
        { title: "About", path: "/about"},
        { title: "Pricing", path: "/pricing"},
        { title: "Contact", path: "/contact"}
    ];

    useEffect(() => {
        if (boxOutsideClick) {
            setIsOpen(false);
        }
    }, [boxOutsideClick]);

    useEffect(() => {
        const el = document.querySelector('.btn-navbar-close')
        if(isOpen){
           el.classList.add('move-left');
            el.innerHTML = "<"
            setTimeout(() => {
                el.classList.remove('move-left');
                el.classList.add('vibrating');
                el.innerHTML = "x"
            }, 1000); 
        }else{
            el.classList.remove('vibrating');
            el.classList.add('move-right');
            el.innerHTML = ">"
            setTimeout(() => {
                el.classList.remove('move-right');
                el.innerHTML = "x"
            }, 500); 
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathName]);

    return (
        <>
            <div className="block lg:hidden " ref={navbarRef} >
                <button className="btn-icon" onClick={() => setIsOpen((prev) => !prev)}>
                    <Image className="" src="/images/menu.svg" width={40} height={40} />
                </button>
                <div className={`mobile-navbar ${isOpen ? 'open' : ''}`}>
                    <div className="flex flex-col items-center justify-between gap-1">
                    {links.map((link => (
                        <Link className={"btn btn-navbar " + (pathName === link.path && "active")}
                            href={link.path} key={link.title}>{link.title}</Link>
                    )))}
                    </div>
                    <div className="mt-5">
                        <TryNow />
                    </div>
                    <button onClick={()=>setIsOpen(false)} type="button" className="btn btn-navbar-close"></button>
                </div>
            </div>
            <div className="navbar">
                {links.map((link => (
                    <Link className={"btn btn-navbar " + (pathName === link.path && "active")}
                        href={link.path} key={link.title}>{link.title}</Link>
                )))}
            </div>
        </>
    )
}