export type GalleryImage = {
  src: string;
  category: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  type: string;
  capacity: string;
  location: string;
  heroImage: string;
  mainImage: string;
  description: string;
  gallery: GalleryImage[];
  otherProjects: string[];
};

export const projects: Project[] = [
  {
    slug: "galaxy",
    title: "Galaxy",
    status: "Teslim Edildi",
    type: "Konut",
    capacity: "12 Daire · 4 Dükkan",
    location: "Silivri, İstanbul",
    heroImage: "/images/projects/galaxy/hero.jpg",
    mainImage: "/images/projects/galaxy/yatak.jpg",
    description:
      "Galaxy, Silivri'nin kalbinde konumlanan, modern mimari anlayışıyla tasarlanmış premium bir yaşam kompleksidir.",
    gallery: [
      {
        src: "/images/projects/galaxy/yatak.jpg",
        category: "Yatak Odası",
        label: "Yatak Odası",
      },
      {
        src: "/images/projects/galaxy/yatak-2.jpg",
        category: "Yatak Odası",
        label: "Yatak Odası 2",
      },
      {
        src: "/images/projects/galaxy/cocuk.jpg",
        category: "Çocuk Odası",
        label: "Çocuk Odası",
      },
      {
        src: "/images/projects/galaxy/mutfak.jpg",
        category: "Mutfak",
        label: "Mutfak",
      },
      {
        src: "/images/projects/galaxy/salon.jpg",
        category: "Salon",
        label: "Salon",
      },
    ],
    otherProjects: ["inci-konaklari", "huzur-konaklari"],
  },
  {
    slug: "inci-konaklari",
    title: "İnci Konakları",
    status: "Teslim Edildi",
    type: "Konut",
    capacity: "36 Daire",
    location: "Silivri, İstanbul",
    heroImage: "/images/projects/inci/hero.jpg",
    mainImage: "/images/projects/inci/hero.jpg",
    description:
      "İnci Konakları, Silivri'nin en sakin ve doğal bölgelerinden birinde, 36 bağımsız daire kapasitesiyle tasarlanmış özel bir yaşam alanıdır. Her dairenin kendi terasıyla doğayla iç içe bir yaşam sunan İnci Konakları, aileler için ideal bir seçimdir.",
    gallery: [
      {
        src: "/images/projects/inci/hero.jpg",
        category: "Dış Cephe",
        label: "Dış Cephe",
      },
      {
        src: "/images/projects/inci/1.jpg",
        category: "Genel",
        label: "Genel Görünüm",
      },
      {
        src: "/images/projects/inci/2.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
      {
        src: "/images/projects/inci/3.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
    ],
    otherProjects: ["galaxy", "huzur-konaklari"],
  },
  {
    slug: "huzur-konaklari",
    title: "Huzur Konakları",
    status: "Teslim Edildi",
    type: "Konut",
    capacity: "56 Daire · 2 Dükkan",
    location: "Silivri, İstanbul",
    heroImage: "/images/projects/huzur/hero.jpg",
    mainImage: "/images/projects/huzur/hero.jpg",
    description:
      "Huzur Konakları, aile yaşamına uygun, güvenli ve konforlu alanlar sunan tamamlanmış bir konut projesidir.",
    gallery: [
      {
        src: "/images/projects/huzur/hero.jpg",
        category: "Dış Cephe",
        label: "Dış Cephe",
      },
      {
        src: "/images/projects/huzur/1.jpg",
        category: "Genel",
        label: "Genel Görünüm",
      },
      {
        src: "/images/projects/huzur/2.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
      {
        src: "/images/projects/huzur/3.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
      {
        src: "/images/projects/huzur/4.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
      {
        src: "/images/projects/huzur/5.jpg",
        category: "Genel",
        label: "Proje Görünümü",
      },
    ],
    otherProjects: ["galaxy", "inci-konaklari"],
  },
  {
  slug: "gozde-sitesi",
  title: "Gözde Sitesi",
  status: "Teslim Edildi",
  type: "Konut",
  capacity: "28 Daire",
  location: "Silivri, İstanbul",
  heroImage: "/images/projects/gozde/hero.jpg",
  mainImage: "/images/projects/gozde/hero.jpg",
  description:
    "Gözde Sitesi modern mimarisi ve ferah yaşam alanlarıyla tamamlanmış prestijli bir konut projesidir.",
  gallery: [
  {
    src: "/images/projects/gozde/hero.jpg",
    category: "Dış Cephe",
    label: "Gözde Sitesi Dış Cephe",
  },
  {
    src: "/images/projects/gozde/1.jpg",
    category: "Dış Cephe",
    label: "Cephe Görünümü",
  },
  {
    src: "/images/projects/gozde/2.jpg",
    category: "Tanıtım",
    label: "Proje Tanıtım Görseli",
  },
  {
    src: "/images/projects/gozde/3.jpg",
    category: "Yatak Odası",
    label: "Yatak Odası",
  },
  {
    src: "/images/projects/gozde/4.jpg",
    category: "Salon",
    label: "Salon",
  },
  {
    src: "/images/projects/gozde/5.jpg",
    category: "Banyo",
    label: "Banyo",
  },
  {
    src: "/images/projects/gozde/6.jpg",
    category: "Dış Cephe",
    label: "Proje Genel Görünüm",
  },
  {
    src: "/images/projects/gozde/7.jpg",
    category: "Mutfak",
    label: "Mutfak",
  },
],
  otherProjects: ["mercan-park", "galaxy"],
},

{
  slug: "mercan-park",
  title: "Mercan Park",
  status: "Teslim Edildi",
  type: "Konut",
  capacity: "42 Daire",
  location: "Silivri, İstanbul",
  heroImage: "/images/projects/mercan/hero.jpg",
  mainImage: "/images/projects/mercan/hero.jpg",
  description:
    "Mercan Park, sosyal yaşam alanları ve modern mimarisiyle öne çıkan seçkin bir yaşam projesidir.",
  gallery: [
    {
      src: "/images/projects/mercan/hero.jpg",
      category: "Dış Cephe",
      label: "Dış Cephe",
    },
  ],
  otherProjects: ["gozde-sitesi", "galaxy"],
},

{
  slug: "yeni-proje-1",
  title: "Yeni Proje 1",
  status: "Yakında",
  type: "Konut",
  capacity: "48 Daire",
  location: "Silivri, İstanbul",
heroImage: "/images/projects/yeni-1/imgdownloader-c00e963f.png",
mainImage: "/images/projects/yeni-1/imgdownloader-c00e963f.png",
  description:
    "Yakında satışa çıkacak yeni nesil yaşam projesi.",
  gallery: [
  {
    src: "/images/projects/yeni-1/imgdownloader-c00e963f.png",
    category: "Dış Cephe",
    label: "Ön Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-98fb3ea0.jpeg",
    category: "Dış Cephe",
    label: "Yan Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-fe62e5ed.png",
    category: "Dış Cephe",
    label: "Genel Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-6ed36c65.jpeg",
    category: "Dış Cephe",
    label: "Gündüz Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-d7350a4c.png",
    category: "Dış Cephe",
    label: "Gece Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-69c33942.png",
    category: "Dış Cephe",
    label: "Gece Genel Görünüm",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-1e85e48d.png",
    category: "Dış Cephe",
    label: "Akşam Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-ec51d07a.png",
    category: "Dış Cephe",
    label: "Arka Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-cfa306df.png",
    category: "Dış Cephe",
    label: "Perspektif Cephe",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-0ac790a5.png",
    category: "Konum",
    label: "Konum Haritası",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-5da10a1e.png",
    category: "Plan",
    label: "Salon Planı",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-21c3351f.png",
    category: "Plan",
    label: "Yatak Odası Planı",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-19bc7806.png",
    category: "Plan",
    label: "Daire Planı",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-d58ef35b.png",
    category: "Plan",
    label: "Banyo Planı",
  },
  {
    src: "/images/projects/yeni-1/imgdownloader-9fe215fd.jpeg",
    category: "Çocuk Odası",
    label: "Çocuk Odası",
  },
],
  otherProjects: ["galaxy", "inci-konaklari"],
},

{
  slug: "yeni-proje-2",
  title: "Yeni Proje 2",
  status: "Yakında",
  type: "Konut",
  capacity: "60 Daire",
  location: "Silivri, İstanbul",
  heroImage: "/images/projects/yeni-2/hero.jpg",
  mainImage: "/images/projects/yeni-2/hero.jpg",
  description:
    "Yakında satışa çıkacak premium yaşam projesi.",
  gallery: [
    {
      src: "/images/projects/yeni-2/hero.jpg",
      category: "Proje",
      label: "Hero",
    },
  ],
  otherProjects: ["galaxy", "huzur-konaklari"],
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}