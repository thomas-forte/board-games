import { NavLink, Outlet, useLocation } from "react-router";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <nav className="w-full flex justify-between font-lato font-light uppercase text-2xl">
        {location.pathname === "/" ? (
          <NavLink
            to="/old"
            className={({ isActive }) =>
              isActive ? "underline underline-offset-4" : ""
            }
          >
            Old
          </NavLink>
        ) : (
          <div></div>
        )}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          Home
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
