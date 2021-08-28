import React from "react";

const H2 = (props) => {
  return (
    <h2 className={`font-bold text-gray-700 mb-2 ${props.className}`}>
      {props.children}
    </h2>
  );
};

export default H2;
