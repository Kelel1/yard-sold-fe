import React from "react";
import Item from "./Item";

export default ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};
