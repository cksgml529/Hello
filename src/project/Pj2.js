import { FaHome } from "react-icons/fa";
import { BsArrowRight, BsCheck2All } from "react-icons/bs";
import { Link } from "react-router-dom";

import pj1t from "../assets/images/image/tablet_frame.png";
import pj1 from "../assets/images/image/pj1.png";
import arrow from "../assets/images/icon/swipe-arrow.png";
import hand from "../assets/images/icon/swipe-hand.png";
import react from "../assets/images/icon/react.png";
import css from "../assets/images/icon/css.png";

import "swiper/css";
import Pj1 from "./Pj1";
import { useEffect, useState } from "react";
function Pj2() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {});
  return (
    <div>
      <div className="pjwrapper">
        <article className="pj">
          <div className="pjBox">
            <div className="pjdes">
              <h3>project</h3>

              <div className="pjtitle">
                <h2>프로젝트명2</h2>
                <img src={react} alt="react" />
                <img src={css} alt="css" />
              </div>
              <p>프로젝트 설명2</p>

              <div className="link">
                <Link to="/">
                  <span>
                    <FaHome style={{ paddingRight: 10 }} />
                    go back home
                  </span>
                </Link>
                <Link to="https://cksgml529.github.io/react_push/">
                  <span>
                    <BsArrowRight style={{ paddingRight: 10 }} />
                    go to webpage
                  </span>
                </Link>
              </div>
            </div>
            <div className="showpj">
              <img src={pj1t} alert="타블렛 프레임" className="frame" />
              {/* <img src ={pj1} alert="프로젝트1" className='pj'/> */}
            </div>
          </div>

          <div className="slideicon">
            <div className="imgbox">
              <img src={arrow} alt="arrow" className="arrow" />
              <img src={hand} alt="hand" className="hand" />
            </div>
            <p>next project</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Pj2;
