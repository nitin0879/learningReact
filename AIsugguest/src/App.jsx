import { useState } from "react";

function App() {
  let [username, setUsername] = useState("Guest");
  let [isDark, setIsDark] = useState(false);

  function Dark() {
    // setIsDark(!isDark);
    setIsDark((prev) => !prev);
  }

  return (
    <section
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"} min-h-screen`}
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={Dark}>{isDark ? "Light mode" : "Dark mode"}</button>

      <h1>Hello, {username}</h1>
    </section>
  );
}

export default App;
