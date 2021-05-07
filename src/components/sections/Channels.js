import React, { useState, useEffect } from "react";
import SectionItem from "../commons/SectionItem";

export default function Channels() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/romualdus/demo/channels")
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }, []);
  return (
    <section className="channels">
      <div className="channels__header">
        <h2 className="txt-subtitle">Channels</h2>
        <p>Browse all channels</p>
      </div>
      <div className="channels__list">
      {data.map(item => (
        <SectionItem
          className="section__item"
          subtitle={item.title}
        />
      ))}
      </div>
    </section>
  );
}
