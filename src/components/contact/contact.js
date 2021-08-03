import "./contact.scss";
import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";

export default function Contact() {

  const [list, setList] = useState([]);

  useEffect(() => {
    const items = [];
    const collection = firestore.collection("contact").orderBy('order');
    collection.get().then((data) => {
      data.forEach((doc) => {
        items.push(doc.data());
      });
      setList(items);
    });
  }, []);

  return (
    <section className="contact clear-all">
      <h2 className="section-header">
        <span>Get in touch</span>
      </h2>
      <ul className="list">
        {/* <li className="svg">
        <label className="pull-left">
            <svg className="icon-s24 icon-grey" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
        </label>
        <span className="pull-left">
            <a href="tel: +918095540871">+91 8095-540-871</a>
        </span>
        </li> */}
        {list.map((item, i) => (
          <li className="svg" key={i}>
            <i className={`pull-left icon ${item.class}`} />
            <span className="pull-left text">
              <a href={item.link} target="_blank" rel="noreferrer" className="linker">{item.link}</a>
            </span>
            <span className="linker-text">{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
