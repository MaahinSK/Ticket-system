import "../styles/TicketCard.css";

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div className="ticket-card" onClick={() => onSelect(ticket)}>
      <div className="ticket-header">
        <h4>{ticket.title}</h4>
        <span className={`status ${ticket.status}`}>{ticket.status}</span>
      </div>
      <p className="ticket-desc">{ticket.description.slice(0, 90)}...</p>
      <div className="ticket-footer">
        <span className={`priority ${ticket.priority}`}>{ticket.priority.toUpperCase()} PRIORITY</span>
        <span>{ticket.name}</span>
        <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
