import { sensorData } from "../utils/StaticData";
import SensorSwitch from "./SensorSwitch";

function Master() {
  return (
    <div className="min-h-80 basis-1/2 rounded-xl bg-white/30 p-3">
      <h2 className="mb-4 rounded-xl bg-white py-3 text-center text-xl text-gray-900">
        Master
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {sensorData.map((sensor) => (
          <SensorSwitch data={sensor} key={sensor.sensorId} />
        ))}
      </div>
    </div>
  );
}

export default Master;
