import React from "react";
import Button from "../commons/Button";
import Nav from "../commons/Nav";

export default function Footer() {
  const navListOne = [
    "About",
    "For Business",
    "Suggestions",
    "Help & FAQs",
    "Contacts",
    "Pricing"
  ];

  const navListTwo = ["Privacy", "Terms"];
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__social">
          <Button icon="fab fa-twitter" />
          <Button icon="fab fa-linkedin-in" />
          <Button icon="fab fa-facebook-f" />
        </div>
        <Nav footer navList={navListOne} />
        <p>© Copyright Insignia inc.</p>
        <Nav footer navList={navListTwo} />
      </footer>
    </div>
  );
}
