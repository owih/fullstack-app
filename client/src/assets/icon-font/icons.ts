export type IconsId =
  | "bin"
  | "bubble"
  | "bubbles"
  | "checked"
  | "compass"
  | "contrast"
  | "exit"
  | "fire"
  | "heart"
  | "home"
  | "minus"
  | "notification"
  | "plus"
  | "user"
  | "users";

export type IconsKey =
  | "Bin"
  | "Bubble"
  | "Bubbles"
  | "Checked"
  | "Compass"
  | "Contrast"
  | "Exit"
  | "Fire"
  | "Heart"
  | "Home"
  | "Minus"
  | "Notification"
  | "Plus"
  | "User"
  | "Users";

export enum Icons {
  Bin = "bin",
  Bubble = "bubble",
  Bubbles = "bubbles",
  Checked = "checked",
  Compass = "compass",
  Contrast = "contrast",
  Exit = "exit",
  Fire = "fire",
  Heart = "heart",
  Home = "home",
  Minus = "minus",
  Notification = "notification",
  Plus = "plus",
  User = "user",
  Users = "users",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bin]: "61697",
  [Icons.Bubble]: "61698",
  [Icons.Bubbles]: "61699",
  [Icons.Checked]: "61700",
  [Icons.Compass]: "61701",
  [Icons.Contrast]: "61702",
  [Icons.Exit]: "61703",
  [Icons.Fire]: "61704",
  [Icons.Heart]: "61705",
  [Icons.Home]: "61706",
  [Icons.Minus]: "61707",
  [Icons.Notification]: "61708",
  [Icons.Plus]: "61709",
  [Icons.User]: "61710",
  [Icons.Users]: "61711",
};
