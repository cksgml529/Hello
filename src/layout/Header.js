import { Link, useNavigate } from "react-router-dom";


import "../style/header.scss";

import logo from "../assets/images/image/logo.png";
import { useState } from "react";
function Header() {
  const navigate = useNavigate();
  const [on,setOn] = useState(false)
  const chageLocation =()=>{
    setOn(!on)
    if(on)return
    else navigate(-1)
  }

  return (
    <header>
      <ul>
        <li >
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li >
          <Link to="/contact" onClick={chageLocation}>Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
