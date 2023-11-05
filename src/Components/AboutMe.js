import React from 'react';
import aboutMe from '../images/computer.jpg';
import { motion } from 'framer-motion';
import Slider from '../Slider';
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <div className="hero" data-theme="light">
            <div
                className="hero-content flex-col lg:flex-row-reverse justify-center my-24"
                ref={ref}
            >
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
                    <img src={aboutMe} className="max-w-sm rounded-lg" />
                </motion.div>

                <div className="lg:ml-4 lg:mr-12 lg:mt-8 lg:text-left lg:w-2/5 sm:w-3/4 sm:text-center text-center">
                    <motion.h1
                        // initial={{ x: '-100%' }}
                        initial={{ opacity: 0 }}
                        // animate={inView ? { x: '0' } : {}}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="text-5xl font-bold"
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="my-8"
                        // initial={{ x: '-150%' }}
                        initial={{ opacity: 0 }}
                        // animate={inView ? { x: '0' } : {}}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                    >
                        Hello! I'm a driven software developer studying at North
                        Carolina State University on my way to earning a
                        Bachelor's in Computer Science. Through projects and
                        coursework, I am experienced with a diverse set of
                        technologies, including Java, C, C++, HTML, CSS, and
                        several JavaScript frameworks. I enjoy solving problems
                        and am always looking for real-world challenges to apply
                        my academic knowledge, and I am eager to collaborate on
                        innovative solutions.
                    </motion.p>
                    <Slider />
                    {/* <div className="my-2" style={{marginRight: '12.5rem'}}>
                        <SliderTest />   
                    </div> */}
                </div>
            </div>
        </div>
    );
}
