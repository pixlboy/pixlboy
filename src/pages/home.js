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
export default function HomePage() {
  return (
    <main className="wrapper">
      <Header name="Resume" />
      <aside className="left-section pull-left">
        <div className="profile-badge">
          <Animation />
          <div className="profile-image"></div>
          <h5 className="name">Rachit Garg</h5>
          <h6 className="title">Full Stack Engineer</h6>
        </div>
        <Intro />
        <Personal />
        <Interests />
        <Contact />
      </aside>
      <article className="right-section pull-left">
        <Experience />
        <Skills />
        <Responsibilities />
        <Highlights />
      </article>
      <div className="clear-all"></div>
      <Footer />
    </main>
  );
}
