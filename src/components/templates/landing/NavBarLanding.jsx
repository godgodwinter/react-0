import { Link, MatchRoute } from "@tanstack/react-location";
import { useSelector, useDispatch } from "react-redux";
import {
  changeToCupcake,
  changeToWinter,
  changeToLuxury,
} from "@/stores/themesSlice";

const LInk = [
  {
    id: 1,
    name: "home",
    url: "/",
    label: "home",
    icon: "home",
    active: true,
    tipe: "default",
  },
  {
    id: 2,
    name: "form",
    url: "/examples/form",
    label: "form",
    icon: "form",
    active: true,
    tipe: "lazy",
  },
  {
    id: 3,
    name: "posts",
    url: "/posts",
    label: "posts",
    icon: "posts",
    active: true,
    tipe: "default",
  },
  {
    id: 4,
    name: "admin",
    url: "/admin/pages/dashboard",
    label: "admin",
    icon: "admin",
    active: true,
    tipe: "default",
  },
];

// Set up a ReactLocation instance
const NavBar = () => {
  const thema = useSelector((state) => state.thema.value);
  const dispatch = useDispatch();

  const Theme = [
    {
      label: "cupcake",
      fn: () => dispatch(changeToCupcake()),
      style: "btn btn-outline btn-success",
    },
    {
      label: "Winter",
      fn: () => dispatch(changeToWinter()),
      style: "btn btn-outline btn-primary",
    },
    {
      label: "Luxury",
      fn: () => dispatch(changeToLuxury()),
      style: "btn btn-outline btn-warning",
    },
  ];
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
                {LInk.map((item) => (
                  <li key={item.id}>
                    <LinkButton {...item} />
                  </li>
                ))}
                {Theme.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={item.fn}
                      className={item.style}
                      type="button"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="flex shadow-sm border-slate-300 rounded-lg border-2 px-2 mx-4 capitalize">
                  <p>Thema Active : {thema}</p>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">BABENG-DEV</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">
              {LInk.map((item) => (
                <li key={item.id}>
                  <LinkButton {...item} />
                </li>
              ))}
              {Theme.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.fn}
                    className={item.style}
                    type="button"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
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

const LinkButton = (props) => {
  if (props.tipe === "default") {
    return <NavDefault {...props} />;
  }
  if (props.tipe === "lazy") {
    return <NavLazy {...props} />;
  }
};

const NavDefault = (props) => {
  return (
    <>
      <Link
        to={props.url}
        activeOptions={{ exact: props.active }}
        className="capitalize"
      >
        {props.label}
      </Link>
    </>
  );
};
const NavLazy = (props) => {
  return (
    <>
      <Link to={props.url} className="capitalize">
        {props.label}
        <MatchRoute to={props.url} pending>
          <Spinner />
        </MatchRoute>
      </Link>
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
