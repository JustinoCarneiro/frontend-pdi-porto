import React from "react";
import MenuItem from "./MenuItem";
import { menu } from "../../data/menu";
import style from "./style.module.css";

const SideMenu = () => {
  return (
    <li className={style.container__menu}>
      {menu.map((item) => (
        <MenuItem {...item} />
      ))}
    </li>
  );
};

export default SideMenu;
