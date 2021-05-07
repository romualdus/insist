import React, { useState, useEffect } from "react";
import Section from "../commons/Section";
import SectionItem from "../commons/SectionItem";

export default function Videos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/romualdus/demo/videos")
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }, []);

  return (
    <Section title="Videos" actionText="Browse all videos">
      {data.map((item, i) => (
        <SectionItem
          className={`section__item--${i + 1}`}
          title={i === 0 && item.title}
          subtitle={item.user}
          totalViews={item.views}
        />
      ))}
      <SectionItem
        actionText={`Upload\nYour Own Video`}
        actionIcon="fas fa-arrow-up"
      />
    </Section>
  );
}
