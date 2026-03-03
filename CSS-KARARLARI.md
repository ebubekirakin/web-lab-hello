# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?**
  Bu değerler modern web tasarımında endüstri standardı kabul edilen kırılma noktalarıdır. 640px ile büyük telefonlar ve dikey tabletleri, 1024px ile yatay tabletler ve dizüstü bilgisayarları hedefledim.
- **İçeriğim bu noktalarda nasıl değişiyor?**
  0-639px arası mobilde her şey (menü, hakkımda kısmı, projeler) dikey olarak alt alta listeleniyor. 640px'i geçince Header ve "Hakkımda" bölümü yatay düzene (row) geçiyor. 1024px'te ise içerik maksimum genişliğe ulaşıp sayfa ortalanıyor ve proje kartları 3 sütuna sabitleniyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**
  Header tek boyutlu (yatay) bir hizalama gerektiriyordu. Logoyu sola, menüyü sağa yaslamak (`justify-content: space-between`) ve mobilde bu elemanları alt alta dizmek (`flex-direction: column`) Flexbox ile çok pratik olduğu için bu yöntemi tercih ettim.
- **Proje kartları için neden Grid seçim?**
  Proje kartları hem satır hem de sütun bazlı (iki boyutlu) bir ızgara sistemi gerektirdiği için CSS Grid kullandım. Bu sayede kartlar arasındaki boşlukları ve hizalamayı çok daha esnek bir şekilde yönetebildim.
- **auto-fit mi auto-fill mi kullandım, neden?**
  `auto-fit` kullandım. Çünkü ekran genişlediğinde boş sütun kalmasını istemedim; kartların mevcut boşluğu dolduracak şekilde esnemesi (`1fr`) tasarımın her ekranda dolu ve dengeli durmasını sağladı.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  Erişilebilirlik kurallarına (kontrast oranlarına) uygun, profesyonel bir görünüm sunan lacivert (`#1e3a8a`) ve mavi tonlarını ana renklerim olarak belirledim. Bu renkleri `:root` içinde tanımlayarak tüm projede tutarlı bir şekilde kullandım.
- **Spacing skalasını nasıl belirledim?**
  Boşlukları rastgele pikseller vermek yerine, `rem` birimiyle orantılı bir skala (`--space-xs`'den `--space-3xl`'a kadar) oluşturdum. Bu sayede padding ve margin değerleri sitenin her yerinde ritmik ve matematiksel bir uyum içinde oldu.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  Yazıların ani şekilde küçülüp büyümesi yerine ekranla beraber esnemesi için `clamp()` fonksiyonunu kullandım. Erişilebilirliği korumak adına fontların hiçbir zaman `1rem` (16px) altına düşmemesini garanti altına alırken, ortadaki esnek değeri `rem + vw` karışımıyla ayarladım.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**
  Kodlamaya ekranın 0'dan 639px'e kadar olan mobil görünümünün (varsayılan dikey yığın) CSS kurallarını yazarak başladım. Daha sonra `@media (min-width)` kurallarıyla büyük ekranlar için eklemeler ve yerleşim değişiklikleri yaptım.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  Menü mobilde alt alta butonlar halindeyken tablet boyutunda yan yana sekmelere dönüşüyor. "Hakkımda" bölümü mobilde dikey (resim üstte, yazı altta) iken tablette yatay (resim solda, yazı sağda) oluyor. Projeler grid'i de ekran genişledikçe sütun sayısını otomatik artırıyor.
- **Görsel boyutlarını nasıl yönettim?**
  Tüm resimlerin taşıp düzeni bozmasını engellemek için genel bir `max-width: 100%` ve `height: auto` kuralı ekledim. Proje kartlarındaki resimlerin de aynı boyutta ve estetik durması için sabit bir yükseklik verip `object-fit: cover` kuralı ile orantılarının bozulmasını engelledim.