import React from "react";

export default function Nav(props) {
  const { footer,navList } = props;
  
  return (
    <nav className={`nav ${footer && "nav--footer"}`}>
      <ul className={`txt-body ${!footer && "txt-body--big"}`}>
        {navList.map((item, i) => (
          <>
            <li>{item}</li>
            {i < navList.length - 1 && <span>/</span>}
          </>
        ))}
      </ul>
    </nav>
  );
}
