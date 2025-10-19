import { useState, useCallback } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { HiOutlineCamera } from "react-icons/hi2";
import propTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";
import { TbCloudUpload } from "react-icons/tb";
ProfileAvatar.propTypes = { user: propTypes.object };

export default function ProfileAvatar({ user }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = () => setOpen(!open);

  // handle dropped files
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }, []);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="mx-auto flex w-fit flex-col items-center justify-center rounded-2xl bg-white p-6 text-center">
        <div className="relative">
          <img
            src={selectedImage || user.avatar}
            alt={user.name}
            className="size-28 rounded-full border-2 border-blue-violet-800 object-cover shadow-md"
          />
          <button
            onClick={handleOpen}
            className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-blue-violet-700 p-2 text-gray-900 shadow-md duration-200 hover:bg-blue-violet-900"
          >
            <HiOutlineCamera className="size-5 text-white" />
          </button>
        </div>
        <h2 className="mt-3 text-xl font-semibold text-gray-900">
          {user.name}
        </h2>
        <p className="text-sm text-gray-800">{user.email}</p>
      </div>

      {/* Upload Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        size="xs"
        className="!w-[340px] min-w-0 rounded-2xl bg-white shadow-lg backdrop-blur-md sm:min-w-0 md:min-w-0 lg:min-w-0 xl:min-w-0 2xl:min-w-0"
      >
        <DialogHeader className="flex justify-between text-lg font-semibold">
          <span> Change Profile Picture</span>
          <button onClick={handleOpen}>
            <IoCloseOutline className="size-7 duration-300 hover:rotate-180" />
          </button>
        </DialogHeader>

        <DialogBody
          className="flex flex-col items-center justify-center gap-4 text-gray-800"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <label
            htmlFor="fileInput"
            className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-violet-400 bg-gray-50/80 p-6 text-center text-sm duration-200 hover:bg-gray-100"
          >
            <TbCloudUpload className="mb-2 size-10 text-blue-violet-600" />

            <p className="font-medium text-gray-800">
              Drag & Drop your image here or click to upload
            </p>
            <p className="mt-1 text-xs text-gray-600">
              PNG, JPG, JPEG up to 5MB
            </p>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </label>

          {selectedImage && (
            <div className="mt-3">
              <img
                src={selectedImage}
                alt="Preview"
                className="mx-auto size-28 rounded-full border border-blue-violet-900 object-cover shadow-md"
              />
              <p className="mt-2 text-center text-xs text-gray-800">
                Preview of your new avatar
              </p>
            </div>
          )}
        </DialogBody>

        <DialogFooter className="flex justify-end gap-3">
          <button
            className="rounded-xl bg-blue-violet-900 px-4 py-2 text-sm font-medium text-white duration-300 hover:bg-black active:scale-95"
            onClick={() => {
              // simulate save action
              handleOpen();
              console.log("Avatar updated:", selectedImage);
            }}
          >
            Save Avatar
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
