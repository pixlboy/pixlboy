import "./interests.scss";

export default function Interests({heading, list}) {
  return (
    <section className="section-interests">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
          {list.map((item, i) => (
            <li key={i}>
              <i className={`icon ${item.class}`}></i>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
