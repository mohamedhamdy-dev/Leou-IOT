import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import propTypes from "prop-types";

ChangePassword.propTypes = {
  open: propTypes.boolean,
  onClose: propTypes.func,
};

export default function ChangePassword({ open, onClose }) {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Dialog
      open={open}
      handler={onClose}
      className="rounded-2xl bg-white backdrop-blur-md"
    >
      <DialogHeader className="text-lg font-semibold text-gray-900">
        Change Password
      </DialogHeader>

      <DialogBody className="space-y-4 text-gray-900">
        {/* Current Password */}
        <div>
          <label className="text-sm text-gray-800">Current Password</label>
          <div className="flex items-center gap-2">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="••••••••"
              className="flex-1 rounded-lg border border-blue-violet-50 bg-blue-violet-50 p-2 pr-10 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="flex items-center justify-center text-blue-violet-900 duration-300 hover:text-black"
            >
              {showCurrent ? (
                <HiOutlineEyeSlash className="size-5" />
              ) : (
                <HiOutlineEye className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="text-sm text-gray-800">New Password</label>
          <div className="flex items-center gap-2">
            <input
              type={showNew ? "text" : "password"}
              placeholder="••••••••"
              className="flex-1 rounded-lg border border-blue-violet-50 bg-blue-violet-50 p-2 pr-10 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="flex items-center justify-center text-blue-violet-900 duration-300 hover:text-black"
            >
              {showNew ? (
                <HiOutlineEyeSlash className="size-5" />
              ) : (
                <HiOutlineEye className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-sm text-gray-800">Confirm New Password</label>
          <div className="flex items-center gap-2">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              className="flex-1 rounded-lg border border-blue-violet-50 bg-blue-violet-50 p-2 pr-10 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="flex items-center justify-center text-blue-violet-900 duration-300 hover:text-black"
            >
              {showConfirm ? (
                <HiOutlineEyeSlash className="size-5" />
              ) : (
                <HiOutlineEye className="size-5" />
              )}
            </button>
          </div>
        </div>
      </DialogBody>

      <DialogFooter className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="rounded-xl bg-red-900 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black active:translate-y-1"
        >
          Cancel
        </button>
        <button className="rounded-xl bg-blue-violet-900 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black active:translate-y-1">
          Save Changes
        </button>
      </DialogFooter>
    </Dialog>
  );
}
