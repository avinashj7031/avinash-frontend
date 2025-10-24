import React, {useEffect, useState} from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");
  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Could not reach backend"));
  }, []);
  return (
    <div style={{padding:20}}>
      <h1>React Frontend</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
