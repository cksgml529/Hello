import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Pj2() {
  const { top } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [top]);
  return <div className="pj2"></div>;
}

export default Pj2;
