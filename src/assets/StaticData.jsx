import { BsFire } from "react-icons/bs";
import { GiGasMask } from "react-icons/gi";
import { PiSecurityCameraFill, PiSneakerMove } from "react-icons/pi";

export const sensorsData = {
  internalEnvironment: [
    {
      sensorId: 1,
      sensorName: "PIR Sensor",
      sensorIcon: <PiSneakerMove className="size-10 text-gray-800" />,
      sensorDesc: "Detects motion or intrusion.",
    },
    {
      sensorId: 2,
      sensorName: "Camera Sensor",
      sensorIcon: <PiSecurityCameraFill className="size-10 text-blue-800" />,
      sensorDesc: "Monitors and detects distress events.",
    },
    {
      sensorId: 3,
      sensorName: "Flame Sensor",
      sensorIcon: <BsFire className="size-10 text-red-400" />,
      sensorDesc: "Detects fire or heat sources.",
    },

    {
      sensorId: 4,
      sensorName: "Gas Sensor",
      sensorIcon: <GiGasMask className="size-10 text-green-900" />,
      sensorDesc: "Detects harmful gases nearby.",
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
          className="size-10"
        />
      ),
      sensorDesc: "Tracks heart rate levels.",
    },
    {
      sensorId: 2,
      sensorName: "Oxygen Level",
      sensorIcon: (
        <img
          src="/sensors/oxygenLevel.png"
          alt="Oxygen Level Icon"
          className="size-10"
        />
      ),
      sensorDesc: "Measures oxygen saturation.",
    },
  ],
};
