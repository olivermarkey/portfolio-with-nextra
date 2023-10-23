import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-center' id='about'>
                <div className='block relative mb-4 w-auto h-auto'>
                    <Image
                        src='/images/mirrors.jpg'
                        alt='About image'
                        className='object-none w-80 h-80 rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-4'>Hi there!</h2>
                    <p className='text-base md:text-lg'>
                        This is my full stack web developer with qa passion for creating websites about me text.
                        I am writing stuff here that will be replaced later so I can see what it looks like on
                        the page and also check that it is respondsive for mobile. I dont know how much I need
                        to write but I need to make sure to replace any apostrophes before I push to git so I
                        do not have any errors with eslint.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection