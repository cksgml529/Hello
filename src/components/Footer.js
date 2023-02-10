import "../style/footer.scss";

import laptop from "../assets/images/image/laptop.png";
import laptopf from "../assets/images/image/laptop_frame.png";
import { useRef } from "react";

function Footer() {
  const WBoxRef = useRef();
  const SBoxRef = useRef();

  return (
    <div className="footer">
      <div className="textBox">
        <div className="WBox" ref={WBoxRef}>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
          <p>front-end&nbsp;</p>
        </div>
        <div className="SBox" ref={SBoxRef}>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
          <p className="stroke">front-end&nbsp;</p>
        </div>
      </div>

      <div className="imgBox">
        <img src={laptop} alt="laptop" className="laptop" />
        <img src={laptopf} alt="laptop_frame" className="frame" />
      </div>
    </div>
  );
}

export default Footer;
