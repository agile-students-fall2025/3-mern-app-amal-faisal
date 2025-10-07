import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";

// Simple Home page
function Home() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16 }}>
      <h1>Home</h1>
      <p>Welcome! Use the link above to view the About Me page.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
        <Link to="/" style={{ marginRight: 16 }}>Home</Link>
        <Link to="/about">About Me</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
