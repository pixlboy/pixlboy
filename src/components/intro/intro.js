import "./intro.scss";

export default function Intro({ list }) {
  return (
    <section className="intro">
      {list.map((item, i) => {
        return (
          <li key={i}>
            <p>{item}</p>
          </li>
        );
      })}
    </section>
  );
}
