import "./intro.scss";

export default function Intro({props}) {

  return (
    <section className="intro">
      {props.list.map((item, i) => {
        return (
          <li key={i}>
            <p>{item}</p>
          </li>
        );
      })}
    </section>
  );
}
