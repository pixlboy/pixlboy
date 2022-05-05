import "./personal.scss";

export default function Personal({ list }) {
  return (
    <section className="personal">
      <ul className="list">
        {list.map((item, i) => {
          return !item.hidden ? (
            <li className="clear-all" key={i}>
              <label className={`icon ${item.class}`}></label>
              <span>{item.label}</span>
            </li>
          ) : null;
        })}
      </ul>
    </section>
  );
}
