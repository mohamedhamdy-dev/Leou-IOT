import { Switch } from "@material-tailwind/react";
import propTypes from "prop-types";
export default function SensorSwitch({ data }) {
  const { sensorName, sensorIcon, sensorDesc } = data;

  return (
    <div className="flex max-h-none flex-col items-center gap-2 rounded-2xl bg-white/90 p-2 py-10 md:max-h-32 md:flex-row md:justify-start md:py-2 lg:px-4 xl:px-2">
      {sensorIcon}
      <div className="mb-auto text-balance text-center md:mb-0 md:mr-auto md:text-start">
        <p className="text-lg">{sensorName}</p>
        <p className="text-xs">{sensorDesc}</p>
      </div>
      <SwitchCustomStyles />
    </div>
  );
}

function SwitchCustomStyles() {
  return (
    <Switch
      id="custom-switch-component"
      ripple={false}
      className="checked:bg-blue-violet-500 h-full w-full"
      containerProps={{
        className: "w-8 h-4",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none w-4 h-4",
      }}
    />
  );
}

SensorSwitch.propTypes = { data: propTypes.object };
