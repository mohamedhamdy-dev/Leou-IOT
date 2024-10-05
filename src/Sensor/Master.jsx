import { sensorsData } from "../utils/StaticData";
import DisasterSensorSwitch from "./DisasterSensorSwitch";
import SensorSwitch from "./SensorSwitch";

function Master() {
  return (
    <div className="min-h-80 rounded-xl bg-white/30 p-3">
      <h2 className="mb-4 rounded-xl bg-white py-6 text-center text-xl text-gray-900">
        Master
      </h2>
      <div className="flex gap-8">
        <div>
          <h2 className="mb-4 rounded-xl bg-white py-3 text-center text-xl text-gray-900">
            Internal Sensors
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {sensorsData.internalEnvironment.map((sensor) => (
              <SensorSwitch data={sensor} key={sensor.sensorId} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 rounded-xl bg-white py-3 text-center text-xl text-gray-900">
            Health Montring
          </h2>
          <div className="flex flex-col gap-2">
            {sensorsData.healthMontring.map((sensor) => (
              <SensorSwitch data={sensor} key={sensor.sensorId} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 rounded-xl bg-white py-3 text-center text-xl text-gray-900">
            Natural Disaster
          </h2>
          <DisasterSensorSwitch />
        </div>
      </div>
    </div>
  );
}

export default Master;
