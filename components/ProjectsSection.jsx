import React, { useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import { motion, useInView } from 'framer-motion';

const projectsData = [{
    id: 1,
    title: 'Monash Client Procurement System',
    description: 'Project description',
    image: '/images/travelPlanner1.png',
    link: '/'
},
{
    id: 2,
    title: 'Travel agency website',
    description: 'Project description',
    image: '/images/travelPlanner1.png',
    link: '/travelplanner'
}];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id='projects'>
            <div>
                <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
                    My Projects
                </h2>
                <p className='text-white text-center mb-8 md:mb-12'>Some description here</p>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                    {projectsData.map((project, index) =>
                        <motion.li
                        key={index} 
                        variants={cardVariants} 
                        initial='initial' 
                        animate={isInView ? 'animate' : 'inital'} 
                        transition={{ duration: 0.5, delay: index * 0.2 }}>
                            <ProjectsCard
                                key={project.id}
                                img={project.image}
                                title={project.title}
                                desc={project.description}
                                link={project.link}
                            />
                        </motion.li>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default ProjectsSection