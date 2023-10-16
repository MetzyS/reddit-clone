import { IoGameControllerOutline } from "react-icons/io5";
import { MenuTopics } from "@/app/store/useMenuTopics";

export const DUMMY_SUBCAT: {
  id: number;
  name: keyof MenuTopics;
  text: string;
  icon: React.ComponentType;
  customFunc: string;
}[] = [
  {
    id: 1,
    name: "gaming",
    text: "Gaming",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
  {
    id: 2,
    name: "sports",
    text: "Sports",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
  {
    id: 3,
    name: "business",
    text: "Business",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
  {
    id: 4,
    name: "crypto",
    text: "Crypto",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
  {
    id: 5,
    name: "television",
    text: "Television",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
  {
    id: 6,
    name: "celebrity",
    text: "Celebrity",
    icon: IoGameControllerOutline,
    customFunc: "",
  },
];
