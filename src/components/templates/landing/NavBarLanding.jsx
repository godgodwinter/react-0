import { Link, MatchRoute } from "@tanstack/react-location";
import { useSelector, useDispatch } from "react-redux";
import {
  changeToCupcake,
  changeToWinter,
  changeToLuxury,
} from "@/stores/themesSlice";
// Set up a ReactLocation instance
const NavBar = () => {
  const thema = useSelector((state) => state.thema.value);
  const dispatch = useDispatch();
  return (
    <>
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
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/" activeOptions={{ exact: true }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="posts">
                    {" "}
                    posts{" "}
                    <MatchRoute to="posts" pending>
                      <Spinner />
                    </MatchRoute>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/pages/dashboard"
                    activeOptions={{ exact: true }}
                  >
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">BABENG-DEV</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">
              <li>
                <Link to="/" activeOptions={{ exact: true }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="posts">
                  {" "}
                  posts{" "}
                  <MatchRoute to="posts" pending>
                    <Spinner />
                  </MatchRoute>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/pages/dashboard"
                  activeOptions={{ exact: true }}
                >
                  Admin
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => dispatch(changeToCupcake())}
                >
                  Cupcake
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() => dispatch(changeToWinter())}
                >
                  Winter
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline btn-primary"
                  onClick={() => dispatch(changeToLuxury())}
                >
                  Luxury
                </button>
              </li>
              <li className="flex shadow-sm border-slate-300 rounded-lg border-2 px-2 mx-4 capitalize">
                <p>Thema Active : {thema}</p>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">"react": "^18.2.0"</a>
          </div>
        </div>
      </div>
    </>
  );
};

const Spinner = () => {
  return <>Loading. . . </>;
};

// function getActiveProps() {
//   return {
//     style: {
//       fontWeight: "bold",
//     },
//   };
// }
export default NavBar;
