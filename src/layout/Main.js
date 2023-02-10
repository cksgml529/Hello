import Footer from "../components/Footer";
import MainHello from "../components/MainHello";
import Skill from "../components/Skill";
import WhatIDo from "../components/WhatIDo";
import Work from "../components/Work";

function Main() {
  return (
    <main>
      <MainHello />
      <Work />
      <WhatIDo />
      <Skill />
      <Footer />
    </main>
  );
}

export default Main;
