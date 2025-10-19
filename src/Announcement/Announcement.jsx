import {
  BellIcon,
  CheckCircleIcon,
  MegaphoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function AnnouncementPage() {
  return (
    <>
      {/* Header */}
      <div className="mt-8 space-y-2 rounded-2xl bg-white p-5">
        <header className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Announcements 📢</h3>
          <p>{new Date().toLocaleDateString()}</p>
        </header>

        {/* Summary */}
        <div className="flex items-center justify-between rounded-xl bg-blue-violet-800 p-4">
          <p className="text-sm text-white sm:text-lg">
            Stay informed with the latest system updates
          </p>
          <MegaphoneIcon className="size-6 text-white" />
        </div>
      </div>

      {/* Announcements List */}
      <div className="mt-8 space-y-4 rounded-xl bg-white/30 p-3">
        <p className="rounded-2xl bg-white py-6 text-center text-xl capitalize">
          Latest Updates
        </p>

        <div className="space-y-3">
          {/* 3 - Software Update */}
          <div className="flex items-start gap-3 rounded-xl bg-white p-4">
            <CheckCircleIcon className="size-6 shrink-0 text-green-600" />
            <div>
              <p className="font-semibold text-green-600">
                Firmware Update v2.1 Released
              </p>
              <p className="text-sm text-gray-600">
                Improves accuracy of oxygen and heart rate sensors. Devices will
                auto-update overnight.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                19 Oct 2025 • 3:00 AM
              </p>
            </div>
          </div>
          {/* 4 - General Info */}
          <div className="flex items-start gap-3 rounded-xl bg-white p-4">
            <InformationCircleIcon className="size-6 shrink-0 text-blue-600" />
            <div>
              <p className="font-semibold text-blue-600">New Device Support</p>
              <p className="text-sm text-gray-600">
                Leou now supports SmartBand 360 — a wearable sensor for live
                oxygen and heart rate monitoring.
              </p>
              <p className="mt-1 text-xs text-gray-400">Yesterday</p>
            </div>
          </div>
          {/* 5 - Community / Safety Tip */}
          <div className="flex items-start gap-3 rounded-xl bg-white p-4">
            <BellIcon className="size-6 shrink-0 text-purple-600" />
            <div>
              <p className="font-semibold text-purple-600">Safety Reminder</p>
              <p className="text-sm text-gray-600">
                Test your smoke sensors weekly and ensure device batteries are
                above 50% for reliable operation.
              </p>
              <p className="mt-1 text-xs text-gray-400">This week</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
