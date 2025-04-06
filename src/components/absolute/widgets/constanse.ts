export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
};
export const link_list: SOCIALType[] = [
  { icon: "ws", bg: "#25D366", link: process.env.NEXT_PUBLIC_WS },
  { icon: "tg", bg: "#0088cc", link: process.env.NEXT_PUBLIC_TG },
  { icon: "vk", bg: "#0077FF", link: process.env.NEXT_PUBLIC_VK },
];
