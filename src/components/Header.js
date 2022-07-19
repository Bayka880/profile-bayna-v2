import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ToggleMode from "./ToggleMode";
import { infoService } from "../service/GetInfo";
const Header = () => {
  const [name, setName] = useState();
  useEffect(() => {
    infoService
      .getName()
      .then((res) => res.json())
      .then((data) => setName(data));
  }, []);

  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-content">
          <Link to="/">{name && name.name}</Link>
          <Link to="/about">About me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
          <ToggleMode />
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  z-index: 2;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    display: flex;
    flex-direction: column;
    font-family: "Marck Script", cursive;
    text-transform: capitalize;
    font-size: 25px;
    color: white;
  }
`;

export default Header;
