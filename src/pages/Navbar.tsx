


import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

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

        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm bg-sky-200 text-black indicator-item">
                8
              </span>
            </div>
          </button>
          <div className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-slate-50 shadow">
            <div className="card-body">
              <span className="font-bold text-lg ">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
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
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

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

export default Navbar;
