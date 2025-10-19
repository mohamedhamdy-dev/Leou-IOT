import { useState } from "react";
import {
  HiMiniArrowRightOnRectangle,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import ChangePassword from "./ChangePassword";
import { useAuth } from "../Context/AuthProvider";
import ProfileImage from "./ProfileImage";

export default function Profile() {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const { user, setIsAuthenticated } = useAuth();

  return (
    <div className="mt-8 space-y-6 rounded-2xl bg-white/30 p-6">
      {/* Header */}
      <ProfileImage user={user} />

      {/* Edit Info Section */}
      <div className="space-y-4 rounded-xl bg-white p-5 shadow-md">
        <h3 className="text-lg font-semibold text-gray-800">
          Edit Information
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              defaultValue="Mohamed Hamdy"
              className="rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              defaultValue={user.email}
              className="rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
          </div>

          {/* Change Password Button */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Password</label>
            <button
              onClick={() => setOpenChangePassword(true)}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm text-blue-violet-600 duration-200 hover:bg-blue-violet-50"
            >
              <HiOutlineLockClosed className="size-5" />
              Change Password
            </button>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="tel"
              defaultValue={user.phone}
              className="rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm outline-none focus:border-blue-violet-500 focus:bg-white"
            />
          </div>
        </div>

        <button className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-violet-800 px-6 py-2 text-white duration-300 hover:bg-black active:translate-y-1">
          <HiOutlinePencilSquare className="size-5" />
          Save Changes
        </button>
      </div>

      {/* Account Actions */}
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          onClick={() => {
            setIsAuthenticated(false);
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-2 text-white duration-300 hover:bg-white hover:text-black active:translate-y-1"
        >
          <HiMiniArrowRightOnRectangle className="size-5" />
          Log Out
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-800 px-6 py-2 text-white duration-300 hover:bg-white hover:text-black active:translate-y-1">
          <HiOutlineTrash className="size-5" />
          Delete Account
        </button>
      </div>

      <ChangePassword
        open={openChangePassword}
        onClose={() => setOpenChangePassword(false)}
      />
    </div>
  );
}
