import "./highlights.scss";

export default function Highlights({ heading, list }) {

  return (
    <section className="section-highlights">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
          {list.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
