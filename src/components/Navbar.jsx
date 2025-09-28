import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">CS — Ticket System</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Changelog</a>
        <a href="#">Blog</a>
        <a href="#">Download</a>
        <a href="#">Contact</a>
        <button className="new-ticket">+ New Ticket</button>
      </div>
    </nav>
  );
}
