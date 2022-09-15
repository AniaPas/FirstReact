import React, { useState } from "react";
import Label from "../Label/Label.js";
function Chebox(props) {
  const [checkbox, setChebox] = useState(props.checkbox);
  const [checked, setChecked] = useState(props.checked || false);
  const [idFor, setIdFor] = useState(props.idFor);
  const [name, setName] = useState(props.name || "no name");
  const [value, setValue] = useState(props.value || "no value");
  const [elements, setElements] = useState(props.item || ["no elements"]);
  const createCheckbox = () => {
    return elements.map((item) => {
      <>
        <Label for={idFor}>{item}</Label>
        <input type={checkbox} id={idFor} name={name} value={value} />
      </>;
    });
  };
  return <div>{createCheckbox()}</div>;
}

export default Chebox;
