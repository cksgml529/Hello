import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

import tpj2 from "../assets/images/image/tpj2.png";
import pj5file from "../assets/images/image/pj5_file.png";


import '../style/pj5.scss';

function Pj5() {
  const { top } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return (
    <div className="pj5">
      <article className="first">
        <div className="desBox">
          <h4>work</h4>
          <div className="title">
            <h2>상상인증권</h2>
          </div>
          <div className="txt">
            <p>
              웹 표준성과 접근성을 고려한 <span style={{ fontWeight: 500 }}>시멘틱 마크업</span> 능률 상승
            </p>
            <p>
              <span style={{ fontWeight: 500, marginLeft: 5 }}>Flex, Position</span>을 활용한 레이아웃 구성 
              
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
            <Link to="https://cat-and-cat-servant.github.io/chanhee/">
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
          <img src={tpj2} alert="팀프로젝트2" className="pjimg" />
        </div>
      </article>
      <article className="contain">
        <div className="dir">
          <h3>디렉토리</h3>
          <img src={pj5file} alt="pj1 디렉토리" />
        </div>
        <div className="code">
          <h3>코딩컨벤션</h3>
          <div className="naming">
            <h4>이름규칙</h4>
            <ul>
              <li>
                class/id명: 스네이크 표기법으로 표기
                <span>
                  firstvisit <BsArrowRight /> first_visit
                </span>
              </li>

              <li>
                style명: 스네이크 표기법으로 표기
                <span>
                  mainstyle <BsArrowRight /> main_style
                </span>
              </li>
              <li>
                이미지/아이콘명: 이미지특징.확장자명으로 소문자 기재
                <span>
                  오른쪽 화살표 아이콘 <BsArrowRight />
                  icon_arrow.svg
                </span>
              </li>
            </ul>
          </div>

          <div className="coding">
            <h4>코딩규칙</h4>
            <ul>
              <li>
                github에 작업을 pull하기 전 'git status' 명령어로 현재 상태 파악
               <span>ㄴ pull 전 작업물의 수정이 이뤄졌지만 push를 하지 않은 상태에서 pull할 경우 에러가 발생할 수 있기 때문</span>
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
            <span>스타일</span> CSS
          </p>
        </div>

        <div className="page">
          <h3>페이지 구성</h3>
          <div className="pagetable">
            <h4>&lsaquo; Index &rsaquo;</h4>
            <div className="mainTxt">
              <h5>banner</h5>
              <ul>
                <li>이미지 중첩 및 위치 조정을 위해 position 사용</li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>first_visit</h5>
              <ul>
                <li>
                  내부 정렬을 위해 container와 item 내 <span>flex 적용</span>
                </li>
              </ul>
            </div>

            <div className="mainTxt">
              <h5>rolling</h5>
              <ul>
                <li>flex 활용으로 인한 각각 flex-item의 세부 조정 및 가로 정렬 </li>
                
              </ul>
            </div>
            <div className="mainTxt">
              <h5>product</h5>
              <ul>
                <li><span>Subpage</span>로의 이동 편의성을 위한 a태그 사용</li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>cash_info</h5>
              <ul>
                <li>
                  카드형식으로 나열을 위한 <span>ul 태그</span> 활용
                </li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>last_menu</h5>
              <ul>
                <li>
                  <span>video</span> 태그를 통해 영상을 문서에 연결
                </li>
                <li>내부 block요소의 가로 정렬을 위한 flex 사용</li>
              </ul>
            </div>
            <div className="mainTxt">
              <h5>notice</h5>
              <ul>
                <li>
                  내부 화살표 버튼의 세부 레이아웃 설정을 위한 <span>position 활용</span>
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
            <h4>"가로 해상도 1920으로 분명 맞췄는데 왜 스크롤바가 생기지?"</h4>
            <p>컨텐츠의 width, padding, margin 값을 계산해서 적용해도 사이즈 초과로 스크롤 생성됨</p>
            <div className="resolve">
              <p>flex 또는 position의 경우 일반적인 문서의 흐름에서 벗어난 존재이기 때문에 px 단위가 아닌 vw 또는 % 단위 사용하는 것이 해당 오류를 줄일 수 있음</p>
            </div>
            {/* <div className="problemCode">
              <div className="as">
                <h5>As-is</h5>
                <img src={problem1as} alt="problem1_asis" />
              </div>
              <div className="to">
                <h5>To-be</h5>
                <img src={problem1to} alt="problem1_tobe" />
              </div>
            </div> */}
          </li>
         
        </ul>
      </article>
      <div className="linkBtn">
        <div className="prev">
          <Link to="/pj4">
            <div className="linkBox">
              <span>
                <BsArrowLeft style={{ paddingRight: 10 }} />
              </span>
            </div>
          </Link>
        </div>
        <div className="next">
          <Link to="/pj1">
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

export default Pj5;
