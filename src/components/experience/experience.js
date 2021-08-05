import "./experience.scss";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";

export default function Experience() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const items = [];
    const collection = firestore.collection("experience").orderBy("order");
    collection.get().then((data) => {
      data.forEach((doc) => {
        items.push(doc.data());
      });
      setList(items);
    });
  }, []);

  return (
    <section className="section-experience-education content-box">
      <h2 className="section-header">
        <span className="heading">EXPERIENCE & EDUCATION</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="org-list">
          {list.map((item, i) => (
            <li className="org clear-all" key={i}>
              <span className={`org-img ${item.class}`}></span>
              <div className="summary pull-left">
                <h6>
                  {item.label}
                  <time className="datetime">
                    {item.start} - {item.end}
                  </time>
                </h6>
                <div className="highlights">
                  <ul>
                    {item.positions.map((position, i) => (
                      <li key={i} className={item.end === 'Present' ? 'active' : ''}>{position}</li>
                    ))}
                  </ul>
                </div>
                <div className="clear-all"></div>
                <div className="description">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}