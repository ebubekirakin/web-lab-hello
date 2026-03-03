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
            <img src="/profil.jpg" alt="Ebubekir Akın'ın vesikalık fotoğrafı" />
            <figcaption>Ebubekir Akın</figcaption>
          </figure>
          <p>
            Merhaba, ben Ebubekir Akın. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. 
            Siber Vatan ve MTA Yapay Zeka Uzmanlık eğitimlerinde kendimi geliştiriyorum.
          </p>
          <p>
            Boş zamanlarımda Beşiktaş maçlarını takip etmeyi, kafa dağıtmak için RDR2 oynamayı ve Game of Thrones izlemeyi seviyorum.
          </p>
          
          {/* YENİ: Teknolojiler Listesi */}
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5 (Semantik & Erişilebilir)</li>
            <li>CSS3</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Vite</li>
            <li>Python (Yapay Zeka Temelleri)</li>
          </ul>
        </section>

        {/* PROJELERİM BÖLÜMÜ */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Kişisel Portföy Sitem</h3>
            <img src="/proje-portfoy.jpg" alt="Kişisel web sitemin karanlık temalı ana sayfası" />
            <p>React, TypeScript ve Vite kullanarak geliştirdiğim, semantik HTML ve modern web standartlarına uygun kişisel web sayfam.</p>
            {/* YENİ: Proje Teknolojileri */}
            <p><strong>Teknolojiler:</strong> React, TypeScript, Semantik HTML, a11y Formlar</p>
          </article>
          
          <article>
            <h3>Yapay Zeka Analiz Aracı</h3>
            <img src="/proje-yz.jpg" alt="Python ile yazılmış veri analizi arayüzü" />
            <p>Eğitimlerim kapsamında geliştirdiğim, veri setlerini inceleyen temel düzey bir Python projesi.</p>
            {/* YENİ: Proje Teknolojileri */}
            <p><strong>Teknolojiler:</strong> Python, Veri Analizi Kütüphaneleri</p>
          </article>
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