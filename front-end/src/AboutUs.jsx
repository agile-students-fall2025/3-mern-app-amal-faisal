import { useEffect, useState } from "react";

export default function AboutUs() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:7001/about")
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setError(String(e)));
  }, []);

  if (error) return <div style={{ padding: 16 }}>Error: {error}</div>;
  if (!data) return <div style={{ padding: 16 }}>Loading...</div>;

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16 }}>
      <h1>{data.title}</h1>
      {data.paragraphs.map((p, i) => (
        <p key={i} style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>{p}</p>
      ))}
      {data.imageUrl && (
        <img
          src={data.imageUrl}
          alt="About Me"
          style={{ marginTop: 24, maxWidth: "100%", borderRadius: 12 }}
        />
      )}
    </div>
  );
}
