import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { HiOutlineInboxArrowDown, HiOutlineUser } from "react-icons/hi2";

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { user, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: HiOutlineUser,

      buttonFunc: () => {
        closeMenu();
        navigate("/profile");
      },
    },

    {
      label: "Inbox",
      icon: HiOutlineInboxArrowDown,
      buttonFunc: () => {
        closeMenu();
        navigate("/inbox");
      },
    },

    {
      label: "Sign Out",
      icon: PowerIcon,
      buttonFunc: () => {
        setIsAuthenticated(false);
        closeMenu();
        navigate("/account/signin");
      },
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt={user.name}
            className="border border-green-600 p-0.5"
            src={user.avatar}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`size-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, buttonFunc }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={buttonFunc}
              // onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `size-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
