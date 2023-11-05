import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import {-8Scroll } from '@splidejs/splide-extension-8-scroll'
import "@splidejs/splide/dist/css/splide.min.css";
import icon1 from "../images/Group 35.png";
import icon2 from "../images/Group 57.png";
import icon3 from "../images/Group 68.png";
import icon4 from "../images/Group 70.png";
import icon5 from "../images/Group 93.png";
import icon6 from "../images/html5.png";
import css from "../images/css3.png";

export function SliderTest() {
    return (
        <Splide
            options={{
                type: "loop",
                drag: "free",
                perPage: 7,
                arrows: "false",
                pagination: "false",
            }}
            extensions={{}}
        >
            <SplideSlide>
                <img className="h-8" src={icon1} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className="h-8" src={icon2} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className=" h-8" src={icon3} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className=" h-8" src={icon4} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className=" h-8" src={icon5} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className=" h-8" src={icon6} alt="img" />
            </SplideSlide>

            <SplideSlide>
                <img className=" h-8" src={css} alt="img" />
            </SplideSlide>
        </Splide>
    );
}
export default SliderTest;
