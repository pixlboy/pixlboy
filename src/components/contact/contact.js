import "./contact.scss";

export default function Contact({ heading, list }) {

  return (
    <section className="contact clear-all">
      <h2 className="section-header">
        <span>{heading}</span>
      </h2>
      <ul className="list">
        {list.map((item, i) => (
          <li className="svg" key={i}>
            <i className={`pull-left icon ${item.class}`} />
            <a
              className="pull-left text"
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="linker"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
