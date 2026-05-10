export type SOCIALType = {
  icon: "vk" | "max" | "tg";
  bg: string;
  link: string | undefined;
};
export const link_list: SOCIALType[] = [
  { icon: "tg", bg: "#0088cc", link: process.env.NEXT_PUBLIC_TG },
  { icon: "max", bg: "#572dff", link: process.env.NEXT_PUBLIC_MAX },
];
