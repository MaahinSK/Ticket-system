import "../styles/TaskStatus.css";

export default function TaskStatus({ task, onComplete }) {
  if (!task) return <p className="no-task">No task selected</p>;

  return (
    <div className="task-box">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={() => onComplete(task)}>Complete</button>
    </div>
  );
}
