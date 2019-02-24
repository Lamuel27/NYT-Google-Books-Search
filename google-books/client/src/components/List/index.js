import React from "react";
import "./style.css";


export const List = ({ children }) => (
  <ul className="collection">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="collection-item">{children}</li>;
}
