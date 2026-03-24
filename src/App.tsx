import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- STATE (DURUM) YÖNETİMİ ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME (EFFECT) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ VERİ ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "data-science", "hardware", "security"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      
      {/* HEADER (ÜST MENÜ) */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Ebubekir Akın</h1>
          <nav>
            <ul className="flex gap-6 font-medium">
              <li><a href="#hakkimda" className="hover:text-blue-600 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="hover:text-blue-600 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a></li>
            </ul>
          </nav>
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Temayı Değiştir"
          >
            <span className="dark:hidden">🌙</span>
            <span className="hidden dark:inline">☀️</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda" className="flex flex-col md:flex-row items-center gap-12 pt-10">
          <img 
            src="/profil.jpg" 
            alt="Ebubekir Akın" 
            className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800"
            onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150"; }} // Profil resmi yoksa placeholder koy
          />
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Merhaba, Ben Ebubekir 👋</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. Modern web teknolojileri, yapay zeka, 
              ve mobil projeleri geliştiriyorum. Beşiktaş maçlarını takip etmeyi severim.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">React</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-semibold">Python</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </section>

        {/* PROJELER BÖLÜMÜ (AKILLI KISIM BURASI) */}
        <section id="projeler" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projelerim</h2>
            <p className="text-gray-600 dark:text-gray-400">Geliştirdiğim güncel projeleri filtreleyip inceleyebilirsiniz.</p>
          </div>

          {error && <Alert variant="error" title="Hata">{error}</Alert>}

          {/* Filtreler */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border dark:border-gray-800">
            <div className="flex-1">
              <Input 
                id="search" 
                placeholder="Proje ara..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
            </div>
            <div className="flex gap-2 flex-wrap items-end">
              {categories.map((cat) => (
                <Button key={cat} variant={category === cat ? "primary" : "ghost"} size="sm" onClick={() => setCategory(cat)}>
                  {cat === "all" ? "Tümü" : cat.toUpperCase()}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 items-end">
              <select 
                value={sortField} 
                onChange={(e) => setSortField(e.target.value as SortField)} 
                className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 h-10"
              >
                <option value="year">Yıla Göre</option>
                <option value="title">Başlığa Göre</option>
              </select>
              <Button variant="secondary" size="sm" onClick={() => setSortOrder((o) => (o === "asc" ? "desc" : "asc"))}>
                {sortOrder === "asc" ? "Artan" : "Azalan"}
              </Button>
            </div>
          </div>

          {/* Listeleme */}
          {loading && <p className="text-center py-10 animate-pulse font-semibold">Projeler Yükleniyor...</p>}
          {!loading && filtered.length === 0 && !error && (
             <p className="text-center py-10 bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800">Esleşen proje bulunamadı.</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <Card key={project.id} variant="elevated" title={project.title} image={project.image} imageAlt={project.title}>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono pt-3 border-t dark:border-gray-800">
                  <span>{project.year}</span>
                  <span>{project.category.toUpperCase()}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim" className="max-w-2xl mx-auto scroll-mt-24 pb-20">
          <h2 className="text-3xl font-bold text-center mb-8">İletişim</h2>
          <form className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border dark:border-gray-800">
            <Input id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" required />
            <Input id="email" type="email" label="E-posta" placeholder="ornek@mail.com" required />
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 outline-none transition-colors" required></textarea>
            </div>
            <Button variant="primary" size="lg" className="w-full">Mesaj Gönder</Button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 dark:text-gray-400">
        <p>© 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}