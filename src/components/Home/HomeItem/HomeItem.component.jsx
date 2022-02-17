import React from "react";
import "./HomeItem.styles.css";

function HomeItem(props) {
  return (
    <li className="item-container">
      <div id="icon-item-home">{props.icon}</div>
      <p id="p-item-home">{props.paragraph}</p>
    </li>
  );
}

export default HomeItem;
