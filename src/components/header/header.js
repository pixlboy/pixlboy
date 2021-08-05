import "./header.scss";

export default function Header({label}) {
  return (
    <header className="app-header">
      <span className="tab">{label}</span>
    </header>
  );
}
