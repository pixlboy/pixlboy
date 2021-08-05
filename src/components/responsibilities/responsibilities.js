import './responsibilities.scss';
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";

export default function Responsibilities() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const collection = firestore.collection("responsibilities").doc("list");
    collection.get().then((doc) => {
      setList(doc.data().data);
    });
  }, []);

  return (
    <section className="section-responsibilities content-box">
      <h2 className="section-header">
        <span className="heading">My average week</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
