import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSportsBaseball, MdOutlineHive } from "react-icons/md";
import { AiOutlineLineChart, AiOutlineStar } from "react-icons/ai";
import { PiTelevision } from "react-icons/pi";

import { MenuTopics } from "@/app/store/useMenuTopics";

// Sous catégories menu mobile
export const DUMMY_SUBCAT_TOPICS: {
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
    icon: MdOutlineSportsBaseball,
    customFunc: "",
  },
  {
    id: 3,
    name: "business",
    text: "Business",
    icon: AiOutlineLineChart,
    customFunc: "",
  },
  {
    id: 4,
    name: "crypto",
    text: "Crypto",
    icon: MdOutlineHive,
    customFunc: "",
  },
  {
    id: 5,
    name: "television",
    text: "Television",
    icon: PiTelevision,
    customFunc: "",
  },
  {
    id: 6,
    name: "celebrity",
    text: "Celebrity",
    icon: AiOutlineStar,
    customFunc: "",
  },
];

// Liste des items pour chaque sous catégorie (menu mobile)
export const DUMMY_SUBCAT_TOPICS_LINKS = [
  [
    {
      id: 1,
      name: "valorant",
      text: "VALORANT",
      path: "/",
    },
    {
      id: 2,
      name: "leagueoflegends",
      text: "League of Legends",
      path: "/",
    },
    {
      id: 3,
      name: "rocketleague",
      text: "Rocket League",
      path: "/",
    },
    {
      id: 4,
      name: "hollowknightsilksong",
      text: "Hollow Knight: Silksong",
      path: "/",
    },
    {
      id: 5,
      name: "teamfighttactics",
      text: "Teamfight Tactics",
      path: "/",
    },
    {
      id: 6,
      name: "diablo",
      text: "Diablo",
      path: "/",
    },
    {
      id: 7,
      name: "wordlofwarcraft",
      text: "World of Warcraft",
      path: "/",
    },
    {
      id: 8,
      name: "counterstrike",
      text: "Counter Strike",
      path: "/",
    },
    {
      id: 9,
      name: "valheim",
      text: "Valheim",
      path: "/",
    },
    {
      id: 10,
      name: "amongus",
      text: "Among Us",
      path: "/",
    },
  ],
  [
    {
      id: 1,
      name: "championsleague",
      text: "Champions League",
      path: "/",
    },
    {
      id: 2,
      name: "ligue1",
      text: "Ligue 1",
      path: "/",
    },
    {
      id: 3,
      name: "nfl",
      text: "NFL",
      path: "/",
    },
    {
      id: 4,
      name: "nba",
      text: "NBA",
      path: "/",
    },
    {
      id: 5,
      name: "arsenalfc",
      text: "Arsenal F.C",
      path: "/",
    },
    {
      id: 6,
      name: "premierleague",
      text: "Premier League",
      path: "/",
    },
    {
      id: 7,
      name: "ufc",
      text: "UFC",
      path: "/",
    },
    {
      id: 8,
      name: "goldenstates",
      text: "Golden States Warrior",
      path: "/",
    },
    {
      id: 9,
      name: "psg",
      text: "Paris Saint Germain",
      path: "/",
    },
    {
      id: 10,
      name: "jonjones",
      text: "Jon Jones",
      path: "/",
    },
  ],
];
