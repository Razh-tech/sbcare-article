import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Kesehatan",
    tag: "health",
    description: "Panduan kesehatan, pencegahan, dan tips praktis untuk gaya hidup sehari-hari yang lebih sehat.",
  },
  {
    label: "Kesejahteraan",
    tag: "wellness",
    description: "Kebiasaan harian dan rutinitas holistik yang mendukung gaya hidup lebih sehat dan seimbang.",
  },
  {
    label: "Nutrisi",
    tag: "nutrition",
    description: "Tips makanan, nutrisi, dan pola makan yang sehat untuk kesejahteraan jangka panjang.",
  },
  {
    label: "Gaya Hidup",
    tag: "lifestyle",
    description: "Rutinitas cerdas dan pilihan sehari-hari untuk hidup lebih sehat dan bahagia.",
  },
  {
    label: "Kesehatan Mental",
    tag: "mental-wellness",
    description: "Panduan untuk keseimbangan emosional, ketahanan diri, dan kesehatan mental yang lebih baik.",
  },
];

const normalizeBaseUrl = (value?: string) => {
  if (!value) return "http://localhost:3000";
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
};

const defaultBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://article.sbcare.co.id";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL && process.env.VERCEL_ENV !== "production"
    ? `https://${process.env.VERCEL_URL}`
    : defaultBaseUrl);

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl: normalizeBaseUrl(baseUrl),
  mainSiteUrl: "https://sbcare.co.id",
  logoUrl: urlJoin(normalizeBaseUrl(baseUrl), "logo.png"),
  organization: "Smile Birth Corp",
  title: "SB Artikel",
  description:
    "Panduan kesehatan, gaya hidup, dan kesejahteraan untuk kehidupan yang lebih sehat dan seimbang.",
  categories,
};
