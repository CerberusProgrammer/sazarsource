export const SITE_TITLE = "Sazar's Space";
export const SITE_DESCRIPTION = "A internet space for Sazar.";

export interface MenuItem {
  label: string;
  url: string;
}

// Menu items
export const menuItems: MenuItem[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "writings",
    url: "/writings",
  },
  {
    label: "thoughts",
    url: "/thoughts",
  },
  {
    label: "ships",
    url: "/ships",
  },
];
