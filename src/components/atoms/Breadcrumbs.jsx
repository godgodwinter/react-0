import { Link, useMatches } from "@tanstack/react-location";
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
export default Breadcrumbs;
