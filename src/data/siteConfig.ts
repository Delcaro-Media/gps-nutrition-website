export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "GPS Nutrition",
  fullName: "GPS Nutrition Ltd.",
  tagline: "Simple nutrition guidance for real life",
  description:
    "Personalized one-on-one nutrition consulting designed for your body, goals, and lifestyle.",
  url: "https://www.gpsnutrition.ca",
  owner: "Gwen Ganske",
  emails: {
    info: "gwen@gpsnutrition.ca",
  },
  phone: {
    display: "403.505.0403",
    tel: "+14035050403",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;
