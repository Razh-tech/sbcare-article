type FallbackCategory = {
  id: string;
  name: string;
  description: string;
};

type FallbackAuthor = {
  id: string;
  name: string;
  image: string;
};

type FallbackTag = {
  id: string;
  name: string;
};

type FallbackPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author: FallbackAuthor;
  tags: FallbackTag[];
  authorId: string;
  teamId: string;
};

export const fallbackCategories: FallbackCategory[] = [
  {
    id: "health",
    name: "health",
    description: "Panduan kesehatan dan pencegahan untuk gaya hidup yang lebih sehat.",
  },
  {
    id: "partnership",
    name: "partnership",
    description: "Kolaborasi strategis dan dukungan bersama yang memperkuat pertumbuhan dan kesejahteraan komunitas.",
  },
  {
    id: "nutrition",
    name: "nutrition",
    description: "Tips nutrisi dan pola makan sehat untuk mendukung kesehatan jangka panjang.",
  },
  {
    id: "lifestyle",
    name: "lifestyle",
    description: "Gaya hidup yang sehat, praktis, dan seimbang untuk kehidupan sehari-hari.",
  },
  {
    id: "mental-wellness",
    name: "mental-wellness",
    description: "Panduan untuk menjaga kesehatan mental, fokus, dan keseimbangan emosional.",
  },
];

export const fallbackPosts: FallbackPost[] = [];
