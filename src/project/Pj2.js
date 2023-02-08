import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaHome } from "react-icons/fa";
import { BsArrowRight, BsCheck2All } from "react-icons/bs";
import { FcOpenedFolder } from "react-icons/fc";
import { DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom";

import pj1t from "../assets/images/image/tablet_frame.png";
import pj1 from "../assets/images/image/pj1.png";
import react from "../assets/images/icon/react.png";
import scss from "../assets/images/icon/scss.png";

function Pj2() {
  const { top } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return <div className="pj2"></div>;
}

export default Pj2;
