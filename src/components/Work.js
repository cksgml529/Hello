import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import pj1img from "../assets/images/image/jejuImg1.jpg";
import pj1logo from "../assets/images/image/pj1_logo.do";
import pj2img from "../assets/images/image/pj2_img.png";
import pj2logo from "../assets/images/image/logo.png";
import pj3img from "../assets/images/image/pj3_img.jpg";
import pj3logo from "../assets/images/image/pj3_logo.png";
import tpj2img from "../assets/images/image/tpj1_img.png";
import tpj2logo from "../assets/images/image/tpj1_logo.png";
import tpj1img from "../assets/images/image/tpj2_img.jpg";
import tpj1logo from "../assets/images/image/tpj2_logo.svg";

import "../style/work.scss";
function Work() {
  const projectData = [
    {
      id: 1,
      img: pj1img,
      imgalt: "제주국제공항",
      logo: pj1logo,
      logoalt: "로고",
      link: "./pj1",
      title: "react web1",
      tag: "#반응형(Tablet+PC) #개인프로젝트 #node.js #OpenAPI",
    },
    {
      id: 2,
      img: pj2img,
      imgalt: "포트폴리오",
      logo: pj2logo,
      logoalt: "로고",
      link: "./pj2",
      title: "react web2",
      tag: "#PC #개인프로젝트 #Router #map()",
    },
    {
      id: 3,
      img: pj3img,
      imgalt: "코코디자인",
      logo: pj3logo,
      logoalt: "로고",
      link: "./pj3",
      title: "javascript web",
      tag: "#PC #개인프로젝트 #Swiper #로그인",
    },
    {
      id: 4,
      img: tpj1img,
      imgalt: "야놀자",
      logo: tpj1logo,
      logoalt: "야놀자로고",
      link: "./pj4",
      title: "javascript web team",
      tag: "#PC #팀프로젝트 #ScrollEvent",
    },
    {
      id: 5,
      img: tpj2img,
      imgalt: "상상인증권",
      logo: tpj2logo,
      logoalt: "상상인증권로고",
      link: "./pj5",
      title: "html web team",
      tag: "#PC #팀프로젝트 #layout",
    },
  ];
  let [num, setNum] = useState(0);
  const [title, setTitle] = useState(projectData[num].title);
  const [tag, setTag] = useState(projectData[num].tag);
  const [link, setLink] = useState(projectData[num].link);

  const topRef = useRef([]);
  const desRef = useRef([]);
  let count = 0;

  const eventHandler = () => {
    for (let i = 0; i < topRef.current.length; i++) {
      const refvalue = topRef.current[i].offsetTop;

      if (desRef.current.offsetTop > refvalue) {
        setNum(i);
      }
      setTitle(projectData[num].title);
      setTag(projectData[num].tag);
      setLink(projectData[num].link);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", eventHandler);
  }, [num]);
  return (
    <div className="work">
      <div className="workdes">
        <div className="desBox" ref={desRef}>
          <h4>work</h4>
          <h3>{title}</h3>
          <p>{tag}</p>
          <Link to={link}>
            <div className="linkIn">
              <div className="iconBox">
                <span>
                  <BsArrowRight />
                </span>
              </div>
              <span>view more</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="workWrapper">
        {projectData.map((item) => (
          <div
            className="workBox"
            key={item.id}
            ref={(item) => (topRef.current[count++] = item)}
          >
            <Link to={item.link}>
              <img src={item.img} alt={item.imgalt} className="bgimgBox" />
            </Link>
            <img src={item.logo} alt={item.logoalt} className="logoBox" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
