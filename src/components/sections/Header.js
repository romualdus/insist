import React from "react";

import Nav from "../commons/Nav";
import Button from "../commons/Button";
import TextBox from "../commons/TextBox";

export default function Header() {
  const navList = [
    "Videos",
    "People",
    "Documents",
    "Events",
    "Communities",
    "Favorites",
    "Channels"
  ];
  return (
    <header>
      <div className="container container--header">
        <h1 className="txt-title">
          <span>Social</span>Network
        </h1>
        <TextBox placeholder="Find..." />
        <Button icon="fas fa-arrow-up" text="Upload" className="btn--upload" />
        <div className="header-profile">
          <Button icon="fas fa-user" />
          <div className="header-profile__detail">
            <p className="txt-body txt-body--big">Waseem</p>
            <p className="txt-body">Arshad</p>
          </div>
          <div className="badge">
            <p className="txt-body txt-body--bold txt-body--smallest">5</p>
          </div>
        </div>
      </div>
      <div className="container">
        <Nav navList={navList} />
      </div>
    </header>
  );
}
