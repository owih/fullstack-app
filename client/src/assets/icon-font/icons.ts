export type IconsId =
  | "bubble"
  | "bubbles"
  | "contrast"
  | "fire"
  | "home"
  | "notification"
  | "user";

export type IconsKey =
  | "Bubble"
  | "Bubbles"
  | "Contrast"
  | "Fire"
  | "Home"
  | "Notification"
  | "User";

export enum Icons {
  Bubble = "bubble",
  Bubbles = "bubbles",
  Contrast = "contrast",
  Fire = "fire",
  Home = "home",
  Notification = "notification",
  User = "user",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Bubble]: "61697",
  [Icons.Bubbles]: "61698",
  [Icons.Contrast]: "61699",
  [Icons.Fire]: "61700",
  [Icons.Home]: "61701",
  [Icons.Notification]: "61702",
  [Icons.User]: "61703",
};
