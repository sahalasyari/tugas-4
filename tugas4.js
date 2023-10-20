function hitungKomisi(pendapatan) {
    let uangJasa = 0;
    let persentaseKomisi = 0;
  
    if (pendapatan <= 200000) {
      uangJasa = 10000;
      persentaseKomisi = 0.1;
    } else if (pendapatan <= 500000) {
      uangJasa = 20000;
      persentaseKomisi = 0.15;
    } else {
      uangJasa = 30000;
      persentaseKomisi = 0.2;
    }
  
    const komisi = pendapatan * persentaseKomisi;
    return uangJasa + komisi;
  }
  
  // Contoh penggunaan dengan nilai pendapatan Rp. 300.000
  const pendapatanHariIni = 3000000;
  const totalKomisi = hitungKomisi(pendapatanHariIni);
  
  console.log(`Pendapatan Hari Ini: Rp. ${pendapatanHariIni}`);
  console.log(`Total Komisi: Rp. ${totalKomisi}`);
  