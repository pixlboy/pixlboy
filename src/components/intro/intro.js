import "./intro.scss";

export default function Intro({ list }) {
  return (
    <section className="intro">
      {list.map((item, i) => {
        return <p key={i}>{item}</p>
      })}
    </section>
  );
}
