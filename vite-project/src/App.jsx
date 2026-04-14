import { useState } from "react";
import Chai from "./Chai";

function MyApp() {
  return (
    <h1>Custom app</h1>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <MyApp/>
    // <Chai />
  );
}

export default App;