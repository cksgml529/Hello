import { FcOpenedFolder } from "react-icons/fc";
import { DiJavascript1 } from "react-icons/di";

function Pj1Dir() {
  return (
    <div>
      <article className="dir">
        <h3>디렉토리</h3>
        <div className="category">
          <div className="oneDep">
            <span>
              <FcOpenedFolder />
              hello
            </span>
          </div>
          <div className="twoDep">
            <span>
              <FcOpenedFolder />
              build
            </span>
            <span>
              <FcOpenedFolder />
              node_modules
            </span>
            <span>
              <FcOpenedFolder />
              public
            </span>
            <span>
              <FcOpenedFolder />
              src
            </span>
          </div>
          <div className="threeDep">
            <span>
              <FcOpenedFolder />
              assets
            </span>
            <span>
              <FcOpenedFolder />
              components
            </span>
            <span>
              <FcOpenedFolder />
              layout
            </span>
            <span>
              <FcOpenedFolder />
              project
            </span>
            <span>
              <FcOpenedFolder />
              style
            </span>
          </div>
          <div className="fourDep">
            <div className="asset">
              <span>
                <FcOpenedFolder />
                fonts
              </span>
              <span>
                <FcOpenedFolder />
                images
              </span>
              <span>
                <FcOpenedFolder />
                style
              </span>
            </div>

            <div className="com">
              <span>
                <DiJavascript1 />
                Last
              </span>
              <span>
                <DiJavascript1 />
                MainHello
              </span>
              <span>
                <DiJavascript1 />
                Skill
              </span>
              <span>
                <DiJavascript1 />
                SkillList
              </span>
              <span>
                <DiJavascript1 />
                WhatIDo
              </span>
              <span>
                <DiJavascript1 />
                Work
              </span>
            </div>
            <div className="layout">
              <span>
                <DiJavascript1 />
                Contact
              </span>
              <span>
                <DiJavascript1 />
                Header
              </span>
              <span>
                <DiJavascript1 />
                Main
              </span>
            </div>
            <div className="pj">
              <span>
                <DiJavascript1 />
                Pj1
              </span>
              <span>
                <DiJavascript1 />
                Pj2
              </span>
              <span>
                <DiJavascript1 />
                Pj3
              </span>
              <span>
                <DiJavascript1 />
                Pj4
              </span>
              <span>
                <DiJavascript1 />
                Pj5
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Pj1Dir;
