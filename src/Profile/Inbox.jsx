import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineArchiveBox,
  HiOutlineEnvelopeOpen,
  HiOutlineTrash,
} from "react-icons/hi2";

export default function Inbox() {
  const [selectedId, setSelectedId] = useState(null);

  const messages = [
    {
      id: 1,
      sender: "LeoU System",
      subject: "Temperature Sensor Alert",
      preview: "Room 1 sensor exceeded the safe limit.",
      time: "5 mins ago",
      read: false,
      type: "alert",
    },
    {
      id: 2,
      sender: "System Admin",
      subject: "Firmware Update Complete",
      preview: "Your IoT devices were updated successfully.",
      time: "2 hours ago",
      read: true,
      type: "info",
    },
    {
      id: 3,
      sender: "Support",
      subject: "Response to your inquiry",
      preview: "Thank you for contacting support. Here's what we found...",
      time: "1 day ago",
      read: true,
      type: "support",
    },
  ];

  const selectedMessage = messages.find((msg) => msg.id === selectedId);

  return (
    <div className="mt-8 flex flex-col gap-6 rounded-2xl bg-white/40 p-6 shadow-sm backdrop-blur-md md:grid-cols-3 lg:flex-row">
      {/* Inbox List */}
      <div className="min-h-[28.125rem] basis-2/5 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Inbox</h2>
          <HiOutlineMail className="size-6 text-blue-violet-500" />
        </div>

        <div className="max-h-[450px] space-y-3 overflow-y-auto">
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setSelectedId(msg.id)}
              className={`w-full rounded-lg p-3 text-left duration-200 ${
                msg.id === selectedId
                  ? "border border-blue-violet-300 bg-blue-violet-500/10"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-sm font-medium ${
                    msg.read ? "text-gray-600" : "text-blue-violet-700"
                  }`}
                >
                  {msg.subject}
                </h3>
                <span className="text-xs text-gray-500">{msg.time}</span>
              </div>
              <p className="truncate text-xs text-gray-500">{msg.preview}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Message Viewer */}
      <div className="flex basis-3/5 flex-col rounded-xl bg-white p-4 shadow-md">
        {selectedMessage ? (
          <>
            <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {selectedMessage.subject}
                </h3>
                <p className="text-sm text-gray-500">
                  From: {selectedMessage.sender}
                </p>
              </div>
              <div className="flex gap-3 text-gray-500">
                <HiOutlineEnvelopeOpen className="size-5 cursor-pointer hover:text-blue-violet-500" />
                <HiOutlineArchiveBox className="size-5 cursor-pointer hover:text-green-500" />
                <HiOutlineTrash className="size-5 cursor-pointer hover:text-red-500" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto text-sm leading-relaxed text-gray-700">
              <p className="mb-3">
                Hello Mohamed,
                <br />
                This is a system message from your IoT monitoring dashboard.
              </p>
              <p>
                {selectedMessage.type === "alert" && (
                  <>
                    The temperature sensor in **Room 1** exceeded the safety
                    threshold (35°C). Please check the device immediately.
                  </>
                )}
                {selectedMessage.type === "info" && (
                  <>
                    Your devices have been updated to the latest firmware
                    version successfully. No further action is required.
                  </>
                )}
                {selectedMessage.type === "support" && (
                  <>
                    Thank you for reaching out to support. We’ve reviewed your
                    request and confirmed that your account configuration is now
                    stable. If you have further questions, feel free to reply.
                  </>
                )}
              </p>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-500">
            <HiOutlineMail className="mb-2 size-10 text-blue-violet-500" />
            <p>Select a message to view its details</p>
          </div>
        )}
      </div>
    </div>
  );
}
