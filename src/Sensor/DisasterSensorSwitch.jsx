import naturalDisaster from "../assets/sensors/naturalDisaster.jpg";
import SwitchCustomStyles from "./SwitchCustomStyles";

function DisasterSensorSwitch() {
  return (
    <div className="rounded-xl bg-white p-1 pt-2">
      <p className="mb-5 text-center text-lg">Disasters Sensor</p>
      <img src={naturalDisaster} alt="Natural Disaster" className="w-96" />
      <div className="my-3 flex items-center justify-between px-2">
        <p>Detect Natural Sensors</p>
        <SwitchCustomStyles label="Natural Disaster" />
      </div>
    </div>
  );
}

export default DisasterSensorSwitch;
