import propTypes from "prop-types";
import SwitchCustomStyles from "./SwitchCustomStyles";
export default function SensorSwitch({ data }) {
  const { sensorName, sensorIcon, sensorDesc } = data;

  return (
    <div className="max-w- flex max-h-none min-h-[128px] max-w-80 flex-col items-center gap-2 rounded-2xl bg-white/90 p-2 py-10 md:max-h-32 md:flex-row md:justify-start md:py-2 lg:max-w-none lg:px-4 xl:max-w-80 xl:px-2">
      {sensorIcon}
      <div className="mb-auto text-balance text-center md:mb-0 md:mr-auto md:text-start">
        <p className="text-nowrap text-lg">{sensorName}</p>
        <p className="text-xs">{sensorDesc}</p>
      </div>
      <SwitchCustomStyles label={sensorName} />
    </div>
  );
}

SensorSwitch.propTypes = { data: propTypes.object };
