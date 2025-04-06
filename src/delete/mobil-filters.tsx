// "use client";

// import { Fragment, useRef } from "react";
// import { Dialog, Transition } from "@headlessui/react";

// import useFilters from "@/hooks/use-filters";
// import MobilFiltersContent from "./mobil-filters-content";
// import useWindowSize from "@/hooks/use-resize";

// const MobilFilters = () => {
//   const { isOpen, onClose } = useFilters();
//   const { width } = useWindowSize();

//   const cancelButtonRef = useRef(null);

//   return (
//     <Transition show={isOpen} as={Fragment}>
//       <Dialog
//         as='div'
//         className='relative z-50'
//         initialFocus={cancelButtonRef}
//         onClose={onClose}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter='ease-out duration-300'
//           enterFrom='opacity-0'
//           enterTo='opacity-100'
//           leave='ease-in duration-200'
//           leaveFrom='opacity-100'
//           leaveTo='opacity-0'
//         >
//           <div className='fixed inset-0 bg-black/25' aria-hidden='true' />
//         </Transition.Child>
//         <div className='fixed inset-0 overflow-hidden'>
//           <div className='absolute inset-0 overflow-hidden'>
//             <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
//               <Transition.Child
//                 as={Fragment}
//                 enter='transform transition ease-in-out duration-500 sm:duration-700'
//                 enterFrom='translate-x-full'
//                 enterTo='translate-x-0'
//                 leave='transform transition ease-in-out duration-500 sm:duration-700'
//                 leaveFrom='translate-x-0'
//                 leaveTo='translate-x-full'
//               >
//                 <Dialog.Panel className='pointer-events-auto relative w-screen max-w-80'>
//                   {width && width < 1024 && (
//                     <MobilFiltersContent onClose={onClose} />
//                   )}
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default MobilFilters;
