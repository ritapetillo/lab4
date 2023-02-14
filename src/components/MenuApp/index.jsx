import React from "react";
import menu from "../../data/menu.json";
import Menu from "../Menu";

const MenuApp = () => {
  return (
    <div>
      {menu.map((menu) => (
        <Menu menu={menu} />
      ))}
    </div>
  );
};

export default MenuApp;
