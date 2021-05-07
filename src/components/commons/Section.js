import React from "react";

export default function Section(props) {
  const { title, actionText, actionUrl, children } = props;
  return (
    <section className="section">
      <div className="section__header">
        <h2 className="txt-subtitle">{title}</h2>
        <p className="txt-body">{actionText}</p>
      </div>
      <div className="section__list">{children}</div>
    </section>
  );
}
