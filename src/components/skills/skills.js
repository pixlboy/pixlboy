import "./skills.scss";

export default function Skills({ heading, list, stats }) {
  return (
    <section className="section-skills">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        {stats.map((item, i) => (
          <div className="skill-stats" key={i}>
            <span
              className={`skill-bar ${item.class}`}
              style={{ width: `${item.level}%` }}
              title={item.label}
            >
              {item.label}
            </span>
          </div>
        ))}
        <ul className="skill-list">
          {list.map((tech, i) => (
            <li key={i} className="item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
