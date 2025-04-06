// import { Accordion } from "@/components/ui/accordion";
// import MainCharacterTab from "./main-character-tab";
// import CharacterTab from "./character-tab";
// import InstalationTab from "./instalation-tab";
// import PayTab from "./pay-tab";
// import DeliveryTab from "./delivery-tab";

// interface CharacteristicsBlockProps
//   extends React.HtmlHTMLAttributes<HTMLElement> {
//   characteristics: { id: number; title: string; description: string }[];
//   type: string;
//   brand: string;
// }

// const CharacteristicsBlockServer: React.FC<CharacteristicsBlockProps> = ({
//   characteristics,
//   type,
//   brand,
//   ...props
// }) => (
//   <section {...props} className='mt-12'>
//     <h2 className='sr-only'>Подробное описание</h2>
//     <Accordion
//       type='single'
//       collapsible
//       className='w-full border-t border-gray-200'
//     >
//       <MainCharacterTab
//         characteristics={characteristics}
//         brand={brand}
//         type={type}
//       />
//       <CharacterTab characteristics={characteristics} />
//       <InstalationTab />
//       <PayTab />
//       <DeliveryTab />
//     </Accordion>
//   </section>
// );

// export default CharacteristicsBlockServer;
