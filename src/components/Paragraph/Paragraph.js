import React, { useState } from "react";

function Paragraph(props) {
  const [text, setext] = useState(props.text || "No description");
  return (
    <div>
      <p className='para'>{text}</p>
    </div>
  );
}

export default Paragraph;
