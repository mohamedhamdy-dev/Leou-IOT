import {
  LockClosedIcon,
  LightBulbIcon,
  MoonIcon,
  SunIcon,
  BoltIcon,
  ShieldExclamationIcon,
  WifiIcon,
  FireIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Control() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      {/* Header */}
      <div className="mt-8 space-y-2 rounded-2xl bg-white p-5">
        <header className="flex items-center justify-between">
          <h3 className="text-xl font-bold"> Quick Automation ⚡</h3>
          <p>{new Date().toLocaleDateString()}</p>
        </header>

        {/* Modes */}
        <div className="mt-1 flex flex-col gap-3 text-nowrap lg:flex-row lg:text-xs xl:text-sm">
          <button
            onClick={() => setSelected(1)}
            className={`flex flex-1 items-center justify-start gap-2 rounded-xl px-4 py-3 text-white duration-300 lg:justify-center ${selected === 1 ? "bg-blue-500" : "bg-black"} hover:bg-blue-500 active:translate-y-1`}
          >
            <HomeIcon className="size-6" /> Home Mode
          </button>
          <button
            onClick={() => setSelected(2)}
            className={`flex flex-1 items-center justify-start gap-2 rounded-xl px-6 py-3 text-white duration-300 lg:justify-center ${selected === 2 ? "bg-purple-500" : "bg-black"} hover:bg-purple-500 active:translate-y-1`}
          >
            <MoonIcon className="size-6" /> Sleep Routine
          </button>
          <button
            onClick={() => setSelected(3)}
            className={`flex flex-1 items-center justify-start gap-2 rounded-xl px-6 py-3 text-white duration-300 lg:justify-center ${selected === 3 ? "bg-orange-500" : "bg-black"} hover:bg-orange-500 active:translate-y-1`}
          >
            <SunIcon className="size-6" /> Away
          </button>
          <button
            onClick={() => setSelected(4)}
            className={`flex flex-1 items-center justify-start gap-2 rounded-xl px-6 py-3 text-white duration-300 lg:justify-center ${selected === 4 ? "bg-indigo-500" : "bg-black"} hover:bg-indigo-500 active:translate-y-1`}
          >
            <BoltIcon className="size-6" /> Power Save Mode
          </button>
          <button
            onClick={() => setSelected(5)}
            className={`flex flex-1 items-center justify-start gap-2 rounded-xl px-6 py-3 text-white duration-300 lg:justify-center ${selected === 5 ? "bg-green-500" : "bg-black"} hover:bg-green-500 active:translate-y-1`}
          >
            <ShieldExclamationIcon className="size-6" /> Emergency Lockdown
          </button>
        </div>
      </div>

      {/* Device Controls */}
      <div className="mt-8 space-y-4 rounded-xl bg-white/30 p-3">
        <p className="rounded-2xl bg-white py-6 text-center text-xl capitalize">
          Device Controls
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <LightBulbIcon className="h-8 w-8 text-yellow-400" />
            <p>Living Room Lights</p>
            <span className="text-sm text-gray-500">ON</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <LockClosedIcon className="h-8 w-8 text-gray-700" />
            <p>Main Door</p>
            <span className="text-sm text-gray-500">Locked</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <BoltIcon className="h-8 w-8 text-blue-500" />
            <p>Power Supply</p>
            <span className="text-sm text-gray-500">Stable</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <WifiIcon className="h-8 w-8 text-green-500" />
            <p>Wi-Fi</p>
            <span className="text-sm text-gray-500">Connected</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <FireIcon className="h-8 w-8 text-red-500" />
            <p>Heater</p>
            <span className="text-sm text-gray-500">OFF</span>
          </div>
        </div>
      </div>
    </>
  );
}
