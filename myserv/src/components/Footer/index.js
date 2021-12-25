import { BsFacebook,BsTwitter , BsInstagram} from "react-icons/bs";
import "./style.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="part">
        <a href="/">
            <BsTwitter className="footeritem" />
          </a>
          <a href="/">
            <BsFacebook className="footeritem" />
          </a>
          <a href="/">
            <BsInstagram className="footeritem" />
          </a>
         
        </div>
        <div className="part">
         Myservices-Business Copyright © 2021
        </div>
      </div>
    </>
  );
};

export default Footer;