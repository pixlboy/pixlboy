import "./responsibilities.scss";

export default function Responsibilities({ heading, list }) {
  return (
    <section className="section-responsibilities">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
