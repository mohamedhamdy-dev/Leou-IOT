import { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { IoCloseOutline } from "react-icons/io5";
import { FaTriangleExclamation } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function AlertsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);

  const alerts = [
    {
      id: 1,
      message: "Temperature sensor in Room 1 exceeded safe limit.",
      time: "2 mins ago",
      severity: "high",
    },
    {
      id: 2,
      message: "Humidity sensor in Greenhouse disconnected temporarily.",
      time: "15 mins ago",
      severity: "medium",
    },
    {
      id: 3,
      message: "Motion detected in restricted zone.",
      time: "1 hour ago",
      severity: "high",
    },
    {
      id: 4,
      message: "All sensors operational.",
      time: "3 hours ago",
      severity: "low",
    },
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-violet-900 antialiased duration-300 hover:bg-black hover:text-white active:translate-y-1"
      >
        View Alerts
      </button>

      {/* Alerts Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        size="md"
        className="rounded-2xl bg-blue-violet-800 backdrop-blur-md"
      >
        <DialogHeader className="flex justify-between text-lg font-semibold text-white">
          <span>System Alerts</span>
          <button onClick={handleOpen}>
            <IoCloseOutline className="size-7 duration-300 hover:rotate-180" />
          </button>
        </DialogHeader>

        <DialogBody className="max-h-80 overflow-y-auto px-2">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="mb-3 flex items-center gap-3 rounded-xl bg-white p-3"
            >
              {alert.severity === "low" && (
                <AiFillSafetyCertificate className="size-6 text-green-700" />
              )}
              {alert.severity === "medium" && (
                <FaTriangleExclamation className="size-5 text-yellow-700" />
              )}
              {alert.severity === "high" && (
                <GiElectric className="size-6 text-red-700" />
              )}

              <div>
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}
