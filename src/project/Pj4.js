import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

import tpj1 from "../assets/images/image/tpj1.png"
import pj4file from "../assets/images/image/pj4_file.png";

import problem1as from "../assets/images/image/pj4_problem/problem1_asis.png";
import problem1to from "../assets/images/image/pj4_problem/problem1_tobe.png";
import problem2as from "../assets/images/image/pj4_problem/problem2_asis.png";
import problem2to from "../assets/images/image/pj4_problem/problem2_tobe.png";

import '../style/pj4.scss';

function Pj4() {
  const { top } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);


  return (
    <div className="pj4">
      <article className="first">
        <div className="desBox">
          <h4>work</h4>
          <div className="title">
            <h2>야놀자</h2>
          </div>
          <div className="txt">
            <p>현재 스크롤 위치에 따른
              <span style={{ fontWeight: 500 }}> Scroll Event 구현</span>
            </p>
            <p>
              <span style={{ fontWeight: 500, marginLeft: 5 }}>clientHeight, offsetHeight</span> `1사용으로 인한 스크롤 위치값 파악 능력 상승
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
            <Link to="https://3teamidkjs.github.io/Yanolja_team/About/ya_About.html">
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
          <img src={tpj1} alert="팀프로젝트1" className="pjimg" />
        </div>
      </article>
      <article className="contain">
        <div className="dir">
          <h3>디렉토리</h3>
          <img src={pj4file} alt="tpj1 디렉토리" />
        </div>
        <div className="code">
          <h3>코딩컨벤션</h3>
          <div className="naming">
            <h4>이름규칙</h4>
            <ul>
              <li>
                변수명: 두 단어 이상의 조합은 카멜 표기법으로 표기
                <span>
                  txtbox <BsArrowRight /> txtBox
                </span>
              </li>
              <li>
                함수명: 동작을 표현하는 접두어(get, set, ···)를 포함한 카멜 표기법 사용
                <span>
                  getdata <BsArrowRight /> getData
                </span>
              </li>

              <li>
                이미지/아이콘명: 위치_성격 형식으로 파일이름 설정
                <span>
                  article 내 첫번째 이미지 <BsArrowRight />
                  article_img1.png
                </span>
              </li>
            </ul>
          </div>

          <div className="coding">
            <h4>코딩규칙</h4>
            <ul>
              <li>
                지역변수로 변수선언 권장
              </li>
              <li>코드 파악을 위해 호출되는 코드 위에 함수 작성. 화살표 함수 사용 권장</li>
              <li>
                git add, commit, push 명령어 미적용 상태로 pull 동작했을 경우 에러 발생 위험 높기 때문에 git status 체크하기
           
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
            <h4>&lsaquo; header &rsaquo;</h4>
            <div
              className="mainTxt"
              style={{ borderBottom: "1px solid #000", marginBottom: `100px` }}
            >
              <h5>menu</h5>
              <ul>
                <li>
                  a태그를 활용한 <span>페이지 이동</span>
                </li>
                <li>
                  <span>scrollY, clientHeight, offsetHeight</span>를 활용한 스크롤 이벤트
                </li>
              </ul>
            </div>
            <h4>&lsaquo; about &rsaquo;</h4>

            <div className="mainTxt">
              <h5>banner</h5>
              <ul>
                <li>Text Fade-up 애니메이션</li>
                <li>
                  특정 스크롤 위치에 따른 <span>topButton</span> 변경 이벤트
                </li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>mission,brandVision</h5>
              <ul>
                <li>
                 현재의 스크롤 위치에 따라 <span>text rolling, 이미지 출력</span>효과
                </li>
                <li>text fade-up 애니메이션</li>
              </ul>
            </div>

            <div className="mainTxt">
              <h5>history</h5>
              <ul>
              <li>forEach 사용으로 다수의 항목에 클래스명 추가</li>
              </ul>
            </div>

            <div className="mainTxt">
              <h5>CI Logo</h5>
              <ul>
                <li><span>가상요소(::after, ::before)</span>를 활용한 스타일 구성 </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <article className="problem">
        <h3>problem & resolve</h3>
        <ul>
          <li>
            <span className="loca">menu</span>
            <h4>"메뉴 hover하고 나면 설정했던 배경색이 적용되지 않네?"</h4>
            <p>특정 위치까지 스크롤 시 메뉴 색상값 변경되도록 설정했으나, hover 후에는 설정 값 유지 안됨</p>
            <div className="resolve">
              <p>변경되는 스크롤 값 기준인 <span>brandMission의 clientHeight</span> 값으로 스크롤 이벤트 코드의 추가</p>
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
            <span className="loca">Work.js</span>
            <h4>"이미지나 텍스트가 나오는 타이밍이 안맞네?"</h4>
            <p>
              스크롤 할때 출력하는 이미지나 텍스트가 타이밍이 맞지 않음
            </p>
            <div className="resolve">
              <p>
              scrollY값과 offsetTop - 특정값(수동설정)을 비교하여 타이밍 조정
              </p>
            </div>
            <div className="problemCode">
              <div className="as">
                <h5>As-is</h5>
                <img src={problem2as} alt="problem2_asis" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem2to} alt="problem2_tobe" />
              </div>
            </div>
          </li>
         
        </ul>
      </article>
      <div className="linkBtn">
        <div className="prev">
          <Link to="/pj3">
            <div className="linkBox">
              <span>
                <BsArrowLeft style={{ paddingRight: 10 }} />
              </span>
            </div>
          </Link>
        </div>
        <div className="next">
          <Link to="/pj5">
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

export default Pj4;
