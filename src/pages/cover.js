import { Header, Contact, Footer, Cover } from "../components/index";
import { useState, useEffect } from "react";
import { firestore } from "../firebase/connect";

export default function CoverPage() {
  const page = {
    label: "Cover",
    name: "Rachit Garg",
    summary: "Full Stack Engineer",
  };

  const [resume, setResume] = useState(null);

  useEffect(() => {
    const temp = {};
    const collection = firestore.collection("resume");
    collection.get().then((data) => {
      data.forEach((doc) => {
        temp[doc.id] = doc.data();
      });
      setResume(temp);
    });
  }, []);

  return (
    <main className="wrapper">
      {resume && (
        <>
          <Header label={page.label} />
          <aside className="left-section">
            <div className="profile-badge">
              <div className="cover-image"></div>
              <h5 className="name letter">{page.name}</h5>
              <h6 className="title">{page.summary}</h6>
            </div>
            <Contact {...resume.contact} />
          </aside>
          <article className="right-section">
            <Cover {...resume.cover} />
          </article>
          <div className="clear-all"></div>
          <Footer {...resume.footer} />
        </>
      )}
    </main>
  );
}
