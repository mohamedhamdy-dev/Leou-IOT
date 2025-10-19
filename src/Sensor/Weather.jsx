import { MapPinIcon } from "@heroicons/react/24/outline";

function Weather() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between rounded-2xl bg-white/95 p-3 px-6 md:flex-nowrap md:px-3 lg:px-6">
      <div className="order-1 mt-4 basis-full text-center sm:-order-none sm:mt-0 sm:basis-auto sm:text-start">
        <MapPinIcon className="inline-block size-10 text-blue-violet-800 sm:block" />
        Cairo
      </div>
      <div className="">
        <h3 className="mb-2 text-center text-xl">Current Weather</h3>
        <div className="flex flex-col items-start gap-2 rounded-xl bg-blue-violet-800 p-5 text-sm text-white md:flex-row md:text-xs lg:items-center lg:text-sm">
          <span className="md:border-r-[1px] md:border-white md:px-2">
            Wind speed : 15.0
          </span>
          <span className="md:border-r-[1px] md:border-white md:px-2">
            Wind direction : NW
          </span>
          <span className="md:border-r-[1px] md:border-white md:px-2">
            Wind degree : 320.0
          </span>
          <span>Pressure : 1005.0</span>
        </div>
      </div>

      <div className="flex size-24 items-center justify-center rounded-full bg-blue-violet-800 text-2xl text-white md:size-20 md:text-lg lg:size-24 lg:text-2xl">
        35.0 C
      </div>
    </div>
  );
}

export default Weather;
