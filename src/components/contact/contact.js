import "./contact.scss";

export default function Contact({ heading, list }) {
  return (
    <section className="contact clear-all">
      <h2 className="section-header">
        <span className="heading">{heading}</span>
      </h2>
      <div className="section-content clear-all">
        <ul className="list">
          {list.map((item, i) => (
            <li className="svg" key={i}>
              <i className={`icon ${item.class}`} />
              <a
                className="linker"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
