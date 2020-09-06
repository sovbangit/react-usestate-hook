import React from "react";

function Mycomp(props) {
  return (
    <div>
      {" "}
      <p>
        {" "}
        Student : {props.firstname} {props.lastname}
      </p>{" "}
    </div>
  );
}

export default Mycomp;
