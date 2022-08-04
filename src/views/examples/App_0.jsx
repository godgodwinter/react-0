import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import user from "@/data/user";

function App() {
  const [count, setCount] = useState(0);
  const dataUser = user.getAll();

  return (
    <div className="App">
      <div>
        {dataUser.map((item) => (
          <div key={item.id}>
            <div className="flex px-4 space-x-2">
              <h1>{item.name}</h1>
              <p>{item.age}</p>
            </div>
          </div>
        ))}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
