"use client";

import { useState } from "react";

import ContainerLinks from "./container-links";
import ContainerWidger from "./container-widget";

const CallWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed z-20 bottom-5 right-5 md:right-20 text-white">
      <ContainerWidger onClick={() => setOpen(!open)} open={open} />
      <ContainerLinks open={open} />
    </div>
  );
};

export default CallWidget;
