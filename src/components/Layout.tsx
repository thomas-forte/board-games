import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <nav className="w-full flex justify-between font-lato font-light uppercase text-2xl">
        <NavLink
          to="/old"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4" : ""
          }
        >
          Old
        </NavLink>
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
