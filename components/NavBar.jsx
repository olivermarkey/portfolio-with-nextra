"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MobileMenu from './MobileMenu';

const navLinks = [
    {
        title: "About",
        href: "/#about"
    },
    {
        title: "Projects",
        href: "/#projects"
    },
    {
        title: "CTFs",
        href: "/docs"
    }
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-10 w-full backdrop-blur flex-none transition-colors duration-500 lg:border-b  border-slate-50/[0.06]  supports-backdrop-blur:bg-white/60 bg-transparent'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4 mr-4'>
                <Link href={"/"} className='text-2xl md:text-3xl text-white font-semibold'>Olly</Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }

                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.href} title={link.title} />

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MobileMenu links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar