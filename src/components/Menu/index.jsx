import React from "react";
import MenuItem from "../Menuitem";

const Menu = ({ menu }) => {
  const items = menu.menuItems.map((menuItem) => (
    <MenuItem menuItem={menuItem} />
  ));

  return (
    <div>
      <h1>{menu.menuName}</h1>
      {items}
    </div>
  );
};

export default Menu;
