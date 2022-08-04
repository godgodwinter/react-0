//codesandbox.io/s/github/tanstack/react-location/tree/main/examples/kitchen-sink?file=/src/index.tsx
// https://react-location.tanstack.com/guides/route-loaders
import {
  Link,
  Outlet,
  ReactLocation,
  Router,
  useMatches,
} from "@tanstack/react-location";
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
            meta: {
              breadcrumb: () => "Home",
            },
          },
          {
            path: "posts",
            element: <Posts />,
            pendingElement: async () => <div>Taking a long time...</div>,
            pendingMs: 1000 * 5, // 2 seconds
            pendingMinMs: 5000, // If it's shown, ensure the pending element is rendered for at least 500ms
            meta: {
              breadcrumb: () => "Posts",
            },
          },
          {
            path: "/admin/pages/dashboard",
            element: <AdminLayout />,
            meta: {
              breadcrumb: () => "Admin",
            },
            children: [
              {
                path: "/",
                element: "Ini dashboard",
                meta: {
                  breadcrumb: () => " Dashboard",
                },
              },
              {
                path: ":postId",
                element: "Ini Child",
                meta: {
                  breadcrumb: () => " Child",
                },
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
          <div className="px-4 py-4 border-b-2 w-full">
            <Breadcrumbs />
          </div>
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
            <Link to="/posts" activeOptions={{ exact: true }}>
              Back to Posts Landing
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
function Breadcrumbs() {
  const matches = useMatches();

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {matches

          // skip routes that don't have a breadcrumb, like is the case of our '/' route

          .filter((match) => (match.route ? match.route.meta.breadcrumb : null))

          .map((match) => (
            <li key={match.pathname}>
              <Link to={match.pathname}>
                {match.route.meta
                  ? match.route.meta.breadcrumb(match.params)
                  : null}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
