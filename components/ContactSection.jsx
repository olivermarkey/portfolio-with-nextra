import React from 'react'
import Link from 'next/link'

const ContactSection = () => {
    return (
        <section>
            <div className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        {" "}
                        I&apos;m currently looking for new opportunities. Please feel
                        free to reach out to me via linkedin and I'll happily find
                        the time for a conversation!
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <Link target='_blank' href='https://www.linkedin.com/in/oliver-markey-9a462a247/'>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-slate-600 text-white font-bold'>LinkedIn</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection