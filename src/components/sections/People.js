import React, { useState, useEffect } from "react";
import Section from "../commons/Section";
import SectionItem from "../commons/SectionItem";

export default function People() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/romualdus/demo/people")
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }, []);

  return (
    <Section title="People" actionText="View all">
      {data.map((item, i) => (
        <SectionItem
          className={`section__item--${i + 1}`}
          title={i === 0 && item.user}
          subtitle={item.position}
          totalViews={item.views}
        />
      ))}
      <SectionItem
        actionText={`Show\nYour Work`}
        actionIcon="far fa-dot-circle"
      />
    </Section>
  );
}
