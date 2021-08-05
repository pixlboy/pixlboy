import "./personal.scss";

export default function Personal({ list }) {

  return (
    <section className="personal">
      <ul className="list">
        {list.map((item, i) => (
          <li className="clear-all" key={i}>
            <label className={`icon pull-left ${item.class}`}></label>
            <span className="pull-left">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
