import React from "react";

export default function Button(props) {
  const { icon, text, className } = props;

  return (
    <button className={`btn txt-body ${text && "btn--text"} ${className}`}>
      <i className={icon} />
      {text}
    </button>
  );
}
