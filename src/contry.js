import React, { useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const Countries = [
  { label: "Albania", value: 1 },
  { label: "Canada", value: 2 },
  { label: "Austria", value: 3 },
  { label: "Cocos Islands", value: 4 },
  { label: "India", value: 5 },
  { label: "Sweden", value: 6 },
  { label: "Venezuela", value: 7 }
];

function Country() {
  const onhandlechange = (e) => {
    console.log(e.value);
    setCountry(e.value);
  };

  const [country, setCountry] = useState(2);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Select options={Countries} onChange={(e) => onhandlechange(e)} />
        </div>
        <div className="col-md-4">
          <p>
            You selected : {Countries.find((s) => s.value === country).label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
