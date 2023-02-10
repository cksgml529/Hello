import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsCheckAll } from "react-icons/bs";

import { Link } from "react-router-dom";

import pj1 from "../assets/images/image/pj1.png";
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
          <h4>work</h4>
          <div className="title">
            <h2>Hi, Hello 포트폴리오</h2>
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

          <div className="coding">
            <h4>코딩규칙</h4>
            <ul>
              <li>
                긴 문자열 사용시 변수 대입 후 사용
                <div className="codeBox">
                  <p>
                    <span>NG</span>axios.get(`https://pixabay.com/api/?key=KEY
                    &q=yellow+flowers&image_type=photo`)~;
                  </p>
                  <p>
                    <span>OK</span>const url = `https://pixabay.com/api/?key=
                    KEY&q=yellow+flowers&image_type=photo`; axios.get(url)~;
                  </p>
                </div>
              </li>
              <li>
                함수표현식(화살표함수)로 사용
                <p>
                  ㄴ 표현식이 장황하지 않고{" "}
                  <span className="press">추론을 쉽게 함</span>
                </p>
                <p>ㄴ 매개변수가 하나뿐이여도 소괄호 기재</p>
                <p>ㄴ 표현식이 한 줄을 넘길 경우 (표현식)으로 기재</p>
              </li>
              <li>
                객체/배열 선언, 리터럴 방식으로 표기
                <div className="codeBox">
                  <p>
                    <span>NG</span>
                    const datas = new Array(1,2,3,4);
                  </p>
                  <p>
                    <span>OK</span>
                    const datas = [1,2,3,4];
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="tandp">
        <div className="tool">
          <h3>make use</h3>
          <p>
            <span>Tool</span> GitHub, Visual Studio Code, Figma
          </p>
          <p>
            <span>웹표준 언어</span> HTML5
          </p>
          <p>
            <span>프로그래밍 언어</span> javascript
          </p>
          <p>
            <span>라이브러리</span> react
          </p>
          <p>
            <span>스타일</span> SCSS
          </p>
        </div>

        <div className="page">
          <h3>페이지 구성</h3>
          <div className="pagetable">
            <h4>&lsaquo; Header.js &rsaquo;</h4>
            <div
              className="mainTxt"
              style={{ borderBottom: "1px solid #000", marginBottom: `100px` }}
            >
              <h5>Header</h5>
              <ul>
                <li>Router의 Link와 Navigate를 활용한 페이지 이동</li>
                <li>useState을 통한 toggle형식 기능 구현</li>
              </ul>
            </div>
            <h4>&lsaquo; Main.js &rsaquo;</h4>

            <div className="mainTxt">
              <h5>MainHello</h5>
              <ul>
                <li>useEffect와 setInterval을 활용한 배열값 반복</li>
                <li>SCSS 애니메이션</li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>Work</h5>
              <ul>
                <li>useRef의 DOM 직접 접근</li>
                <li>Router Link를 통해 SubPage 이동</li>
                <li>offsetTop을 통한 스크롤 이벤트</li>
                <li>map() 메서드의 배열 반복 반환</li>
                <li>SCSS sticky를 활용한 레이아웃 포지셔닝</li>
              </ul>
            </div>

            <div className="mainTxt">
              <h5>WhatIDo</h5>
              <ul>
                <li>offsetTop을 통한 스크롤 이벤트</li>
                <li>SCSS 애니메이션</li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>Skill</h5>
              <ul>
                <li>map() 메서드의 배열 반복 반환</li>
              </ul>
              <div class="check">
                <div class="plus"></div>
              </div>
            </div>
            <div className="mainTxt">
              <h5>Last</h5>
              <ul>
                <li>SCSS 애니메이션</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <article className="problem">
        <h3>problem & resolve</h3>
        <ul>
          <li>
            <span className="loca">MainHello.js</span>
            <h4>"나오는거는 잘하는데 전환할 때 끊기는 느낌이 드네?"</h4>
            <p>기존 출력되었던 배열값이 끊겨서 사라지고 새로운 배열값 출력</p>
            <div className="resolve">
              <p>setInterval 내 time 값과 transition 값 조절하여 해결</p>
            </div>
          </li>
          <li>
            <span className="loca">Work.js</span>
            <h4>"map()으로 처리한 data들의 offsetTop은 어떻게 구하지?"</h4>
            <p>
              useRef을 변수(ref=ref변수)로 적용 시에는 배열 중 처음만 적용되서
              모든 배열의 offsetTop을 알수 없음
            </p>
            <div className="resolve">
              <p>
                useRef적용 할때 배열로 값을 줄 수 있도록 해 각각의 offsetTop
                도출
              </p>
            </div>
          </li>
          <li>
            <h4>"처음부분으로 안가지?"</h4>
            <p>Project 상세페이지 이동 시 페이지 중간부터 출력</p>
            <div className="resolve">
              <p>
                Main.js에서 Link까지 도달한 스크롤 값은 그대로 유지되기 때문에
                useEffect을 활용하여 useLoation 변경 시마다 scrollTo 상단
                이동하도록 하여 해결
              </p>
            </div>
          </li>
          <li>
            <span className="loca">WhatIdo.js/Last.js</span>
            <h4>"왜 잘 가다가 버벅이지?"</h4>
            <p>clearInterval 적용해도 text 이동 시 버벅임</p>
            <div className="resolve">
              <p>
                반복되는 text를 위해 사용한 cloneNode로 인해 clearInterval시에도
                텍스트 버벅이는 현상이 계속되어 scss 애니메이션으로 우회
              </p>
            </div>
          </li>
          <li>
            <span className="loca">Header.js</span>
            <h4>"contact가 안들어가지네?"</h4>
            <p>
              Project 상세페이지에서 contact 선택 시 이전페이지인 Main.js로 이동
            </p>
            <div className="resolve">
              <p>
                Main.js에 Project 상세페이지를 Link 하면서 노출된 이슈로 Link
                contact를 토글방식으로 하여 해결
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
