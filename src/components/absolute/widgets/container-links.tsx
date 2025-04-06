"use client";

import { AnimatePresence } from "framer-motion";
import IconLink from "./icon-link";
import { SOCIALType, link_list } from "./constanse";

interface ContainerLinksProps {
  open?: boolean;
}
const ContainerLinks: React.FC<ContainerLinksProps> = ({ open = false }) => {
  if (!open) {
    return null;
  }
  return (
    <AnimatePresence>
      {open && (
        <>
          {link_list.map((e: SOCIALType, index) => (
            <IconLink key={e.icon} index={index} link={e} />
          ))}
        </>
      )}
    </AnimatePresence>
  );
};

export default ContainerLinks;
