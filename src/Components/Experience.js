import React from 'react'
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import rmgd from '../images/rmgd.jpg';
import { Card } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    return (
        <div className="hero" data-theme="light">
            <div
                className="hero-content flex-col lg:flex-row-reverse justify-center my-24 gap-32"
                ref={ref}
            >
                <div className="lg:ml-4 lg:mr-12 lg:mt-8 lg:text-left lg:w-2/5 sm:w-3/4 sm:text-center text-center">
                    <motion.h1
                        // initial={{ x: '-100%' }}
                        initial={{ opacity: 0 }}
                        // animate={inView ? { x: '0' } : {}}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="text-5xl font-bold"
                    >
                        Experience
                    </motion.h1>

                </div>
                <motion.div
                    className="mt-8"
                    // initial={{ x: '250%' }}
                    initial={{ opacity: 0 }}
                    // animate={inView ? { x: '0%' } : {}}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    <Card
                        imgAlt="rmgd"
                        imgSrc={rmgd}
                        className=' p-3'
                    >
                        <h5 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Retro Mobile Game Database
                            </p>
                            <a className='btn btn-xs text-base btn-outline  border-0 custom-btn' href='http://database.mglab.chass.ncsu.edu/' target="_blank"><FontAwesomeIcon icon={faLink} /></a>
                        </h5>
                        <h1>
                            <div className='flex items-center gap-6'>
                                <p className='text-xl'>
                                    Software Developer
                                </p>
                                <p>
                                    Aug 2023 - Present
                                </p>
                            </div>

                        </h1>
                        <span className="font-normal text-gray-700 dark:text-gray-400">
                            <ul className=' list-disc ml-4'>
                                <li>
                                    Collaborated with other members in the frontend to implement and enhance features of the website.
                                </li>
                                <li>
                                    Identified bugs and resolved existing bugs to ensure user experience and interactions are working as intended
                                </li>
                            </ul>
                        </span>
                    </Card>
                </motion.div>
            </div>
        </div >
    )
}

export default Experience