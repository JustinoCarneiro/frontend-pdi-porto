import React from "react";
import MenuItem from "./MenuItem";
import { menu } from "../../data/menu";
import style from "./style.module.css";

const SideMenu = () => {
  return (
    <ul className={style.container__menu}>
      {menu.map((item) => (
        <MenuItem {...item} key={item.id}/>
      ))}
    </ul>
  );
};

export default SideMenu;
