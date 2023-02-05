import { Swiper, SwiperSlide } from "swiper/react";
import {FaHome} from 'react-icons/fa';
import { BsArrowRight,BsCheck2All } from "react-icons/bs";
import { Link } from 'react-router-dom';

import pj1t from '../assets/images/image/tablet_frame.png';
import pj1 from '../assets/images/image/pj1.png';
import arrow from '../assets/images/icon/swipe-arrow.png';
import hand from '../assets/images/icon/swipe-hand.png';

import "swiper/css";
import '../style/pj.scss';
function Pj1() {

    return (
        <div>
            <Swiper className="mySwiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                >
        <SwiperSlide>
            <div className="pjwrapper">
            <article className='pj'>
            <div className='pjBox'>
            <div className='pjdes'>

            <h3>project</h3>
            <h2>프로젝트명</h2>
            <p>프로젝트 설명</p>

            <div className='link'>
            <Link to="/"><span><FaHome style={{paddingRight: 10}}/>go back home</span></Link>
            <Link to='https://cksgml529.github.io/react_push/'><span><BsArrowRight style={{paddingRight: 10}}/>go to webpage</span></Link>
            </div>
            </div>
            <div className='showpj'>
                <img src={pj1t} alert="타블렛 프레임" className='frame'/>
                <img src ={pj1} alert="프로젝트1" className='pj'/>
            </div>
            </div>
            
            <div className='slideicon'>
                <div className='imgbox'>
                <img src={arrow} alt='arrow' className='arrow'/>  
                <img src={hand} alt='hand' className='hand'/>
                </div>
                <p>next project</p>
            </div>

            </article>
            <article className="problem">
                <h3>Problem & Solution</h3>
                <h4><BsCheck2All/>Drop Menu 항목이 효과를 준 li항목 밑을 hover해도 출력됨</h4>

            </article>
            </div>
            </SwiperSlide>
            <SwiperSlide><Link to="./pj2"></Link></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>

      </Swiper>
           

        </div>
    );
}

export default Pj1;