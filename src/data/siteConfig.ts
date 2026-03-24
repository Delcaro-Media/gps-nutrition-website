export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "GPS Nutrition",
  fullName: "GPS Nutrition Ltd.",
  tagline: "Simple nutrition guidance for real life",
  description:
    "Personalized nutrition services including meal plans, group programs, and one-on-one consultations. Helping you reach your health goals with expert guidance.",
  url: "https://www.gpsnutrition.ca",
  owner: "Gwen Ganske",
  emails: {
    info: "gwen@gpsnutrition.ca",
  },
  social: {
    instagram: "https://www.instagram.com/gps_nutrition_ltd/",
    instagramHandle: "@gps_nutrition_ltd",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;
