import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";
import { NavLink } from "react-router-dom";
import { useUser } from "../Context/userProvider";
import logo from "../assets/account/SDS.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { logged } = useUser();

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mt-4 bg-white/95 px-4 py-3 lg:rounded-xl">
      <div className="relative mx-auto flex items-center justify-between text-gray-900">
        {/* <span className="ml-2 mr-4 cursor-pointer py-1.5 font-medium">SDS</span> */}
        <img src={logo} alt="SDS Logo" className="ml-2 mr-4 size-12" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="size-6" />
        </IconButton>

        {logged ? (
          <ProfileMenu />
        ) : (
          <NavLink to={"account/signin"}>Log In</NavLink>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList setIsNavOpen={setIsNavOpen} />
      </Collapse>
    </Navbar>
  );
}

//////////////////////////////////////////
//////////    Nav List
