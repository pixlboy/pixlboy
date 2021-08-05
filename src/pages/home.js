import {
  Animation,
  Intro,
  Personal,
  Interests,
  Contact,
  Experience,
  Responsibilities,
  Skills,
  Highlights,
  Footer,
  Header,
} from "../components/index";
import { useState, useEffect } from "react";
import { firestore } from "../firebase/connect";

export default function HomePage() {
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
          <Header name="Resume" />
          <aside className="left-section pull-left">
            <div className="profile-badge">
              <Animation />
              <div className="profile-image"></div>
              <h5 className="name">Rachit Garg</h5>
              <h6 className="title">Full Stack Engineer</h6>
            </div>
            <Intro props={resume.intro} />
            <Personal props={resume.personal} />
            <Contact />
          </aside>
          <article className="right-section pull-left">
            <Experience />
            {/* <Skills /> */}
            <Responsibilities />
            <Highlights />
            <Interests />
          </article>
          <div className="clear-all"></div>
          <Footer />
        </>
      )}
    </main>
  );
}
