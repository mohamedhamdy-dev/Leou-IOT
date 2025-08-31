import React, { useState } from "react";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { isAuthenticated } = useAuth();

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
        <NavLink to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-black">
            <img src="/logo.png" alt="LeoU's IOT Logo" className="size-14" />
          </div>
          <h1 className="text-base italic text-deep-purple-900">
            LeoU&apos;s IOT
          </h1>
        </NavLink>
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

        {isAuthenticated ? (
          <ProfileMenu />
        ) : (
          <NavLink to={"/account/signin"}>Log In</NavLink>
        )}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList setIsNavOpen={setIsNavOpen} />
      </Collapse>
    </Navbar>
  );
}
