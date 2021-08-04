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
              <span className="org-img">
                <svg
                  className="icon-s32 icon-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
              </span>
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
            {/* <span className="org-img pull-left">
              <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </span> */}
              {/* <svg
                className="icon-s32 icon-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
              </svg> */}
