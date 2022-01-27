import React from 'react';
import { BiBarChart, BiBook, BiHome, BiLayer, BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const navBtnClass = 'rounded py-3 px-8 flex items-center w-full';
  const navBtnClassActive = ({ isActive }) =>
    `${
      isActive
        ? 'text-white bg-black shadow-2xl hover:bg-black hover:opacity-90 rounded-r'
        : 'hover:bg-gray-100 rounded-r'
    }`;

  return (
    <div
      className={`sticky h-screen bg-gray-50 text-black top-0 flex ${
        location.pathname !== '/' ? 'flex-col' : ''
      } `}
    >
      <NavLink to="/" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiHome />
          <span className="ml-2">Home</span>
        </button>
      </NavLink>
      <NavLink to="/dashboard" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiBarChart />
          <span className="ml-2">Dashboard</span>
        </button>
      </NavLink>
      <NavLink to="/invoices" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiBook />
          <span className="ml-2">Invoices</span>
        </button>
      </NavLink>
      <NavLink to="/documents" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiLayer />
          <span className="ml-2">Documents</span>
        </button>
      </NavLink>
      <NavLink to="/companies" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiUser />
          <span className="ml-2">Companies</span>
        </button>
      </NavLink>
      <NavLink to="/logout" className={navBtnClassActive}>
        <button className={navBtnClass}>
          <BiUser />
          <span className="ml-2">Logout</span>
        </button>
      </NavLink>
    </div>
  );
}
