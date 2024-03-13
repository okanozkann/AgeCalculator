// Yaşı hesaplamak için fonksiyon
const ageHesapla = () => {
  // Bugünkü tarihi al
  const bugun = new Date();

  // Kullanıcının girdiği doğum tarihini al
  const inputTarih = new Date(document.getElementById("date-input").value);

  // Tarihleri Unix epokasından bu yana milisaniye cinsinden çevir
  const dogumZamani = inputTarih.getTime();
  const simdikiZaman = bugun.getTime();

  // Doğum tarihinin gelecekte olup olmadığını kontrol et
  if (dogumZamani > simdikiZaman) {
    alert("Henüz Doğmamış");
    sonucuGoster("-", "-", "-"); // Yer tutucuları görüntüle
    return;
  }

  // Milisaniye cinsinden zaman farkını hesapla
  const farkZamani = simdikiZaman - dogumZamani;

  // Zaman farkından yıl, ay ve günleri hesapla
  const yillar = Math.floor(farkZamani / (1000 * 60 * 60 * 24 * 365));
  const aylar = Math.floor(
    (farkZamani % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const gunler = Math.floor(
    (farkZamani % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  // Hesaplanan yaşı görüntüle
  sonucuGoster(gunler, aylar, yillar);
};

// Yaş sonucunu görüntülemek için fonksiyon
const sonucuGoster = (gunler, aylar, yillar) => {
  document.getElementById("years").textContent = yillar;
  document.getElementById("months").textContent = aylar;
  document.getElementById("days").textContent = gunler;
};

// Yaş Hesapla fonksiyonunu düğme tıklama olayına ekleyin
document.getElementById("calc-age-btn").addEventListener("click", ageHesapla);
