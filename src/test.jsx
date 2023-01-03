import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState(true);

  return <div>{data ? "Manoj" : "Koti"}</div>;
};

export default Test;
