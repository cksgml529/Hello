import {HiOutlineMail} from 'react-icons/hi';
import {BsGithub} from 'react-icons/bs';
import "../style/contact.scss";

function Contact() {
  return (
    <div className='contactBox'>
      <div className="contact">

      <h3>contact</h3>
      <p>박찬희</p>
      <div><HiOutlineMail/>cherryb0409@naver.com</div>
      <div><BsGithub/>github.com/cksgml529</div>
      </div>
    </div>
  );
}

export default Contact;
