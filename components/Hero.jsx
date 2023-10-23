"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="lg:py-16">
            {/* Gradients can also be setup for titles and buttons*/}
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span> Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        {/* This should be changed so that the buttons are not moved */}
                        <TypeAnimation
                            sequence={[
                                'Olly',
                                1000,
                                'Cyber Security',
                                1000,
                                'Web Development',
                                1000,
                                'excited to meet you.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        This is to be replaced once I know what I have to write here
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Wa Wa Wee Wa</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-600 text-white border border-white mt-3'>Button 2</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className='col-span-5 place-self-center mt-5 lg:mt-0'>
                    <div className='rounded-full bg-slate-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/me-2.png'
                            alt='Hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Hero