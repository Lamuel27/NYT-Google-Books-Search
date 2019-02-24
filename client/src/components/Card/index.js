import React from "react";

function Card({ title, children }) {
  return (
    <div className="col s12">
      <div className="header">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Card;
