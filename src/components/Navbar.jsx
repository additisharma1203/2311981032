import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Stage 1</Link>
      <Link to="/priority">Stage 2</Link>
    </div>
  );
}