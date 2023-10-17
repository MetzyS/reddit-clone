import { IoGameControllerOutline } from "react-icons/io5";
import {
  MdOutlineSportsBaseball,
  MdOutlineHive,
  MdOutlineHelpOutline,
} from "react-icons/md";
import {
  AiOutlineLineChart,
  AiOutlineStar,
  AiOutlineReddit,
} from "react-icons/ai";
import { PiTelevision, PiWrench } from "react-icons/pi";
import { BsMegaphone } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { LiaMicrophoneAltSolid } from "react-icons/lia";

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
  // games
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
  // sports
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
  // business
  [
    {
      id: 1,
      name: "gamestop",
      text: "GameStop",
      path: "/",
    },
    {
      id: 2,
      name: "moderna",
      text: "Moderna",
      path: "/",
    },
    {
      id: 3,
      name: "pfizer",
      text: "Pfizer",
      path: "/",
    },
    {
      id: 4,
      name: "johnsonjohnson",
      text: "Johnson & Johnson",
      path: "/",
    },
    {
      id: 5,
      name: "astrazeneca",
      text: "AstraZeneca",
      path: "/",
    },
    {
      id: 6,
      name: "wallgreens",
      text: "Wallgreens",
      path: "/",
    },
    {
      id: 7,
      name: "bestbuy",
      text: "Best Buy",
      path: "/",
    },
    {
      id: 8,
      name: "novavax",
      text: "Novavax",
      path: "/",
    },
    {
      id: 9,
      name: "spacex",
      text: "SpaceX",
      path: "/",
    },
    {
      id: 10,
      name: "tesla",
      text: "Tesla",
      path: "/",
    },
  ],
  // crypto
  [
    {
      id: 1,
      name: "ethereum",
      text: "Ethereum",
      path: "/",
    },
    {
      id: 2,
      name: "dogecoin",
      text: "Dogecoin",
      path: "/",
    },
    {
      id: 3,
      name: "algorand",
      text: "Algorand",
      path: "/",
    },
    {
      id: 4,
      name: "bitcoin",
      text: "Bitcoin",
      path: "/",
    },
    {
      id: 5,
      name: "litecoin",
      text: "Litecoin",
      path: "/",
    },
    {
      id: 6,
      name: "basicattentiontoken",
      text: "Basic Attention Token",
      path: "/",
    },
    {
      id: 7,
      name: "Bitcoin Cash",
      text: "Bitcoin Cash",
      path: "/",
    },
  ],
  // television
  [
    {
      id: 1,
      name: "gameofthrones",
      text: "Game of Thrones",
      path: "/",
    },
    {
      id: 2,
      name: "breakingbad",
      text: "Breaking Bad",
      path: "/",
    },
    {
      id: 3,
      name: "mrrobot",
      text: "Mr Robot",
      path: "/",
    },
    {
      id: 4,
      name: "arcane",
      text: "Arcane",
      path: "/",
    },
    {
      id: 5,
      name: "peakyblinders",
      text: "Peaky Blinders",
      path: "/",
    },
    {
      id: 6,
      name: "queensgambit",
      text: "Queen's Gambit",
      path: "/",
    },
    {
      id: 7,
      name: "strangerthings",
      text: "Stranger Things",
      path: "/",
    },
    {
      id: 8,
      name: "vikings",
      text: "Vikings",
      path: "/",
    },
    {
      id: 9,
      name: "blackmirror",
      text: "Black Mirror",
      path: "/",
    },
    {
      id: 10,
      name: "warrior",
      text: "Warrior",
      path: "/",
    },
  ],
  // celebrity
  [
    {
      id: 1,
      name: "denzelwashington",
      text: "Denzel Washington",
      path: "/",
    },
    {
      id: 2,
      name: "mohamedali",
      text: "Mohamed Ali",
      path: "/",
    },
    {
      id: 3,
      name: "odasensei",
      text: "Eiichiro Oda",
      path: "/",
    },
    {
      id: 4,
      name: "kimkardashian",
      text: "Kim Kardashian",
      path: "/",
    },
    {
      id: 5,
      name: "dojacat",
      text: "Doja Cat",
      path: "/",
    },
    {
      id: 6,
      name: "iggyazalea",
      text: "Iggy Azalea",
      path: "/",
    },
    {
      id: 7,
      name: "anyataylorjoy",
      text: "Anya Taylor-Joy",
      path: "/",
    },
    {
      id: 8,
      name: "jamieleecurtis",
      text: "Jamie Lee Curtis",
      path: "/",
    },
    {
      id: 9,
      name: "keanureeves",
      text: "Keanu Reeves",
      path: "/",
    },
    {
      id: 10,
      name: "cedricdoumbe",
      text: "Cedric Doumbé",
      path: "/",
    },
  ],
];

// Liste ressources
export const DUMMY_SUBCAT_RESOURCES: {
  id: number;
  name: string;
  text: string;
  icon: React.ComponentType;
  customFunc: string;
}[] = [
  {
    id: 1,
    name: "aboutreddit",
    text: "About Reddit",
    icon: AiOutlineReddit,
    customFunc: "",
  },
  {
    id: 2,
    name: "advertise",
    text: "Advertise",
    icon: BsMegaphone,
    customFunc: "",
  },
  {
    id: 3,
    name: "help",
    text: "Help",
    icon: MdOutlineHelpOutline,
    customFunc: "",
  },
  {
    id: 4,
    name: "blog",
    text: "Blog",
    icon: FiBookOpen,
    customFunc: "",
  },
  {
    id: 5,
    name: "careers",
    text: "Careers",
    icon: PiWrench,
    customFunc: "",
  },
  {
    id: 6,
    name: "press",
    text: "Press",
    icon: LiaMicrophoneAltSolid,
    customFunc: "",
  },
];
