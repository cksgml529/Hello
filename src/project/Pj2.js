import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaHome } from "react-icons/fa";
import { BsArrowRight, BsCheck2All } from "react-icons/bs";
import { FcOpenedFolder } from "react-icons/fc";
import { DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom";

import pj1t from "../assets/images/image/tablet_frame.png";
import pj1 from "../assets/images/image/pj1.png";
import react from "../assets/images/icon/react.png";
import scss from "../assets/images/icon/scss.png";
import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "../style/pj2.scss";

function Pj2() {
  const { top } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return (
    <div className="pj2">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article className="head">
            <div className="desBox">
              <h3>work</h3>
              <div className="title">
                <h2>Hi, Hello 포트폴리오</h2>
                <img src={react} alt="react" />
                <img src={scss} alt="css" />
              </div>
              <div className="txt">
                <p>
                  <span style={{ fontWeight: 500 }}>React-router-dom</span>을
                  활용한 컴포넌트 간 전환 방식의 이해
                </p>
                <p>
                  기능에 맞는
                  <span style={{ fontWeight: 500, marginLeft: 5 }}>Hook</span>
                  사용으로 코드의 안정성 상승
                </p>
              </div>
              <div className="link">
                <Link to="/">
                  <div className="linkBox">
                    <span>
                      <FaHome style={{ paddingRight: 10 }} />
                      go back home
                    </span>
                  </div>
                </Link>
                <Link to="https://cksgml529.github.io/react_push/">
                  <div className="linkBox">
                    <span>
                      <BsArrowRight style={{ paddingRight: 10 }} />
                      go to webpage
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pjBox">
              <img src={pj1t} alert="타블렛 프레임" className="frame" />
              <img src={pj1} alert="프로젝트1" className="pj1" />
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="dir">
            <h3>디렉토리</h3>
            <div className="category">
              <div className="oneDep">
                <span>
                  <FcOpenedFolder />
                  hello
                </span>
              </div>
              <div className="twoDep">
                <span>
                  <FcOpenedFolder />
                  build
                </span>
                <span>
                  <FcOpenedFolder />
                  node_modules
                </span>
                <span>
                  <FcOpenedFolder />
                  public
                </span>
                <div className="src">
                  <div>
                    <span>
                      <FcOpenedFolder />
                      src
                    </span>
                  </div>
                  <div>
                    <div className="threeDep">
                      <div>
                        <span>
                          <FcOpenedFolder />
                          assets
                        </span>
                      </div>
                      <div className="fourDep">
                        <span>
                          <FcOpenedFolder />
                          fonts
                        </span>
                        <span>
                          <FcOpenedFolder />
                          images
                        </span>
                        <span>
                          <FcOpenedFolder />
                          style
                        </span>
                      </div>
                    </div>
                    <div className="threeDep">
                      <div>
                        <span>
                          <FcOpenedFolder />
                          components
                        </span>
                      </div>
                      <div className="fourDep">
                        <span>
                          <DiJavascript1 />
                          Last
                        </span>
                        <span>
                          <DiJavascript1 />
                          MainHello
                        </span>
                        <span>
                          <DiJavascript1 />
                          Skill
                        </span>
                        <span>
                          <DiJavascript1 />
                          SkillList
                        </span>
                        <span>
                          <DiJavascript1 />
                          WhatIDo
                        </span>
                        <span>
                          <DiJavascript1 />
                          Work
                        </span>
                      </div>
                    </div>
                    <div className="threeDep">
                      <div>
                        <span>
                          <FcOpenedFolder />
                          layout
                        </span>
                      </div>
                      <div className="fourDep">
                        <span>
                          <DiJavascript1 />
                          Contact
                        </span>
                        <span>
                          <DiJavascript1 />
                          Header
                        </span>
                        <span>
                          <DiJavascript1 />
                          Main
                        </span>
                      </div>
                    </div>
                    <div className="threeDep">
                      <div>
                        <span>
                          <FcOpenedFolder />
                          project
                        </span>
                      </div>
                      <div className="fourDep">
                        <span>
                          <DiJavascript1 />
                          Pj1
                        </span>
                        <span>
                          <DiJavascript1 />
                          Pj2
                        </span>
                        <span>
                          <DiJavascript1 />
                          Pj3
                        </span>
                        <span>
                          <DiJavascript1 />
                          Pj4
                        </span>
                        <span>
                          <DiJavascript1 />
                          Pj5
                        </span>
                      </div>
                    </div>
                    <span>
                      <FcOpenedFolder />
                      style
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article></article>
        </SwiperSlide>
        <SwiperSlide>
          <article></article>
        </SwiperSlide>
        <SwiperSlide>
          <article></article>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Pj2;
