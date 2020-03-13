import React from "react";
import { NavLink } from "react-router-dom";
import style from "./../siteBar/SiteBar.module.scss";

const Menu = props => {
  return (
    <>
      <ul>
        <li>
          <NavLink exact to={"/"} activeClassName={style.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/people"} activeClassName={style.active}>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to={"/find-users"} activeClassName={style.active}>
            Find users
          </NavLink>
        </li>
        <li>
          <NavLink to={"/music"} activeClassName={style.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to={"/registration"} activeClassName={style.active}>
            Registration
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Menu;
