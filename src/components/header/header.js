import "./header.scss";

export default function Header({ name }) {
  return (
    <header className="app-header">
      <span className="tab">{name}</span>
    </header>
  );
}
