import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import user from "@/data/user";
import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";

// Set up a ReactLocation instance
const location = new ReactLocation();
const dataUser = user.getAll();

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Index /> },
        { path: "posts", element: <Posts /> },
      ]}
    >
      <div>
        <Link
          to="/"
          getActiveProps={getActiveProps}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link to="posts" getActiveProps={getActiveProps}>
          Posts
        </Link>
      </div>
      <hr />
      <Outlet /> {/* Start rendering router matches */}
    </Router>
  );
}

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

function Posts() {
  return (
    <div>
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

function getActiveProps() {
  return {
    style: {
      fontWeight: "bold",
    },
  };
}

export default App;
