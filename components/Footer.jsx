import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-slate-600 border-l-transparent border-r-transparent border-b-transparent text-white mt-20">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="container p-12 flex justify-between">
        <Link href={"/"} className='text-xl md:text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500'>
          OLLY
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
