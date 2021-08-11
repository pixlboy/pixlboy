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
            i === 5 ? (
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
        <p></p>
        <div className="signature-image"></div>
      </div>
    </section>
  );
}