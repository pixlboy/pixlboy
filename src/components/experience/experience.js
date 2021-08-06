import "./experience.scss";

export default function Experience({ heading, list }) {
  return (
    <section className="section-experience-education">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="org-list">
          {list.map((item, i) => (
            <li className="org" key={i}>
              <span className={`org-img ${item.class}`}></span>
              <div className="summary">
                <div className="name">
                  {item.label}
                  <time className="datetime">
                    {item.start} - {item.end}
                  </time>
                </div>
                <div className="highlights">
                  <ul>
                    {item.positions.map((position, i) => (
                      <li
                        key={i}
                        className={item.end === "Present" ? "active" : ""}
                      >
                        {position}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="clear-all"></div>
              <div className="description">{item.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
