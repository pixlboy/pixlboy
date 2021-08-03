import "./footer.scss";

export default function Footer() {
  return (
    <footer className="app-footer">
      <span className="updated pull-left">
        <strong>UPDATED : </strong>
        <time className="date-time">27-07-2021</time>
      </span>
      <span className="hashtags">
        <a href="" className="hashtag">
          #HTML5
        </a>
        <a href="" className="hashtag">
          #CSS
        </a>
        <a href="" className="hashtag">
          #JavaScript
        </a>
        <a href="" className="hashtag">
          #Angular
        </a>
        <a href="" className="hashtag">
          #React
        </a>
        <a href="" className="hashtag">
          #Node
        </a>
      </span>
    </footer>
  );
}
