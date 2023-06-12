"use client";

import { useState } from "react";

const A = () => {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount((c) => c + 1)}>{count}A component</div>;
};

export default A;
