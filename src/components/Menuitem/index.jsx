import React from "react";

const MenuItem = ({ menuItem }) => {
  return (
    <>
      <h2>{menuItem.itemName}</h2>
      <p>{menuItem.itemPrice}</p>
      <p>{menuItem.itemDescription}</p>
    </>
  );
};

export default MenuItem;
