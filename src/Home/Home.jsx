import { HeartIcon, BellAlertIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  CloudIcon,
  FireIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import AddDeviceModal from "./AddDeviceModal";
import CheckSensorModal from "./CheckSensorModal";
import EmergencyModal from "./EmergencyModal";
import { RiAddBoxFill } from "react-icons/ri";
import AlertsModal from "./AlertsModal";

export default function Home() {
  return <HomePage />;
}

function HomePage() {
  return (
    <>
      {/* Header */}
      <div className="mt-8 space-y-2 rounded-2xl bg-white p-5">
        <header className="flex items-center justify-between">
          <h3 className="text-xl font-bold"> Hi Mohamed 👋</h3>
          <p className="">{new Date().toLocaleDateString()}</p>
        </header>

        {/* Overall Status */}
        <div className="flex items-center justify-between rounded-xl bg-blue-violet-800 p-4">
          <p className="text-lg font-semibold text-white">
            ✅ All systems safe
          </p>
          <AlertsModal />
        </div>
      </div>

      <div className="mt-8 space-y-4 rounded-xl bg-white/30 p-3">
        <p className="rounded-2xl bg-white py-6 text-center text-xl capitalize">
          Recent Status
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <HeartIcon className="size-12 text-red-500" />
            <div>
              <p>78 bpm</p>
              <p>Heart Rate</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <CloudIcon className="size-12 text-blue-500" />
            <div>
              <p>96%</p>
              <p>Oxygen</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <FireIcon className="size-12 text-red-400" />
            <div>
              <p>Safe</p>
              <p>Fire Sensor</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-md">
            <ShieldCheckIcon className="size-12 text-green-500" />
            <div>
              <p>Good</p>
              <p>Air Quality</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <p className="rounded-2xl bg-white py-6 text-center text-xl capitalize">
          Quick Action
        </p>
        <ActionButtons />
      </div>
    </>
  );
}

function ActionButtons() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);
  const [openEmergency, setOpenEmergency] = useState(false);

  const handleOpen = (type) => {
    if (type === "add") setOpenAdd(!openAdd);
    if (type === "check") setOpenCheck(!openCheck);
    if (type === "emergency") setOpenEmergency(!openEmergency);
  };

  return (
    <div className="flex flex-col gap-6 p-6 md:flex-row">
      {/* Add Device Button */}
      <button
        onClick={() => handleOpen("add")}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-900 px-6 py-3 text-white duration-300 hover:bg-white hover:text-black active:translate-y-1"
      >
        <RiAddBoxFill className="size-5" />
        Add Device
      </button>

      {/* Check Sensors Button */}
      <button
        onClick={() => handleOpen("check")}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white duration-300 hover:bg-white hover:text-black active:translate-y-1"
      >
        <BellAlertIcon className="size-5" />
        Check Sensors
      </button>

      {/* Emergency Call Button */}
      <button
        onClick={() => handleOpen("emergency")}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-900 px-6 py-3 text-white duration-300 hover:bg-white hover:text-black active:translate-y-1"
      >
        <PhoneIcon className="size-5" />
        Emergency Call
      </button>

      <AddDeviceModal open={openAdd} handleOpen={handleOpen} />
      <CheckSensorModal open={openCheck} handleOpen={handleOpen} />
      <EmergencyModal open={openEmergency} handleOpen={handleOpen} />
    </div>
  );
}
