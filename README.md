# Berk Akkoç — Tasarım & Mimarlık

Berk Akkoç'un kişisel mimari portfolyosu. Astro + Tailwind ile inşa edildi,
GitHub Pages üzerinde yayınlanır, `bakkocmimarlik.com` domain'ine bağlıdır.

## Özet

- **Framework:** [Astro](https://astro.build) (statik site, sıfır JS default)
- **Stil:** Tailwind CSS 4 (Vite plugin)
- **İçerik:** Markdown (`src/content/projects/*.md`)
- **Hosting:** GitHub Pages + `bakkocmimarlik.com` (GoDaddy DNS)
- **Dil:** Türkçe

---

## Geliştirme

```bash
npm install          # bağımlılıkları kur
npm run dev          # http://localhost:4321 üzerinde yerel sunucu
npm run build        # production build → dist/
npm run preview      # build edilmiş siteyi yerelde önizle
```

Node >= 18.17 gereklidir.

---

## Yeni proje nasıl eklenir?

Berk için tek adım: yeni bir Markdown dosyası açıp görselleri yükle.

### 1. Görselleri ekle

`public/projeler/` klasörüne yeni klasör açmadan, projeye özgü isimlerle yükle.
Örnek:

```
public/projeler/
  villa-bodrum-kapak.jpg
  villa-bodrum-1.jpg
  villa-bodrum-2.jpg
  villa-bodrum-3.jpg
```

> İdeal: 2400px genişlikte JPG veya WebP. Astro otomatik küçültecek.

### 2. Markdown dosyasını yaz

`src/content/projects/` klasöründe `villa-bodrum.md` adında yeni dosya:

```markdown
---
title: "Villa Bodrum"
year: 2025
location: "Bodrum, Muğla"
category: "Konut"            # Konut | Ticari | İç Mekan | Peyzaj | Kentsel
status: "Tamamlandı"          # Konsept | Tasarım | Uygulama | Tamamlandı
client: "Özel"
area: "240 m²"
cover: "/projeler/villa-bodrum-kapak.jpg"
coverAlt: "Villa Bodrum — denize bakan beyaz cephe"
featured: true                # ana sayfada öne çıksın mı?
order: 1                      # düşük sayı önce gelir
summary: "Tek satırlık kısa açıklama. İlk paragraf gibi görev görür."
images:
  - src: "/projeler/villa-bodrum-1.jpg"
    alt: "Salon — denize bakan pencere"
    caption: "Salon, gün boyu güney ışığı."
    span: "full"              # opsiyonel: tam genişlik
  - src: "/projeler/villa-bodrum-2.jpg"
    alt: "Mutfak"
  - src: "/projeler/villa-bodrum-3.jpg"
    alt: "Yatak odası"
---

## Bağlam

Buradan itibaren proje hikâyesini yaz. Markdown desteklenir:

**kalın**, *italik*, [bağlantı](https://...), listeler, başlıklar.

## Tasarım Kararları

Birden fazla başlık kullanabilirsin.

> Alıntılar bu şekilde görünür.

### Alt başlık

Detaylar...
```

### 3. Önizle

```bash
npm run dev
```

Yeni proje hem `/projeler` listesinde, hem `featured: true` ise ana sayfada
görünür.

### 4. Yayınla

```bash
git add .
git commit -m "Villa Bodrum projesi eklendi"
git push
```

GitHub Actions otomatik build edip canlıya alır (2-3 dakika).

---

## CV PDF güncelleme

Yeni CV'yi `public/cv/berk-akkoc-cv.pdf` adıyla yükle (üzerine yaz).
`/cv` sayfasındaki "PDF indir" butonu otomatik bu dosyaya gider.

---

## Bio ve diğer sayfaları düzenleme

| Sayfa | Dosya |
|---|---|
| Hakkımda metni | `src/pages/hakkimda.astro` |
| CV içeriği (deneyim/eğitim/yetkinlikler) | `src/pages/cv.astro` |
| İletişim bilgileri | `src/pages/iletisim.astro` ve `src/components/Footer.astro` |
| Ana sayfa "Yaklaşım" metni | `src/pages/index.astro` |

E-posta ve telefonu değiştirmek için `Footer.astro` ve `iletisim.astro`
dosyalarındaki `email` / `phone` değişkenlerini düzenle.

---

## Domain — GoDaddy → GitHub Pages

Site `bakkocmimarlik.com` adresine bağlanmak için tek seferlik DNS ayarı:

### GoDaddy DNS panelinde

Aşağıdaki kayıtları ekle (varsa `Parked` veya başka A kayıtlarını sil):

| Tür | İsim | Değer | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| CNAME | www | `<github-kullanici-adi>.github.io` | 600 |

> İsteğe bağlı IPv6 (4 adet AAAA): `2606:50c0:8000::153`, `…::8001:153`,
> `…::8002:153`, `…::8003:153`.

### GitHub Pages ayarları

1. Repo → **Settings → Pages**
2. **Source:** `GitHub Actions`
3. **Custom domain:** `bakkocmimarlik.com` (otomatik doğrulama)
4. DNS yayılır yayılmaz **Enforce HTTPS** kutusunu işaretle

`public/CNAME` dosyası repo'da zaten mevcut; build sırasında otomatik
`dist/CNAME` olarak gider. Manuel ekleme gerekmez.

---

## Proje yapısı

```
.
├── .github/workflows/deploy.yml   # GitHub Pages otomatik deploy
├── public/
│   ├── CNAME                       # bakkocmimarlik.com
│   ├── cv/berk-akkoc-cv.pdf        # CV PDF (sen yükleyeceksin)
│   ├── projeler/                   # proje görselleri (SVG/JPG/WebP)
│   ├── favicon.svg
│   ├── logo.png
│   └── robots.txt
├── src/
│   ├── components/                 # Nav, Footer, ProjectCard, Gallery, ...
│   ├── content/projects/           # her proje bir .md dosyası
│   ├── content.config.ts           # proje şeması (frontmatter alanları)
│   ├── layouts/BaseLayout.astro    # ortak HTML çerçevesi
│   ├── pages/                      # rotalar (index, projeler, ...)
│   └── styles/global.css           # design tokens + Tailwind import
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Tasarım dili

- **Palet:** ink `#0a0a0a`, paper `#faf9f6`, stone `#8a8580`,
  line `#e6e3dc`, accent `#a87a4b`
- **Font:** Inter Tight (variable, Google Fonts)
- **Container:** max 1400px, 6/10/14 yatay padding (mobil/tablet/desktop)
- **Animasyon:** sadece hover'da hafif zoom, scroll-fade — abartı yok

---

## Bilinen TODO'lar

- [ ] Gerçek CV PDF dosyasını `public/cv/berk-akkoc-cv.pdf` olarak yükle
- [ ] Portre fotoğrafını `/hakkimda` sayfasındaki SVG yerine koy
  (`src/pages/hakkimda.astro` içindeki `<aside>` bölümü)
- [ ] Sosyal hesap linklerini gerçek URL'lerle değiştir (Footer + iletisim)
- [ ] Placeholder projelerin yerine gerçek 3-5 proje koy
- [ ] OG paylaşım görseli (`public/og.png`) — 1200x630 sosyal medya kapak
