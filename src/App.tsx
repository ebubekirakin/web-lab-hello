function App() {
  return (
    /* ANA KAPLAYICI: Tüm siteyi sarar ve Dark Mode geçişini yönetir */
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* 1. ERİŞİLEBİLİRLİK: Ana içeriğe atla (Sadece TAB tuşuyla görünür) */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-primary focus:p-4 focus:rounded-lg focus:shadow-2xl focus:font-bold">
        Ana içeriğe atla
      </a>

      {/* 2. TEMA DEĞİŞTİRME BUTONU (Sağ üstte sabit) */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden text-2xl">☾</span>
        <span className="hidden dark:inline text-2xl">☀</span>
      </button>

      {/* 3. HEADER: İçeriği ortalamak için max-w-6xl ve mx-auto kullandık */}
      <header className="bg-primary dark:bg-gray-800 text-white shadow-xl sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight dark:text-white">Ebubekir Akın - Kişisel Portföy</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex gap-8 font-medium list-none p-0 m-0">
              <li><a href="#hakkimda" className="hover:text-blue-200 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="hover:text-blue-200 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="hover:text-blue-200 transition-colors">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 4. ANA İÇERİK: Tüm bölümleri ortalayan ana konteyner */}
      <main id="main-content" className="max-w-6xl mx-auto px-6 space-y-24 py-16">
        
        {/* TAILWIND TEST KARTI (UYGULAMA-3) - Tam ortalı ve şık */}
        <section className="bg-blue-50 dark:bg-gray-800/40 p-10 rounded-3xl border border-blue-100 dark:border-gray-700 shadow-sm flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-full p-8 border dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Merhaba Tailwind!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Bu benim ilk Tailwind CSS bileşenim. Her sınıf tek bir iş yaparak hızlıca tasarım kurmamı sağlar.
            </p>
            <button className="bg-blue-600 dark:bg-blue-500 text-white w-full py-3 rounded-xl font-bold hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-lg hover:shadow-blue-500/30">
              Devam Et
            </button>
          </div>
        </section>

        {/* HAKKIMDA BÖLÜMÜ - Resim ve metin dengelendi */}
        <section id="hakkimda">
          <h2 className="text-3xl font-bold mb-12 pb-3 border-b-4 border-primary dark:border-gray-700 inline-block dark:text-blue-400">Hakkımda</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
            <div className="shrink-0 text-center">
              <img 
                src="/profil.jpg" 
                alt="Ebubekir Akın" 
                className="w-56 h-56 rounded-full border-8 border-gray-100 dark:border-gray-800 shadow-2xl object-cover" 
              />
              <figcaption className="mt-4 font-semibold text-gray-500 dark:text-gray-400">Ebubekir Akın</figcaption>
            </div>
            <div className="space-y-6 text-lg leading-relaxed dark:text-gray-300">
              <p>Merhaba, ben Ebubekir Akın. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim.</p>
              <p>Boş zamanlarımda Beşiktaş maçlarını takip etmeyi, kafa dağıtmak için oyun oynamayı ve dizi izlemeyi seviyorum.</p>
              <h3 className="text-xl font-bold text-secondary dark:text-blue-300 pt-4">Kullandığım Teknolojiler</h3>
              <ul className="flex flex-wrap gap-3 mt-4" role="list">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Vite', 'Python', 'Git'].map((tech) => (
                  <li key={tech} className="bg-primary dark:bg-blue-900 text-white dark:text-blue-100 px-5 py-2 rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER BÖLÜMÜ - 3 Breakpoint'li Responsive Grid */}
        <section id="projeler">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-blue-400">Projelerim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Proje 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group">
              <div className="overflow-hidden">
                <img src="/proje1.jpg" alt="Kişisel Portföy" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3 dark:text-blue-300">Kişisel Portföy Sitem</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">React, TypeScript ve Tailwind CSS kullanarak geliştirdiğim modern portföy projem.</p>
                <div className="flex gap-2 mt-auto">
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-lg text-xs font-bold">React</span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-lg text-xs font-bold">Tailwind</span>
                </div>
              </div>
            </article>

            {/* Proje 2 */}
            <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group">
              <div className="overflow-hidden">
                <img src="/proje2.jpg" alt="Veri Analizi" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3 dark:text-blue-300">Yapay Zeka Analiz Aracı</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">Veri setlerini inceleyen ve görselleştiren Python tabanlı bir yazılım projesi.</p>
                <div className="flex gap-2 mt-auto">
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 px-3 py-1 rounded-lg text-xs font-bold">Python</span>
                  <span className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-200 px-3 py-1 rounded-lg text-xs font-bold">Pandas</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* İLETİŞİM BÖLÜMÜ - Ortalanmış ve modern form */}
        <section id="iletisim" className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <h2 className="text-3xl font-bold mb-10 text-center dark:text-blue-400">İletişim</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold dark:text-gray-300">Ad Soyad</label>
                <input type="text" id="name" className="w-full p-4 rounded-2xl border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all" placeholder="Adınız Soyadınız" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold dark:text-gray-300">E-posta</label>
                <input type="email" id="email" className="w-full p-4 rounded-2xl border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all" placeholder="ornek@mail.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold dark:text-gray-300">Mesajınız</label>
                <textarea id="message" rows={4} className="w-full p-4 rounded-2xl border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all" placeholder="Mesajınızı buraya yazın..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-blue-500/40 transition-all transform active:scale-95">
                Gönder
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 5. FOOTER: Tam genişlik, içerik ortalı */}
      <footer className="bg-gray-900 text-white py-16 mt-20 border-t-8 border-primary dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg font-medium">&copy; 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
          <div className="flex justify-center gap-10 mt-8">
            <a href="https://github.com/ebubekirakin" target="_blank" className="text-gray-400 hover:text-white hover:scale-125 transition-all">GitHub</a>
            <a href="https://linkedin.com/in/ebubekirakin" target="_blank" className="text-gray-400 hover:text-white hover:scale-125 transition-all">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;