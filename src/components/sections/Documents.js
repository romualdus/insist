import React, { useState, useEffect } from "react";
import Section from "../commons/Section";
import SectionItem from "../commons/SectionItem";

export default function Documents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/romualdus/demo/documents")
      .then(res => res.json())
      .then(result => {
        setData(result);
      });
  }, []);

  return (
    <Section title="Documents" actionText="Browse all documents">
      {data.map((item, i) => (
        <>
          {i === 0 ? (
            <SectionItem
              className={`section__item--${i + 1}`}
              title={i === 0 && item.title}
              subtitle={`By ${item.user}`}
              totalViews={item.views}
            />
          ) : (
            <SectionItem
              className={`section__item--${i + 1} section__item--documents`}
              subtitle={item.title}
              totalViews={item.views}
              documents
            />
          )}
        </>
      ))}
      <SectionItem
        actionText={`Show\nYour Document`}
        actionIcon="fas fa-plus"
      />
    </Section>
  );
}
