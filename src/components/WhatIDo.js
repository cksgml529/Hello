import React, { useEffect, useState, useRef } from "react";
import lisence from "../assets/images/icon/whatido_lisence.png";
import flow from "../assets/images/icon/whatido_flow.png";

import "../style/whatIDo.scss";

function WhatIDo() {
  const int1 = [" Hello, my name is"];
  const int2 = ["chan hee"];
  const [intro1, setIntro1] = useState(int1);
  const [intro2, setIntro2] = useState(int2);
  const [on, setOn] = useState(false);
  const rollingRef = useRef(null);

  const appear = () => {
    const call = rollingRef.current.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY > call) {
      setOn(!on);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", appear);
  }, []);
  return (
    <div className="whatido" ref={rollingRef}>
      <div className="introBox">
        <h3>
          {intro1} <span>{intro2}&nbsp;</span>
        </h3>
        <h3>
          {intro1} <span>{intro2}&nbsp;</span>
        </h3>
        <h3>
          {intro1} <span>{intro2}&nbsp;</span>
        </h3>
        <h3>
          {intro1} <span>{intro2}&nbsp;</span>
        </h3>
      </div>
      <div className={on ? "textBox on" : "textBox"}>
        <p>
          SQLD / 정보처리기사
          <span className="strong">자격증 취득 </span>
          <span className="imgBox">
            <img src={lisence} alt="lisence" />
          </span>
          에 힘쓰겠습니다
        </p>
        <p>
          <span className="imgBox">
            <img src={flow} alt="flow" />
          </span>
          흘러가는 새로운 변화에도 빠르게 적응하겠습니다.
        </p>
        <p>성공적인 프로젝트를 위해 서슴치않고 도전하겠습니다.</p>
        <p className="line">일당백 사원이 되겠습니다.</p>
      </div>
    </div>
  );
}

export default WhatIDo;
