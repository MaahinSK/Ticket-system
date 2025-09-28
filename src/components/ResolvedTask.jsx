import "../styles/ResolvedTask.css";

export default function ResolvedTask({ tasks }) {
  return (
    <div className="resolved-box">
      <h4>Resolved Task</h4>
      {tasks.length === 0 ? (
        <p className="no-task">No resolved tasks</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
