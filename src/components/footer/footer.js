import "./footer.scss";

export default function Footer({ tags, updated }) {

  return (
    <footer className="app-footer">
      <span className="updated">
        <strong>UPDATED : </strong>
        <time className="date-time">{updated}</time>
      </span>
      <div className="hashtags">
        {tags.map((item, i) => (
          <span className="hashtag" key={i}>
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
