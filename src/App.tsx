import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 font-sans">
      
      {/* Karanlık Mod Değiştirme Butonu (Sayfanın sağ üst köşesinde sabit) */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden text-xl">☾</span>
        <span className="hidden dark:inline text-xl">☀</span>
      </button>

      {/* --- UI KIT BÖLÜMÜ (Önceki adımdan korundu) --- */}
      <section id="uikit" className="max-w-6xl mx-auto px-4 py-8 mb-8 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-500 dark:text-gray-400 uppercase tracking-widest">UI Kit (Bileşen Test Alanı)</h2>
        
        <div className="space-y-4">
          <Alert variant="info" title="Bilgi">Sisteme hoş geldin! Component kütüphanesi başarıyla yüklendi.</Alert>
        </div>

        <div className="flex flex-wrap items-end gap-4 mt-6">
          <Button size="sm">Küçük (sm)</Button>
          <Button size="md" variant="secondary">Orta (md)</Button>
          <Button size="lg" variant="danger">Büyük (lg)</Button>
          <Button variant="ghost">Ghost Buton</Button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOCANIN DÖKÜMANINA GÖRE TAILWIND PORTFÖY ENTEGRASYONU */}
      {/* ========================================================= */}

      {/* Header ve Navigasyon */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Ebubekir Akın
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img 
                src="/profil.jpg" 
                alt="Ebubekir Akın vesikalık fotoğrafı" 
                className="w-40 h-40 rounded-full object-cover shadow-lg" 
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Yazılım Mühendisliği öğrencisi olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum. Boş zamanlarımda Beşiktaş maçlarını takip etmeyi ve kafa dağıtmak için oyun oynamayı seviyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Python</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Bölümü (Card Component kullanımı) */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card variant="elevated" title="Kişisel Portföy" image="/proje1.jpg" imageAlt="Portföy anasayfa görünümü">
                <p>React, TypeScript ve Tailwind CSS ile hazırlanan tam kapsamlı kişisel web sitesi.</p>
              </Card>

              <Card variant="outlined" title="Yapay Zeka Analiz Aracı" image="/proje2.jpg" imageAlt="Veri analizi ekran görüntüsü">
                <p>Python tabanlı, veri setlerini inceleyen ve görselleştiren modern yazılım projesi.</p>
              </Card>

              <Card variant="filled" title="Bileşen Kütüphanesi" footer={<Button size="sm">Detayları İncele</Button>}>
                <p>Kendi oluşturduğum Button, Input, Card ve Alert bileşenlerinden oluşan UI Kit.</p>
              </Card>

            </div>
          </div>
        </section>

        {/* İletişim Formu (Input ve Button Component kullanımı) */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" placeholder="Ebubekir Akın" required />
              
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required 
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Ebubekir Akın. Tüm hakları saklıdır.</p>
      </footer>

    </div>
  );
}

export default App;