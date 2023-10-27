import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const MenuItem = ({ id, name, path, Icon }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? style["activeMenu"] : style["inactiveMenu"]
        }
      >
        <div className={style.menu__item}>
          <Icon className={style["item--icon"]} />
          <p className={style["item--name"]}>{name}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default MenuItem;
