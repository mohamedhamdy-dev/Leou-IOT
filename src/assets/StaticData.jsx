import {
  CubeTransparentIcon,
  FireIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

export const sensorsData = {
  internalEnvironment: [
    {
      sensorId: 1,
      sensorName: "Pir sensor",
      sensorIcon: (
        <CubeTransparentIcon className="size-16 text-blue-500 md:size-28 xl:size-36 2xl:size-28" />
      ),
      sensorDesc:
        "PIR sensor detects unauthorized motion in certain areas like burglary",
    },
    {
      sensorId: 2,
      sensorName: "Flame sensor",
      sensorIcon: (
        <FireIcon className="size-16 text-red-400 lg:size-20 xl:size-32 2xl:size-16" />
      ),
      sensorDesc: "Flame Sensor detects any fire or heat",
    },
    {
      sensorId: 3,
      sensorName: "Camera sensor",
      sensorIcon: <VideoCameraIcon className="size-16 md:size-[9rem]" />,
      sensorDesc:
        "The camera detects instances of individuals fainting or identifies the distress of helpless individuals",
    },
    {
      sensorId: 4,
      sensorName: "Gas sensor",
      sensorIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="size-16 fill-yellow-800 md:size-24"
        >
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
      ),
      sensorDesc:
        "Gas Sensor detects the presence of harmful gases in surrounding the area",
    },
  ],
  healthMontring: [
    {
      sensorId: 1,
      sensorName: "Heart Rate",
      sensorIcon: (
        <img
          src="/sensors/heartRate.png"
          alt="Heart Rate Icon"
          className="size-16 lg:size-20 xl:size-10"
        />
      ),
      sensorDesc: "Detect Heart Rate Stuff ",
    },
    {
      sensorId: 2,
      sensorName: "Oxygen Level",
      sensorIcon: (
        <img
          src="/sensors/oxygenLevel.png"
          alt="Oxygen Level Icon"
          className="size-16 lg:size-20 xl:size-10"
        />
      ),
      sensorDesc: "Detect The Oxgyen Level of Room",
    },
  ],
  // naturalDisaster: [
  //   {
  //     sensorId: 1,
  //     sensorName: "Heart Rate",
  //     sensorIcon: <img src={heartRate} className="size-14" />,
  //     sensorDesc:
  //       "PIR sensor detects unauthorized motion in certain areas like burglary",
  //   },
  // ],
};

// export const internalEnvironmentSensors = [
//   {
//     sensorId: 1,
//     sensorName: "Pir sensor",
//     sensorIcon: (
//       <CubeTransparentIcon className="size-16 text-blue-500 md:size-28" />
//     ),
//     sensorDesc:
//       "PIR sensor detects unauthorized motion in certain areas like burglary",
//   },
//   {
//     sensorId: 2,
//     sensorName: "Flame sensor",
//     sensorIcon: (
//       <FireIcon className="size-16 text-red-400 lg:size-20 xl:size-16" />
//     ),
//     sensorDesc: "Flame Sensor detects any fire or heat",
//   },
//   {
//     sensorId: 3,
//     sensorName: "Camera sensor",
//     sensorIcon: <VideoCameraIcon className="size-16 md:size-[9rem]" />,
//     sensorDesc:
//       "The camera detects instances of individuals fainting or identifies the distress of helpless individuals",
//   },
//   {
//     sensorId: 4,
//     sensorName: "Gas sensor",
//     sensorIcon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 512 512"
//         className="size-16 fill-yellow-800 md:size-24"
//       >
//         <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
//       </svg>
//     ),
//     sensorDesc:
//       "Gas Sensor detects the presence of harmful gases in surrounding the area",
//   },
// ];
