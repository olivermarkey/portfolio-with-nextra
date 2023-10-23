import React from 'react';
import Link from 'next/link';

const ProjectsCard = ({ img, title, desc, link }) => {
    return (
        <div>
            <div className='h-52 md:72 rounded-t-xl relative group border border-[#ADB7BE]'
                style={{ background: `url(${img})`, backgroundSize: 'cover' }}>
                <div className='hidden justify-center items-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <div className='text-xl text-bold'>
                        <Link className='h-14 w-14 border-2 relative rounded-full text-[#ADB7BE] border-[#ADB7BE] hover:border-white cursor-pointer p-3 hover:text-white' href={link}>
                            View Project
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-white rounded-b-xl bg-slate-700 px-4 py-2'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{desc}</p>
            </div>
        </div>
    )
}

export default ProjectsCard