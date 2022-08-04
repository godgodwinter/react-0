//codesandbox.io/s/github/tanstack/react-location/tree/main/examples/kitchen-sink?file=/src/index.tsx
// https://react-location.tanstack.com/guides/route-loaders
import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";
import NavBar from "@/components/templates/landing/NavBarLanding";
import Footer from "@/components/templates/FooterOne";

import Home from "@/components/pages/HomeIndex";
import Posts from "@/components/pages/PostsIndex";

const location = new ReactLocation();

function App() {
  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "posts",
            element: <Posts />,
            pendingElement: async () => <div>Taking a long time...</div>,
            pendingMs: 1000 * 5, // 2 seconds
            pendingMinMs: 5000, // If it's shown, ensure the pending element is rendered for at least 500ms
          },
          {
            path: "/admin/pages/dashboard",
            element: <AdminLayout />,
            children: [
              { path: "/", element: "Ini dashboard" },
              {
                path: ":postId",
                element: "Ini Child",
              },
            ],
          },
        ]}
      >
        <div>
          <NavBar />
        </div>
        <hr />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </Router>
    </>
  );
}

const AdminLayout = () => {
  return (
    <>
      <div>AdminLayout</div>
      <div>
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="" activeOptions={{ exact: true }}>
              Dashboard
            </Link>
            <Link to="1" activeOptions={{ exact: true }}>
              Child
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
