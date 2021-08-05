import "./footer.scss";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/connect";

export default function Footer() {
  const [tags, setTags] = useState([]);
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    const tagsDoc = firestore.collection("footer").doc("tags");
    tagsDoc.get().then((doc) => {
      setTags(doc.data().list);
    });

    const updatedDoc = firestore.collection("footer").doc("updated");
    updatedDoc.get().then((doc) => {
      setUpdated(doc.data().date);
    });
  }, []);

  return (
    <footer className="app-footer">
      <span className="updated pull-left">
        <strong>UPDATED : </strong>
        <time className="date-time">{updated}</time>
      </span>
      <div className="hashtags">
        {tags.map((item, i) => (
          <span className="hashtag" key={i}>
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
