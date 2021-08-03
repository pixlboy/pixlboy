import { Header, Contact, Footer, Cover } from "../components/index";

export default function CoverPage() {
  return (
    <main className="wrapper">
      <Header name="Cover" />
      <aside className="left-section pull-left">
        <div className="profile-badge">
          <div className="cover-image"></div>
          <h5 className="name letter">Rachit Garg</h5>
          <h6 className="title">Full Stack Engineer</h6>
        </div>
        <Contact />
      </aside>
      <article className="right-section pull-left">
        <Cover />
      </article>
      <div className="clear-all"></div>
      <Footer />
    </main>
  );
}
