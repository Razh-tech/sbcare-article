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
    id: "wellness",
    name: "wellness",
    description: "Kebiasaan harian dan rutinitas yang mendukung kesejahteraan tubuh dan pikiran.",
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

export const fallbackPosts: FallbackPost[] = [
  {
    id: "fallback-1",
    slug: "tips-kesehatan-harian",
    title: "Tips Kesehatan Harian untuk Gaya Hidup Lebih Sehat",
    description:
      "Mulai hari dengan rutinitas sederhana yang mendukung kesehatan tubuh, pikiran, dan keseimbangan hidup sehari-hari.",
    content:
      "<h2>Kenali pola harian Anda</h2><p>Untuk menjaga kesehatan, fokuslah pada kebiasaan kecil yang konsisten seperti tidur cukup, hidrasi, dan pola makan seimbang.</p><h2>Mulai dengan langkah sederhana</h2><p>Aktivitas ringan seperti berjalan kaki, mengonsumsi sayur, dan mengurangi konsumsi gula dapat memberi dampak besar dalam jangka panjang.</p>",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date("2026-01-10T08:00:00.000Z"),
    updatedAt: new Date("2026-01-15T08:00:00.000Z"),
    publishedAt: new Date("2026-01-10T08:00:00.000Z"),
    author: {
      id: "author-sbcare",
      name: "SB Care Team",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    },
    tags: [
      { id: "health", name: "health" },
      { id: "wellness", name: "wellness" },
    ],
    authorId: "author-sbcare",
    teamId: "team-sbcare",
  },
  {
    id: "fallback-2",
    slug: "gaya-hidup-seimbang-dan-mental-positif",
    title: "Gaya Hidup Seimbang untuk Kesehatan Mental yang Lebih Baik",
    description:
      "Menjaga keseimbangan antara aktivitas, istirahat, dan pola pikir bisa membantu Anda merasa lebih tenang dan fokus setiap hari.",
    content:
      "<h2>Jaga kesehatan mental Anda</h2><p>Waktu untuk beristirahat, mengelola stres, dan menjaga hubungan dengan diri sendiri adalah bagian penting dari kesejahteraan.</p><h2>Praktik yang mudah dilakukan</h2><p>Mulai dengan meditasi singkat, membatasi layar sebelum tidur, dan menata jadwal yang realistis.</p>",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date("2026-02-05T08:00:00.000Z"),
    updatedAt: new Date("2026-02-08T08:00:00.000Z"),
    publishedAt: new Date("2026-02-05T08:00:00.000Z"),
    author: {
      id: "author-sbcare",
      name: "SB Care Team",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    },
    tags: [
      { id: "wellness", name: "wellness" },
      { id: "mental-wellness", name: "mental-wellness" },
    ],
    authorId: "author-sbcare",
    teamId: "team-sbcare",
  },
  {
    id: "fallback-3",
    slug: "nutrisi-sehat-untuk-hidup-lebih-berenergi",
    title: "Nutrisi Sehat untuk Hidup Lebih Berenergi dan Produktif",
    description:
      "Pilih pola makan yang seimbang dapat membantu energi tetap stabil, fokus, dan lebih siap menghadapi rutinitas harian.",
    content:
      "<h2>Pola makan yang mendukung energi</h2><p>Gabungkan karbohidrat kompleks, protein, lemak sehat, serta sayur dan buah dalam porsi yang seimbang.</p><h2>Mulai dari menu harian</h2><p>Menyiapkan makanan sederhana dengan bahan yang tepat membantu mengurangi keputusan impulsif dan menjaga kesehatan jangka panjang.</p>",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    createdAt: new Date("2026-03-11T08:00:00.000Z"),
    updatedAt: new Date("2026-03-14T08:00:00.000Z"),
    publishedAt: new Date("2026-03-11T08:00:00.000Z"),
    author: {
      id: "author-sbcare",
      name: "SB Care Team",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    },
    tags: [
      { id: "nutrition", name: "nutrition" },
      { id: "lifestyle", name: "lifestyle" },
    ],
    authorId: "author-sbcare",
    teamId: "team-sbcare",
  },
]; 
