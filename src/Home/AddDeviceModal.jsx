import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { sensorsData } from "../assets/StaticData";
import propTypes from "prop-types";
import { RiAddBoxFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
AddDeviceModal.propTypes = {
  open: propTypes.boolean,
  handleOpen: propTypes.func,
};

export default function AddDeviceModal({ open, handleOpen }) {
  const allSensors = [
    ...sensorsData.internalEnvironment,
    ...sensorsData.healthMontring,
  ];

  const handleAddDevice = (sensorName) => {
    // Replace with your logic for adding a sensor device
    console.log(`${sensorName} added successfully`);
    handleOpen("add");
  };

  return (
    <Dialog
      open={open}
      handler={() => handleOpen("add")}
      className="rounded-2xl bg-blue-900 backdrop-blur-md 2xl:w-auto 2xl:min-w-[40%] 2xl:max-w-3xl"
    >
      <DialogHeader className="flex justify-between text-lg font-semibold text-white">
        <span> Add New Device</span>
        <button onClick={() => handleOpen("add")}>
          <IoCloseOutline className="size-7 duration-300 hover:rotate-180" />
        </button>
      </DialogHeader>

      <p className="p-5 pt-0 text-sm text-white">
        Select a sensor to add to your system:
      </p>

      <DialogBody className="max-h-[60vh] overflow-y-auto text-gray-700">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {allSensors.map((sensor) => (
            <li
              key={sensor.sensorId + sensor.sensorName}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 text-center"
            >
              <div className="flex flex-col items-center gap-1">
                <div className="">{sensor.sensorIcon}</div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {sensor.sensorName}
                </h3>
                <p className="text-nowrap text-xs text-gray-600">
                  {sensor.sensorDesc}
                </p>
              </div>
              <button
                onClick={() => handleAddDevice(sensor.sensorName)}
                className="mt-2 flex items-center gap-1 rounded-full border border-black bg-black px-4 py-1.5 text-xs text-white duration-300 hover:bg-white hover:text-black active:translate-y-1"
              >
                <RiAddBoxFill className="size-5" />
                Add
              </button>
            </li>
          ))}
        </ul>
      </DialogBody>
    </Dialog>
  );
}
