import { Link, Outlet, useMatches } from "@tanstack/react-location";

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

export default AdminLayout;
