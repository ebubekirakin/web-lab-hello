import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-16 transition-colors duration-500 font-sans">
      
      {/* Dark Mode Test Butonu */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-6 right-6 z-50 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all border border-gray-200 dark:border-gray-700"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden text-xl">☾</span>
        <span className="hidden dark:inline text-xl">☀</span>
      </button>

      <header className="border-b dark:border-gray-800 pb-4">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
          UI Kit
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Projede kullanılan tüm yeniden kullanılabilir bileşenlerin varyantları ve dokümantasyonu.
        </p>
      </header>

      {/* --- BUTTONS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b dark:border-gray-800 pb-2 dark:text-gray-200">Buttons</h2>
        
        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Varyant 1: Renkler (Ana eylemler, ikincil eylemler ve tehlikeli işlemler için)</p>
          <div className="flex flex-wrap gap-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">Varyant 2: Boyutlar (Farklı alan ihtiyaçlarına göre hiyerarşi sağlar)</p>
          <div className="flex flex-wrap items-end gap-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-6 max-w-md">
        <h2 className="text-2xl font-semibold border-b dark:border-gray-800 pb-2 dark:text-gray-200">Inputs</h2>
        
        <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Varyant 3: Normal</p>
            <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Varyant 4: Hatalı (Doğrulama başarısız olduğunda)</p>
            <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Varyant 5: Yardımcı Metinli (Kullanıcıyı yönlendirmek için)</p>
            <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Varyant 6: Devre Dışı (İşlem yapılamayan alanlar)</p>
            <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
          </div>
        </div>
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b dark:border-gray-800 pb-2 dark:text-gray-200">Cards</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Varyant 7-9: Gölgeli, Çerçeveli ve Dolgulu Kart Tasarımları</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
          <Card variant="elevated" title="Elevated Card">
            <p>Gölge ile yükseltilmiş kart. Genellikle ana projeleri veya vurgulanmak istenen içerikleri göstermek için kullanılır.</p>
          </Card>
          
          <Card variant="outlined" title="Outlined Card">
            <p>Çerçeveli kart. Daha sade, gölgesiz bir görünüm gerektiğinde (örneğin liste öğeleri) tercih edilir.</p>
          </Card>
          
          <Card variant="filled" title="Filled Card">
            <p>Dolgulu arka plan. Arka planla hafif bir kontrast yaratarak içeriği gruplamak için kullanılır.</p>
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-6 max-w-xl pb-20">
        <h2 className="text-2xl font-semibold border-b dark:border-gray-800 pb-2 dark:text-gray-200">Alerts</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Varyant 10-13: Kullanıcıya anlık durum bildirimleri vermek için kullanılır.</p>
        
        <div className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border dark:border-gray-800">
          <Alert variant="info" title="Bilgi">
            Sistem güncellemeleri veya genel bilgilendirme mesajı.
          </Alert>
          
          <Alert variant="success" title="Başarılı">
            İşlem tamamlandı. Form başarıyla gönderildi.
          </Alert>
          
          <Alert variant="warning" title="Uyarı">
            Dikkat edilmesi gereken durum. Oturum 5 dakika sonra sona erecek.
          </Alert>
          
          <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Uyarı kapatıldı!')}>
            Bir hata oluştu. Bağlantı kurulamadı, lütfen tekrar deneyin.
          </Alert>
        </div>
      </section>

    </div>
  );
}