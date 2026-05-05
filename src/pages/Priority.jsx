import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchNotifications } from "../services/api";
import "../App.css";

export default function Priority() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function getWeight(type) {
    if (type === "Placement") return 3;
    if (type === "Result") return 2;
    return 1;
  }

  async function loadData() {
    try {
      const data = await fetchNotifications();
      const sorted = data.sort((a, b) => {
        let w = getWeight(b.Type) - getWeight(a.Type);
        if (w !== 0) return w;
        return new Date(b.Timestamp) - new Date(a.Timestamp);
      });
      setNotifications(sorted.slice(0, 10));
    } catch (e) {
      setNotifications([]);
    }
  }

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Stage 2 - Priority Notifications</h2>

        {notifications && notifications.map((n) => (
          <div key={n.ID} className="card">
            <p><b>{n.Type}</b></p>
            <p>{n.Message}</p>
            <p>{n.Timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}