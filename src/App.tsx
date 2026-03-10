function App() {
  return (
    <>
      {/* 1. Skip Link (Ana içeriğe atla) */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* HEADER VE NAVİGASYON */}
<header>
        <h1>Ebubekir Akın - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* --- TAILWIND TEST KARTI (UYGULAMA-3) --- */}
        <div className="bg-gray-50 flex items-center justify-center p-4 my-8 rounded-xl border border-gray-200">
          <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Merhaba Tailwind!
            </h1>
            <p className="text-gray-600 mb-4">
              Bu benim ilk Tailwind CSS bileşenim. Her class tek bir iş yapar.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Devam Et
            </button>
          </div>
        </div>
        {/* -------------------------------------- */}


        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          
          {/* YENİ: İçeriği saran Flex kutusu */}
          <div className="about-content">
            <figure>
              <img src="/profil.jpg" alt="Ebubekir Akın'ın vesikalık fotoğrafı" />
              <figcaption>Ebubekir Akın</figcaption>
            </figure>
            
            <div className="about-text">
              <p>
                Merhaba, ben Ebubekir Akın. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. 
              </p>
              <p>
                Boş zamanlarımda Beşiktaş maçlarını takip etmeyi, kafa dağıtmak için oyun oynamayı ve dizi izlemeyi seviyorum.
              </p>
              
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Python</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

{/* PROJELER BÖLÜMÜ (TAILWIND İLE YENİDEN YAZILDI) */}
        <section id="projeler" className="px-4 py-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8 border-b-4 border-blue-200 inline-block pb-2">
            Projelerim
          </h2>
          
          {/* Sihirli Grid: Mobilde 1, Tablette 2 (sm:), Masaüstünde 3 sütun (lg:) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Proje 1 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col">
              <img src="/proje1.jpg" alt="Kişisel web sitem" className="w-full h-48 object-cover border-b border-gray-200" />
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl text-secondary mb-2">Kişisel Portföy Sitem</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">React, TypeScript ve Tailwind CSS kullanarak geliştirdiğim, modern web standartlarına uygun kişisel web sayfam.</p>
                
                {/* Kart İçi Yetenek Etiketleri */}
                <ul className="flex flex-wrap gap-2 mt-auto">
                  <li className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">React</li>
                  <li className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Tailwind</li>
                </ul>
              </div>
            </article>

            {/* Proje 2 */}
            <article className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-gray-200 flex flex-col">
              <img src="/proje2.jpg" alt="Python Veri Analizi" className="w-full h-48 object-cover border-b border-gray-200" />
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl text-secondary mb-2">Yapay Zeka Analiz Aracı</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">Eğitimlerim kapsamında geliştirdiğim, veri setlerini inceleyen temel düzey bir Python projesi.</p>
                
                {/* Kart İçi Yetenek Etiketleri */}
                <ul className="flex flex-wrap gap-2 mt-auto">
                  <li className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Python</li>
                  <li className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">Veri Analizi</li>
                </ul>
              </div>
            </article>

          </div>
        </section>
        
        {/* İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select 
                  id="subject" 
                  name="subject" 
                  required 
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* FOOTER BÖLÜMÜ */}
      <footer>
        <p>&copy; 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
        {/* YENİ: Sosyal Medya Bağlantıları */}
        <nav aria-label="Sosyal Medya Bağlantıları">
          <ul>
            <li><a href="https://github.com/ebubekirakin" target="_blank" rel="noopener noreferrer">GitHub Profilim</a></li>
            <li><a href="https://linkedin.com/in/ebubekirakin" target="_blank" rel="noopener noreferrer">LinkedIn Profilim</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App