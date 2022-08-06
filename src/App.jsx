//codesandbox.io/s/github/tanstack/react-location/tree/main/examples/kitchen-sink?file=/src/index.tsx
// https://react-location.tanstack.com/guides/route-loaders
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import routes from "@/routes/index";
import { useSelector } from "react-redux";

import NavBar from "@/components/templates/landing/NavBarLanding";
import Footer from "@/components/templates/FooterOne";
import Breadcrumbs from "@/components/atoms/Breadcrumbs";

const location = new ReactLocation();

function App() {
  const thema = useSelector((state) => state.thema.value);
  return (
    <>
      <div data-theme={thema} className="min-h-screen">
        <Router location={location} routes={routes}>
          <div>
            <NavBar />
          </div>
          <hr />
          <div className="min-h-screen">
            <div className="px-4 py-4 border-b-2 w-full flex justify-end">
              <Breadcrumbs />
            </div>
            <Outlet />
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
