export interface Blog {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  featured: boolean;
  emoji?: string;
  image?: string;
  color: string;
  content: string;
}

export interface GalleryItem {
  id: number;
  emoji: string;
  title: string;
  category: string;
  desc: string;
  color: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  emoji: string;
}

export interface Social {
  label: string;
  value: string;
  href: string;
  emoji: string;
  bg: string;
}

export const galleries: GalleryItem[] = [
  { id: 1, emoji: "🌋", title: "Foto 1", category: "Nature", desc: "Keindahan matahari terbit dari puncak gunung.", color: "#E6F1FB" },
  { id: 2, emoji: "🌲", title: "Foto 2", category: "Travel", desc: "Menikmati udara segar di kawasan hutan pinus.", color: "#E1F5EE" },
  { id: 3, emoji: "🏞️", title: "Foto 3", category: "Nature", desc: "Suasana tenang di tepi danau yang jernih.", color: "#FAEEDA" },
  { id: 4, emoji: "☁️", title: "Foto 4", category: "Nature", desc: "Melihat awan tebal menyelimuti lembah hijau.", color: "#FAECE7" },
  { id: 5, emoji: "💻", title: "Foto 5", category: "Workspace", desc: "Sudut ruang kerja minimalis yang rapi dan nyaman.", color: "#EAF3DE" },
  { id: 6, emoji: "🚶", title: "Foto 6", category: "Travel", desc: "Mengeksplorasi jalan setapak di tengah pegunungan.", color: "#EEEDFE" },
  { id: 7, emoji: "🏕️", title: "Foto 7", category: "Travel", desc: "Mendirikan tenda di bawah langit malam yang bersih.", color: "#E6F1FB" },
  { id: 8, emoji: "🌅", title: "Foto 8", category: "Nature", desc: "Pemandangan sunset keemasan yang menenangkan jiwa.", color: "#E1F5EE" },
  { id: 9, emoji: "⛰️", title: "Foto 9", category: "Nature", desc: "Kemegahan tebing batu tinggi yang kokoh menjulang.", color: "#FAEEDA" },
  { id: 10, emoji: "🏞️", title: "Foto 10", category: "Nature", desc: "Sungai kecil berair jernih yang mengalir di pegunungan.", color: "#FAECE7" },
  { id: 11, emoji: "🌾", title: "Foto 11", category: "Nature", desc: "Hamparan rumput hijau yang luas bergoyang ditiup angin.", color: "#EAF3DE" },
  { id: 12, emoji: "🏔️", title: "Foto 12", category: "Nature", desc: "Puncak bersalju yang bersinar di bawah terik matahari.", color: "#EEEDFE" },
  { id: 13, emoji: "🌌", title: "Foto 13", category: "Nature", desc: "Bintang-bintang bertaburan indah di langit malam.", color: "#E6F1FB" },
  { id: 14, emoji: "🚗", title: "Foto 14", category: "Travel", desc: "Perjalanan darat menyusuri daerah pantai yang indah.", color: "#E1F5EE" },
  { id: 15, emoji: "🚉", title: "Foto 15", category: "Travel", desc: "Menunggu kereta tiba untuk memulai petualangan baru.", color: "#FAEEDA" },
  { id: 16, emoji: "🏖️", title: "Foto 16", category: "Travel", desc: "Pasir putih dan ombak tenang di pantai tersembunyi.", color: "#FAECE7" },
  { id: 17, emoji: "🍂", title: "Foto 17", category: "Nature", desc: "Daun-daun berguguran menandai pergantian musim.", color: "#EAF3DE" },
  { id: 18, emoji: "❄️", title: "Foto 18", category: "Nature", desc: "Keindahan embun pagi yang membeku di ujung daun.", color: "#EEEDFE" },
  { id: 19, emoji: "🌿", title: "Foto 19", category: "Nature", desc: "Tanaman hijau segar di taman yang asri.", color: "#E6F1FB" },
  { id: 20, emoji: "🎒", title: "Foto 20", category: "Travel", desc: "Menyusuri gang-gang kecil di kota tua bersejarah.", color: "#E1F5EE" },
  { id: 21, emoji: "🚢", title: "Foto 21", category: "Travel", desc: "Berlayar menyeberangi selat dengan kapal feri.", color: "#FAEEDA" },
  { id: 22, emoji: "☕", title: "Foto 22", category: "Travel", desc: "Singgah sejenak di kedai kopi pinggir jalan.", color: "#FAECE7" },
  { id: 23, emoji: "🗺️", title: "Foto 23", category: "Travel", desc: "Membaca peta untuk merencanakan rute berikutnya.", color: "#EAF3DE" },
  { id: 24, emoji: "📸", title: "Foto 24", category: "Travel", desc: "Mengabadikan setiap momen berharga selama perjalanan.", color: "#EEEDFE" },
  { id: 25, emoji: "🌋", title: "Foto 25", category: "Nature", desc: "Keindahan matahari terbit dari puncak gunung.", color: "#E6F1FB" },
  { id: 26, emoji: "🌲", title: "Foto 26", category: "Travel", desc: "Menikmati udara segar di kawasan hutan pinus.", color: "#E1F5EE" },
  { id: 27, emoji: "🏞️", title: "Foto 27", category: "Nature", desc: "Suasana tenang di tepi danau yang jernih.", color: "#FAEEDA" },
  { id: 28, emoji: "☁️", title: "Foto 28", category: "Nature", desc: "Melihat awan tebal menyelimuti lembah hijau.", color: "#FAECE7" },
  { id: 29, emoji: "💻", title: "Foto 29", category: "Workspace", desc: "Sudut ruang kerja minimalis yang rapi dan nyaman.", color: "#EAF3DE" },
  { id: 30, emoji: "🚶", title: "Foto 30", category: "Travel", desc: "Mengeksplorasi jalan setapak di tengah pegunungan.", color: "#EEEDFE" },
  { id: 31, emoji: "🏕️", title: "Foto 31", category: "Travel", desc: "Mendirikan tenda di bawah langit malam yang bersih.", color: "#E6F1FB" },
];

export const socials: Social[] = [
  { label: "Email", value: "rickhysiswanto@gmail.com", href: "mailtorickhysiswanto@gmail.com", emoji: "📧", bg: "#E6F1FB" },
  { label: "GitHub", value: "@rickhysis", href: "https://github.com/rickhysis", emoji: "🐙", bg: "#F1EFE8" },
  { label: "Medium", value: "@rickhysis", href: "https://rickhysiswanto.medium.com", emoji: "✍️", bg: "#F1EFE8" },
  { label: "LinkedIn", value: "Rickhy Siswanto", href: "https://www.linkedin.com/in/rickhy-siswanto-9494aa137/", emoji: "💼", bg: "#E6F1FB" },
  { label: "WhatsApp", value: "+62 821-3900-3992", href: "https://wa.me/6282139003992?text=Hey+Brow", emoji: "💬", bg: "#E1F5EE" },
  { label: "Telegram", value: "@rickhysis", href: "https://t.me/rickhysis", emoji: "✈️", bg: "#E6F1FB" },
  { label: "YouTube", value: "@rickhysiswanto4836", href: "https://www.youtube.com/@rickhysiswanto4836", emoji: "▶️", bg: "#FAECE7" },
];
