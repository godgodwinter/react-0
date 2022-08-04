//codesandbox.io/s/github/tanstack/react-location/tree/main/examples/kitchen-sink?file=/src/index.tsx
// https://react-location.tanstack.com/guides/route-loaders
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
    <>
      <Router
        location={location}
        routes={[
          { path: "/", element: <Index /> },
          { path: "posts", element: <Posts /> },
        ]}
      >
        <div>
          <NavBar />
          {/* <Link
            to="/"
            getActiveProps={getActiveProps}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>{" "}
          <Link to="posts" getActiveProps={getActiveProps}>
            Posts
          </Link> */}
        </div>
        <hr />
        <div className="min-h-screen">
          <Outlet /> {/* Start rendering router matches */}
        </div>
        <Footer />
      </Router>
    </>
  );
}

function Index() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <article className="prose lg:prose-xl py-20">
              <h1>Garlic bread with cheese: What the science tells us</h1>
              <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
              </p>
              <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div>
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center py-10">
        {dataUser.map((item) => (
          <div key={item.id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl first:py-10  hover:shadow-2xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>
                  If a dog chews shoes whose shoes does he choose? {item.age}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  getActiveProps={getActiveProps}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="posts" getActiveProps={getActiveProps}>
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BABENG-DEV</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                to="/"
                getActiveProps={getActiveProps}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="posts" getActiveProps={getActiveProps}>
                Posts
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </footer>
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
