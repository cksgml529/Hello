import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsCheckAll } from "react-icons/bs";

import { Link } from "react-router-dom";

import pj3 from '../assets/images/image/pj3.png';
import pj3file from "../assets/images/image/pj3_file.png";
import long from "../assets/images/image/pj3_coding.png";
import problem1as from "../assets/images/image/pj3_problem/problem1_asis.png";
import problem1to from "../assets/images/image/pj3_problem/problem1_tobe.png";
import problem2to from "../assets/images/image/pj3_problem/problem2_tobe.png";
import problem3as from "../assets/images/image/pj3_problem/problem3_asis.png";
import problem3to from "../assets/images/image/pj3_problem/problem3_tobe.png";


import '../style/pj3.scss';

function Pj3() {
  const { top } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);

  return (
    <div className="pj3">
      <article className="first">
        <div className="desBox">
          <h4>work</h4>
          <div className="title">
            <h2>디자인코코</h2>
          </div>
          <div className="txt">
            <p>
              <span style={{ fontWeight: 500 }}>스크롤 이벤트</span>를 활용하여 가독성 높은 페이지 구성 능력 상승
            </p>
            <p>Form 태그 및 <span>Kakao API</span>를 활용한 로그인 페이지 구성 </p>
            <p>
              window 객체 속성의 이해도 및 효과적인 코드 활용 및 구현
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
            <Link to="https://cksgml529.github.io/web_coco/index.html">
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
          <img src={pj3} alert="디자인코코" className="pjimg" />
        </div>

      </article>
      <article className="contain">
        <div className="dir">
          <h3>디렉토리</h3>
          <img src={pj3file} alt="pj1 디렉토리" />
        </div>
        <div className="code">
          <h3>코딩컨벤션</h3>
          <div className="naming">
            <h4>이름규칙</h4>
            <ul>
              <li>
                변수/함수명: 카멜표기법으로 표기
                <span>
                  topbtn <BsArrowRight /> topBtn
                </span>
              </li>

              <li>
                style명: 소문자 사용
                <span>
                  login <BsArrowRight /> login
                </span>
              </li>
              <li>
                이미지/아이콘명: 이미지가 첨부될 section+숫자 조합으로 명칭
                <span>
                  product내 들어갈 3번째 이미지 <BsArrowRight />
                  product3.jpg
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
                  <img src={long} alt="long_String" />
                </div>
              </li>
              <li>
               일반함수 구성으로 함수표현
                <p>
                  ㄴ html에서 함수 호출을 하기 때문에
                  <span className="press">호이스팅</span>을 가능하도록 하기 위해 사용
                </p>
               
              </li>
              
            </ul>
          </div>
        </div>
      </article>
      <article className="tandp">
        <div className="tool">
          <h3>make use</h3>
          <p>
            <span>Tool</span> GitHub, Visual Studio Code
          </p>
          <p>
            <span>웹표준 언어</span> HTML5
          </p>
          <p>
            <span>프로그래밍 언어</span> javascript
          </p>
          <p>
            <span>스타일</span> CSS
          </p>
        </div>

        <div className="page">
          <h3>페이지 구성</h3>
          <div className="pagetable">
            <h4>&lsaquo; index &rsaquo;</h4>
            <div className="mainTxt" >
              <h5>banner</h5>
              <ul>
                <li>
                  <span>Swiper</span>를 이용한 배너 구성
                </li>
          
              </ul>
            </div>
            <div
              className="mainTxt" >
              <h5>wedo</h5>
              <ul>
                <li>
                  <span>forEach</span>를 활용한 각각의 동일한 동작성 부여
                </li>
                <li>
                  특정 조건에서의 css 적용
                </li>
              </ul>
            </div>
            <div
              className="mainTxt">
              <h5>product</h5>
              <ul>
                <li>
                  <span>figure와 figcaption</span> 태그를 통한 레아아웃 구성
                </li>
                <li>
                  filter를 활용한 스타일 적용
                </li>
              </ul>
            </div>
            <div
              className="mainTxt">
              <h5>cscenter</h5>
              <ul>
                <li>
                  문의 내용을 기입하기 위한 <span>form 태그</span> 활용
                </li>
                <li>
                  <span>웹 아이콘</span> 사용으로 직관적인 기능 표현
                </li>
              </ul>
            </div>
            <div
              className="mainTxt" style={{ borderBottom: "1px solid #000", marginBottom: `100px` }}>
              <h5>etc</h5>
              <ul>
                <li>
                  상대적인 레이아웃 포지셔닝
                </li>
                <li>
                  <span>iframe</span> 태그를 활용한 youtube 컨텐츠 적용
                </li>
              </ul>
            </div>

            <h4>&lsaquo; login &rsaquo;</h4>

           
            <div className="mainTxt">
              <h5>Login</h5>
              <ul>
                <li>
                 <span>KAKAO API</span> 를 활용한 간편 로그인 구현
                </li>
                <li>SNS로그인 여부에 따라 alert 팝업 출력</li>
                <li>
                  <span>form 태그</span> 를 활용한 로그인 화면 구현
                </li>
              </ul>
            </div>

           
          </div>
        </div>
      </article>
      <article className="problem">
        <h3>problem & resolve</h3>
        <ul>
          <li>
            <span className="loca">Index</span>
            <h4>왜 DropMenu가 나오는거지?</h4>
            <p>Menu가 아닌 하단부분을 hover시 DropMenu 출력함</p>
            <div className="resolve">
              <p>CSS 내 <span>pointer-events</span> 값을 적용하여 DropMenu 내 li는 none, Menu 내 li는 all로 설정하여 해결</p>
            </div>
            <div className="problemCode">
              <div className="as">
                <h5>As-is</h5>
                <img src={problem1as} alt="problem1_asis" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem1to} alt="problem1_tobe" />
              </div>
            </div>
          </li>
          <li>
            <span className="loca">Login</span>
            <h4>"로그인 되면 홈에는 로그아웃이 떠야하는데?"</h4>
            <p>
              로그인이 완료되면 홈에서 로그인 유무에 따라 '로그인 또는 로그아웃'으로 출력해야함
            </p>
            <div className="resolve">
              <p>
                현재 로그인 유무를 확인하기 위해서는 <span>server(node.js)가 필요</span>로 해 login 페이지 내 <span>회원 탈퇴와 로그아웃 동작성</span>을 확인 가능하도록 버튼 생성하여 우회
              </p>
            </div>
            <div className="problemCode">
              <div className="to">
                <h5>To-be</h5>
                <img src={problem2to} alt="problem2_tobe" />
              </div>
            </div>
          </li>
          <li>
            <span className="loca">Login</span>
            <h4>"KOE006 에러가 나네?"</h4>
            <p>
              카카오 개발자 페이지 내 JS SDK 데모 코드 적용 후 확인 시 KOE006 에러 표시됨
            </p>
            <div className="resolve">
              <p>
                <span>redirectUri</span>는 응답 시 이동하는 링크로 설정된 링크로 설정한 링크로 기재해야함. Url 변경 시에는 에러가 출력하지 않지만 <span>로그인의 동작성 확인만 필요</span>로 하기 때문에 성공했을 경우 data를 console에 출력하도록 함
              </p>
            </div>
            <div className="problemCode">
              <div className="as">
                <h5>As-is</h5>
                <img src={problem3as} alt="problem2_asis" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem3to} alt="problem2_tobe" />
              </div>
            </div>
          </li>
        
        </ul>
      </article>
      <div className="linkBtn">
        <div className="prev">
          <Link to="/pj2">
            <div className="linkBox">
              <span>
                <BsArrowLeft style={{ paddingRight: 10 }} />
              </span>
            </div>
          </Link>
        </div>
        <div className="next">
          <Link to="/pj4">
            <div className="linkBox">
              <span>
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pj3;
