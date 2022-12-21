import css from "./Contact.module.css";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {Link} from "react-router-dom"

const Contact = () => {
  return (
    <div className={css.contact_container} id="contact">
      <h1>Contact</h1>
      <div className={css.contact}>
        <img
          src="https://github.com/shubhamkr2/UploadImages/blob/main/contact.gif?raw=true"
          alt="error"
        />
        <div>
          <h3>Let's Connect</h3>
          <div className={css.contactList}>
            <div><CgMail /> kumarshubham417@gmail.com</div>
            <div><BsFillTelephoneForwardFill /> +91 8789400892</div>
            <div><AiFillGithub /><a href="https://github.com/shubhamkr2">https://github.com/shubhamkr2</a></div>
            <div><AiFillLinkedin /><a href="https://www.linkedin.com/in/shubhamkr2/">https://www.linkedin.com/in/shubhamkr2/</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
