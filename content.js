/* ============================================================
   TAXQUEST — PPh Pasal 24 & 25
   CONTENT — Single Source of Truth
   Revisi: Selaras dengan PDF Resmi Cipta Sarana Cendekia
   ============================================================ */

window.TaxQuestContent = {

  /* ------------------------------------------------------------
     META
     ------------------------------------------------------------ */
  meta: {
    brand: '⚖️ TaxQuest',
    title: 'PPh Pasal 24 & Pasal 25',
    subtitle: 'Kredit Pajak Luar Negeri & Angsuran Pajak Penghasilan',
    version: '2.0',
    totalXP: 300
  },

  /* ------------------------------------------------------------
     LEVELS
     ------------------------------------------------------------ */
  levels: [
    { min: 0,   name: '🌱 Pemula',           icon: '🌱' },
    { min: 30,  name: '📘 Pelajar Pajak',    icon: '📘' },
    { min: 80,  name: '📗 Mahir Kredit',     icon: '📗' },
    { min: 150, name: '🏅 Ahli PPh 24/25',   icon: '🏅' },
    { min: 250, name: '👑 Master TaxQuest',  icon: '👑' }
  ],

  /* ------------------------------------------------------------
     SECTIONS
     ------------------------------------------------------------ */
  sections: [

    /* ═════════════════════════════════════════════════════════
       SECTION 1 — INTRO
       ═════════════════════════════════════════════════════════ */
    {
      id: 'intro',
      tab: { label: 'Pembuka', num: 1 },
      head: {
        kicker: 'Misi 1 · Pembuka',
        title: 'Dua Mekanisme Kunci PPh Indonesia',
        desc: 'PPh Pasal 24 dan PPh Pasal 25 hadir untuk menyelesaikan dua masalah berbeda dalam sistem perpajakan Indonesia. Keduanya bertemu di SPT Tahunan sebagai komponen kredit pajak.'
      },
      blocks: [
        {
          type: 'pillars',
          items: [
            {
              variant: 'p24',
              badge: 'MISI 2',
              icon: '🌐',
              title: 'PPh PASAL 24',
              desc: 'Kredit Pajak Luar Negeri — <strong>Menghindari double taxation</strong>',
              cta: 'Mulai Misi 2 →',
              goto: 'p24'
            },
            {
              variant: 'p25',
              badge: 'MISI 3',
              icon: '📅',
              title: 'PPh PASAL 25',
              desc: 'Angsuran Pajak Bulanan — <strong>Meringankan beban akhir tahun</strong>',
              cta: 'Mulai Misi 3 →',
              goto: 'p25'
            }
          ]
        },

        {
          type: 'card',
          variant: '',
          icon: '🎯',
          title: 'Mengapa Ada PPh 24 dan PPh 25?',
          html: '<p>Dua masalah fundamental dalam sistem PPh Indonesia yang memerlukan dua solusi berbeda:</p>',
          extra: [
            {
              type: 'reveal',
              icon: '❌',
              title: 'Masalah 1: Double Taxation',
              body: '<p>Wajib Pajak dalam negeri terutang pajak atas Penghasilan Kena Pajak yang berasal dari <strong>seluruh penghasilan</strong>, termasuk penghasilan yang diterima atau diperoleh dari luar negeri. Tanpa mekanisme pengkreditan, penghasilan yang sama akan dipajaki dua kali — di negara sumber dan di Indonesia.</p><p><strong>Solusinya: PPh Pasal 24</strong> — PPh Luar Negeri yang terutang, dibayar, atau dipotong di luar negeri dapat dikreditkan terhadap PPh yang terutang di Indonesia.</p>'
            },
            {
              type: 'reveal',
              icon: '❌',
              title: 'Masalah 2: Beban Pajak Akhir Tahun',
              body: '<p>Tanpa mekanisme angsuran, Wajib Pajak akan menghadapi beban pajak besar sekaligus pada akhir tahun pajak, menyulitkan arus kas dan perencanaan keuangan.</p><p><strong>Solusinya: PPh Pasal 25</strong> — Pajak dibayar secara bertahap setiap bulan selama tahun pajak berjalan, sebagai <strong>angsuran Pajak Penghasilan dalam Tahun Pajak berjalan untuk suatu bulan yang harus dibayar sendiri oleh Wajib Pajak</strong>.</p>'
            }
          ]
        },

        {
          type: 'callout',
          variant: 'ok',
          icon: '💡',
          title: 'Prinsip Kunci',
          html: 'PPh 24 = <strong>KREDIT</strong> pajak dari luar negeri (di akhir tahun). PPh 25 = <strong>ANGSURAN</strong> pajak bulanan (sepanjang tahun). Keduanya mengurangi PPh terutang di SPT Tahunan.'
        }
      ]
    },

    /* ═════════════════════════════════════════════════════════
       SECTION 2 — PPh 24
       ═════════════════════════════════════════════════════════ */
    {
      id: 'p24',
      tab: { label: 'PPh 24', num: 2 },
      head: {
        kicker: 'Misi 2 · PPh Pasal 24',
        title: 'Kredit Pajak Luar Negeri',
        desc: 'Mekanisme pengkreditan PPh Luar Negeri terhadap PPh terutang di Indonesia untuk menghindari pemajakan berganda atas penghasilan dari luar negeri.'
      },
      blocks: [

        /* --- Definisi & Dasar Hukum --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '📘',
          title: 'Definisi &amp; Dasar Hukum',
          html: `
            <div class="callout p24" style="margin-top:0;">
              <div class="callout-title">📖 DEFINISI</div>
              Kredit Pajak Luar Negeri adalah pengkreditan <strong>PPh Luar Negeri</strong> — yaitu pajak penghasilan yang <strong>terutang, dibayar, atau dipotong di luar negeri</strong> — terhadap PPh yang terutang di Indonesia.
            </div>
            <p><strong>Dasar Hukum:</strong></p>
            <ul>
              <li>Pasal 24 UU PPh No. 36 Tahun 2008</li>
              <li>Keputusan Menteri Keuangan Nomor 192/PMK.03/2018</li>
            </ul>
            <p><strong>Prinsip Dasar:</strong> Wajib Pajak dalam negeri terutang pajak atas Penghasilan Kena Pajak yang berasal dari <strong>seluruh penghasilan</strong>, termasuk penghasilan yang diterima atau diperoleh dari luar negeri.</p>
          `
        },

        /* --- Timing Penggabungan --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '📅',
          title: 'Timing Penggabungan Penghasilan Luar Negeri',
          html: '<p>Penghasilan dari luar negeri digabungkan dengan penghasilan dalam negeri pada tahun pajak yang berbeda tergantung jenis penghasilannya:</p>',
          extra: [
            {
              type: 'table',
              headers: ['Jenis Penghasilan', 'Tahun Pajak Penggabungan'],
              rows: [
                { cells: ['<strong>Penghasilan dari usaha</strong>', 'Tahun pajak <strong>diperolehnya</strong> penghasilan tersebut'], variant: ['td-label',''] },
                { cells: ['<strong>Penghasilan lainnya</strong>', 'Tahun pajak <strong>diterimanya</strong> penghasilan tersebut'], variant: ['td-label',''] },
                { cells: ['<strong>Dividen</strong> [Pasal 18 ayat (2)]', 'Tahun pajak pada saat <strong>perolehan dividen</strong> (256/PMK.03/2008)'], variant: ['td-label',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '🔑',
              title: 'Aturan Kunci',
              html: 'Pengkreditan dilakukan dalam <strong>tahun pajak digabungkannya penghasilan</strong>. Berbeda jenis penghasilan → bisa berbeda tahun pajak penggabungan.'
            }
          ]
        },

        /* --- Batas Pengkreditan --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '⚖️',
          title: 'Batas Pengkreditan PPh Luar Negeri',
          html: `
            <div class="callout p24" style="margin-top:0;font-family:'JetBrains Mono',monospace;font-size:13.5px;line-height:1.8;">
              <strong>Pengkreditan PPh Luar Negeri</strong> dilakukan menurut perbandingan antara <strong>penghasilan dari luar negeri</strong> terhadap <strong>Penghasilan Kena Pajak</strong> dikalikan dengan <strong>PPh terutang atas PKP</strong>, dengan batasan:
            </div>
            <div class="callout gold">
              <div class="callout-title">⚠️ Dua Batas Penting</div>
              <ul style="margin-top:6px;">
                <li>Paling tinggi sama dengan <strong>jumlah pajak yang dibayar atau terutang di luar negeri</strong></li>
                <li>Tidak boleh melebihi <strong>Jumlah Tertentu</strong> — yaitu hasil perbandingan di atas</li>
                <li><strong>Pengecualian:</strong> Jika PKP lebih kecil dari penghasilan luar negeri, maka batas maksimalnya sama dengan <strong>PPh terutang atas PKP</strong></li>
              </ul>
            </div>
            <p><strong>PKP yang digunakan</strong> untuk perhitungan ini <strong>TIDAK termasuk</strong>:</p>
            <ul>
              <li>Penghasilan yang dikenai <strong>PPh bersifat final</strong>, dan/atau</li>
              <li>Penghasilan yang dikenai <strong>PPh tersendiri</strong></li>
            </ul>
          `
        },

        /* --- Per Negara --- */
        {
          type: 'callout',
          variant: 'p24',
          icon: '🌍',
          title: 'Perhitungan Per Negara',
          html: 'Apabila penghasilan luar negeri berasal dari <strong>beberapa negara</strong>, penghitungan kredit pajak dilakukan <strong>untuk masing-masing negara</strong>. Perhitungan tidak boleh digabung menjadi satu angka global.'
        },

        /* --- Kelebihan Kredit --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '⚠️',
          title: 'Kelebihan Kredit Pajak Luar Negeri',
          html: '<p>Dalam hal jumlah Pajak Penghasilan yang dibayar atau terutang di luar negeri <strong>melebihi</strong> jumlah kredit pajak yang diperkenankan, kelebihan tersebut:</p>',
          extra: [
            {
              type: 'grid-cards',
              cols: 3,
              items: [
                { variant: 'p24', icon: '🚫', title: 'TIDAK dapat diperhitungkan', html: 'Kelebihan tidak dapat diperhitungkan dengan Pajak Penghasilan yang terutang tahun berikutnya.' },
                { variant: 'p24', icon: '🚫', title: 'TIDAK boleh dibiayakan', html: 'Kelebihan tidak boleh dibebankan sebagai biaya atau pengurang penghasilan.' },
                { variant: 'p24', icon: '🚫', title: 'TIDAK dapat direstitusi', html: 'Kelebihan tidak dapat dimintakan restitusi kepada negara.' }
              ]
            }
          ]
        },

        /* --- Bukti Pembayaran --- */
        {
          type: 'card',
          variant: '',
          icon: '📄',
          title: 'Bukti Pemenuhan Pembayaran PPh Luar Negeri',
          html: '<p>Bagi WPDN yang mengkreditkan PPh Luar Negeri, bukti pemenuhan pembayaran dapat berupa:</p>',
          extra: [
            {
              type: 'two-col',
              left: {
                variant: 'p24',
                title: '📎 Jenis Bukti',
                html: `
                  <ul>
                    <li>Salinan <strong>bukti pembayaran</strong> PPh Luar Negeri; atau</li>
                    <li>Salinan <strong>bukti pemotongan</strong> PPh Luar Negeri; atau</li>
                    <li>Salinan <strong>bukti lainnya</strong> yang dapat menunjukkan adanya pembayaran atau pemotongan PPh Luar Negeri.</li>
                  </ul>
                `
              },
              right: {
                variant: 'p25',
                title: '📋 Informasi Minimal',
                html: `
                  <ul>
                    <li><strong>Nama WPDN</strong></li>
                    <li><strong>Jumlah PPh Luar Negeri</strong></li>
                  </ul>
                `
              }
            }
          ]
        },

        /* --- 8 Kriteria Sumber Penghasilan --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🌍',
          title: 'Delapan Kriteria Penentuan Sumber Penghasilan',
          html: '<p>Sumber penghasilan ditentukan berdasarkan jenis penghasilan untuk menghitung batas jumlah pajak yang boleh dikreditkan:</p>',
          extra: [
            {
              type: 'table',
              headers: ['#', 'Jenis Penghasilan', 'Negara Sumber'],
              rows: [
                { cells: ['A', 'Saham &amp; sekuritas lainnya; keuntungan pengalihan saham/sekuritas', 'Negara tempat <strong>badan yang menerbitkan</strong> saham/sekuritas didirikan atau bertempat kedudukan'], variant: ['td-label','',''] },
                { cells: ['B', 'Bunga, royalti, sewa harta gerak', 'Negara tempat <strong>pihak yang membayar atau dibebani</strong> bunga/royalti/sewa berkedudukan'], variant: ['td-label','',''] },
                { cells: ['C', 'Sewa harta tak gerak', 'Negara tempat <strong>harta tersebut terletak</strong>'], variant: ['td-label','',''] },
                { cells: ['D', 'Imbalan jasa, pekerjaan &amp; kegiatan', 'Negara tempat <strong>pihak yang membayar atau dibebani</strong> imbalan berkedudukan'], variant: ['td-label','',''] },
                { cells: ['E', 'Penghasilan Bentuk Usaha Tetap (BUT)', 'Negara tempat <strong>BUT</strong> menjalankan usaha atau melakukan kegiatan'], variant: ['td-label','',''] },
                { cells: ['F', 'Pengalihan hak penambangan / turut serta pembiayaan perusahaan pertambangan', 'Negara tempat <strong>lokasi penambangan</strong> berada'], variant: ['td-label','',''] },
                { cells: ['G', 'Keuntungan pengalihan harta tetap', 'Negara tempat <strong>harta tetap</strong> berada'], variant: ['td-label','',''] },
                { cells: ['H', 'Keuntungan pengalihan harta bagian dari BUT', 'Negara tempat <strong>BUT</strong> berada'], variant: ['td-label','',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '🧭',
              title: 'Logika Cepat',
              html: '<strong>Aset fisik</strong> → negara lokasi · <strong>Pembayar</strong> → negara pembayar · <strong>Entitas</strong> → negara pendirian · <strong>BUT</strong> → negara operasional'
            }
          ]
        },

        /* --- DRAG DROP --- */
        {
          type: 'dragdrop',
          id: 'dd-sumber',
          icon: '🎯',
          title: 'Latihan: Cocokkan Sumber Penghasilan',
          desc: 'Seret setiap jenis penghasilan ke negara sumber yang tepat. +5 XP per jawaban benar.',
          xpPerCorrect: 5,
          items: [
            { id: 'saham', text: 'Saham &amp; sekuritas',     zone: 'penerbit' },
            { id: 'bunga', text: 'Bunga &amp; royalti',       zone: 'pembayar' },
            { id: 'sewa',  text: 'Sewa harta tak gerak',      zone: 'lokasi'   },
            { id: 'but',   text: 'Penghasilan BUT',           zone: 'but'      },
            { id: 'jasa',  text: 'Imbalan jasa',              zone: 'pembayar' },
            { id: 'harta', text: 'Pengalihan harta tetap',    zone: 'lokasi'   }
          ],
          zones: [
            { id: 'penerbit', title: '🏢 Negara Penerbit' },
            { id: 'pembayar', title: '💰 Negara Pembayar' },
            { id: 'lokasi',   title: '📍 Negara Lokasi Harta' },
            { id: 'but',      title: '🏛️ Negara BUT' }
          ]
        },

        /* --- Contoh 1: PT A Jakarta --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🏢',
          title: 'Contoh 1: PT A Jakarta — Penentuan Tahun Penggabungan',
          html: `
            <p><strong>PT A di Jakarta dalam Tahun Pajak 2017 menerima dan memperoleh penghasilan neto dari sumber luar negeri:</strong></p>
            <ol style="margin-left:20px;font-size:13.5px;line-height:1.8;">
              <li>Hasil usaha di <strong>Singapura</strong> tahun pajak 2017 sebesar Rp 800.000.000</li>
              <li>Dividen atas saham "X Ltd." di <strong>Australia</strong> Rp 200.000.000 — berasal dari keuntungan tahun 2016 yang dibayar tahun 2017</li>
              <li>Dividen dari penyertaan 70% pada "Y Corporation" di <strong>Hongkong</strong> Rp 75.000.000 — saham tidak diperdagangkan di bursa efek, berasal dari keuntungan 2016</li>
              <li>Bunga kwartal IV 2017 dari "Z Corporation" di <strong>Kuala Lumpur</strong> Rp 100.000.000 — <em>baru akan diterima bulan Juli 2018</em></li>
            </ol>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Penghasilan', 'Tahun Penggabungan', 'Alasan'],
              rows: [
                { cells: ['a. Hasil usaha Singapura', '<strong>2017</strong>', 'Tahun diperolehnya penghasilan usaha'], variant: ['td-label','td-p24',''] },
                { cells: ['b. Dividen X Ltd.', '<strong>2017</strong>', 'Tahun diterimanya dividen (dibayar 2017)'], variant: ['td-label','td-p24',''] },
                { cells: ['c. Dividen Y Corp.', '<strong>2017</strong>', 'Sesuai penetapan saat perolehan dividen'], variant: ['td-label','td-p24',''] },
                { cells: ['d. Bunga Z Corp.', '<strong>2018</strong>', 'Baru diterima Juli 2018 — tahun diterimanya'], variant: ['td-label','td-p25',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Pelajaran Kunci',
              html: 'Tidak semua penghasilan LN digabungkan di tahun yang sama. <strong>Perhatikan timing</strong> — bisa ada penghasilan yang diperoleh tahun ini tapi baru digabungkan tahun depan.'
            }
          ]
        },

        /* --- Contoh 2: PT Indologo Satu --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '📊',
          title: 'Contoh 2: PT Indologo Satu — Penggabungan Multi-Negara',
          html: `
            <p><strong>WPDN, PT Indologo Satu dalam Tahun Pajak 2018 menerima dan memperoleh penghasilan neto dari luar Indonesia:</strong></p>
            <ul style="font-size:13.5px;line-height:1.7;">
              <li><strong>Penghasilan usaha</strong> dari cabang di negara V: Rp 800.000.000</li>
              <li><strong>Dividen dari XYZ Ltd.</strong> (negara W): Rp 200.000.000 — penyertaan 25%, saham di bursa efek, dari laba 2016 yang ditetapkan RUPS 2017, diterima Feb 2018</li>
              <li><strong>Bunga semester II 2017</strong> dari STU Sdn. Bhd. (negara Y): Rp 100.000.000 — diterima Juli 2018</li>
              <li><strong>Keuntungan penjualan saham XYZ Ltd.</strong> (negara W): Rp 50.000.000 — diterima Desember 2018</li>
              <li><strong>Dividen dari PQR Corp.</strong> (negara X): Rp 75.000.000 — penyertaan 75%, saham tidak di bursa, dari laba 2017</li>
            </ul>
          `,
          extra: [
            {
              type: 'callout',
              variant: 'p24',
              icon: '📌',
              title: 'Kesimpulan Penggabungan',
              html: 'Seluruh penghasilan tersebut digabungkan dengan penghasilan dalam negeri pada <strong>Tahun Pajak 2018</strong> — sesuai tahun pajak diperoleh atau diterimanya masing-masing penghasilan. Dividen dari PQR Corp. (non-bursa) mengikuti ketentuan PMK tentang penetapan saat diperolehnya dividen, yang dalam contoh ini ditetapkan diperoleh pada 2018.'
            }
          ]
        },

        /* --- Contoh 3: PT B Bandung --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🧮',
          title: 'Contoh 3: PT B Bandung — Batas Kredit Multi-Negara dengan Kerugian',
          html: `
            <p><strong>PT B di Bandung memperoleh penghasilan neto dalam tahun 2020:</strong></p>
            <table class="tbl" style="margin-top:8px;">
              <thead><tr><th>Asal Penghasilan</th><th class="amt">Ph Neto</th><th class="amt">Tarif</th><th class="amt">PPh LN</th></tr></thead>
              <tbody>
                <tr><td class="td-label">a. Laba dari negara X</td><td class="amt">Rp 1.000.000.000</td><td class="amt">40%</td><td class="amt">Rp 400.000.000</td></tr>
                <tr><td class="td-label">b. Laba dari negara Y</td><td class="amt">Rp 3.000.000.000</td><td class="amt">20%</td><td class="amt">Rp 600.000.000</td></tr>
                <tr><td class="td-label">c. Rugi di negara Z</td><td class="amt">(Rp 2.500.000.000)</td><td class="amt">—</td><td class="amt">—</td></tr>
                <tr class="row-subtotal"><td>Jumlah penghasilan luar negeri</td><td class="amt">Rp 4.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td>Penghasilan dalam negeri</td><td class="amt">Rp 4.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr class="row-total"><td>Total Ph Neto</td><td class="amt">Rp 8.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td><strong>PPh terutang (tarif Pasal 17)</strong></td><td class="amt"><strong>Rp 1.760.000.000</strong></td><td class="amt"></td><td class="amt"></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Prinsip Penting',
              html: 'Kerugian di luar negeri <strong>tidak dapat dikompensasikan</strong> dengan penghasilan yang diterima atau diperoleh dari Indonesia. Kerugian negara Z Rp 2.500.000.000 <strong>tidak dikompensasikan</strong>.'
            },
            {
              type: 'calc',
              steps: [
                { label: 'Batas Maksimum Kredit untuk Negara X', html: '(1.000.000.000 / 8.000.000.000) × 1.760.000.000 = <strong>Rp 220.000.000</strong><br><em>Walaupun pajak yang telah dipotong di negara X = Rp 400.000.000</em><br>→ Kredit = <strong>Rp 220.000.000</strong>', variant: 'p24' },
                { label: 'Batas Maksimum Kredit untuk Negara Y', html: '(3.000.000.000 / 8.000.000.000) × 1.760.000.000 = <strong>Rp 660.000.000</strong><br>Karena di negara Y hanya dipotong pajak = Rp 600.000.000<br>→ Kredit = <strong>Rp 600.000.000</strong>', variant: 'p24' }
              ],
              final: 'Jumlah kredit pajak luar negeri yang diperkenankan = Rp 220.000.000 + Rp 600.000.000 = Rp 820.000.000'
            }
          ]
        },

        /* --- Contoh 4: PT C Bogor --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '💡',
          title: 'Contoh 4: PT C Bogor — Ketika PPh LN &lt; Jumlah Tertentu',
          html: `
            <p><strong>PT C di Bogor memperoleh penghasilan neto dalam tahun 2020:</strong></p>
            <table class="tbl" style="margin-top:8px;">
              <thead><tr><th>Asal Penghasilan</th><th class="amt">Ph Neto</th><th class="amt">Tarif</th><th class="amt">PPh LN</th></tr></thead>
              <tbody>
                <tr><td class="td-label">a. Laba dari negara X</td><td class="amt">Rp 1.000.000.000</td><td class="amt">20%</td><td class="amt">Rp 200.000.000</td></tr>
                <tr><td>b. Penghasilan dalam negeri</td><td class="amt">Rp 1.000.000.000</td><td class="amt">—</td><td class="amt">—</td></tr>
                <tr class="row-total"><td>Jumlah Ph Neto</td><td class="amt">Rp 2.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td><strong>PPh terutang (tarif Pasal 17)</strong></td><td class="amt"><strong>Rp 440.000.000</strong></td><td class="amt"></td><td class="amt"></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Batas Maksimum Kredit untuk Negara X', html: '(1.000.000.000 / 2.000.000.000) × 440.000.000 = <strong>Rp 220.000.000</strong><br>Karena di negara X hanya dipotong pajak <strong>Rp 200.000.000</strong><br>→ Kredit = <strong>Rp 200.000.000</strong> <em>(PPh LN lebih kecil)</em>', variant: 'p24' }
              ],
              final: 'Kredit pajak luar negeri yang diperkenankan = Rp 200.000.000'
            },
            {
              type: 'callout',
              variant: 'ok',
              icon: '✅',
              title: 'Pelajaran Kunci',
              html: 'Ketika <strong>PPh LN &lt; Jumlah Tertentu</strong>, kredit diambil sebesar PPh LN. Tidak ada yang "terbuang" — seluruh pajak luar negeri dapat dikreditkan.'
            }
          ]
        },

        /* --- Contoh 5: PT E Surabaya --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🏙️',
          title: 'Contoh 5: PT E Surabaya — Dua Negara dengan Tarif Berbeda',
          html: `
            <table class="tbl" style="margin-top:8px;">
              <thead><tr><th>Asal Penghasilan</th><th class="amt">Ph Neto</th><th class="amt">Tarif</th><th class="amt">PPh LN</th></tr></thead>
              <tbody>
                <tr><td class="td-label">a. Laba dari negara X</td><td class="amt">Rp 1.000.000.000</td><td class="amt">40%</td><td class="amt">Rp 400.000.000</td></tr>
                <tr><td class="td-label">b. Laba dari negara Y</td><td class="amt">Rp 2.000.000.000</td><td class="amt">20%</td><td class="amt">Rp 400.000.000</td></tr>
                <tr class="row-subtotal"><td>Jumlah penghasilan luar negeri</td><td class="amt">Rp 3.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td>Penghasilan dalam negeri</td><td class="amt">Rp 2.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr class="row-total"><td>Total Ph Neto</td><td class="amt">Rp 5.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td><strong>PPh terutang</strong></td><td class="amt"><strong>Rp 1.110.000.000</strong></td><td class="amt"></td><td class="amt"></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Untuk Negara X', html: '(1.000.000.000 / 5.000.000.000) × 1.110.000.000 = <strong>Rp 222.000.000</strong><br>Walaupun pajak yang telah dipotong di negara X = Rp 400.000.000<br>→ Kredit = <strong>Rp 222.000.000</strong>', variant: 'p24' },
                { label: 'Untuk Negara Y', html: '(2.000.000.000 / 5.000.000.000) × 1.110.000.000 = <strong>Rp 444.000.000</strong><br>Karena pajak yang dipotong di negara Y hanya Rp 400.000.000<br>→ Kredit = <strong>Rp 400.000.000</strong>', variant: 'p24' }
              ],
              final: 'Jumlah kredit pajak luar negeri yang diperkenankan = Rp 222.000.000 + Rp 400.000.000 = Rp 622.000.000'
            }
          ]
        },

        /* --- Contoh 6: PT F Malang --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🏭',
          title: 'Contoh 6: PT F Malang — Penghasilan Final Dikeluarkan dari PKP',
          html: `
            <table class="tbl" style="margin-top:8px;">
              <thead><tr><th>Asal Penghasilan</th><th class="amt">Ph Neto</th><th class="amt">Tarif</th><th class="amt">PPh LN</th></tr></thead>
              <tbody>
                <tr><td class="td-label">a. Laba dari negara X</td><td class="amt">Rp 2.000.000.000</td><td class="amt">30%</td><td class="amt">Rp 600.000.000</td></tr>
                <tr><td class="td-label">b. Penghasilan dalam negeri — tidak final</td><td class="amt">Rp 3.000.000.000</td><td class="amt">—</td><td class="amt">—</td></tr>
                <tr><td class="td-label">c. Penghasilan dalam negeri — <em>final</em></td><td class="amt">Rp 500.000.000</td><td class="amt">—</td><td class="amt">—</td></tr>
                <tr class="row-subtotal"><td>Total Ph Neto tidak final</td><td class="amt">Rp 5.000.000.000</td><td class="amt"></td><td class="amt"></td></tr>
                <tr><td><strong>PPh terutang</strong></td><td class="amt"><strong>Rp 1.110.000.000</strong></td><td class="amt"></td><td class="amt"></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Untuk Negara X', html: '(2.000.000.000 / 5.000.000.000) × 1.110.000.000 = <strong>Rp 440.000.000</strong>', variant: 'p24' }
              ],
              final: 'Jumlah kredit pajak luar negeri yang diperkenankan = Rp 440.000.000'
            },
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Perhatikan',
              html: 'Penghasilan dalam negeri yang dikenai <strong>PPh Final</strong> (Rp 500.000.000) <strong>TIDAK DIMASUKKAN</strong> dalam PKP untuk perhitungan PPh 24. PKP = Rp 5.000.000.000 (bukan Rp 5.500.000.000).'
            }
          ]
        },

        /* --- QUIZ PPh 24 --- */
        {
          type: 'quiz',
          id: 'q24-1',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Kapan penghasilan dari luar negeri berupa <em>usaha</em> digabungkan dengan penghasilan dalam negeri?',
          options: [
            { text: 'Tahun pajak diterimanya penghasilan', correct: false },
            { text: 'Tahun pajak diperolehnya penghasilan usaha', correct: true },
            { text: 'Tahun pajak berikutnya setelah diterima', correct: false },
            { text: 'Saat SPT disampaikan', correct: false }
          ],
          explanation: 'Untuk penghasilan dari usaha, penggabungan dilakukan dalam tahun pajak diperolehnya penghasilan usaha tersebut. Sedangkan penghasilan lainnya digabungkan pada tahun pajak diterimanya.'
        },
        {
          type: 'quiz',
          id: 'q24-2',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Jika PPh Luar Negeri Rp 400 juta dan Jumlah Tertentu Rp 220 juta, berapa PPh 24 yang dapat dikreditkan?',
          options: [
            { text: 'Rp 400.000.000', correct: false },
            { text: 'Rp 220.000.000', correct: true },
            { text: 'Rp 180.000.000', correct: false },
            { text: 'Rp 620.000.000', correct: false }
          ],
          explanation: 'Kredit pajak tidak boleh melebihi Jumlah Tertentu. Jika PPh LN > Jumlah Tertentu, kredit dibatasi sebesar Jumlah Tertentu (Rp 220.000.000).'
        },
        {
          type: 'quiz',
          id: 'q24-3',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Apa yang terjadi jika PPh Luar Negeri melebihi jumlah kredit yang diperkenankan?',
          options: [
            { text: 'Kelebihan dapat direstitusi ke negara', correct: false },
            { text: 'Kelebihan dapat dibiayakan sebagai pengurang penghasilan', correct: false },
            { text: 'Kelebihan tidak dapat diperhitungkan tahun berikutnya, tidak dibiayakan, dan tidak direstitusi', correct: true },
            { text: 'Kelebihan otomatis menjadi kredit pajak tahun berikutnya', correct: false }
          ],
          explanation: 'Kelebihan kredit PPh LN tidak dapat diperhitungkan dengan PPh terutang tahun berikutnya, tidak boleh dibebankan sebagai biaya/pengurang penghasilan, dan tidak dapat dimintakan restitusi.'
        },
        {
          type: 'quiz',
          id: 'q24-4',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Dalam menghitung PKP untuk PPh 24, penghasilan yang dikenai PPh Final…',
          options: [
            { text: 'Tetap dimasukkan dalam PKP', correct: false },
            { text: 'Tidak dimasukkan dalam PKP', correct: true },
            { text: 'Dimasukkan sebagian', correct: false },
            { text: 'Dikenai tarif berbeda', correct: false }
          ],
          explanation: 'PKP untuk perhitungan PPh 24 tidak termasuk penghasilan yang dikenai PPh bersifat final dan/atau penghasilan yang dikenai pajak tersendiri.'
        },

        {
          type: 'nav-next',
          label: 'Lanjut Misi 3: PPh 25 →',
          goto: 'p25'
        }
      ]
    },

    /* ═════════════════════════════════════════════════════════
       SECTION 3 — PPh 25
       ═════════════════════════════════════════════════════════ */
    {
      id: 'p25',
      tab: { label: 'PPh 25', num: 3 },
      head: {
        kicker: 'Misi 3 · PPh Pasal 25',
        title: 'Angsuran Pajak Tahun Berjalan',
        desc: 'Angsuran Pajak Penghasilan dalam Tahun Pajak berjalan untuk suatu bulan yang harus dibayar sendiri oleh Wajib Pajak — meringankan beban pajak akhir tahun.'
      },
      blocks: [

        /* --- Definisi --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📘',
          title: 'Definisi &amp; Dasar Hukum',
          html: `
            <div class="callout p25" style="margin-top:0;">
              <div class="callout-title">📖 DEFINISI PPh PASAL 25</div>
              Angsuran Pajak Penghasilan dalam Tahun Pajak berjalan untuk suatu bulan yang harus dibayar sendiri oleh Wajib Pajak.
            </div>
            <p><strong>Dasar Hukum:</strong></p>
            <ul>
              <li>Pasal 25 UU PPh</li>
              <li>PP Nomor 94 Tahun 2010</li>
              <li>Peraturan Menteri Keuangan Nomor 215/PMK.03/2018</li>
              <li>Keputusan Dirjen Pajak Nomor KEP-537/PJ./2000</li>
              <li>Surat Edaran Dirjen Pajak Nomor SE-48/PJ.42/1999</li>
            </ul>
            <p><strong>Tujuan:</strong> Meringankan beban pajak akhir tahun dengan pembayaran bertahap setiap bulan sepanjang tahun berjalan.</p>
          `
        },

        /* --- Overview Skenario --- */
        {
          type: 'card',
          variant: '',
          icon: '🗺️',
          title: 'Overview: Enam Skenario Perhitungan PPh 25',
          html: '<p>Perhitungan PPh 25 bervariasi tergantung kondisi Wajib Pajak:</p>',
          extra: [
            {
              type: 'grid-cards',
              cols: 3,
              items: [
                { variant: 'p25', icon: '01', title: 'Perhitungan Umum', html: 'Berdasarkan PPh terutang dalam SPT Tahunan tahun pajak yang lalu dikurangi kredit pajak, dibagi 12.' },
                { variant: 'p25', icon: '02', title: 'Sebelum SPT Disampaikan', html: 'Sama dengan besarnya angsuran PPh 25 bulan terakhir tahun pajak yang lalu (bersifat sementara).' },
                { variant: 'p25', icon: '03', title: 'WP Bank', html: 'Berdasarkan laporan keuangan bulanan yang disampaikan ke OJK.' },
                { variant: 'p25', icon: '04', title: 'WP Lainnya &amp; Masuk Bursa', html: 'Berdasarkan laporan keuangan per 3 bulan yang disampaikan ke bursa/OJK.' },
                { variant: 'p25', icon: '05', title: 'WP BUMN / BUMD', html: 'Berdasarkan RKAP yang telah disahkan RUPS.' },
                { variant: 'p25', icon: '06', title: 'WP Baru / OPPT / Khusus', html: 'WP Baru NIHIL, OPPT 0,75% × peredaran bruto, serta WP dengan kompensasi kerugian dan perubahan usaha.' }
              ]
            }
          ]
        },

        /* --- Perhitungan Umum --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🧮',
          title: 'Perhitungan Secara Umum',
          html: `
            <div class="callout p25" style="margin-top:0;">
              <div class="callout-title">📐 Dasar Perhitungan</div>
              <strong>PPh Terutang</strong> dalam SPT Tahunan PPh Tahun Pajak yang lalu.
            </div>
            <div class="callout gold">
              <div class="callout-title">➖ Kredit Pajak (Pengurang)</div>
              PPh yang telah dipotong/dipungut (bersifat tidak final) dalam SPT Tahunan PPh Tahun Pajak yang lalu, yaitu:
              <ul style="margin-top:6px;">
                <li>PPh Pasal 21</li>
                <li>PPh Pasal 22</li>
                <li>PPh Pasal 23</li>
                <li>PPh Pasal 24</li>
              </ul>
            </div>
            <div class="callout p25" style="text-align:center;font-family:'JetBrains Mono',monospace;font-size:15px;padding:18px;">
              <strong>PPh 25 = (PPh Terutang − Kredit Pajak) ÷ 12</strong>
              <div style="font-size:12px;margin-top:6px;font-style:italic;">atau dibagi banyaknya bulan dalam tahun berjalan</div>
            </div>
          `
        },

        /* --- Contoh Umum --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📊',
          title: 'Contoh: Perhitungan Umum (WP Badan)',
          html: `
            <p><strong>PPh terutang berdasarkan SPT Tahunan PPh WP Badan Tahun 2022:</strong></p>
            <table class="tbl" style="margin-top:10px;">
              <tbody>
                <tr class="row-subtotal"><td class="td-label">PPh terutang (SPT Tahunan 2022)</td><td class="amt">Rp 50.000.000</td></tr>
                <tr><td>Dikurangi — PPh Pasal 22</td><td class="amt">(Rp 10.000.000)</td></tr>
                <tr><td>Dikurangi — PPh Pasal 23</td><td class="amt">(Rp 2.500.000)</td></tr>
                <tr><td>Dikurangi — Kredit Pajak Luar Negeri (Pasal 24)</td><td class="amt">(Rp 7.500.000)</td></tr>
                <tr class="row-subtotal"><td><strong>Jumlah kredit pajak</strong></td><td class="amt"><strong>(Rp 20.000.000)</strong></td></tr>
                <tr class="row-total"><td><strong>Selisih (PPh yang harus dibayar sendiri)</strong></td><td class="amt"><strong>Rp 30.000.000</strong></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Angsuran PPh 25 setiap bulan untuk tahun 2023', html: 'Rp 30.000.000 ÷ 12 = <strong>Rp 2.500.000/bulan</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- Contoh 2: WP dengan kerugian dalam negeri --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📉',
          title: 'Contoh: Perhitungan dengan Data Lengkap',
          html: `
            <table class="tbl" style="margin-top:8px;">
              <tbody>
                <tr><td class="td-label">Penghasilan neto fiskal Tahun 2022</td><td class="amt">Rp 570.000.000</td></tr>
                <tr><td>PPh terutang (22% × 570.000.000)</td><td class="amt">Rp 125.400.000</td></tr>
                <tr><td>PPh yang telah dipotong/dipungut (kredit pajak) — PPh Ps. 22</td><td class="amt">Rp 150.750.000</td></tr>
                <tr class="row-subtotal"><td><strong>PPh yang harus dibayar sendiri</strong></td><td class="amt"><strong>(Rp 25.350.000)</strong></td></tr>
                <tr><td>PPh yang dibayar sendiri — PPh Ps. 25 Jan–Des 2022</td><td class="amt">Rp 12.000.000</td></tr>
                <tr class="row-total"><td><strong>PPh yang lebih dibayar</strong></td><td class="amt"><strong>(Rp 37.350.000)</strong></td></tr>
              </tbody>
            </table>
          `,
          extra: [
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Perhatikan',
              html: 'Jika nilai PPh yang harus dibayar sendiri <strong>negatif</strong> (lebih bayar), maka angsuran PPh 25 tahun berikutnya menjadi <strong>NIHIL</strong> — WP tidak perlu membayar angsuran.'
            }
          ]
        },

        /* --- Angsuran Sebelum SPT --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '⏱️',
          title: 'Angsuran Sebelum SPT Tahunan Disampaikan',
          html: `
            <div class="callout gold" style="margin-top:0;">
              <div class="callout-title">🔑 Prinsip</div>
              Besarnya angsuran PPh 25 untuk bulan-bulan <strong>sebelum SPT Tahunan disampaikan</strong> adalah <strong>sama dengan</strong> besarnya angsuran pajak untuk <strong>bulan terakhir tahun pajak yang lalu</strong>.
            </div>
          `,
          extra: [
            {
              type: 'table',
              headers: ['WP', 'SPT Disampaikan', 'Masa Berlaku Angsuran Sementara', 'Masa Berlaku Angsuran Baru'],
              rows: [
                { cells: ['<strong>WP Badan</strong>', 'April 2023', 'Jan, Feb, Mar 2023', 'April 2023 s/d Des 2023'], variant: ['td-label','','',''] },
                { cells: ['<strong>WP Orang Pribadi</strong>', 'Maret 2023', 'Jan, Feb 2023', 'Maret 2023 s/d Des 2023'], variant: ['td-label','','',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'p25',
              icon: '📌',
              title: 'Contoh',
              html: 'Angsuran PPh 25 setiap bulan untuk tahun 2022 = Rp 2.500.000 (Rp 30.000.000 ÷ 12). Jika SPT Tahunan 2022 disampaikan <strong>Maret 2023</strong>, angsuran tersebut berlaku untuk masa Maret 2023. Angsuran untuk masa <strong>Januari dan Februari 2023</strong> masing-masing sama dengan angsuran PPh 25 bulan <strong>Desember 2022</strong>.'
            }
          ]
        },

        /* --- WP Bank --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🏦',
          title: 'WP Bank: Perhitungan Berdasarkan Laporan Keuangan',
          html: `
            <p><strong>Dasar Perhitungan:</strong> Laporan keuangan yang disampaikan kepada <strong>Otoritas Jasa Keuangan (OJK)</strong>, terdiri dari:</p>
            <ul>
              <li>Laporan <strong>posisi keuangan</strong></li>
              <li>Laporan <strong>laba rugi</strong> sejak awal Tahun Pajak sampai dengan Masa Pajak yang dilaporkan</li>
            </ul>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif Pasal 17 × Penghasilan Neto)<br>
              − PPh Ps. 22 (sejak awal tahun s/d masa pajak dilaporkan)<br>
              − PPh Ps. 25 (sejak awal tahun s/d masa pajak sebelum yang dilaporkan)
            </div>
            <p><strong>Penghasilan neto TIDAK termasuk:</strong></p>
            <ul>
              <li>Penghasilan dari luar negeri yang diterima/diperoleh WP</li>
              <li>Penghasilan dan biaya sebagai pengurang yang dikenai <strong>PPh Final</strong> dan/atau <strong>bukan objek</strong> PPh</li>
            </ul>
            <p>Kerugian yang dapat dikompensasikan dikompensasi dengan penghasilan neto dalam negeri.</p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Masa Pajak', 'Penghasilan Neto', 'PPh Terutang 22%', 'PPh Ps. 22', 'PPh Ps. 25 s.d. masa dilaporkan', 'Angsuran yg masih harus dibayar'],
              rows: [
                { cells: ['Januari',  '1.000.000.000', '220.000.000', '25.000.000',  '—',            '195.000.000'], variant: ['td-label','amt','amt','amt','amt','amt'] },
                { cells: ['Februari', '2.100.000.000', '462.000.000', '75.000.000',  '195.000.000',  '192.000.000'], variant: ['td-label','amt','amt','amt','amt','amt'] },
                { cells: ['Maret',    '1.900.000.000', '418.000.000', '100.000.000', '387.000.000',  '0'],           variant: ['td-label','amt','amt','amt','amt','amt'] },
                { cells: ['April',    '4.600.000.000', '1.012.000.000','250.000.000','387.000.000',  '375.000.000'], variant: ['td-label','amt','amt','amt','amt','amt'] }
              ]
            }
          ]
        },

        /* --- WP Lainnya & Bursa --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📈',
          title: 'WP Lainnya &amp; WP Masuk Bursa (Selain Bank)',
          html: `
            <p><strong>Dasar Perhitungan:</strong> Laporan keuangan yang disampaikan setiap <strong>3 (tiga) bulan</strong> kepada bursa dan/atau OJK — terdiri dari laporan posisi keuangan dan laporan laba rugi sejak awal Tahun Pajak s/d periode yang dilaporkan.</p>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif Pasal 17 × Penghasilan Neto)<br>
              − PPh Ps. 22 dan PPh Ps. 23 (sejak awal tahun s/d masa pajak dilaporkan)<br>
              − PPh Ps. 25 (sejak awal tahun s/d masa pajak sebelum yang dilaporkan)
            </div>
            <p>Angsuran PPh 25 ini merupakan angsuran untuk <strong>3 (tiga) Masa Pajak setelah periode yang dilaporkan</strong>.</p>
            <p>Dalam hal WP memiliki kerugian yang dapat dikompensasikan, kerugian tersebut dikompensasikan dengan penghasilan neto dalam negeri.</p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Periode', 'Penghasilan Neto', 'PPh Terutang 22%', 'PPh Ps. 22 &amp; 23', 'PPh Ps. 25 s.d. sebelumnya', 'Angsuran 3 bln berikutnya'],
              rows: [
                { cells: ['Jan–Mar', '2.100.000.000', '462.000.000', '75.000.000',  '—',           '129.000.000'], variant: ['td-label','amt','amt','amt','amt','amt'] },
                { cells: ['Apr–Jun', '4.700.000.000', '1.034.000.000','125.000.000','387.000.000', '174.000.000'], variant: ['td-label','amt','amt','amt','amt','amt'] },
                { cells: ['Jul–Sep', '3.200.000.000', '704.000.000', '200.000.000', '909.000.000', '0'],           variant: ['td-label','amt','amt','amt','amt','amt'] }
              ]
            }
          ]
        },

        /* --- WP BUMN/BUMD --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🏛️',
          title: 'WP BUMN &amp; BUMD',
          html: `
            <p><strong>Dasar Perhitungan:</strong> Penerapan tarif Pasal 17 UU PPh atas penghasilan neto berdasarkan <strong>Rencana Kerja dan Anggaran Pendapatan (RKAP)</strong> Tahun Pajak yang bersangkutan yang telah disahkan RUPS.</p>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif × Ph Neto RKAP − PPh Ps. 22 − PPh Ps. 23 − PPh Ps. 24) ÷ 12
            </div>
            <p><strong>Pengecualian:</strong> Ketentuan ini berlaku selain untuk WP Bank, WP Masuk Bursa, dan WP Lainnya.</p>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Data', html: 'Ph neto fiskal 2023 menurut RKAP yang disahkan RUPS Januari 2023: <strong>Rp 12.000.000.000</strong><br>PPh Terutang setahun = 22% × 12.000.000.000 = <strong>Rp 2.640.000.000</strong>', variant: 'p25' },
                { label: 'Dikurangi pemotongan/pemungutan PPh tahun 2022', html: 'PPh Ps. 22: Rp 300.000.000<br>PPh Ps. 23: Rp 0<br>PPh Ps. 24: Rp 0<br>Total: <strong>Rp 300.000.000</strong>', variant: 'p25' },
                { label: 'PPh yang harus dibayar sendiri', html: 'Rp 2.640.000.000 − Rp 300.000.000 = <strong>Rp 2.340.000.000</strong>', variant: 'p25' }
              ],
              final: 'Angsuran PPh 25 mulai Januari 2023 = (1/12) × Rp 2.340.000.000 = Rp 195.000.000'
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '📌',
              title: 'Ketentuan RKAP',
              html: '<strong>RKAP</strong> harus disampaikan kepada DJP melalui KPP tempat WP terdaftar, tidak lewat batas waktu pembayaran PPh 25 Masa Pajak pertama Tahun Pajak berjalan. Jika belum disahkan, angsuran untuk bulan-bulan sebelum pengesahan sama dengan <strong>angsuran PPh 25 bulan terakhir tahun pajak sebelumnya</strong>.'
            }
          ]
        },

        /* --- WP OPPT --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🛒',
          title: 'WP Orang Pribadi Pengusaha Tertentu (OPPT)',
          html: `
            <p><strong>Pengertian OPPT:</strong></p>
            <ul>
              <li>Wajib Pajak orang pribadi yang melakukan kegiatan usaha <strong>perdagangan atau jasa</strong></li>
              <li>Tidak termasuk jasa sehubungan dengan <strong>pekerjaan bebas</strong></li>
              <li>Pada <strong>1 atau lebih tempat kegiatan usaha</strong> yang berbeda dengan tempat tinggal Wajib Pajak</li>
            </ul>
            <p><strong>Kewajiban Pendaftaran:</strong> WP OPPT harus mendaftarkan <strong>setiap lokasi usaha</strong> pada wilayah KPP terkait. Tidak boleh mendaftarkan hanya salah satu lokasi jika memiliki lebih dari satu tempat usaha.</p>
            <p><strong>Kode Akun Pajak:</strong> 411125 &nbsp;|&nbsp; <strong>Kode Jenis Setor:</strong> 101</p>
            <div class="callout p25" style="text-align:center;font-family:'JetBrains Mono',monospace;font-size:15px;padding:16px;">
              <strong>PPh 25 = 0,75% × Peredaran Bruto bulanan per lokasi usaha</strong>
            </div>
            <p>Pembayaran Angsuran PPh 25 dari masing-masing tempat usaha merupakan <strong>kredit pajak</strong> atas PPh yang terutang untuk Tahun Pajak yang bersangkutan.</p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Tempat Usaha', 'Peredaran Bruto Jan 2023', 'PPh 25 (0,75%)'],
              rows: [
                { cells: ['KPP Pratama A', 'Rp 214.020.000', 'Rp 1.605.150'], variant: ['td-label','amt','amt'] },
                { cells: ['KPP Pratama B', 'Rp 178.050.000', 'Rp 1.335.375'], variant: ['td-label','amt','amt'] },
                { cells: ['KPP Pratama C', 'Rp 82.110.000',  'Rp 615.825'],   variant: ['td-label','amt','amt'] },
                { cells: ['<strong>Total</strong>', '', '<strong>Rp 3.556.350</strong>'], variant: ['td-label','','amt'] }
              ]
            }
          ]
        },

        /* --- WP Baru --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🆕',
          title: 'WP Baru: Angsuran NIHIL',
          html: `
            <div class="callout p25" style="margin-top:0;">
              <div class="callout-title">🔑 Prinsip</div>
              Angsuran PPh 25 untuk Wajib Pajak Baru pada Tahun Pajak berjalan <strong>ditetapkan NIHIL</strong>.
            </div>
            <p><strong>Pengecualian:</strong> Ketentuan ini tidak berlaku untuk WP Baru berikut:</p>
            <ul>
              <li>Wajib Pajak Bank</li>
              <li>Wajib Pajak Masuk Bursa</li>
              <li>Wajib Pajak Badan Usaha Milik Negara</li>
              <li>Wajib Pajak Badan Usaha Milik Daerah</li>
              <li>Wajib Pajak Lainnya; dan/atau</li>
              <li>Wajib Pajak Orang Pribadi Pengusaha Tertentu</li>
            </ul>
          `,
          extra: [
            {
              type: 'callout',
              variant: 'gold',
              icon: '📌',
              title: 'Contoh',
              html: 'PT A terdaftar pada <strong>Februari 2022</strong> di KPP ABC, maka Angsuran PPh Pasal 25 pada Tahun Pajak 2022 (Februari s.d. Desember) untuk PT A adalah <strong>NIHIL</strong>.'
            }
          ]
        },

        /* --- SPT Terlambat / Perpanjangan --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '⏳',
          title: 'SPT Terlambat &amp; Perpanjangan Jangka Waktu',
          html: `
            <div class="callout gold" style="margin-top:0;">
              <div class="callout-title">🔑 Prinsip Universal</div>
              Besarnya PPh 25 untuk bulan-bulan mulai <strong>batas waktu penyampaian SPT Tahunan</strong> sampai dengan bulan <strong>sebelum disampaikannya SPT Tahunan</strong> adalah sama dengan besarnya PPh 25 bulan terakhir tahun pajak yang lalu (<strong>bersifat sementara</strong>).
            </div>
            <p><strong>Contoh — SPT Terlambat:</strong></p>
            <ul>
              <li>SPT Tahunan PPh Tahun 2021 baru disampaikan <strong>Juli 2022</strong> (seharusnya paling lambat akhir April 2022)</li>
              <li>Angsuran PPh 25 berdasarkan SPT: <strong>Rp 1.300.000</strong></li>
              <li>Angsuran PPh 25 masa Januari s/d Juni 2022: Rp 1.000.000 (sementara)</li>
              <li>Setelah diketahui angsuran seharusnya Rp 1.300.000: angsuran PPh 25 mulai masa April 2022 s/d Juli 2022 <strong>ditambah Rp 300.000/bulan</strong> (berikut sanksi)</li>
            </ul>
            <p><strong>Contoh — Perpanjangan:</strong></p>
            <ul>
              <li>Angsuran PPh 25 Januari–Maret 2021 (SPT 2019): Rp 1.200.000/bulan</li>
              <li>April 2021 (SPT 2020 sementara): Rp 1.500.000</li>
              <li>SPT 2020 perpanjangan disampaikan akhir Juni 2021, dengan angsuran PPh 25 = Rp 2.000.000</li>
              <li>WP menghitung ulang <strong>PPh 29 (kurang bayar)</strong> + sanksi, dan menambah angsuran mulai masa April 2021 sebesar <strong>Rp 500.000/bulan</strong> + sanksi</li>
            </ul>
          `
        },

        /* --- Pembetulan SPT --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '✏️',
          title: 'Wajib Pajak Membetulkan Sendiri SPT',
          html: `
            <div class="callout gold" style="margin-top:0;">
              <div class="callout-title">📝 Aturan</div>
              Jika WP membetulkan sendiri SPT Tahunan PPh yang mengakibatkan <strong>angsuran bulanan lebih besar</strong> dari angsuran bulanan sebelum pembetulan, maka besarnya PPh 25 dihitung kembali berdasarkan <strong>SPT Tahunan Pembetulan</strong> dan <strong>berlaku surut</strong> mulai bulan batas waktu penyampaian SPT Tahunan.
            </div>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Contoh Kasus', html: 'Angsuran PPh Ps. 25 mulai masa April 2023 (berdasarkan SPT 2021 sebelum pembetulan) = <strong>Rp 2.500.000</strong><br><br>Bulan Agustus 2024, WP membetulkan sendiri SPT Tahunan PPh 2023 dengan perhitungan angsuran PPh Ps. 25 = <strong>Rp 3.000.000</strong><br><br>→ Angsuran PPh Ps. 25 sebesar Rp 3.000.000 <strong>berlaku surut mulai masa April 2024</strong><br>→ Selisih Rp 500.000/bulan untuk masa April–Juli 2024 harus dibayar (berikut sanksi)', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- Kompensasi Kerugian --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📉',
          title: 'WP Berhak atas Kompensasi Kerugian',
          html: `
            <p>Kerugian fiskal dapat dikompensasikan dengan penghasilan mulai tahun pajak berikutnya <strong>berturut-turut sampai dengan 5 (lima) tahun</strong>.</p>
            <p><strong>Data:</strong></p>
            <ul>
              <li>Ph neto Tahun 2023: Rp 116.800.000</li>
              <li>Sisa kerugian Tahun 2019 yang belum dikompensasikan: Rp 166.800.000</li>
              <li>Ph neto Tahun 2024: Rp 115.840.000</li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan Tahun 2023', html: 'Ph neto 2023: Rp 116.800.000<br>Kompensasi kerugian 2019: (Rp 166.800.000)<br>Ph neto setelah kompensasi: <strong>(Rp 50.000.000)</strong><br>Karena masih rugi → <strong>Angsuran PPh 25 Tahun 2024 = NIHIL</strong>', variant: 'p25' },
                { label: 'Perhitungan Tahun 2024', html: 'Ph neto 2024: Rp 115.840.000<br>Sisa kerugian 2019 yang masih dapat dikompensasi: (Rp 50.000.000)<br>Ph neto setelah kompensasi: <strong>Rp 65.840.000</strong><br><br>PPh terutang = 22% × Rp 65.840.000 = <strong>Rp 14.484.800</strong><br>PPh yang masih harus dibayar sendiri = Rp 14.484.800<br>Angsuran PPh Ps. 25 Tahun 2024 = 0<br>PPh Kurang Bayar (PPh Ps. 29) = Rp 14.484.800<br><br>Angsuran PPh Ps. 25 Tahun 2025 = (1/12) × Rp 14.484.800 = <strong>Rp 1.207.067</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- Perubahan Keadaan Usaha --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '📊',
          title: 'Terjadi Perubahan Keadaan Usaha',
          html: '<p>Ada dua skenario perubahan yang perlu diperhatikan:</p>',
          extra: [
            {
              type: 'two-col',
              left: {
                variant: 'p24',
                title: '📉 Usaha Menurun (< 75%)',
                html: `
                  <p>Apabila setelah <strong>3 bulan atau lebih</strong> berjalannya suatu tahun pajak, WP dapat menunjukkan bahwa PPh yang akan terutang untuk tahun pajak tersebut <strong>kurang dari 75%</strong> dari PPh terutang yang menjadi dasar penghitungan PPh 25:</p>
                  <ul>
                    <li>WP dapat mengajukan <strong>permohonan pengurangan</strong> PPh 25 secara tertulis kepada Kepala KPP tempat WP terdaftar</li>
                    <li>Disertai penghitungan PPh yang akan terutang berdasarkan perkiraan penghasilan dan besarnya PPh 25 untuk bulan-bulan tersisa</li>
                    <li>Jika dalam <strong>1 bulan</strong> tidak ada keputusan, permohonan <strong>dianggap diterima</strong></li>
                  </ul>
                  <p style="font-size:12px;color:var(--ink-3);margin-top:8px;"><em>Dasar: Pasal 7 KEP-537/PJ./2000</em></p>
                `
              },
              right: {
                variant: 'p25',
                title: '📈 Usaha Meningkat (> 150%)',
                html: `
                  <p>Apabila dalam tahun pajak berjalan WP mengalami <strong>peningkatan usaha</strong> dan diperkirakan PPh terutang untuk tahun tersebut <strong>lebih dari 150%</strong> dari PPh terutang yang menjadi dasar penghitungan PPh 25:</p>
                  <ul>
                    <li>Besarnya PPh 25 untuk bulan-bulan yang tersisa dari tahun pajak yang bersangkutan <strong>harus dihitung kembali</strong></li>
                    <li>Berdasarkan perkiraan kenaikan PPh terutang tersebut</li>
                    <li>Dihitung oleh <strong>WP sendiri</strong> atau <strong>Kepala KPP</strong> tempat WP terdaftar</li>
                  </ul>
                `
              }
            }
          ]
        },

        /* --- Contoh Perubahan Usaha --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '👤',
          title: 'Contoh: Perubahan Keadaan Usaha (Orang Pribadi)',
          html: `
            <p><strong>WP Orang Pribadi (K/1) — Jasa Konsultan Hukum</strong></p>
            <p>SPT Tahunan PPh OP Tahun 2022 disampaikan akhir Maret 2023:</p>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan Tahun 2022', html: 'Ph neto dari klien beberapa perusahaan dan praktik di kediaman sendiri: Rp 263.000.000<br>PTKP (K/1): (Rp 63.000.000)<br>Ph KP: <strong>Rp 200.000.000</strong><br><br>PPh terutang 2022:<br>5% × Rp 60.000.000 = Rp 3.000.000<br>15% × Rp 140.000.000 = Rp 21.000.000<br>Jumlah = <strong>Rp 24.000.000</strong><br><br>Kredit Pajak: Rp 2.700.000<br>PPh yang harus dibayar sendiri = <strong>Rp 21.300.000</strong><br>PPh dibayar sendiri (PPh 25 Jan–Des 2022) = Rp 18.000.000<br>PPh Kurang Bayar Tahun 2022 = <strong>Rp 3.300.000</strong><br><br>Angsuran PPh Ps. 25 Tahun 2023 = (1/12) × 21.300.000 = <strong>Rp 1.775.000</strong>', variant: 'p25' }
              ]
            },
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan Ulang 2023 (setelah usaha menurun)', html: 'Ph neto turun menjadi: Rp 163.000.000<br>PTKP (K/1): (Rp 63.000.000)<br>Ph KP: <strong>Rp 100.000.000</strong><br><br>PPh terutang 2023:<br>5% × Rp 60.000.000 = Rp 3.000.000<br>15% × Rp 40.000.000 = Rp 6.000.000<br>Jumlah = <strong>Rp 9.000.000</strong><br><br>PPh Ps. 25 Januari s/d Mei 2023 sudah dibayar: Rp 7.900.000<br>PPh yang masih harus dibayar sendiri 7 bulan: Rp 1.100.000<br><strong>Angsuran PPh Ps. 25 per bulan = (1/7) × 1.100.000 = Rp 157.143</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- QUIZ PPh 25 --- */
        {
          type: 'quiz',
          id: 'q25-1',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Bagaimana formula perhitungan PPh 25 secara umum?',
          options: [
            { text: '22% × Penghasilan Neto', correct: false },
            { text: '(PPh Terutang − Kredit Pajak) ÷ 12', correct: true },
            { text: '0,75% × Peredaran Bruto', correct: false },
            { text: 'PPh Terutang × 12', correct: false }
          ],
          explanation: 'Perhitungan umum PPh 25 = (PPh Terutang − Kredit Pajak) ÷ 12, atau dibagi banyaknya bulan dalam tahun berjalan.'
        },
        {
          type: 'quiz',
          id: 'q25-2',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Besarnya angsuran PPh 25 sebelum SPT Tahunan disampaikan adalah…',
          options: [
            { text: 'Nihil', correct: false },
            { text: 'Sama dengan PPh 25 bulan terakhir tahun pajak yang lalu', correct: true },
            { text: 'Dua kali lipat angsuran tahun lalu', correct: false },
            { text: 'Belum ditentukan sampai SPT disampaikan', correct: false }
          ],
          explanation: 'Untuk bulan-bulan sebelum SPT disampaikan, angsuran PPh 25 sama dengan angsuran bulan terakhir tahun pajak yang lalu — bersifat sementara.'
        },
        {
          type: 'quiz',
          id: 'q25-3',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Bagaimana perhitungan PPh 25 untuk WP Bank?',
          options: [
            { text: '1/12 × PPh terutang tahun lalu', correct: false },
            { text: 'Berdasarkan laporan keuangan bulanan: (Tarif × Ph Neto) − PPh 22 − PPh 25 sebelumnya', correct: true },
            { text: '0,75% × peredaran bruto', correct: false },
            { text: 'Nihil sampai ada SPT', correct: false }
          ],
          explanation: 'WP Bank menghitung PPh 25 berdasarkan laporan keuangan bulanan yang disampaikan ke OJK: (Tarif Pasal 17 × Penghasilan Neto) − PPh Ps. 22 − PPh Ps. 25 yang seharusnya dibayar sejak awal tahun.'
        },
        {
          type: 'quiz',
          id: 'q25-4',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Berapa angsuran PPh 25 untuk WP OPPT per lokasi usaha?',
          options: [
            { text: '22% × laba usaha', correct: false },
            { text: '0,75% × peredaran bruto bulanan', correct: true },
            { text: '1/12 × PPh terutang', correct: false },
            { text: '5% × keuntungan', correct: false }
          ],
          explanation: 'WP OPPT (Orang Pribadi Pengusaha Tertentu) menghitung PPh 25 sebesar 0,75% dari peredaran bruto bulanan untuk masing-masing tempat usaha.'
        },
        {
          type: 'quiz',
          id: 'q25-5',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Berapa angsuran PPh 25 untuk Wajib Pajak Baru (non-bank, non-BUMN)?',
          options: [
            { text: '1/12 × PPh terutang', correct: false },
            { text: 'NIHIL', correct: true },
            { text: '0,75% × peredaran bruto', correct: false },
            { text: '22% × penghasilan', correct: false }
          ],
          explanation: 'Angsuran PPh 25 untuk Wajib Pajak Baru (selain WP Bank, WP Masuk Bursa, BUMN/BUMD, WP Lainnya, dan WP OPPT) pada Tahun Pajak berjalan ditetapkan NIHIL.'
        },

        {
          type: 'nav-next',
          label: 'Lanjut Misi 4: Perbandingan →',
          goto: 'compare'
        }
      ]
    },

    /* ═════════════════════════════════════════════════════════
       SECTION 4 — COMPARE
       ═════════════════════════════════════════════════════════ */
    {
      id: 'compare',
      tab: { label: 'Banding', num: 4 },
      head: {
        kicker: 'Misi 4 · Perbandingan',
        title: 'PPh 24 vs PPh 25',
        desc: 'Dua mekanisme, dua peran, satu tujuan akhir: menjadi kredit pajak yang mengurangi PPh terutang di SPT Tahunan.'
      },
      blocks: [
        {
          type: 'card',
          variant: '',
          icon: '📊',
          title: 'Tabel Perbandingan Komprehensif',
          html: `
            <table class="tbl">
              <thead>
                <tr>
                  <th style="width:20%;">Aspek</th>
                  <th style="width:40%;">PPh Pasal 24</th>
                  <th style="width:40%;">PPh Pasal 25</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="td-label">Tujuan</td><td class="td-p24">Menghindari double taxation</td><td class="td-p25">Meringankan beban pajak akhir tahun</td></tr>
                <tr><td class="td-label">Timing</td><td class="td-p24">Akhir tahun (SPT Tahunan)</td><td class="td-p25">Bulanan (tahun berjalan)</td></tr>
                <tr><td class="td-label">Sifat</td><td class="td-p24"><strong>KREDIT</strong> pajak (pengurang)</td><td class="td-p25"><strong>ANGSURAN</strong> pajak (pembayaran)</td></tr>
                <tr><td class="td-label">Dasar Hitung</td><td class="td-p24">PPh Luar Negeri yang dibayar/terutang</td><td class="td-p25">PPh terutang tahun lalu</td></tr>
                <tr><td class="td-label">Formula</td><td class="td-p24">min(PPh LN, Jumlah Tertentu)</td><td class="td-p25">(PPh Terutang − Kredit Pajak) ÷ 12</td></tr>
                <tr><td class="td-label">Per Negara</td><td class="td-p24">Ya — per negara &amp; per jenis penghasilan</td><td class="td-p25">Tidak — per WP</td></tr>
                <tr><td class="td-label">Hubungan SPT</td><td class="td-p24">Komponen kredit pajak</td><td class="td-p25">Komponen kredit pajak</td></tr>
                <tr><td class="td-label">Kelebihan</td><td class="td-p24">Tidak bisa direstitusi / dibiayakan</td><td class="td-p25">Dapat dipindahbukukan ke masa berikutnya</td></tr>
              </tbody>
            </table>
          `
        },

        {
          type: 'card',
          variant: '',
          icon: '💥',
          title: 'Myth vs Fact',
          html: '<p>Klik setiap kartu untuk membuka fakta sebenarnya. +2 XP per reveal.</p>',
          extra: [
            {
              type: 'myth-fact',
              items: [
                { myth: 'Semua pajak yang dibayar di LN bisa dikreditkan.', fact: 'Hanya pajak yang <strong>terutang, dibayar, atau dipotong di luar negeri</strong> atas penghasilan dari luar negeri yang dapat dikreditkan — dan dibatasi Jumlah Tertentu.' },
                { myth: 'PPh 25 = PPh terutang ÷ 12.', fact: 'PPh 25 = <strong>(PPh Terutang − Kredit Pajak) ÷ 12</strong> — kredit pajak (PPh 21, 22, 23, 24) dikurangkan dulu.' },
                { myth: 'Kerugian LN bisa mengurangi penghasilan DN.', fact: 'Kerugian LN <strong>TIDAK DAPAT dikompensasikan</strong> dengan penghasilan yang diterima atau diperoleh dari Indonesia.' },
                { myth: 'Kelebihan kredit PPh 24 dapat direstitusi.', fact: 'Kelebihan kredit PPh 24 <strong>TIDAK dapat</strong> diperhitungkan tahun berikutnya, <strong>TIDAK boleh</strong> dibiayakan, dan <strong>TIDAK dapat</strong> dimintakan restitusi.' },
                { myth: 'Penghasilan final dimasukkan dalam PKP untuk PPh 24.', fact: 'Penghasilan yang dikenai <strong>PPh Final</strong> dan/atau pajak tersendiri <strong>TIDAK DIMASUKKAN</strong> dalam PKP untuk perhitungan PPh 24.' }
              ]
            }
          ]
        },

        {
          type: 'card',
          variant: 'card-dark',
          icon: '🗺️',
          title: 'Posisi dalam Alur SPT Tahunan',
          html: `
            <p style="color:rgba(255,255,255,.85);margin-bottom:20px;">Dimana masing-masing pasal berperan dalam perhitungan PPh Badan?</p>
            <div class="flow">
              <div class="flow-step">Penghasilan Bruto (DN + LN)</div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step">− Biaya &amp; Koreksi Fiskal</div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step gold">+ Gabungkan Penghasilan LN ← <strong>PPh 24 (peran 1)</strong></div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step">− Kompensasi Kerugian → <strong>PKP</strong></div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step">× Tarif Pasal 17 → <strong>PPh Terutang</strong></div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step hl">− Kredit: PPh 22, 23, <strong>PPh 24 (peran 2)</strong>, <strong>PPh 25</strong></div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step success">PPh Kurang Bayar / Lebih Bayar</div>
            </div>
          `
        },

        {
          type: 'nav-next',
          label: 'Lanjut Misi 5: Studi Kasus →',
          goto: 'case'
        }
      ]
    },

    /* ═════════════════════════════════════════════════════════
       SECTION 5 — CASE STUDY
       ═════════════════════════════════════════════════════════ */
    {
      id: 'case',
      tab: { label: 'Studi Kasus', num: 5 },
      head: {
        kicker: 'Misi 5 · Studi Kasus',
        title: 'PT Sejahtera Jaya — Tahun Pajak 2025',
        desc: 'Integrasikan seluruh konsep PPh 24 dan PPh 25 dalam satu kasus komprehensif. Anda berperan sebagai staf pajak.'
      },
      blocks: [
        {
          type: 'card',
          variant: 'card-gold',
          icon: '🎯',
          title: 'Brief Misi',
          html: `
            <p>Anda adalah staf pajak PT Sejahtera Jaya. Siapkan perhitungan PPh Badan tahun 2025 berdasarkan data berikut:</p>
            <ul>
              <li><strong>Penghasilan neto dalam negeri (non-final):</strong> Rp 5.000.000.000</li>
              <li><strong>Negara A (usaha):</strong> Rp 1.500.000.000 — PPh LN Rp 400.000.000</li>
              <li><strong>Negara B (bunga):</strong> Rp 500.000.000 — PPh LN Rp 100.000.000</li>
              <li><strong>Kerugian Negara C:</strong> Rp 200.000.000 (bukan dari cabang)</li>
              <li><strong>Kredit pajak dalam negeri:</strong> PPh 22 Rp 150.000.000 · PPh 23 Rp 50.000.000</li>
              <li><strong>PPh 25 sudah dibayar:</strong> Rp 500.000.000</li>
            </ul>
            <div class="callout gold" style="margin-top:12px;">
              <div class="callout-title">🎯 Target Perhitungan</div>
              ① PKP &nbsp;·&nbsp; ② PPh Terutang &nbsp;·&nbsp; ③ PPh 24 per negara &nbsp;·&nbsp; ④ PPh Kurang/Lebih Bayar &nbsp;·&nbsp; ⑤ Proyeksi PPh 25 tahun berikutnya
            </div>
          `
        },

        {
          type: 'card',
          variant: 'card-p24',
          icon: '①',
          title: 'Langkah 1 — Hitung PKP &amp; PPh Terutang',
          html: `
            <div class="calc-step p24">
              <div class="calc-label">PKP</div>
              <div class="calc-body">
                Penghasilan LN yang digabungkan:<br>
                &nbsp;&nbsp;• Negara A: Rp 1.500.000.000<br>
                &nbsp;&nbsp;• Negara B: Rp 500.000.000<br>
                &nbsp;&nbsp;• Negara C (rugi): <em>tidak digabung — bukan dari cabang</em><br>
                <strong>Jumlah LN = Rp 2.000.000.000</strong><br><br>
                PKP = Rp 5.000.000.000 + Rp 2.000.000.000 = <strong>Rp 7.000.000.000</strong>
              </div>
            </div>
            <div class="calc-step p25">
              <div class="calc-label">PPh Terutang</div>
              <div class="calc-body">22% × Rp 7.000.000.000 = <strong>Rp 1.540.000.000</strong></div>
            </div>
          `,
          extra: [
            { type: 'xp-button', label: '✓ Paham Langkah 1', xp: 15, msg: 'Langkah 1 selesai!' }
          ]
        },

        {
          type: 'card',
          variant: 'card-p24',
          icon: '②',
          title: 'Langkah 2 — PPh 24 per Negara',
          html: `
            <div class="calc-step p24">
              <div class="calc-label">Negara A — Penghasilan Usaha</div>
              <div class="calc-body">
                Jumlah Tertentu = (1.500.000.000 / 7.000.000.000) × 1.540.000.000 = <strong>Rp 330.000.000</strong><br>
                PPh LN = Rp 400.000.000<br>
                → PPh 24 = <strong>Rp 330.000.000</strong> <em>(Jumlah Tertentu lebih kecil)</em>
              </div>
            </div>
            <div class="calc-step p24">
              <div class="calc-label">Negara B — Penghasilan Bunga</div>
              <div class="calc-body">
                Jumlah Tertentu = (500.000.000 / 7.000.000.000) × 1.540.000.000 = <strong>Rp 110.000.000</strong><br>
                PPh LN = Rp 100.000.000<br>
                → PPh 24 = <strong>Rp 100.000.000</strong> <em>(PPh LN lebih kecil)</em>
              </div>
            </div>
            <div class="calc-final">Total PPh 24 = Rp 330.000.000 + Rp 100.000.000 = Rp 430.000.000</div>
          `,
          extra: [
            { type: 'callout', variant: 'warn', icon: '⚠️', title: 'Perhatikan', html: 'Kerugian Negara C sebesar Rp 200.000.000 <strong>TIDAK DAPAT</strong> dikompensasikan karena bukan dari cabang/perwakilan di luar negeri.' },
            { type: 'xp-button', label: '✓ Paham Langkah 2', xp: 15, msg: 'Langkah 2 selesai!' }
          ]
        },

        {
          type: 'card',
          variant: 'card-p25',
          icon: '③',
          title: 'Langkah 3 — PPh Kurang/Lebih Bayar &amp; Proyeksi PPh 25',
          html: `
            <table class="tbl">
              <tbody>
                <tr><td class="td-label">PPh Terutang</td><td class="amt">Rp 1.540.000.000</td></tr>
                <tr><td>Kredit PPh 22</td><td class="amt">(Rp 150.000.000)</td></tr>
                <tr><td>Kredit PPh 23</td><td class="amt">(Rp 50.000.000)</td></tr>
                <tr><td>Kredit PPh 24</td><td class="amt">(Rp 430.000.000)</td></tr>
                <tr><td>Kredit PPh 25</td><td class="amt">(Rp 500.000.000)</td></tr>
                <tr class="row-subtotal"><td><strong>Total Kredit Pajak</strong></td><td class="amt"><strong>Rp 1.130.000.000</strong></td></tr>
                <tr class="row-total"><td><strong>PPh Kurang Bayar (PPh 29)</strong></td><td class="amt"><strong>Rp 410.000.000</strong></td></tr>
              </tbody>
            </table>
            <div class="calc-step p25" style="margin-top:16px;">
              <div class="calc-label">Proyeksi PPh 25 Tahun Berikutnya (2026)</div>
              <div class="calc-body">
                PPh yang harus dibayar sendiri = 1.540.000.000 − 150.000.000 − 50.000.000 − 430.000.000 = <strong>Rp 910.000.000</strong><br>
                PPh 25 = (1/12) × Rp 910.000.000 = <strong>Rp 75.833.333/bulan</strong>
              </div>
            </div>
          `,
          extra: [
            { type: 'callout', variant: 'ok', icon: '✅', title: 'Interpretasi Akhir', html: 'PT Sejahtera Jaya harus menyetor <strong>PPh 29 sebesar Rp 410.000.000</strong> paling lambat sebelum SPT disampaikan. Untuk tahun 2026, angsuran PPh 25 menjadi <strong>Rp 75.833.333/bulan</strong>.' },
            { type: 'xp-button', label: '✓ Selesaikan Studi Kasus', xp: 25, msg: 'Studi kasus selesai!' }
          ]
        },

        {
          type: 'nav-next',
          label: 'Lanjut Misi 6: Kuis Final →',
          goto: 'quiz'
        }
      ]
    },

    /* ═════════════════════════════════════════════════════════
       SECTION 6 — FINAL QUIZ
       ═════════════════════════════════════════════════════════ */
    {
      id: 'quiz',
      tab: { label: 'Kuis Final', num: 6 },
      head: {
        kicker: 'Misi 6 · Kuis Final',
        title: 'Uji Kompetensi',
        desc: 'Sepuluh soal pilihan ganda. Skor minimal 70% untuk membuka sertifikat penyelesaian.'
      },
      blocks: [
        { type: 'final-quiz', passThreshold: 70 }
      ]
    }

  ], // end sections

  /* ------------------------------------------------------------
     FINAL QUIZ BANK
     ------------------------------------------------------------ */
  finalQuiz: [
    {
      q: 'Apa tujuan utama PPh Pasal 24?',
      options: [
        'Meringankan beban pajak akhir tahun',
        'Menghindari pemajakan berganda atas penghasilan LN',
        'Mengatur angsuran bulanan',
        'Membatasi penghasilan dari luar negeri'
      ],
      correct: 1,
      explanation: 'PPh 24 menghindari double taxation atas penghasilan yang sudah dipajaki di negara sumber namun juga berpotensi dipajaki di Indonesia karena sistem worldwide income.'
    },
    {
      q: 'Kapan penghasilan usaha dari luar negeri digabungkan dengan penghasilan dalam negeri?',
      options: [
        'Tahun pajak diterimanya',
        'Tahun pajak diperolehnya penghasilan usaha',
        'Tahun pajak berikutnya',
        'Saat dividen dibagikan'
      ],
      correct: 1,
      explanation: 'Untuk penghasilan dari usaha, penggabungan dilakukan dalam tahun pajak diperolehnya penghasilan usaha tersebut.'
    },
    {
      q: 'Bagaimana formula batas maksimum kredit pajak luar negeri?',
      options: [
        'PPh LN × tarif Indonesia',
        '(Penghasilan LN / PKP) × PPh Terutang',
        'PPh Terutang ÷ jumlah negara',
        'PPh LN + Jumlah Tertentu'
      ],
      correct: 1,
      explanation: 'Jumlah Tertentu = (Penghasilan Luar Negeri / PKP) × PPh Terutang. PPh 24 = nilai terkecil antara PPh LN dan Jumlah Tertentu.'
    },
    {
      q: 'Apa yang terjadi dengan kelebihan kredit PPh 24?',
      options: [
        'Dapat direstitusi ke negara',
        'Dapat dibiayakan sebagai pengurang',
        'Tidak dapat diperhitungkan tahun berikutnya, tidak dibiayakan, dan tidak direstitusi',
        'Otomatis menjadi kredit tahun berikutnya'
      ],
      correct: 2,
      explanation: 'Kelebihan kredit PPh 24 tidak dapat diperhitungkan dengan PPh terutang tahun berikutnya, tidak boleh dibebankan sebagai biaya/pengurang, dan tidak dapat dimintakan restitusi.'
    },
    {
      q: 'Bagaimana formula perhitungan umum PPh 25?',
      options: [
        '22% × Penghasilan Neto',
        '(PPh Terutang − Kredit Pajak) ÷ 12',
        '1/12 × PPh Terutang',
        '0,75% × Peredaran Bruto'
      ],
      correct: 1,
      explanation: 'Perhitungan umum PPh 25 = (PPh Terutang − Kredit Pajak) ÷ 12, atau dibagi banyaknya bulan dalam tahun berjalan.'
    },
    {
      q: 'Berapa angsuran PPh 25 untuk Wajib Pajak Baru (non-Bank, non-BUMN)?',
      options: [
        '1/12 × PPh terutang',
        'NIHIL',
        '0,75% × peredaran bruto',
        '22% × penghasilan'
      ],
      correct: 1,
      explanation: 'Angsuran PPh 25 untuk Wajib Pajak Baru (selain WP Bank, WP Masuk Bursa, BUMN/BUMD, WP Lainnya, dan WP OPPT) ditetapkan NIHIL pada Tahun Pajak berjalan.'
    },
    {
      q: 'Bagaimana perhitungan PPh 25 untuk WP OPPT?',
      options: [
        '1/12 × PPh terutang',
        '0,75% × peredaran bruto bulanan per lokasi usaha',
        '22% × penghasilan neto',
        'Sama dengan WP Bank'
      ],
      correct: 1,
      explanation: 'WP OPPT menghitung PPh 25 sebesar 0,75% dari peredaran bruto bulanan untuk setiap lokasi usaha yang berbeda dengan tempat tinggal.'
    },
    {
      q: 'Dasar perhitungan PPh 25 untuk WP Bank adalah…',
      options: [
        'SPT Tahunan tahun lalu',
        'Laporan keuangan bulanan yang disampaikan ke OJK',
        'RKAP yang disahkan RUPS',
        'Perkiraan penghasilan tahun berjalan'
      ],
      correct: 1,
      explanation: 'WP Bank menghitung PPh 25 berdasarkan laporan keuangan bulanan yang disampaikan ke OJK (laporan posisi keuangan dan laba rugi sejak awal tahun s.d. masa pajak yang dilaporkan).'
    },
    {
      q: 'Penghasilan yang dikenai PPh Final dalam perhitungan PKP untuk PPh 24…',
      options: [
        'Dimasukkan dalam PKP',
        'Tidak dimasukkan dalam PKP',
        'Dikenai tarif berbeda',
        'Ditambahkan ke penghasilan LN'
      ],
      correct: 1,
      explanation: 'PKP untuk perhitungan PPh 24 tidak termasuk penghasilan yang dikenai PPh bersifat final dan/atau penghasilan yang dikenai pajak tersendiri.'
    },
    {
      q: 'Kapan WP dapat mengajukan permohonan pengurangan PPh 25 karena usaha menurun?',
      options: [
        'Kapan saja',
        'Setelah 3 bulan atau lebih berjalannya tahun pajak, jika PPh terutang diperkirakan kurang dari 75% dari dasar penghitungan PPh 25',
        'Hanya setelah SPT disampaikan',
        'Setelah 6 bulan berjalan'
      ],
      correct: 1,
      explanation: 'Sesuai Pasal 7 KEP-537/PJ./2000, setelah 3 bulan atau lebih berjalannya tahun pajak, WP dapat mengajukan pengurangan jika PPh terutang diperkirakan kurang dari 75% dari dasar penghitungan PPh 25.'
    }
  ]

}; // end TaxQuestContent
