import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";

export default function Highlights() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    let items = [];
    const collection = firestore.collection("highlights");
    collection.get().then((data) => {
      data.forEach((doc) => {
        items.push(doc.data());
      });
      setHighlights(items);
    });
  }, []);

  return (
    <section className="section-highlights content-box">
      <h2 className="section-header">
        <span className="heading">Highlights</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
        {highlights.map((item,i) => {
          return <li key={i}>
            {item.name}
          </li>
        })}
        </ul>
      </div>
    </section>
  );
}
