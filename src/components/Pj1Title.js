import { FaHome } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import pj1t from "../assets/images/image/tablet_frame.png";
import pj1 from "../assets/images/image/pj1.png";
import react from "../assets/images/icon/react.png";
import scss from "../assets/images/icon/scss.png";

function Pj1Title(props) {
  return (
    <div>
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
          <img src={pj1t} alert="타블렛 프레임" className="frame" />
          <img src={pj1} alert="프로젝트1" className="pj1" />
        </div>
      </article>
    </div>
  );
}

export default Pj1Title;
