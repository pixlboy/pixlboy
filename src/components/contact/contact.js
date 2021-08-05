import "./contact.scss";
import { useState, useEffect } from "react";
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
