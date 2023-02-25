import {HiOutlineMail} from 'react-icons/hi';
import {BsGithub} from 'react-icons/bs';
import "../style/contact.scss";

import img1 from '../assets/images/image/img1.jpg';
import img2 from '../assets/images/image/img2.jpg';
import { useState } from 'react';

function Contact() {
  const [xy,setXY] = useState({x:0,y:0});
  const handleMouseMove = (e)=>{
    setXY({x:e.clientX,y:e.clientY});
  }
  return (
    <div className='contactBox' onMouseMove={(e)=>handleMouseMove(e)} >
      <div className='contactImg'>
        <div className='img1' style={{transform:`translate(${xy.x/15}px,${xy.y/15}px)`}}>
        <img src={img1} alt='img1' className='img1'/>
        </div>
        <div className='img2' style={{transform:`translate(-${xy.x/20}px,-${xy.y/20}px)`}}>
        <img src={img2} alt='img2'className='img2'/>
        </div>
      </div>
      <div className="contact">
      <h3>contact</h3>
      <p>박찬희</p>
      <div><HiOutlineMail/><span>cherryb0409@naver.com</span></div>
      <div><BsGithub/><span>github.com/cksgml529</span></div>
      </div>
    </div>
  );
}

export default Contact;
