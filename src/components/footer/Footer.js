import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import { infoService } from "../../service/Getinfo";

export default function Footer(props) {
  const [name, setName] = useState();
  useEffect(() => {
    infoService
      .getName()
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made by {name && name.name}
        </p>
      </Fade>
    </div>
  );
}
