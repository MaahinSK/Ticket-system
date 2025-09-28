import React from "react";
import "../styles/StatCard.css";

export default function StatCard({ title, count, gradient, img }) {
  return (
    <div className={`stat-card ${gradient}`}>
      <div className="stat-content">
        <div>
          <h3>{title}</h3>
          <p>{count}</p>
        </div>
        {img && <img src='../../public/vector1.png' alt="vector" className="stat-img" />}
      </div>
    </div>
  );
}
