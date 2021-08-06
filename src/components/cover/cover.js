import "./cover.scss";

export default function Cover({ heading, list, address }) {
  return (
    <section className="section-cover">
      <h2 className="section-header">
        <span>{heading}</span>
      </h2>
      <div className="section-content clear-all">
        {list.map((item, i) => {
          let elem =
            i === 4 ? (
              <ol key={i}>
                {Object.keys(item).map((pos, j) => (
                  <li key={j}>{item[pos]}</li>
                ))}
              </ol>
            ) : (
              <p key={i}>{item}</p>
            );
          return elem;
        })}
        <address>{address}</address>
        <div className="v-spacer"></div>
        <div className="signature-image"></div>
      </div>
    </section>
  );
}
