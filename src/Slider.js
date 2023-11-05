import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import icon1 from "./images/Group 35.png";
import icon2 from "./images/Group 57.png";
import icon3 from "./images/Group 68.png";
import icon4 from "./images/Group 70.png";
import icon5 from "./images/Group 93.png";
import icon6 from "./images/html5.png";
import css from "./images/css3.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    // transition: {ease: "easeInOut"}
};

function IconComponent({ src, alt, delay }) {
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: inView ? delay : 1, duration: 2 }} // Apply delay only when in view
        >
            <div className="avatar" style={{ objectFit: "fill" }}>
                <div className="w-8 h-8 rounded">
                    <img src={src} alt={alt} />
                </div>
            </div>
        </motion.div>
    );
}

export default function Slider({ imageUrl }) {
    return (
        <ul className="flex space-x-8 flex-wrap sm:justify-center lg:justify-normal custom-List-Icon">
            <IconComponent
                src={icon5}
                alt="Tailwind-CSS-Avatar-component"
                delay={0.5}
            />
            <IconComponent
                src={icon1}
                alt="Tailwind-CSS-Avatar-component"
                delay={0.65}
            />
            <IconComponent
                src={icon3}
                alt="Tailwind-CSS-Avatar-component"
                delay={0.75}
            />
            <IconComponent
                src={icon6}
                alt="Tailwind-CSS-Avatar-component"
                delay={0.85}
            />
            <IconComponent
                src={css}
                alt="Tailwind-CSS-Avatar-component"
                delay={0.95}
            />
            <IconComponent
                src={icon4}
                alt="Tailwind-CSS-Avatar-component"
                delay={1.05}
            />
            <IconComponent
                src={icon2}
                alt="Tailwind-CSS-Avatar-component"
                delay={1.15}
            />
        </ul>
    );
}

//   export  function Slider({imageUrl}){
//     return (
//         <ul className='flex space-x-8 flex-wrap'>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon5} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon1} alt="Tailwind-CSS-Avatar-component"/>
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon3} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon6} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={css} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon4} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>
//             <li>
//                 <div className="avatar" style={{objectFit: 'fill'}}>
//                     <div className="w-8 h-8 rounded">
//                         <img src={icon2} alt="Tailwind-CSS-Avatar-component" />
//                     </div>
//                 </div>
//             </li>

//         </ul>

//     )
//   }
//   export default Slider
