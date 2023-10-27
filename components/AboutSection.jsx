import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className='text-white scroll-smooth' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 justify-center'>
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
                        If you are here you probably already have my resume or at the very least have visited my LinkedIn.
                        The purpose of this website is not to repeat my qualifications to you but more so to show you what
                        I am capable of, and more so how I can help you. I am super interested in both software development 
                        and cyber security, and would love to get a real world taste of either. To demonstrate my cyber 
                        security, particularly penetration testing skills, check out the CTFs page on the nav bar! 
                        <br/><br/>
                        Thanks for taking the time to check out this website, I hope I hear from you soon!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection