import React from "react";
import { Mail, GitHub, Phone, LinkedIn, LocationOn } from "@material-ui/icons";
import pic from "../assets/pic.jpg";
import pic2 from "../assets/pic2.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="left">
        <img src={pic2} alt="" />
        <div className="name">
          <div>PRATIM KUNDU</div>
          <p>
            I am a self-motivated Electronics & Computer engineering student ,
            tech enthusiast ,sports-freak. Knowledge in Web Development.Always
            believe teamwork is the key to success.
          </p>
        </div>
      </div>
      <div className="contact">
        <span className="mail">
          <Mail />
          <a
            href="mailto:pratimkundu15@gmail.com"
            target="_blank"
            rel="noreferrer">
            pratimkundu15@gmail.com
          </a>
        </span>
        <span className="phn">
          <Phone /> 7864990069
        </span>
        <span className="address">
          <LocationOn /> Berhampore,West Bengal
        </span>
        <span className="linkedIn">
          <LinkedIn />
          <a
            href="https://www.linkedin.com/in/pratim-kundu-946a851a4/"
            target="_blank"
            rel="noreferrer">
            Pratim Kundu/linkedIn
          </a>
        </span>
        <span className="git">
          <GitHub />
          <a
            href="https://github.com/pratimk999"
            target="_blank"
            rel="noreferrer">
            Pratim Kundu/github
          </a>
        </span>
      </div>
      {/* <div className="middle"></div> */}
    </header>
  );
}

export default Header;
