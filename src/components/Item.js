import React from "react";

const Item = ({ name, price, description }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Item;
