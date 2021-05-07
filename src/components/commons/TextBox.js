import React from "react";

export default function TextBox(props) {
  const { placeholder } = props;
  return (
    <div className="textbox">
      <input placeholder={placeholder} />
    </div>
  );
}
