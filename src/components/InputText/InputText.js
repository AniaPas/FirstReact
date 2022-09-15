import React, { useState } from "react";
import Label from "../Label/Label.js";

function InputText(props) {
  const [idFor, setIdFor] = useState(props.idFor);
  const [placeholderText, setplaceholder] = useState(
    props.placeholder || "no description"
  );
  const [tekst, setTekst] = useState(props.text || "no description");
  return (
    <>
      <Label for={idFor} tekst={tekst}></Label>
      <input type={tekst} id={idFor} placeholder={placeholderText} />
    </>
  );
}

export default InputText;
