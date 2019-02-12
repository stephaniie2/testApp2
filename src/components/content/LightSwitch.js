import React from "react";
import "./LightSwitch.css";

const LightSwitch = () => {
  const [isOn, toggle] = React.useState(false);
  return (
    <div>
      <button onClick={() => toggle(state => !state)}>
        Light is {isOn ? "on" : "off"}
      </button>
      <div className={isOn ? "bg-light light-on" : "bg-light light-off"} />
    </div>
  );
};

export default LightSwitch;
