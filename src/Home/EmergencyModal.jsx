import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import propTypes from "prop-types";

EmergencyModal.propTypes = {
  open: propTypes.boolean,
  handleOpen: propTypes.func,
};

export default function EmergencyModal({ open, handleOpen }) {
  const handleEmergencyTrigger = () => {
    // Trigger emergency alert logic here
    console.log("🚨 Emergency alert triggered!");
    handleOpen("emergency");
  };

  return (
    <Dialog
      open={open}
      handler={() => handleOpen("emergency")}
      className="rounded-2xl bg-white shadow-lg backdrop-blur-md"
    >
      <DialogHeader className="flex items-center gap-2 text-lg font-semibold text-gray-900">
        <ExclamationTriangleIcon className="size-6 text-red-900" />
        Emergency Call
      </DialogHeader>

      <DialogBody className="text-gray-700">
        <div className="mb-4 rounded-xl border-l-4 border-red-900 bg-red-50 p-3 text-sm text-red-900">
          ⚠️ This action will notify authorities and alert nearby users.
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>
            Use this only if you detect a critical emergency such as fire,
            medical distress, or gas leak.
          </p>
          <p>
            Once confirmed, the system will automatically send a signal to the
            nearest emergency contact center.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 md:flex-row">
          <button
            onClick={handleEmergencyTrigger}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-900 px-4 py-2 text-white duration-300 hover:bg-black active:scale-95"
          >
            <PhoneIcon className="size-5" />
            Trigger Alert
          </button>
          <button
            onClick={() => handleOpen("emergency")}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-900 px-4 py-2 text-white duration-300 hover:bg-black active:scale-95"
          >
            <ShieldCheckIcon className="size-5" />
            Cancel
          </button>
        </div>
      </DialogBody>

      <DialogFooter></DialogFooter>
    </Dialog>
  );
}
