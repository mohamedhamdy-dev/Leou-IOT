import React from "react";
import {
  BoltIcon,
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import ManualMenu from "./ManualMenu";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const navListItems = [
  {
    label: "Home",
    to: "Home",
    icon: HomeIcon,
  },
  {
    label: "Sensor",
    to: "Sensor",
    icon: BoltIcon,
  },
  {
    label: "Control",
    to: "Control",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    label: "Announcement",
    to: "Announcement",
    icon: BellAlertIcon,
  },
];

export default function NavList({ setIsNavOpen }) {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, to, icon }) => (
        <li key={label} onClick={() => setIsNavOpen(false)}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-1 rounded-full px-3 py-1 text-gray-900 duration-300 lg:justify-center ${
                isActive
                  ? "bg-black text-white" // active styles
                  : "hover:text-blue-violet-500" // hover only when not active
              }`
            }
          >
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span> {label}</span>
          </NavLink>
        </li>
      ))}
      <ManualMenu />
    </ul>
  );
}

NavList.propTypes = { setIsNavOpen: propTypes.func };
