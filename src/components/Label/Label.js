import React, { useState } from "react";

function Label(props) {
  const [fors, setfor] = useState(props.for || null);
  const [text, setext] = useState(props.text || "No description");
  return (
    <>
      <label for={fors}>{text}</label>
    </>
  );
}
export default Label;
