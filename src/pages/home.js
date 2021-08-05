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
  const page = {
    label: "Resume",
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
          <aside className="left-section pull-left">
            <div className="profile-badge">
              <Animation />
              <div className="profile-image"></div>
              <h5 className="name">{page.name}</h5>
              <h6 className="title">{page.summary}</h6>
            </div>
            <Intro {...resume.intro} />
            <Personal {...resume.personal} />
            <Contact {...resume.contact} />
          </aside>
          <article className="right-section pull-left">
            <Experience {...resume.experience} />
            <Skills {...resume.skills} />
            <Responsibilities {...resume.responsibilities} />
            <Highlights {...resume.highlights} />
            <Interests {...resume.interests} />
          </article>
          <div className="clear-all"></div>
          <Footer {...resume.footer} />
        </>
      )}
    </main>
  );
}
