import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">{name && name.name}</NavLink>
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
