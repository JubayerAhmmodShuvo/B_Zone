import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logout } from "../redux/features/authSlice";

const NavLink = ({
  to,
  exact,
  children,
  className,
  activeClassName,
}: NavLinkProps) => {
  const location = useLocation();
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to);

  return (
    <Link to={to} className={`${className} ${isActive ? activeClassName : ""}`}>
      {children}
    </Link>
  );
};

interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();

    dispatch(logout());

    navigate("/"); 
  };

  return (
    <nav className="navbar bg-accent sticky top-0 z-10 ">
        <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-red-500">B</span>_Zone
        </Link>
      </div>
      <div className="lg:flex-none flex-column space-x-4">
        <div className="space-x-6 font-semibold">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/allbooks" className="nav-link" activeClassName="active">
            All Books
          </NavLink>
          <NavLink to="/addbook" className="nav-link" activeClassName="active">
            Add Book
          </NavLink>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://i.pinimg.com/originals/e2/89/c9/e289c9c47305a270fe70deda8859b208.jpg"
              alt="Profile"
            />
          </div>
        </button>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-50 rounded-box w-52">
          <li>
            <h6>Account</h6>
          </li>
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout}>Sign Out</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
