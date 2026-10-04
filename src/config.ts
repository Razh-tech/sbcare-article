import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Health",
    tag: "health",
    description: "Wellness guidance, preventive care, and practical health insights for everyday life.",
  },
  {
    label: "Wellness",
    tag: "wellness",
    description: "Daily habits and holistic routines that support a healthier, more balanced lifestyle.",
  },
  {
    label: "Nutrition",
    tag: "nutrition",
    description: "Food, nutrition, and mindful eating tips that support long-term wellbeing.",
  },
  {
    label: "Lifestyle",
    tag: "lifestyle",
    description: "Smart routines and everyday choices that help you live healthier and happier.",
  },
  {
    label: "Mental Wellness",
    tag: "mental-wellness",
    description: "Supportive advice for emotional balance, resilience, and personal wellbeing.",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "sbcare_logo.jpg"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
