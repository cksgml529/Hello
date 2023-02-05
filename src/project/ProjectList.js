import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import Pj1 from './Pj1';
import Pj2 from "./Pj2";
import Pj3 from "./Pj3";
import Pj4 from "./Pj4";
import Pj5 from "./Pj5";

import "swiper/css";
function ProjectList() {

    return (
        <div>
            <Swiper className="mySwiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                >
        <SwiperSlide><Pj1/></SwiperSlide>
        <SwiperSlide><Pj2/></SwiperSlide>
        <SwiperSlide><Pj3/></SwiperSlide>
        <SwiperSlide><Pj4/></SwiperSlide>
        <SwiperSlide><Pj5/></SwiperSlide>

      </Swiper>
        </div>
    );
}

export default ProjectList;