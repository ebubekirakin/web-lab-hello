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
        
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="/profil.jpg" alt="vesikalık" />
            <figcaption>Ebubekir Akın</figcaption>
          </figure>
          <p>
            Merhaba, ben Ebubekir Akın. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. 
          </p>
          <p>
            Boş zamanlarımda Beşiktaş maçlarını takip etmeyi, kafa dağıtmak için oyun oynamayı ve dizi izlemeyi seviyorum.
          </p>
          
          {/* YENİ: Flexbox ile Modern Teknolojiler Listesi (Toolbar) */}
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
        </section>

{/* PROJELER BÖLÜMÜ */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          {/* İŞTE SİHİRLİ GRID KUTUMUZ */}
          <div className="project-grid">
            
            {/* Proje 1 */}
            <article className="project-card">
              <img src="/proje1.jpg" alt="Kişisel web sitemin karanlık temalı ana sayfası" />
              <h3>Kişisel Portföy Sitem</h3>
              <p>React, TypeScript ve Vite kullanarak geliştirdiğim, semantik HTML ve modern web standartlarına uygun kişisel web sayfam.</p>
              
              {/* Kart İçi Yetenek Etiketleri */}
              <ul className="skill-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </article>

            {/* Proje 2 */}
            <article className="project-card">
              <img src="/proje2.jpg" alt="Python ile yazılmış veri analizi arayüzü" />
              <h3>Yapay Zeka Analiz Aracı</h3>
              <p>Eğitimlerim kapsamında geliştirdiğim, veri setlerini inceleyen temel düzey bir Python projesi.</p>
              
              {/* Kart İçi Yetenek Etiketleri */}
              <ul className="skill-tags">
                <li>Python</li>
                <li>Veri Analizi</li>
              </ul>
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