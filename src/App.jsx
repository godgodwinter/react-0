//codesandbox.io/s/github/tanstack/react-location/tree/main/examples/kitchen-sink?file=/src/index.tsx
// https://react-location.tanstack.com/guides/route-loaders
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
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
          { path: "/", element: <Home /> },
          { path: "posts", element: <Posts /> },
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

export default App;
