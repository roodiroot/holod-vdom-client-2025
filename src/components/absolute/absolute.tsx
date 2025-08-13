import { Toaster } from "@/components/ui/sonner";
import MobilMenu from "./mobil-menu";
import ModalWindow from "./modal-window";
import SearchWindow from "./search-window";
// import MobilFilters from "./mobil-filters";
import ImageShow from "./image-show";
import CallWidget from "./widgets/call-widget";
import ModalOrder from "./modal-order";
import CookieBanner from "./cookie-banner";

const Absolute = () => {
  return (
    <>
      <Toaster position="top-right" />
      <MobilMenu />
      <CallWidget />
      {/* <MobilFilters /> */}
      <ModalWindow />
      <ModalOrder />
      <SearchWindow />
      <ImageShow />
      <CookieBanner />
    </>
  );
};

export default Absolute;
