import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ResolvedTask from "./components/ResolvedTask";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";


function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("/tickets.JSON")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleSelect = (ticket) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticket.id ? { ...t, status: "in-progress" } : t
      )
    );
    setSelectedTask(ticket);
    toast.info(`${ticket.title} moved to In-progress`);
  };

  const handleComplete = (task) => {
    setResolvedTasks([...resolvedTasks, { ...task, status: "resolved" }]);
    setTickets((prev) => prev.filter((t) => t.id !== task.id));
    setSelectedTask(null);
    toast.success(`${task.title} marked as resolved`);
  };

  return (
    <div>
      <Navbar />
      <div className="stat-container">
        <StatCard title="In-Progress" count={tickets.filter((t) => t.status === "in-progress").length} gradient="purple-gradient" />
        <StatCard title="Resolved" count={resolvedTasks.length} gradient="green-gradient" />
      </div>

      <div className="main-container">
        <div className="tickets-section">
          <h3>Customer Tickets</h3>
          <div className="ticket-grid">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} onSelect={handleSelect} />
            ))}
          </div>
        </div>
        <div className="side-section">
          <TaskStatus task={selectedTask} onComplete={handleComplete} />
          <ResolvedTask tasks={resolvedTasks} />
        </div>
      </div>

      <ToastContainer position="bottom-right" />
      <Footer />
    </div>
  );
}

export default App;
