import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsCheck2All } from "react-icons/bs";
import { FcOpenedFolder } from "react-icons/fc";
import { DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom";

import pj1 from "../assets/images/image/pj1.png";
import react from "../assets/images/icon/react.png";
import scss from "../assets/images/icon/scss.png";
import pj1file from "../assets/images/image/pj1_file.png";

import "../style/pj.scss";

function Pj1() {
  const { top } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return (
    <div className="pj">
      <article className="first">
        <div className="desBox">
          <h3>work</h3>
          <div className="title">
            <h2>Hi, Hello 포트폴리오</h2>
            <img src={react} alt="react" />
            <img src={scss} alt="css" />
          </div>
          <div className="txt">
            <p>
              <span style={{ fontWeight: 500 }}>React-router-dom</span>을 활용한
              컴포넌트 간 전환 방식의 이해
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
          <img src={pj1} alert="프로젝트1" className="pj1" />
        </div>
      </article>
      <article className="contain">
        <div className="dir">
          <h3>디렉토리</h3>
          <img src={pj1file} alt="pj1 디렉토리" />
        </div>
        <div className="code">
          <h3>코딩컨벤션</h3>
          <div className="naming">
            <h4>이름규칙</h4>
            <ul>
              <li>
                component명: 파스칼 표기법으로 표기법으로
                <span>
                  mainbanner <BsArrowRight /> MainBanner
                </span>
              </li>
              <li>변수/함수명: 카멜표기법으로 표기</li>
              <li>
                객체 변수명: 소문자형 복수형 표기
                <span>
                  data <BsArrowRight /> datas
                </span>
              </li>

              <li>
                style명: 카멜표기법 사용
                <span>
                  mainbanner <BsArrowRight /> mainBanner
                </span>
              </li>
              <li>
                이미지/아이콘명: 이미지가 첨부될 components 첫번째
                단어_이미지특징.확장자명으로 소문자 기재
                <span>
                  WhatIDo components 내 자격증 아이콘 <BsArrowRight />
                  what_license.svg
                </span>
              </li>
            </ul>
          </div>
          {/* <div className="filing">
            <h4>파일규칙</h4>
            <ul>
              <li>
                폴더
                <ul>
                  <li>layout</li>
                  <li>components</li>
                  <li>project</li>
                  <li>assets</li>
                </ul>
              </li>
              <li>
                이미지
                <ul>
                  <li>icon</li>
                  <li>image</li>
                </ul>
              </li>
            </ul>
          </div> */}
          <div className="coding">
            <h4>코딩규칙</h4>
            <ul>
              <li>전역변수 or 지역변수</li>
              <li>긴 문자열 사용시 변수 대입 후 사용</li>
              <li>함수표현식</li>
              <li>객체/배열 선언, 리터럴 방식</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="tandp">
        <div className="tool">
          <h3>make use</h3>
          <p>Tool: GitHub / Visual Studio Code / Figma</p>
          <p>웹마크업: HTML5</p>
          <p>javascript / react</p>
          <p>style: scss</p>
        </div>

        <div className="page">
          <h3>페이지 구성</h3>
          <div className="pagetable">
            <h4>Header</h4>
            <h4>Main</h4>
            <ul>
              <li>MainHello</li>
              <li>Work</li>
              <li>WhatIDo</li>
              <li>Skill</li>
              <li>Last</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="problem">
        <h3>problem & resolve</h3>
        <ul>
          <li>
            <h4>나오는거는 잘하는데 전환할 때 끊기는 느낌이 드네?</h4>
            <div className="resolve">
              <p>
                배열값을 띄울 때 기존 출력된 값이 끊겨서 사라지고 새로운 배열값
                출력
              </p>
              <p>
                <span>
                  <BsCheck2All />
                </span>
              </p>
            </div>
          </li>
          <li>
            <h4>map()으로 처리한 data들의 offsetTop은 어떻게 구하지?</h4>
            <div className="resolve">
              <p>
                useRef을 기존방식대로 변수로 적용 시에는 배열 중 처음만 적용되서
                모든 배열 값의 offsetTop을 알지 못함
              </p>
              <p>
                <span>
                  <BsCheck2All />
                </span>
                useRef적용 할때 배열로 값을 줄 수 있도록 해 각각의 offsetTop
                도출
              </p>
            </div>
          </li>
        </ul>
      </article>
      <div className="linkBtn">
        <div className="prev">
          <Link to="/pj5">
            <div className="linkBox">
              <span>
                <BsArrowLeft style={{ paddingRight: 10 }} />
              </span>
            </div>
          </Link>
        </div>
        <div className="next">
          <Link to="/pj2">
            <div className="linkBox">
              <span>
                <BsArrowRight style={{ paddingRight: 10 }} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pj1;
