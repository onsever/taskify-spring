import { JSX } from "react";
import { FaHome, FaRegCalendarAlt, FaHashtag } from "react-icons/fa";
import { MdHelp, MdSettings } from "react-icons/md";

export type NavLink = {
  title: string;
  icon: JSX.Element;
  path: string;
  category: Category;
};

export enum Category {
  MAIN,
  TAGS,
  SETTINGS,
}

export const navLinks: NavLink[] = [
  {
    title: "Home",
    icon: <FaHome />,
    path: "/",
    category: Category.MAIN,
  },
  {
    title: "Calendar",
    icon: <FaRegCalendarAlt />,
    path: "/calendar",
    category: Category.MAIN,
  },
  {
    title: "General",
    icon: <FaHashtag />,
    path: "/tags/general",
    category: Category.TAGS,
  },
  {
    title: "Development",
    icon: <FaHashtag />,
    path: "/tags/general",
    category: Category.TAGS,
  },
  {
    title: "Design",
    icon: <FaHashtag />,
    path: "/tags/general",
    category: Category.TAGS,
  },
  {
    title: "Help",
    icon: <MdHelp />,
    path: "/help",
    category: Category.SETTINGS,
  },
  {
    title: "Settings",
    icon: <MdSettings />,
    path: "/settings",
    category: Category.SETTINGS,
  },
];
