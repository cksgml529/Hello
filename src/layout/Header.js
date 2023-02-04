import { Link, useNavigate } from "react-router-dom";


import "../style/header.scss";

import logo from "../assets/images/image/logo.png";
function Header() {
  const navigate = useNavigate();
  const chageLocation =()=>{
    navigate(-1)
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
