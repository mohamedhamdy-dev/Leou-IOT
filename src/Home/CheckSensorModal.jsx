import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

import propTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

CheckSensorModal.propTypes = {
  open: propTypes.boolean,
  handleOpen: propTypes.func,
};

export default function CheckSensorModal({ open, handleOpen }) {
  // Sample statuses for illustration
  const sensorStatusList = [
    {
      id: 1,
      name: "PIR Sensor",
      status: "Active",
      health: "Good",
      color: "green",
    },
    {
      id: 2,
      name: "Flame Sensor",
      status: "Warning",
      health: "Check",
      color: "yellow",
    },
    {
      id: 3,
      name: "Camera Sensor",
      status: "Active",
      health: "Stable",
      color: "green",
    },
    {
      id: 4,
      name: "Gas Sensor",
      status: "Alert",
      health: "Critical",
      color: "red",
    },
    {
      id: 5,
      name: "Heart Rate Monitor",
      status: "Active",
      health: "Good",
      color: "green",
    },
    {
      id: 6,
      name: "Oxygen Level Monitor",
      status: "Offline",
      health: "N/A",
      color: "gray",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <CheckCircleIcon className="size-5 text-green-900" />;
      case "Warning":
        return <ExclamationTriangleIcon className="size-5 text-yellow-900" />;
      case "Alert":
        return <BoltIcon className="size-5 text-red-900" />;
      case "Offline":
        return <XCircleIcon className="size-5 text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      handler={() => handleOpen("check")}
      className="rounded-2xl bg-gray-900 backdrop-blur-md"
    >
      <DialogHeader className="flex justify-between text-lg font-semibold text-white">
        <span> Check Sensor Status</span>
        <button onClick={() => handleOpen("check")}>
          <IoCloseOutline className="size-7 duration-300 hover:rotate-180" />
        </button>
      </DialogHeader>

      <p className="p-5 pt-0 text-sm text-white">
        View all connected sensors and their current health state.
      </p>

      <DialogBody className="max-h-[60vh] overflow-y-auto text-gray-700">
        <ul className="space-y-3">
          {sensorStatusList.map((sensor) => (
            <li
              key={sensor.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(sensor.status)}
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {sensor.name}
                  </p>
                  <p className="text-xs text-gray-700">
                    Health: {sensor.health}
                  </p>
                </div>
              </div>

              <span
                className={`rounded-lg px-3 py-1 text-xs font-semibold capitalize text-white ${
                  sensor.color === "green"
                    ? "bg-green-900"
                    : sensor.color === "yellow"
                      ? "bg-yellow-900"
                      : sensor.color === "red"
                        ? "bg-red-900"
                        : "bg-gray-600"
                }`}
              >
                {sensor.status}
              </span>
            </li>
          ))}
        </ul>
      </DialogBody>
    </Dialog>
  );
}
