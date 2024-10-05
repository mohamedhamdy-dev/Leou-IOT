import { Switch } from "@material-tailwind/react";
import propTypes from "prop-types";
export default function SwitchCustomStyles({ label }) {
  return (
    <Switch
      // label={label}
      // id="custom-switch-component"
      ripple={false}
      className="h-full w-full checked:bg-blue-violet-500"
      containerProps={{
        className: "w-8 h-4",
      }}
      circleProps={{
        className: "before:hidden left-0.5 border-none w-4 h-4",
      }}
    />
  );
}

SwitchCustomStyles.propTypes = {
  label: propTypes.string,
};
