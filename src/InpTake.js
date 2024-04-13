import React from "react";

const InpTake = (props) => {
  return (
    <React.Fragment>
      <div className="cpuinp">
        <img src={props.name} alt={props.name} />
        <p>{props.text}</p>
      </div>
    </React.Fragment>
  );
};
export default InpTake;
