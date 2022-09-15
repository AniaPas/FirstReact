import React, { useState } from "react";

function Heading(props) {
  const [level, setLevel] = useState(props.level || 6);
  const [text, setText] = useState(props.text || "No heading");
  const makeLevel = () => {
    switch (level) {
      case 1:
        return <h1>{text}</h1>;
      case 2:
        return <h2>{text}</h2>;
      case 3:
        return <h3>{text}</h3>;
      case 4:
        return <h4>{text}</h4>;
      case 5:
        return <h6>{text}</h6>;
      case 6:
        return <h6>{text}</h6>;
      default:
        return <h6>{text}</h6>;
    }
  };
  return makeLevel();
}

export default Heading;
