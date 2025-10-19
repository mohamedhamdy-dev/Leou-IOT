import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  WifiIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  {
    id: 1,
    title: "Build V1",
    description:
      "The first prototype with core sensor monitoring and alerting features.",
  },
  {
    id: 2,
    title: "Build V2",
    description:
      "Refined interface, added medical sensor integration and real-time updates.",
  },
  {
    id: 3,
    title: "Build V3",
    description:
      "Current build with control center, automation, and cloud sync features.",
  },
];

export default function ManualMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ id, title, description }) => (
    <a href="#" key={id}>
      <MenuItem>
        <p className="mb-1 text-gray-900">{title}</p>
        <p className="font-normal text-gray-900">{description}</p>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <a href="#" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-gray-900" />{" "}
              Manual
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </a>
        </MenuHandler>
        <MenuList className="mt-4 hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <div className="col-span-3 grid h-full w-full place-items-center rounded-md bg-blue-violet-500 text-white">
            <WifiIcon strokeWidth={1} className="size-28" />
          </div>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Manual
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </>
  );
}
