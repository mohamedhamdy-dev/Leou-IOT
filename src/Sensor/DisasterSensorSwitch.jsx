import naturalDisaster from "../assets/sensors/naturalDisaster.jpg";
import SwitchCustomStyles from "./SwitchCustomStyles";

function DisasterSensorSwitch() {
  return (
    <div className="rounded-xl bg-white p-1 pt-3">
      <p className="mb-5 text-center text-lg">Disaster Sensors</p>
      <img
        src={naturalDisaster}
        alt="Natural Disaster"
        className="mx-auto block w-96"
      />
      <div className="my-6 flex items-center justify-between px-5">
        <p>Detect Natural Disasters</p>
        <SwitchCustomStyles label="Natural Disaster" />
      </div>
    </div>
  );
}

export default DisasterSensorSwitch;
