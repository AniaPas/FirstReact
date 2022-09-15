import React, { useState } from "react";

function ButtonPrimary(props) {
  const [btnValue, setBtnValue] = useState(props.value || "no value");

  return (
    <>
      <button className='btn-secondary'>{btnValue.toUpperCase()}</button>
    </>
  );
}

export default ButtonPrimary;
