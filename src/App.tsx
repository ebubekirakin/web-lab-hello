function App() {
  return (
    <>
      <header>
        {/* 1. EKLENTİ: Sayfanın en tepesine zorunlu <h1> başlığı eklendi */}
        <h1>Ebubekir Akın - Kişisel Portföy</h1>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          
          {/* 2. EKLENTİ: Profil fotoğrafı ve alt metni eklendi */}
          <figure>
            <img src="/profil.jpg" alt="Ebubekir Akın'ın vesikalık fotoğrafı" />
            <figcaption>Ebubekir Akın</figcaption>
          </figure>

          <p>
            Merhaba, ben Ebubekir Akın. Fırat Üniversitesi Yazılım Mühendisliği öğrencisiyim. 
          </p>
          <p>
            Beşiktaş maçlarını takip etmeyi ve dizi izlemeyi seviyorum.
          </p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Kişisel Portföy Sitem</h3>
            {/* 3. EKLENTİ: Proje görseli ve anlamlı alt metni eklendi */}
            <img src="/proje-portfoy.jpg" alt="Kişisel web sitemin karanlık temalı ana sayfası" />
            <p>React, TypeScript ve Vite kullanarak geliştirdiğim, semantik HTML ve modern web standartlarına uygun kişisel web sayfam.</p>
          </article>
          
          <article>
            <h3>Yapay Zeka Analiz Aracı</h3>
            {/* 4. EKLENTİ: Proje görseli ve anlamlı alt metni eklendi */}
            <img src="/proje-yz.jpg" alt="Python ile yazılmış veri analizi arayüzü" />
            <p>Eğitimlerim kapsamında geliştirdiğim, veri setlerini inceleyen temel düzey bir Python projesi.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* Form buraya gelecek */}
        </section>
      </main>

      <footer>
        {/* En alttaki Ad Soyad kısmı güncellendi */}
        <p>&copy; 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App