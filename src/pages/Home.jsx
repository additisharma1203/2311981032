import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchNotifications } from "../services/api";

export default function Home() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    loadData();
  }, [type]);

  async function loadData() {
    try {
      const data = await fetchNotifications(type);
      setNotifications(data);
    } catch (e) {
      console.log("error");
    }
  }

  return (
    <div>
      <Navbar />

      <h2>Stage 1 - Notifications</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="Event">Event</option>
        <option value="Placement">Placement</option>
        <option value="Result">Result</option>
      </select>

      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p><b>{n.Type}</b></p>
          <p>{n.Message}</p>
          <p>{n.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}