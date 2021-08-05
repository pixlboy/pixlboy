import "./personal.scss";

export default function Personal({ props }) {
  
  const sorter = () => {
    let sorted = [];
    for(const key in props){
      const idx = props[key].order - 1;
      sorted[idx] = props[key];
    };
    return sorted;
  }

  const sortedData = sorter();

  return (
    <section className="personal">
      <ul className="list">
        {sortedData.map((item, i) => (
          <li className="clear-all" key={i}>
            <label className={`icon pull-left ${item.class}`}></label>
            <span className="pull-left">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
