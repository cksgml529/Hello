import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight, BsCheckAll } from "react-icons/bs";

import { Link } from "react-router-dom";

import pj1 from "../assets/images/image/pj1.png";
import pj1t from "../assets/images/image/pj1_t.png";
import pj1file from "../assets/images/image/pj1_file.png";
import pj1coding from "../assets/images/image/pj1_coding.png";
import mapimg from "../assets/images/image/pj1_map.png";
import problem1to from "../assets/images/image/pj1_problem/problem1_tobe.png";
import problem2to from "../assets/images/image/pj1_problem/problem2_tobe.png";
import problem3to from "../assets/images/image/pj1_problem/problem3_tobe.PNG";
import problem4as from "../assets/images/image/pj1_problem/problem4_asis.png";
import problem4to from "../assets/images/image/pj1_problem/problem4_tobe.PNG";
import problem5as from "../assets/images/image/pj1_problem/problem5_asis.png";
import problem5to from "../assets/images/image/pj1_problem/problem5_tobe.PNG";


import '../style/pj1.scss';

function Pj1() {
  const { top } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);

  return (
    <div className="pj1">
      <article className="first">
        <div className="desBox">
          <h4>work</h4>
          <div className="title">
            <h2>제주국제공항<span>_실시간 항공현황</span></h2>
          </div>
          <div className="txt">
            <p>
              <span>Axios</span>를 활용한 공공데이터 <span>OpenAPI</span> 활용
            </p>
            <p>Data 포맷 <span>xml에서 json</span> 변환</p>
            <p>
              <span style={{ fontWeight: 500}}>Heroku</span>
              를 통해 프로젝트 배포
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
            <Link to="https://jejuport-node.herokuapp.com/">
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
          <img src={pj1} alert="제주공항" className="pjimg" />
        <div className="pjTBox">
          <img src={pj1t} alert="제주공항 태블릿"/>
          </div>
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
                component명: 파스칼 표기법으로 표기
                <span>
                  jejulist <BsArrowRight /> JejuList
                </span>
              </li>
              <li>
                변수/함수명: 카멜표기법으로 표기
                <span>
                  selectair <BsArrowRight /> selectAir
                </span>
              </li>
            
              <li>
                style명: 카멜표기법 사용
                <span>
                  mainbanner <BsArrowRight /> mainBanner
                </span>
              </li>
              <li>
                이미지/아이콘명: 이미지를 쓰일 특징명을 카멜표기법으로 표기
                <span>
                  첫번째 배경 이미지 <BsArrowRight />
                  jejuImg1.jpg
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
                  <img src={pj1coding} alt="coding_rule" />
                </div>
              </li>
              <li>
                반복되는 구성 형식에는 배열로 data 처리 후 map() 메소드로 출력
                <div className="codeBox">
                  <img src={mapimg} alt="coding_map" />
                </div>
              </li>
              <li>
                함수표현식(화살표함수)로 사용
                <p>
                  ㄴ 표현식이 장황하지 않고
                  <span className="press">추론을 쉽게 함</span>
                </p>
                <p>ㄴ 함수는 최상단에 변수와 함께 선언 <span className="press"></span></p>
                
              </li>
            
            </ul>
          </div>
        </div>
      </article>
      <article className="tandp">
        <div className="tool">
          <h3>make use</h3>
          <p>
            <span>Tool</span> GitHub, Heroku, Visual Studio Code
          </p>
          <p>
            <span>웹표준 언어</span> HTML5
          </p>
          <p>
            <span>프로그래밍 언어</span> javascript
          </p>
          <p>
            <span>라이브러리</span> react, node.js
          </p>
          <p>
            <span>스타일</span> SCSS,CSS
          </p>
        </div>

        <div className="page">
          <h3>페이지 구성</h3>
          <div className="pagetable">
            <h4>&lsaquo; server &rsaquo;</h4>
            <div
              className="mainTxt"
              
            >
              <h5>index</h5>
              <ul>
                <li>
                 express를 통한 <span>client를 server로 배포</span>
                </li>

              </ul>
            </div>
            <div
              className="mainTxt"
              style={{ borderBottom: "1px solid #000", marginBottom: `100px` }}
            >
              <h5>router</h5>
              <ul>
                <li>
                  <span>request</span> 라이브러리를 활용한 openAPI <span>data 요청</span>
                </li>
                <li>
                  .env를 통해 API Key값 암호화
                </li>
              </ul>
            </div>
            <h4>&lsaquo; client &rsaquo;</h4>

            <div className="mainTxt">
              <h5>Jeju</h5>
              <ul>
                <li>axios를 통한 server 내 data값 요청</li>
                <li>
                   <span>useState</span>로 data 배열 대입
                </li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>JejuList</h5>
              <ul>
                <li>
                useState을 통한 <span>toggle 형식</span> 기능 구현
                </li>
                <li><span>filter() 메서드</span>를 활용해 조건과 일치하는 data 도출</li>
                <li>
                  <span>삼항연산자</span>를 통해 조건에 따라 컴포넌트 출력
                </li>
              </ul>
            </div>

            <div className="mainTxt">
              <h5>JejuResult</h5>
              <ul>
                <li><span>moment</span> 라이브러리를 통해 data 내 시간 포맷 변경</li>
                <li>
                 DOM의 직접적 접근을 위한 <span>useRef 사용</span>
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
            <span className="loca">router.js</span>
            <h4>"json 형태만 해봤는데 xml 형태 데이터는 어떻게 불러오지?"</h4>
            <p>xml파일이 json파일 포맷과 형태가 달라 기존에 진행하던 json파일 불러오는 방식에서는 불러오지 못함</p>
            <div className="resolve">
              <p>xml-js를 활용하여 xml파일을 json으로 변환하여 기존 json방식으로 우회</p>
            </div>
            <div className="problemCode">
              <div className="to">
                <h5>To-be</h5>
                <img src={problem1to} alt="problem1_tobe" />
              </div>
            </div>
          </li>
          <li>
            <span className="loca">Jeju.js</span>
            <h4>"data는 불러오는데 body를 못 불러오네?"</h4>
            <p>
            openAPI data는 불러오나 data 내 body.items.item 값을 불러오지 못함
            </p>
            <div className="resolve">
              <p>
               setupProxy.js 생성하였으나 이로 인해 해결되었는지 여부는 파악하지 못함
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

            <h4>"미디어쿼리 하면 왜 태블릿 화면이 설정한 값 대로 적용이 안돼는거지?"</h4>
            <p>
            PC 및 Tablet 화면 내 grid-column 값 설정하였으나 PC화면 기준 값으로 고정되어 변경되지 않음
            </p>
            <div className="resolve">
              <p>
               기본값(PC)에서 같은 값으로 grid-template-columns 설정하고 grid-column 미설정하여 Tablet에서는 설정한 값으로 전환 가능할 수 있도록 함
              </p>
            </div>
            <div className="problemCode">
              <div className="to">
                <h5>As-is</h5>
                <img src={problem5as} alt="problem5_tobe" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem5to} alt="problem5_tobe" />
              </div>
            </div>
          </li>
          <li>
          <span className="loca">JejuList.js</span>
            <h4>"선택한 값에 맞춰서 값은 또 어떻게 불러오지..."</h4>
            <p>필터링 된 값을 배열로 출력하려면 filter()를 사용해야 하지만 해당 메소드 내 if문 사용 불가</p>
            <div className="resolve">
              <p>
                filter() 메서드 내 &&(AND)와 ||(OR)을 통해 설정하여 조건값 하나하나 설정 후 useState에 값 저장
              </p>
            </div>
            <div className="problemCode">
              <div className="to">
                <h5>To-be</h5>
                <img src={problem3to} alt="problem3_tobe" />
              </div>
            </div>
          </li>
          <li>
            <span className="loca">JejuResult.js</span>
            <h4>"검색을 했는데 왜 어떤거는 값이 안나오지?"</h4>
            <p>특정 data 검색 시 하얀 화면만 출력함</p>
            <div className="resolve">
              <p>
                data 내 출력하고자 하는 객체 값이 존재하지 않아 하얀 화면 출력한 것으로
                <span> 삼항연산자</span>를 통해 data 값이 존재하지 않을 경우 대체하여 출력할 값 설정
              </p>
            </div>
            <div className="problemCode">
              <div className="as">
                <h5>As-is</h5>
                <img src={problem4as} alt="problem4_asis" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem4to} alt="problem4_tobe" />
              </div>
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
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Pj1;
