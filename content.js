/* ============================================================
   TAXQUEST — PPh Pasal 24 & 25
   CONTENT — Single Source of Truth
   Semua materi dari File 1 (PPh 24) & File 2 (PPh 25)
   ============================================================ */

window.TaxQuestContent = {

  /* ------------------------------------------------------------
     META
     ------------------------------------------------------------ */
  meta: {
    brand: '⚖️ TaxQuest',
    title: 'PPh Pasal 24 & Pasal 25',
    subtitle: 'Kredit Pajak Luar Negeri & Angsuran Pajak Penghasilan',
    version: '1.0',
    totalXP: 300
  },

  /* ------------------------------------------------------------
     LEVELS (untuk XP system)
     ------------------------------------------------------------ */
  levels: [
    { min: 0,   name: '🌱 Pemula',            icon: '🌱' },
    { min: 30,  name: '📘 Pelajar Pajak',     icon: '📘' },
    { min: 80,  name: '📗 Mahir Kredit',      icon: '📗' },
    { min: 150, name: '🏅 Ahli PPh 24/25',    icon: '🏅' },
    { min: 250, name: '👑 Master TaxQuest',   icon: '👑' }
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
          html: '<p>Ada dua masalah fundamental dalam sistem PPh Indonesia yang memerlukan dua solusi berbeda:</p>',
          extra: [
            {
              type: 'reveal',
              icon: '❌',
              title: 'Masalah 1: Double Taxation',
              body: '<p>Penghasilan dari luar negeri sudah dipajaki di negara sumber, namun karena Indonesia menganut prinsip <em>worldwide income</em>, penghasilan yang sama berpotensi dipajaki lagi di Indonesia.</p><p><strong>Solusinya: PPh Pasal 24.</strong> Pajak yang dibayar atau terutang di luar negeri dapat dikreditkan terhadap PPh terutang di Indonesia, sehingga tidak terjadi pemajakan berganda.</p>'
            },
            {
              type: 'reveal',
              icon: '❌',
              title: 'Masalah 2: Beban Pajak Akhir Tahun',
              body: '<p>Tanpa mekanisme angsuran, Wajib Pajak akan menghadapi beban pajak besar sekaligus pada akhir tahun pajak. Hal ini menyulitkan arus kas dan perencanaan keuangan.</p><p><strong>Solusinya: PPh Pasal 25.</strong> Pajak dibayar secara bertahap setiap bulan selama tahun pajak berjalan, sebagai angsuran yang akan menjadi kredit pajak di SPT Tahunan.</p>'
            }
          ]
        },

        {
          type: 'callout',
          variant: 'ok',
          icon: '💡',
          title: 'Prinsip Kunci',
          html: 'PPh 24 bersifat <strong>pengurang</strong> (kredit pajak dari luar negeri), sedangkan PPh 25 bersifat <strong>pembayaran bertahap</strong> (angsuran bulanan). Keduanya mengurangi PPh terutang di SPT Tahunan.'
        },

        {
          type: 'card',
          variant: 'card-dark',
          icon: '🗺️',
          title: 'Roadmap Pembelajaran',
          html: `
            <p style="color:rgba(255,255,255,.85);margin-bottom:16px;">Enam misi terstruktur untuk menguasai PPh 24 &amp; 25 secara menyeluruh:</p>
            <div class="grid grid-2" style="gap:10px;">
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 1</strong> · Pembuka</div>
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 2</strong> · PPh 24</div>
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 3</strong> · PPh 25</div>
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 4</strong> · Perbandingan</div>
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 5</strong> · Studi Kasus</div>
              <div style="padding:10px 14px;background:rgba(255,255,255,.08);border-radius:8px;font-size:13px;"><strong style="color:#f59e0b;">Misi 6</strong> · Kuis Final</div>
            </div>
          `
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
        desc: 'Mekanisme pengkreditan pajak yang dibayar atau terutang di luar negeri untuk menghindari pemajakan berganda atas penghasilan dari luar negeri.'
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
              <div class="callout-title">📖 DEFINISI PPh PASAL 24</div>
              "Pajak yang dibayar atau terutang di luar negeri atas penghasilan yang diterima atau diperoleh dari luar negeri yang boleh dikreditkan terhadap PPh yang terutang atas seluruh penghasilan Wajib Pajak dalam negeri."
            </div>
            <p><strong>Dasar Hukum:</strong></p>
            <ul>
              <li>Pasal 24 UU PPh</li>
              <li>PMK No. 192/PMK.03/2018</li>
              <li>PMK No. 81 Tahun 2024 — Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan (Coretax)</li>
            </ul>
            <p><strong>Tujuan:</strong> Menghindari pemajakan berganda (<em>double taxation</em>) atas penghasilan yang sama — yang sudah dipajaki di negara sumber dan berpotensi dipajaki lagi di Indonesia karena sistem <em>worldwide income</em>.</p>
          `
        },

        /* --- 5 Pokok Aturan --- */
        {
          type: 'card',
          variant: '',
          icon: '📋',
          title: 'Lima Pokok Aturan PPh 24',
          html: '<p>Lima prinsip dasar yang mengatur pengkreditan pajak luar negeri:</p>',
          extra: [
            {
              type: 'reveal',
              icon: '1️⃣',
              title: 'Pengkreditan Pajak Luar Negeri',
              body: '<p>Pajak yang dibayar atau terutang di luar negeri atas penghasilan yang diterima atau diperoleh dari luar negeri boleh dikreditkan terhadap PPh yang terutang atas seluruh penghasilan Wajib Pajak dalam negeri.</p>'
            },
            {
              type: 'reveal',
              icon: '2️⃣',
              title: 'Timing Pengkreditan',
              body: '<p>Pengkreditan dilakukan dalam tahun pajak digabungkannya penghasilan dari luar negeri dengan penghasilan di Indonesia. Tujuan: menghindari pemajakan berganda.</p>'
            },
            {
              type: 'reveal',
              icon: '3️⃣',
              title: 'Batasan Kredit Pajak',
              body: '<p>Besarnya kredit pajak adalah sebesar pajak penghasilan yang dibayar atau terutang di luar negeri, <strong>tetapi tidak boleh melebihi</strong> penghitungan pajak yang terutang atas seluruh penghasilan.</p>'
            },
            {
              type: 'reveal',
              icon: '4️⃣',
              title: 'Penentuan Sumber Penghasilan',
              body: '<p>Dalam menghitung batas jumlah pajak yang boleh dikreditkan, sumber penghasilan ditentukan berdasarkan 8 kriteria sesuai jenis penghasilan (lihat bagian selanjutnya).</p>'
            },
            {
              type: 'reveal',
              icon: '5️⃣',
              title: 'Pengembalian Pajak',
              body: '<p>Apabila pajak atas penghasilan dari luar negeri yang dikreditkan ternyata kemudian dikurangkan atau dikembalikan, maka pajak yang terutang <strong>harus ditambah</strong> dengan jumlah tersebut pada tahun pengurangan atau pengembalian itu dilakukan.</p>'
            }
          ]
        },

        /* --- 8 Kriteria Sumber Penghasilan --- */
        {
          type: 'card',
          variant: '',
          icon: '🌍',
          title: 'Delapan Kriteria Penentuan Sumber Penghasilan',
          html: '<p>Dalam menghitung batas jumlah pajak yang boleh dikreditkan, sumber penghasilan ditentukan berdasarkan jenis penghasilan sebagai berikut:</p>',
          extra: [
            {
              type: 'table',
              headers: ['#', 'Jenis Penghasilan', 'Negara Sumber'],
              rows: [
                { cells: ['A', 'Penghasilan dari saham dan sekuritas lainnya serta keuntungan dari pengalihan saham dan sekuritas lainnya', 'Negara tempat <strong>badan yang menerbitkan</strong> saham atau sekuritas tersebut didirikan atau bertempat kedudukan'], variant: ['td-label','',''] },
                { cells: ['B', 'Penghasilan berupa bunga, royalti, dan sewa sehubungan dengan penggunaan harta gerak', 'Negara tempat <strong>pihak yang membayar atau dibebani</strong> bunga, royalti, atau sewa tersebut bertempat kedudukan atau berada'], variant: ['td-label','',''] },
                { cells: ['C', 'Penghasilan berupa sewa sehubungan dengan penggunaan harta tak gerak', 'Negara tempat <strong>harta tersebut terletak</strong>'], variant: ['td-label','',''] },
                { cells: ['D', 'Penghasilan berupa imbalan sehubungan dengan jasa, pekerjaan dan kegiatan', 'Negara tempat <strong>pihak yang membayar atau dibebani imbalan</strong> tersebut bertempat kedudukan atau berada'], variant: ['td-label','',''] },
                { cells: ['E', 'Penghasilan bentuk usaha tetap (BUT)', 'Negara tempat <strong>bentuk usaha tetap</strong> tersebut menjalankan usaha atau melakukan kegiatan'], variant: ['td-label','',''] },
                { cells: ['F', 'Penghasilan dari pengalihan sebagian atau seluruh hak penambangan atau tanda turut serta dalam pembiayaan atau permodalan dalam perusahaan pertambangan', 'Negara tempat <strong>lokasi penambangan</strong> berada'], variant: ['td-label','',''] },
                { cells: ['G', 'Keuntungan karena pengalihan harta tetap', 'Negara tempat <strong>harta tetap</strong> berada'], variant: ['td-label','',''] },
                { cells: ['H', 'Keuntungan karena pengalihan harta yang menjadi bagian dari suatu bentuk usaha tetap', 'Negara tempat <strong>bentuk usaha tetap</strong> berada'], variant: ['td-label','',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '🧭',
              title: 'Logika Penentuan Sumber',
              html: '<strong>Aset fisik</strong> → negara lokasi. <strong>Pembayar</strong> → negara pembayar. <strong>Entitas penerbit</strong> → negara pendirian. <strong>BUT</strong> → negara operasional.'
            }
          ]
        },

        /* --- DRAG & DROP: 8 Kriteria --- */
        {
          type: 'dragdrop',
          id: 'dd-sumber',
          icon: '🎯',
          title: 'Latihan: Cocokkan Sumber Penghasilan',
          desc: 'Seret setiap jenis penghasilan ke negara sumber yang tepat. +5 XP per jawaban benar.',
          xpPerCorrect: 5,
          items: [
            { id: 'saham',    text: 'Saham & sekuritas',        zone: 'penerbit' },
            { id: 'bunga',    text: 'Bunga & royalti',          zone: 'pembayar' },
            { id: 'sewa',     text: 'Sewa harta tak gerak',     zone: 'lokasi'   },
            { id: 'but',      text: 'Penghasilan BUT',          zone: 'but'      },
            { id: 'jasa',     text: 'Imbalan jasa',             zone: 'pembayar' },
            { id: 'harta',    text: 'Pengalihan harta tetap',   zone: 'lokasi'   }
          ],
          zones: [
            { id: 'penerbit', title: '🏢 Negara Penerbit' },
            { id: 'pembayar', title: '💰 Negara Pembayar' },
            { id: 'lokasi',   title: '📍 Negara Lokasi Harta' },
            { id: 'but',      title: '🏛️ Negara BUT' }
          ]
        },

        /* --- Formula --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '🧮',
          title: 'Formula Kunci: Jumlah Tertentu',
          html: `
            <p>Batas maksimal kredit pajak dihitung secara proporsional dengan formula:</p>
            <div class="callout gold" style="text-align:center;font-size:16px;font-family:'JetBrains Mono',monospace;padding:22px 16px;">
              <div style="font-weight:800;letter-spacing:-0.02em;">
                JUMLAH TERTENTU = 
                <span style="display:inline-block;vertical-align:middle;text-align:center;margin:0 6px;">
                  <span style="border-bottom:2px solid currentColor;padding:0 10px;">Penghasilan Luar Negeri</span><br>
                  <span style="padding:0 10px;">Penghasilan Kena Pajak</span>
                </span>
                × PPh Terutang
              </div>
            </div>
            <div class="grid grid-3" style="margin-top:16px;">
              <div class="card" style="padding:14px;">
                <div style="font-size:12px;font-weight:800;color:var(--p24);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">Penghasilan LN</div>
                <div style="font-size:13px;color:var(--ink-3);">Penghasilan neto dari luar negeri yang digabungkan dalam tahun pajak</div>
              </div>
              <div class="card" style="padding:14px;">
                <div style="font-size:12px;font-weight:800;color:var(--p24);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">PKP</div>
                <div style="font-size:13px;color:var(--ink-3);">Penghasilan Kena Pajak total (LN + DN) setelah koreksi fiskal</div>
              </div>
              <div class="card" style="padding:14px;">
                <div style="font-size:12px;font-weight:800;color:var(--p24);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">PPh Terutang</div>
                <div style="font-size:13px;color:var(--ink-3);">PPh terutang atas PKP sesuai tarif Pasal 17 UU PPh</div>
              </div>
            </div>
            <div class="callout p24" style="margin-top:16px;text-align:center;">
              <div style="font-family:'JetBrains Mono',monospace;font-weight:800;font-size:14px;color:var(--p24-dark);">
                PPh 24 = min ( PPh Luar Negeri , Jumlah Tertentu , Pajak menurut P3B )
              </div>
              <div style="font-size:12px;margin-top:6px;color:var(--ink-3);">Nilai terkecil dari tiga komponen yang dapat dikreditkan</div>
            </div>
            <p style="margin-top:14px;font-size:13px;color:var(--ink-3);"><strong>Catatan penting:</strong></p>
            <ul style="font-size:13.5px;">
              <li>Perhitungan dilakukan <strong>per jenis penghasilan</strong> untuk <strong>tiap negara/yurisdiksi</strong></li>
              <li>Jika WPDN menerima penghasilan dari negara yang memiliki P3B dengan Indonesia yang berlaku efektif, jumlah maksimal pemajakan di negara sumber juga menjadi penentu</li>
            </ul>
          `
        },

        /* --- SIMULATOR PPh 24 --- */
        {
          type: 'simulator',
          id: 'sim-p24',
          variant: 'sim-p24',
          icon: '🧪',
          title: 'Simulator PPh 24',
          sub: 'Masukkan angka, lihat perhitungan kredit pajak secara real-time',
          mode: 'p24-basic',
          fields: [
            { key: 'dn',      label: 'Penghasilan DN',     type: 'number', default: 4000000000, step: 1000000 },
            { key: 'ln',      label: 'Penghasilan LN',     type: 'number', default: 1000000000, step: 1000000 },
            { key: 'pphln',   label: 'PPh Luar Negeri',    type: 'number', default: 300000000,  step: 1000000 },
            { key: 'tarif',   label: 'Tarif PPh Badan',    type: 'select', default: '0.22', options: [
              { value: '0.22', label: '22%' },
              { value: '0.25', label: '25%' }
            ]}
          ]
        },

        /* --- Contoh 1: Memori Penjelasan (PT A / Z Inc) --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '📖',
          title: 'Contoh 1: Memori Penjelasan Pasal 24 UU PPh',
          html: `
            <p><strong>Kasus:</strong> PT A (WPDN) adalah pemegang saham tunggal Z Inc. yang berdomisili di Negara X. Z Inc. dalam tahun 2025 memperoleh keuntungan sebesar US$ 100.000,00. Pajak Penghasilan yang berlaku di Negara X adalah 48% dan Pajak Dividen adalah 38%.</p>
            <p><strong>Perhitungan pajak atas dividen:</strong></p>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Keuntungan Z Inc.', html: 'US$ 100.000,00', variant: 'p24' },
                { label: 'Pajak Penghasilan (48%)', html: 'US$ 48.000,00 <em>(pengurang)</em>', variant: 'p24' },
                { label: 'Laba setelah pajak', html: 'US$ 52.000,00', variant: 'p24' },
                { label: 'Pajak Dividen (38% × 52.000)', html: 'US$ 19.760,00 <em>(pengurang)</em>', variant: 'p24' },
                { label: 'Dividen dikirim ke Indonesia', html: 'US$ 32.240,00', variant: 'p24' }
              ],
              final: 'PPh 24 yang dapat dikreditkan = US$ 19.760,00'
            },
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Mengapa bukan US$ 48.000?',
              html: 'Pajak Penghasilan Badan (48%) <strong>TIDAK DAPAT</strong> dikreditkan karena bukan pajak yang langsung dikenakan atas penghasilan yang diterima atau diperoleh PT A. Yang dapat dikreditkan adalah pajak dividen sebesar US$ 19.760,00 — karena ini pajak yang langsung dikenakan atas penghasilan PT A.'
            }
          ]
        },

        /* --- Contoh 2: Penggabungan Penghasilan --- */
        {
          type: 'card',
          variant: '',
          icon: '📊',
          title: 'Contoh 2: Penggabungan Penghasilan (PT Ciptanindo Satu)',
          html: '<p>PT Ciptanindo Satu dalam Tahun Pajak 2025 menerima dan memperoleh penghasilan neto dari luar Indonesia sebagai berikut:</p>',
          extra: [
            {
              type: 'table',
              headers: ['Sumber', 'Jenis', 'Jumlah', 'Timing Penggabungan'],
              rows: [
                { cells: ['Negara V — cabang', 'Penghasilan usaha', 'Rp 800.000.000', 'Tahun diperolehnya penghasilan usaha (2025)'], variant: ['td-label','','amt',''] },
                { cells: ['Negara W — XYZ Ltd.', 'Dividen', 'Rp 200.000.000', 'Tahun diterimanya dividen (Feb 2025)'], variant: ['td-label','','amt',''] },
                { cells: ['Negara Y — STU Sdn. Bhd.', 'Bunga semester II 2024', 'Rp 100.000.000', 'Tahun diterimanya bunga (Juli 2025)'], variant: ['td-label','','amt',''] },
                { cells: ['Negara W — XYZ Ltd.', 'Keuntungan penjualan saham', 'Rp 50.000.000', 'Tahun diterimanya keuntungan (Des 2025)'], variant: ['td-label','','amt',''] },
                { cells: ['Negara X — PQR Corp.', 'Dividen (non-bursa)', 'Rp 75.000.000', 'Sesuai PMK tentang penetapan saat diperoleh dividen (2025)'], variant: ['td-label','','amt',''] }
              ]
            },
            {
              type: 'callout',
              variant: 'p24',
              icon: '📌',
              title: 'Kesimpulan',
              html: 'Seluruh penghasilan dari luar negeri tersebut digabungkan dengan penghasilan dalam negeri pada <strong>Tahun Pajak 2025</strong>, sesuai tahun pajak diperoleh/diterimanya penghasilan masing-masing.'
            }
          ]
        },

        /* --- Contoh 3: Kerugian Luar Negeri --- */
        {
          type: 'card',
          variant: '',
          icon: '📉',
          title: 'Contoh 3: Perlakuan Kerugian Luar Negeri (PT Ciptanindo Dua)',
          html: '<p><strong>Prinsip:</strong> Kerugian yang diderita di luar negeri <strong>tidak boleh</strong> digabungkan dengan penghasilan di Indonesia. <strong>Pengecualian:</strong> kerugian yang berasal dari harta atau kegiatan yang memiliki hubungan efektif dengan cabang/perwakilan di luar negeri dapat diperhitungkan terhadap penghasilan neto cabang tersebut.</p><p><strong>Data PT Ciptanindo Dua (2025):</strong></p>',
          extra: [
            {
              type: 'table',
              headers: ['Lokasi', 'Komponen', 'Jumlah'],
              rows: [
                { cells: ['Negara X (cabang)', 'Penghasilan neto komersial', 'Rp 1.500.000.000'], variant: ['td-label','','amt'] },
                { cells: ['Negara X (cabang)', 'Kerugian penjualan harta <em>(hubungan efektif)</em>', '(Rp 500.000.000)'], variant: ['td-label','','amt'] },
                { cells: ['Negara X (cabang)', '<strong>Penghasilan neto</strong>', '<strong>Rp 1.000.000.000</strong>'], variant: ['td-label','','amt'] },
                { cells: ['Negara Y', 'Penghasilan bunga', 'Rp 3.000.000.000'], variant: ['td-label','','amt'] },
                { cells: ['Negara Z (VWX Ltd.)', 'Dividen (saham di bursa)', 'Rp 750.000.000'], variant: ['td-label','','amt'] },
                { cells: ['Negara Z', 'Kerugian penjualan harta <em>(tidak ada cabang)</em>', 'Rp 0 <em>(tidak digabung)</em>'], variant: ['td-label','','amt'] },
                { cells: ['Dalam negeri', 'Penghasilan neto', 'Rp 4.000.000.000'], variant: ['td-label','','amt'] }
              ]
            },
            {
              type: 'calc',
              steps: [
                { label: 'Penghasilan neto luar negeri', html: 'Negara X: Rp 1.000.000.000<br>Negara Y: Rp 3.000.000.000<br>Negara Z: Rp 750.000.000<br><strong>Jumlah LN = Rp 4.750.000.000</strong>', variant: 'p24' },
                { label: 'Penghasilan neto dalam negeri', html: 'Rp 4.000.000.000', variant: 'p24' },
                { label: 'Jumlah penghasilan neto fiskal', html: 'Rp 8.750.000.000', variant: 'p24' },
                { label: 'Penghasilan Kena Pajak', html: 'Rp 8.750.000.000', variant: 'p24' }
              ]
            },
            {
              type: 'callout',
              variant: 'warn',
              icon: '🔑',
              title: 'Kunci Pemahaman',
              html: '<strong>Kerugian Negara X dapat diperhitungkan</strong> karena memiliki hubungan efektif dengan cabang di Negara X. <strong>Kerugian Negara Z tidak dapat digabungkan</strong> karena tidak ada cabang/perwakilan di Negara Z.'
            }
          ]
        },

        /* --- Contoh 4: Kredit per Negara --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🧮',
          title: 'Contoh 4: Penghitungan Kredit Pajak per Negara (PT Ciptanindo Tiga)',
          html: `
            <p><strong>Data (Tahun Pajak 2025):</strong></p>
            <ul>
              <li>Negara X — penghasilan usaha: <strong>Rp 1.000.000.000</strong> · PPh LN: <strong>Rp 300.000.000</strong></li>
              <li>Negara Y — penghasilan bunga: <strong>Rp 3.000.000.000</strong> · PPh LN: <strong>Rp 450.000.000</strong> (tidak ada pengurang bruto)</li>
              <li>Negara Z — kerugian penjualan harta: <strong>Rp 250.000.000</strong></li>
              <li>Penghasilan neto dalam negeri: <strong>Rp 4.000.000.000</strong></li>
              <li>Tidak ada P3B antara Indonesia dengan negara X, Y, dan Z</li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung PKP', html: 'Penghasilan LN = Rp 1.000.000.000 + Rp 3.000.000.000 = <strong>Rp 4.000.000.000</strong><br>(Kerugian Negara Z tidak digabung)<br>PKP = Rp 4.000.000.000 + Rp 4.000.000.000 = <strong>Rp 8.000.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 2 — Hitung PPh Terutang', html: '22% × Rp 8.000.000.000 = <strong>Rp 1.760.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 3 — Jumlah Tertentu Negara X', html: '(1.000.000.000 / 8.000.000.000) × 1.760.000.000 = <strong>Rp 220.000.000</strong><br>PPh LN = Rp 300.000.000<br>→ Kredit Negara X = <strong>Rp 220.000.000</strong> <em>(terkecil)</em>', variant: 'p24' },
                { label: 'Langkah 4 — Jumlah Tertentu Negara Y', html: '(3.000.000.000 / 8.000.000.000) × 1.760.000.000 = <strong>Rp 660.000.000</strong><br>PPh LN = Rp 450.000.000<br>→ Kredit Negara Y = <strong>Rp 450.000.000</strong> <em>(terkecil)</em>', variant: 'p24' }
              ],
              final: 'Total PPh 24 = Rp 220.000.000 + Rp 450.000.000 = Rp 670.000.000'
            },
            {
              type: 'callout',
              variant: 'p24',
              icon: '📌',
              title: 'Catatan',
              html: 'Kerugian dari Negara Z <strong>tidak dapat digabungkan</strong> dalam menghitung Penghasilan Kena Pajak karena tidak ada cabang atau perwakilan di Negara Z.'
            }
          ]
        },

        /* --- Contoh 5: Pengaruh P3B --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '🌐',
          title: 'Contoh 5: Pengaruh P3B (Persetujuan Penghindaran Pajak Berganda)',
          html: `
            <p><strong>Skenario:</strong> Melanjutkan Contoh 4, tetapi kini <strong>terdapat P3B</strong> Indonesia–Negara Y yang berlaku efektif. P3B mengatur pemajakan atas penghasilan bunga di negara sumber paling tinggi <strong>10%</strong> dari jumlah bruto. Namun, atas penghasilan bunga tersebut PT Ciptanindo Tiga dikenai PPh Luar Negeri berdasarkan ketentuan domestik di Negara Y sebesar Rp 450.000.000.</p>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung ulang PKP dan PPh Terutang', html: 'Penghasilan bunga dari Negara Y: Rp 3.000.000.000<br>Penghasilan neto DN: Rp 4.000.000.000<br>PKP = <strong>Rp 7.000.000.000</strong><br>PPh Terutang = 22% × 7.000.000.000 = <strong>Rp 1.540.000.000</strong>', variant: 'gold' },
                { label: 'Langkah 2 — Bandingkan 3 komponen', html: '<strong>A. Pajak menurut P3B:</strong> 10% × 3.000.000.000 = <strong>Rp 300.000.000</strong><br><strong>B. PPh Luar Negeri aktual:</strong> Rp 450.000.000<br><strong>C. Jumlah Tertentu:</strong> (3.000.000.000 / 7.000.000.000) × 1.540.000.000 = <strong>Rp 660.000.000</strong>', variant: 'gold' }
              ],
              final: 'PPh 24 = Nilai TERKECIL = Rp 300.000.000'
            },
            {
              type: 'callout',
              variant: 'warn',
              icon: '⚠️',
              title: 'Interpretasi',
              html: 'Meskipun PT Ciptanindo Tiga membayar Rp 450.000.000 di Negara Y, yang dapat dikreditkan hanya <strong>Rp 300.000.000</strong> sesuai batas maksimal P3B. <strong>Selisih Rp 150.000.000 tidak dapat dikreditkan.</strong>'
            }
          ]
        },

        /* --- Contoh 6: Kerugian Dalam Negeri --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '📉',
          title: 'Contoh 6: Interaksi Kerugian Dalam Negeri (PT Ciptanindo Lima)',
          html: `
            <p><strong>Data:</strong> PT Ciptanindo Lima memiliki penghasilan usaha di Negara X sebesar Rp 1.000.000.000 dan rugi usaha di dalam negeri sebesar Rp 200.000.000. PPh Luar Negeri yang dibayar atas penghasilan usaha di Negara X adalah Rp 300.000.000.</p>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung PKP', html: 'Penghasilan usaha Negara X: Rp 1.000.000.000<br>Penghasilan neto (rugi) DN: (Rp 200.000.000)<br>PKP = <strong>Rp 800.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 2 — Hitung PPh Terutang', html: '22% × Rp 800.000.000 = <strong>Rp 176.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 3 — Hitung Jumlah Tertentu', html: '(1.000.000.000 / 800.000.000) × 176.000.000 = <strong>Rp 220.000.000</strong>', variant: 'p24' }
              ],
              final: 'PPh 24 = Rp 220.000.000'
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '⚡',
              title: 'Catatan Penting',
              html: 'Apabila hasil perhitungan Jumlah Tertentu <strong>melebihi PPh terutang</strong>, maka batas maksimal kredit adalah sebesar PPh terutang tersebut. PPh 24 tidak boleh melebihi PPh terutang.'
            }
          ]
        },

        /* --- Contoh 7: Batas Maksimal & Alokasi Proporsional --- */
        {
          type: 'card',
          variant: 'card-p24',
          icon: '🎯',
          title: 'Contoh 7: Batas Maksimal &amp; Alokasi Proporsional (PT Ciptanindo Enam)',
          html: `
            <p><strong>Data (Tahun Pajak 2023):</strong></p>
            <ul>
              <li>Negara X — penghasilan usaha: Rp 1.000.000.000 · PPh LN: Rp 300.000.000</li>
              <li>Negara Y — penghasilan usaha: Rp 3.000.000.000 · PPh LN: Rp 900.000.000</li>
              <li>Negara Z — kerugian usaha: Rp 250.000.000</li>
              <li>Kerugian dalam negeri: Rp 1.000.000.000</li>
              <li>Tidak ada P3B</li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung PKP', html: 'Penghasilan LN = 1.000.000.000 + 3.000.000.000 = Rp 4.000.000.000<br>Kerugian DN = (Rp 1.000.000.000)<br>PKP = <strong>Rp 3.000.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 2 — Hitung PPh Terutang', html: '22% × 3.000.000.000 = <strong>Rp 660.000.000</strong>', variant: 'p24' },
                { label: 'Langkah 3 — Hitung kredit per negara', html: 'Negara X: JT = (1M/3M) × 660jt = Rp 220jt → Kredit = <strong>Rp 220.000.000</strong><br>Negara Y: JT = (3M/3M) × 660jt = Rp 660jt → Kredit = <strong>Rp 660.000.000</strong><br><em>Total kredit sebelum batas = Rp 880.000.000</em>', variant: 'p24' },
                { label: 'Langkah 4 — Terapkan batas maksimal', html: 'Total kredit (Rp 880.000.000) <strong>lebih besar</strong> dari PPh Terutang (Rp 660.000.000)<br>→ Kredit dibatasi = <strong>Rp 660.000.000</strong>', variant: 'p24' }
              ]
            },
            {
              type: 'table',
              headers: ['Negara', 'Alokasi Proporsional', 'Jumlah'],
              rows: [
                { cells: ['Negara X', '(1M / 4M) × Rp 660.000.000', 'Rp 165.000.000'], variant: ['td-label','','amt'] },
                { cells: ['Negara Y', '(3M / 4M) × Rp 660.000.000', 'Rp 495.000.000'], variant: ['td-label','','amt'] },
                { cells: ['<strong>Total</strong>', '', '<strong>Rp 660.000.000</strong>'], variant: ['td-label','','amt'] }
              ]
            },
            {
              type: 'callout',
              variant: 'ok',
              icon: '✅',
              title: 'Kunci Pemahaman',
              html: 'Jika kredit pajak total melebihi PPh terutang, kredit dibatasi sebesar PPh terutang dan dialokasikan <strong>secara proporsional</strong> berdasarkan penghasilan neto dari masing-masing negara dibanding seluruh penghasilan neto dari luar negeri.'
            }
          ]
        },

        /* --- Catatan: Penghasilan Final & Istri --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '📌',
          title: 'Catatan Penting: Penghasilan Final &amp; Penghasilan Istri',
          html: `
            <div class="callout gold" style="margin-top:0;">
              <div class="callout-title">🟡 Aturan Pengecualian</div>
              Dalam menghitung Penghasilan Kena Pajak untuk keperluan perhitungan PPh 24:
              <ul style="margin-top:8px;">
                <li>Penghasilan dalam negeri yang telah dikenai <strong>Pajak Penghasilan Pasal 4 ayat (2) UU PPh</strong> (PPh Final) <strong>TIDAK DIMASUKKAN</strong></li>
                <li>Penghasilan istri yang dikenai <strong>Pajak Penghasilan tersendiri</strong> sebagaimana dimaksud dalam Pasal 8 ayat (1) UU PPh juga <strong>TIDAK DIMASUKKAN</strong></li>
              </ul>
            </div>
            <p><strong>Mengapa ini penting?</strong> Kedua pengecualian ini mempengaruhi besaran PKP yang digunakan sebagai pembagi dalam formula Jumlah Tertentu, sehingga berpengaruh langsung pada kredit pajak yang dapat diklaim.</p>
          `
        },

        /* --- Suami-Istri --- */
        {
          type: 'card',
          variant: '',
          icon: '👨‍👩‍👧',
          title: 'Contoh 8: Suami-Istri (KK &amp; Pisah Harta)',
          html: `
            <p><strong>Data:</strong></p>
            <ul>
              <li><strong>Tn. Nandang:</strong> Penghasilan DN Rp 2.000.000.000 · Penghasilan LN dari Negara X Rp 200.000.000 (PPh LN Rp 40.000.000)</li>
              <li><strong>Ny. Nanda (istri):</strong> Penghasilan DN Rp 1.500.000.000 · Penghasilan LN dari Negara X Rp 300.000.000 (PPh LN Rp 60.000.000)</li>
              <li>Tidak ada tanggungan (K/0) · Tidak ada P3B</li>
            </ul>
          `,
          extra: [
            {
              type: 'reveal',
              icon: '👫',
              title: 'Skenario A: Kewajiban Perpajakan Dilaksanakan Suami (KK)',
              body: `
                <p>Penghasilan suami-istri <strong>digabungkan</strong>. PKP gabungan = (2M + 1,5M + 200jt + 300jt) − PTKP (K/0) = Rp 4.000.000.000 − Rp 112.500.000 = <strong>Rp 3.887.500.000</strong>. PPh Terutang = <strong>Rp 1.110.250.000</strong>.</p>
                <p>PPh LN gabungan = Rp 100.000.000 · Jumlah Tertentu = (500jt / 3.887.500.000) × 1.110.250.000 = Rp 142.797.428 · Maka <strong>PPh 24 = Rp 100.000.000</strong> (nilai terkecil).</p>
              `
            },
            {
              type: 'reveal',
              icon: '📋',
              title: 'Skenario B: Pisah Harta (Memilih Kewajiban Sendiri)',
              body: `
                <p>PPh terutang gabungan dialokasikan proporsional:</p>
                <ul>
                  <li><strong>Tn. Nandang:</strong> (2.200.000.000 / 4.000.000.000) × 1.110.250.000 = <strong>Rp 610.637.500</strong></li>
                  <li><strong>Ny. Nanda:</strong> (1.800.000.000 / 4.000.000.000) × 1.110.250.000 = <strong>Rp 499.612.500</strong></li>
                </ul>
                <p><strong>PPh 24 Tn. Nandang:</strong> PPh LN = Rp 40.000.000 · Jumlah Tertentu = (200jt / 3.887.500.000) × 1.110.250.000 = Rp 57.118.971 · Kredit = <strong>Rp 40.000.000</strong>.</p>
                <p><strong>PPh 24 Ny. Nanda:</strong> PPh LN = Rp 60.000.000 · Jumlah Tertentu = (300jt / 3.887.500.000) × 1.110.250.000 = Rp 85.678.457 · Kredit = <strong>Rp 60.000.000</strong>.</p>
              `
            },
            {
              type: 'callout',
              variant: 'p24',
              icon: '📌',
              title: 'Catatan',
              html: 'Untuk perhitungan pisah harta, PKP yang digunakan sebagai pembagi dalam menghitung Jumlah Tertentu adalah <strong>PKP gabungan</strong> (Rp 3.887.500.000) — bukan PKP masing-masing.'
            }
          ]
        },

        /* --- QUIZ PPh 24 --- */
        {
          type: 'quiz',
          id: 'q24-1',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Apa tujuan utama PPh Pasal 24?',
          options: [
            { text: 'Meringankan beban pajak akhir tahun', correct: false },
            { text: 'Menghindari pemajakan berganda atas penghasilan dari luar negeri', correct: true },
            { text: 'Mengatur angsuran pajak bulanan', correct: false },
            { text: 'Membatasi penghasilan dari luar negeri', correct: false }
          ],
          explanation: 'PPh Pasal 24 bertujuan menghindari pemajakan berganda (double taxation) atas penghasilan yang sama — yang sudah dipajaki di negara sumber dan berpotensi dipajaki lagi di Indonesia.'
        },
        {
          type: 'quiz',
          id: 'q24-2',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Jika PPh Luar Negeri Rp 300 juta, Jumlah Tertentu Rp 220 juta, dan PPh Terutang Rp 660 juta — berapa PPh 24 yang dapat dikreditkan?',
          options: [
            { text: 'Rp 300.000.000', correct: false },
            { text: 'Rp 220.000.000', correct: true },
            { text: 'Rp 660.000.000', correct: false },
            { text: 'Rp 80.000.000', correct: false }
          ],
          explanation: 'PPh 24 = nilai terkecil dari tiga komponen. Di sini, Rp 220.000.000 (Jumlah Tertentu) lebih kecil dari Rp 300.000.000 (PPh LN), sehingga kredit yang diambil adalah Rp 220.000.000.'
        },
        {
          type: 'quiz',
          id: 'q24-3',
          badge: 'Kuis PPh 24',
          xp: 10,
          q: 'Bagaimana perlakuan kerugian dari luar negeri dalam perhitungan PPh 24?',
          options: [
            { text: 'Selalu bisa digabungkan dengan penghasilan DN', correct: false },
            { text: 'Tidak boleh digabung, kecuali memiliki hubungan efektif dengan cabang/BUT', correct: true },
            { text: 'Hanya bisa digabung jika ada P3B', correct: false },
            { text: 'Selalu diabaikan sepenuhnya', correct: false }
          ],
          explanation: 'Kerugian luar negeri tidak boleh digabungkan dengan penghasilan Indonesia. Pengecualian: jika kerugian tersebut berasal dari harta/kegiatan yang memiliki hubungan efektif dengan cabang/perwakilan di luar negeri.'
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
        desc: 'Mekanisme pembayaran pajak secara bertahap setiap bulan untuk meringankan beban pajak akhir tahun pajak.'
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
              "Angsuran Pajak Penghasilan dalam Tahun Pajak berjalan untuk suatu bulan yang harus dibayar sendiri oleh Wajib Pajak sebagaimana dimaksud dalam Pasal 25 UU PPh."
            </div>
            <p><strong>Dasar Hukum:</strong></p>
            <ul>
              <li>Pasal 25 UU PPh</li>
              <li>PP Nomor 94 Tahun 2010</li>
              <li>Peraturan Menteri Keuangan Nomor 215/PMK.03/2018</li>
              <li>Keputusan Dirjen Pajak Nomor KEP-537/PJ./2000</li>
              <li>Surat Edaran Dirjen Pajak Nomor SE-48/PJ.42/1999</li>
            </ul>
            <p><strong>Tujuan:</strong> Meringankan beban pajak akhir tahun dengan cara pembayaran bertahap setiap bulan selama tahun pajak berjalan.</p>
          `
        },

        /* --- Siapa yang Wajib --- */
        {
          type: 'card',
          variant: '',
          icon: '👥',
          title: 'Siapa yang Wajib &amp; Dikecualikan?',
          html: '<p>Bukan semua Wajib Pajak berkewajiban menyetor PPh 25. Berikut perbedaannya:</p>',
          extra: [
            {
              type: 'two-col',
              left: {
                variant: 'p24',
                title: '✅ WAJIB MENYETOR',
                html: `
                  <p>Orang pribadi dalam negeri yang menerima atau memperoleh penghasilan di atas PTKP sehubungan dengan pekerjaan dari badan-badan yang <strong>tidak wajib melakukan pemotongan pajak</strong> sebagaimana dimaksud dalam Pasal 21 ayat (2) UU PPh.</p>
                `
              },
              right: {
                variant: 'p25',
                title: '❌ DIKECUALIKAN',
                html: `
                  <ul>
                    <li>Wajib Pajak yang hanya memperoleh penghasilan yang telah dikenakan <strong>PPh final</strong> berdasarkan ketentuan tersendiri</li>
                    <li>Wajib Pajak orang pribadi yang dalam satu Tahun Pajak menerima atau memperoleh penghasilan neto <strong>tidak melebihi PTKP</strong></li>
                    <li>Wajib Pajak orang pribadi yang <strong>tidak menjalankan kegiatan usaha</strong> atau tidak melakukan pekerjaan bebas</li>
                  </ul>
                `
              }
            }
          ]
        },

        /* --- Formula Dasar --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🧮',
          title: 'Formula Dasar PPh 25',
          html: `
            <div class="callout p25" style="text-align:center;font-size:17px;font-family:'JetBrains Mono',monospace;padding:22px;margin-top:0;">
              <div style="font-weight:800;">PPh 25 = <sup>1</sup>&frasl;<sub>12</sub> × PPh yang harus dibayar sendiri</div>
            </div>
            <p style="margin-top:16px;"><strong>Breakdown "PPh yang harus dibayar sendiri":</strong></p>
            <div class="callout gold">
              <div style="font-family:'JetBrains Mono',monospace;font-size:13.5px;">
                PPh yang harus dibayar sendiri = <strong>PPh Terutang</strong> − <strong>Kredit Pajak</strong>
              </div>
              <ul style="margin-top:8px;">
                <li>PPh Pasal 22 (dipotong/dipungut pihak lain)</li>
                <li>PPh Pasal 23 (dipotong/dipungut pihak lain)</li>
                <li>PPh Pasal 24 (kredit pajak luar negeri)</li>
                <li>PPh Pasal 25 (angsuran yang sudah dibayar sendiri)</li>
              </ul>
            </div>
            <p><strong>Catatan:</strong> Jika SPT disampaikan tepat waktu, PPh 25 = 1/12 × PPh yang harus dibayar sendiri berdasarkan SPT tahun lalu. Jika ada perubahan kondisi, perhitungan disesuaikan.</p>
          `
        },

        /* --- Overview Skenario --- */
        {
          type: 'card',
          variant: '',
          icon: '🗺️',
          title: 'Overview Skenario Penentuan PPh 25',
          html: '<p>Penentuan besarnya PPh 25 bervariasi tergantung kondisi Wajib Pajak:</p>',
          extra: [
            {
              type: 'grid-cards',
              cols: 3,
              items: [
                { variant: 'p24', icon: '①', title: 'UMUM', html: 'PPh 25 = 1/12 × PPh yang harus dibayar sendiri berdasarkan SPT tahun sebelumnya.' },
                { variant: 'gold', icon: '②', title: 'SEBELUM SPT DISAMPAIKAN', html: 'Sama dengan PPh 25 bulan terakhir tahun sebelumnya (bersifat sementara).' },
                { variant: 'p25', icon: '③', title: '6 SKENARIO KHUSUS', html: 'a. Kompensasi kerugian<br>b. Penghasilan tidak teratur<br>c. SPT terlambat<br>d. Perpanjangan SPT<br>e. Pembetulan SPT<br>f. Perubahan keadaan usaha' }
              ]
            },
            {
              type: 'card',
              variant: 'card-p25',
              icon: '🏢',
              title: 'WP dengan Karakteristik Khusus',
              html: `
                <div class="grid grid-3" style="gap:10px;">
                  <div style="padding:12px;background:var(--surface);border-radius:8px;text-align:center;font-size:13px;font-weight:700;border:1px solid var(--p25-border);">🏦 WP Bank</div>
                  <div style="padding:12px;background:var(--surface);border-radius:8px;text-align:center;font-size:13px;font-weight:700;border:1px solid var(--p25-border);">📈 WP Lainnya &amp; Bursa</div>
                  <div style="padding:12px;background:var(--surface);border-radius:8px;text-align:center;font-size:13px;font-weight:700;border:1px solid var(--p25-border);">🏛️ WP BUMN / BUMD</div>
                  <div style="padding:12px;background:var(--surface);border-radius:8px;text-align:center;font-size:13px;font-weight:700;border:1px solid var(--p25-border);">🆕 WP Baru</div>
                  <div style="padding:12px;background:var(--surface);border-radius:8px;text-align:center;font-size:13px;font-weight:700;border:1px solid var(--p25-border);grid-column:span 2;">🛒 WP OPPT (0,75% × peredaran bruto)</div>
                </div>
              `
            }
          ]
        },

        /* --- Contoh Umum --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📊',
          title: 'Contoh: Perhitungan Umum (PT A)',
          html: '<p><strong>Data PT A (Tahun 2022):</strong> Ph Neto Fiskal Rp 81.354.657 · PPh dipotong/dipungut Rp 0 · PPh 25 sudah dibayar Rp 0</p>',
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung PPh Terutang', html: 'Ph KP fasilitas UMKM: (4,8M / 13,18M) × 81.354.657 ≈ Rp 29.626.206<br>PPh fasilitas = 50% × 22% × 29.626.206 = <strong>Rp 3.258.860</strong><br><br>Ph KP non-fasilitas = 81.354.657 − 29.626.206 = Rp 51.728.451<br>PPh non-fasilitas = 22% × 51.728.451 = <strong>Rp 11.380.259</strong><br><br>Total PPh Terutang = <strong>Rp 14.639.119</strong>', variant: 'p25' },
                { label: 'Langkah 2 — Hitung PPh 25', html: 'PPh yang harus dibayar sendiri = 14.639.119 − 0 = Rp 14.639.119<br><strong>PPh 25 = 1/12 × 14.639.119 = Rp 1.219.927/bulan</strong><br><br><em>Jika usaha baru berjalan 10 bulan (mulai Maret):</em><br>PPh 25 = 1/10 × 14.639.119 = <strong>Rp 1.463.912/bulan</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- SIMULATOR PPh 25 --- */
        {
          type: 'simulator',
          id: 'sim-p25',
          variant: 'sim-p25',
          icon: '🧪',
          title: 'Simulator PPh 25',
          sub: 'Masukkan angka, lihat perhitungan angsuran bulanan secara real-time',
          mode: 'p25-basic',
          fields: [
            { key: 'pph',  label: 'PPh Terutang',    type: 'number', default: 240000000, step: 1000000 },
            { key: 'k22',  label: 'Kredit PPh 22',   type: 'number', default: 20000000,  step: 1000000 },
            { key: 'k23',  label: 'Kredit PPh 23',   type: 'number', default: 0,         step: 1000000 },
            { key: 'k24',  label: 'Kredit PPh 24',   type: 'number', default: 0,         step: 1000000 }
          ]
        },

        /* --- Skenario 3a: Kompensasi Kerugian --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📉',
          title: 'Skenario 3a: Kompensasi Kerugian (PT PQR)',
          html: `
            <p><strong>Data:</strong></p>
            <ul>
              <li>Ph neto (fiskal) tahun 2023: <strong>Rp 116.800.000</strong></li>
              <li>Sisa kerugian tahun 2019 yang belum dikompensasikan: <strong>Rp 166.800.000</strong></li>
              <li>Ph neto tahun 2024: <strong>Rp 115.840.000</strong></li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan Tahun 2023', html: 'Ph neto tahun 2023: Rp 116.800.000<br>Kompensasi kerugian 2019: (Rp 166.800.000)<br>Ph neto setelah kompensasi: <strong>(Rp 50.000.000)</strong><br>Karena masih rugi, <strong>PPh 25 tahun 2024 = NIHIL</strong>', variant: 'p25' },
                { label: 'Perhitungan Tahun 2024', html: 'Ph neto tahun 2024: Rp 115.840.000<br>Sisa kerugian 2023 yang masih dapat dikompensasi: (Rp 50.000.000)<br>Ph neto setelah kompensasi (PhKP): <strong>Rp 65.840.000</strong><br><br>PPh Terutang = 22% × Rp 65.840.000 = <strong>Rp 14.484.800</strong><br>PPh 25 tahun 2024 = (1/12) × Rp 14.484.800 = <strong>Rp 1.207.067/bulan</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- Skenario 3b: Penghasilan Tidak Teratur --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📈',
          title: 'Skenario 3b: Penghasilan Tidak Teratur (Tn. Santosa)',
          html: `
            <p><strong>Definisi penghasilan tidak teratur</strong> — tidak termasuk dalam penghasilan teratur:</p>
            <ul>
              <li>Keuntungan selisih kurs dari utang/piutang dalam mata uang asing</li>
              <li>Keuntungan dari pengalihan harta (<em>capital gain</em>) sepanjang bukan penghasilan dari kegiatan usaha pokok</li>
              <li>Penghasilan lainnya yang bersifat insidentil</li>
            </ul>
            <p><strong>Data Tn. Santosa (K/3) tahun 2023:</strong></p>
            <ul>
              <li>Ph neto: Rp 471.550.923 (termasuk dividen Rp 40.000.000 yang tidak setiap tahun diterima)</li>
              <li>Peredaran bruto usaha: Rp 12.544.204.860</li>
              <li>PPh 22 dipungut: Rp 2.250.000</li>
              <li>PPh 25 dibayar: Rp 38.752.224</li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Langkah 1 — Hitung PKP', html: 'Ph neto teratur + tidak teratur: Rp 471.550.923<br>Ph neto tidak teratur: (Rp 40.000.000)<br>Ph neto teratur: <strong>Rp 431.550.923</strong><br>PTKP (K/3): (Rp 72.000.000)<br>PhKP: <strong>Rp 359.550.923</strong>', variant: 'p25' },
                { label: 'Langkah 2 — Hitung PPh Terutang &amp; PPh 25', html: 'PPh Terutang:<br>5% × 60.000.000 = Rp 3.000.000<br>15% × 190.000.000 = Rp 28.500.000<br>25% × 49.550.000 = Rp 12.387.500<br>Jumlah: <strong>Rp 43.887.500</strong><br><br>PPh yang harus dibayar sendiri = 43.887.500 − 2.250.000 = <strong>Rp 41.637.500</strong><br>PPh 25 = (1/12) × 41.637.500 = <strong>Rp 3.469.792/bulan</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- Skenario 3c/d/e: Penyesuaian SPT --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '⏱️',
          title: 'Skenario 3c/d/e: Penyesuaian Akibat SPT',
          html: `
            <div class="callout gold" style="margin-top:0;">
              <div class="callout-title">🔑 Prinsip Universal</div>
              Saat SPT belum disampaikan → PPh 25 bersifat <strong>sementara</strong> (mengacu SPT tahun sebelumnya). Setelah SPT disampaikan → PPh 25 <strong>disesuaikan dan berlaku surut</strong> mulai batas waktu penyampaian SPT. Selisih kekurangan harus dibayar + sanksi administrasi.
            </div>
          `,
          extra: [
            {
              type: 'reveal',
              icon: '📅',
              title: 'Skenario 3c: SPT Terlambat',
              body: `
                <p><strong>Contoh:</strong> PPh 25 Desember 2023 = Rp 1.000.000. SPT Tahunan 2023 disampaikan Juli 2024 (seharusnya paling lambat April 2024). PPh 25 berdasarkan SPT = Rp 1.300.000.</p>
                <p><strong>Perhitungan:</strong></p>
                <ul>
                  <li>Masa Jan–Jun 2024: PPh 25 = Rp 1.000.000 (sementara)</li>
                  <li>Setelah SPT disampaikan (Juli): PPh 25 seharusnya Rp 1.300.000</li>
                  <li>Kekurangan Jan–Jun = 6 × (1.300.000 − 1.000.000) = <strong>Rp 1.800.000</strong> + sanksi administrasi</li>
                </ul>
              `
            },
            {
              type: 'reveal',
              icon: '⏳',
              title: 'Skenario 3d: Perpanjangan Waktu SPT',
              body: `
                <p><strong>Contoh:</strong> PPh 25 Jan–Mar 2023 = Rp 1.200.000. PPh 25 Apr 2023 (berdasarkan SPT sementara) = Rp 1.500.000. SPT Tahunan 2022 perpanjangan disampaikan akhir Juni 2023, dengan perhitungan PPh 25 = Rp 2.000.000.</p>
                <p><strong>Perhitungan:</strong></p>
                <ul>
                  <li>Jan–Mar 2023: Rp 1.200.000 (tidak berubah)</li>
                  <li>Apr 2023: Rp 1.500.000 (sementara)</li>
                  <li>Setelah SPT disampaikan: PPh 25 seharusnya mulai Apr 2023 = Rp 2.000.000</li>
                  <li>Kekurangan Apr–Jun = 3 × (2.000.000 − 1.500.000) = <strong>Rp 1.500.000</strong> + sanksi administrasi</li>
                  <li>Mulai Juli 2023: Rp 2.000.000</li>
                </ul>
              `
            },
            {
              type: 'reveal',
              icon: '✏️',
              title: 'Skenario 3e: Pembetulan SPT',
              body: `
                <p><strong>Contoh:</strong> PPh 25 April 2024 (berdasarkan SPT 2023) = Rp 2.500.000. Agustus 2024, WP membetulkan SPT 2023 dengan perhitungan PPh 25 = Rp 3.000.000.</p>
                <p><strong>Perhitungan:</strong></p>
                <ul>
                  <li>Selisih = Rp 500.000/bulan</li>
                  <li>Berlaku surut mulai April 2024</li>
                  <li>Kekurangan Apr–Jul (4 bulan) = 4 × Rp 500.000 = <strong>Rp 2.000.000</strong></li>
                  <li>Mulai Agustus 2024: Rp 3.000.000</li>
                </ul>
              `
            }
          ]
        },

        /* --- Skenario 3f: Perubahan Usaha --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📊',
          title: 'Skenario 3f: Perubahan Keadaan Usaha (Tn. Raden)',
          html: `
            <p><strong>Syarat:</strong></p>
            <ul>
              <li>Setelah 3 bulan atau lebih berjalannya tahun pajak, WP dapat menunjukkan bahwa PPh terutang akan <strong>kurang dari 75%</strong> dari PPh terutang yang menjadi dasar perhitungan PPh 25 → dapat mengajukan permohonan pengurangan</li>
              <li>Jika usaha meningkat dan PPh terutang diperkirakan <strong>lebih dari 150%</strong> → PPh 25 harus dihitung kembali</li>
            </ul>
            <p><strong>Contoh Tn. Raden (K/1), jasa Konsultan Hukum:</strong></p>
            <ul>
              <li>SPT 2022: Ph neto fiskal Rp 263.000.000 · PTKP (K/1) Rp 63.000.000 · PhKP Rp 200.000.000 · PPh Terutang Rp 24.000.000 · PPh 25 = Rp 1.775.000</li>
              <li>Estimasi 2023: Ph neto turun menjadi Rp 163.000.000</li>
            </ul>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan ulang 2023', html: 'Ph neto fiskal: Rp 163.000.000<br>PTKP (K/1): (Rp 63.000.000)<br>Ph KP: <strong>Rp 100.000.000</strong><br><br>PPh Terutang:<br>5% × 60.000.000 = Rp 3.000.000<br>15% × 40.000.000 = Rp 6.000.000<br>Jumlah: <strong>Rp 9.000.000</strong><br><br>PPh 25 Jan–Mei 2023 = Rp 7.900.000<br>PPh yang masih harus dibayar 7 bulan = Rp 1.100.000<br>PPh 25 per bulan = (1/7) × 1.100.000 = <strong>Rp 157.143</strong>', variant: 'p25' }
              ]
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
            <p><strong>Formula:</strong></p>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif Pasal 17 × Penghasilan Neto)<br>
              − PPh 22 (sejak awal tahun s/d masa pajak dilaporkan)<br>
              − PPh 25 yang seharusnya dibayar (sejak awal tahun s/d masa pajak sebelumnya)
            </div>
            <p><strong>Data:</strong></p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Masa Pajak', 'Penghasilan Neto', 'PPh 22'],
              rows: [
                { cells: ['Januari',  'Rp 1.000.000.000', 'Rp 25.000.000'],  variant: ['td-label','amt','amt'] },
                { cells: ['Februari', 'Rp 2.100.000.000', 'Rp 75.000.000'],  variant: ['td-label','amt','amt'] },
                { cells: ['Maret',    'Rp 1.900.000.000', 'Rp 100.000.000'], variant: ['td-label','amt','amt'] },
                { cells: ['April',    'Rp 4.600.000.000', 'Rp 250.000.000'], variant: ['td-label','amt','amt'] }
              ]
            },
            {
              type: 'calc',
              steps: [
                { label: 'Januari', html: 'PPh Terutang 22%: Rp 250.000.000<br>− PPh 22: (Rp 25.000.000)<br>PPh 25 = <strong>Rp 225.000.000</strong>', variant: 'p25' },
                { label: 'Februari', html: 'PPh Terutang 22%: Rp 462.000.000<br>− PPh 22: (Rp 75.000.000)<br>− PPh 25 Jan: (Rp 225.000.000)<br>PPh 25 = <strong>Rp 162.000.000</strong>', variant: 'p25' },
                { label: 'Maret', html: 'PPh Terutang 22%: Rp 418.000.000<br>− PPh 22: (Rp 100.000.000)<br>− PPh 25 Jan–Feb: (Rp 387.000.000)<br>PPh 25 = <strong>Rp 0</strong> (lebih bayar karena penghasilan turun)', variant: 'p25' },
                { label: 'April', html: 'PPh Terutang 22%: Rp 1.012.000.000<br>− PPh 22: (Rp 250.000.000)<br>− PPh 25 Jan–Mar: (Rp 387.000.000)<br>PPh 25 = <strong>Rp 375.000.000</strong>', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- WP Lainnya & Bursa --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '📈',
          title: 'WP Lainnya &amp; WP Masuk Bursa: Perhitungan Per 3 Bulan',
          html: `
            <p>Untuk WP Lainnya dan WP masuk bursa (selain WP Bank), dasar perhitungan adalah laporan keuangan yang disampaikan setiap <strong>3 (tiga) bulan</strong> kepada bursa dan/atau Otoritas Jasa Keuangan.</p>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif × Penghasilan Neto) − PPh 22 &amp; 23 (sejak awal tahun s/d periode dilaporkan) − PPh 25 yang seharusnya dibayar
            </div>
            <p><strong>Data:</strong></p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Laporan', 'Penghasilan Neto', 'PPh 22 & 23'],
              rows: [
                { cells: ['Jan–Mar', 'Rp 2.100.000.000', 'Rp 75.000.000'],  variant: ['td-label','amt','amt'] },
                { cells: ['Apr–Jun', 'Rp 4.700.000.000', 'Rp 125.000.000'], variant: ['td-label','amt','amt'] },
                { cells: ['Jul–Sep', 'Rp 3.200.000.000', 'Rp 200.000.000'], variant: ['td-label','amt','amt'] }
              ]
            },
            {
              type: 'calc',
              steps: [
                { label: 'Jan–Mar', html: 'PPh Terutang 22%: Rp 462.000.000<br>− PPh 22 &amp; 23: (Rp 75.000.000)<br>PPh 25 3 bulan = <strong>Rp 387.000.000</strong><br>PPh 25 per bulan = <strong>Rp 129.000.000</strong>', variant: 'p25' },
                { label: 'Apr–Jun', html: 'PPh Terutang 22%: Rp 1.034.000.000<br>− PPh 22 &amp; 23: (Rp 125.000.000)<br>− PPh 25 Jan–Mar: (Rp 387.000.000)<br>PPh 25 3 bulan = <strong>Rp 522.000.000</strong><br>PPh 25 per bulan = <strong>Rp 174.000.000</strong>', variant: 'p25' },
                { label: 'Jul–Sep', html: 'PPh Terutang 22%: Rp 704.000.000<br>− PPh 22 &amp; 23: (Rp 200.000.000)<br>− PPh 25 Jan–Jun: (Rp 909.000.000)<br>PPh 25 3 bulan = <strong>Rp 0</strong> (lebih bayar)', variant: 'p25' }
              ]
            }
          ]
        },

        /* --- WP BUMN --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🏛️',
          title: 'WP BUMN/BUMD: Berdasarkan RKAP',
          html: `
            <p>Wajib Pajak Badan Usaha Milik Negara dan Badan Usaha Milik Daerah (selain WP Bank, WP masuk bursa, dan WP Lainnya) dihitung berdasarkan Rencana Kerja dan Anggaran Pendapatan (RKAP) yang telah disahkan Rapat Umum Pemegang Saham (RUPS).</p>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = (Tarif × Ph Neto RKAP − PPh 22 − PPh 23 − PPh 24) ÷ 12
            </div>
          `,
          extra: [
            {
              type: 'calc',
              steps: [
                { label: 'Perhitungan', html: 'Ph neto fiskal 2023 menurut RKAP: Rp 12.000.000.000<br>PPh Terutang = 22% × 12.000.000.000 = <strong>Rp 2.640.000.000</strong><br><br>Dikurangi pemotongan/pemungutan PPh tahun 2022:<br>PPh 22: (Rp 300.000.000)<br>PPh 23: (Rp 0)<br>PPh 24: (Rp 0)<br><br>PPh yang harus dibayar sendiri = <strong>Rp 2.340.000.000</strong><br>PPh 25 mulai Januari 2023 = (1/12) × 2.340.000.000 = <strong>Rp 195.000.000</strong>', variant: 'p25' }
              ]
            },
            {
              type: 'callout',
              variant: 'gold',
              icon: '📌',
              title: 'Catatan',
              html: 'RKAP harus disampaikan kepada DJP melalui KPP tempat WP terdaftar, tidak lewat batas waktu pembayaran PPh 25 Masa Pajak pertama tahun pajak berjalan. Jika RKAP belum disahkan, gunakan PPh 25 bulan terakhir tahun pajak sebelumnya.'
            }
          ]
        },

        /* --- WP Baru --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🆕',
          title: 'WP Baru: Berbagai Skenario',
          html: '<p>Wajib Pajak Baru memiliki berbagai skenario perhitungan PPh 25 tergantung jenis dan kondisinya:</p>',
          extra: [
            {
              type: 'reveal',
              icon: '1️⃣',
              title: 'WP Baru Biasa (Bank, Bursa, BUMN, BUMD, Lainnya, OPPT)',
              body: '<p>Angsuran PPh Pasal 25 untuk WP Baru pada Tahun Pajak berjalan <strong>ditetapkan NIHIL</strong>.</p>'
            },
            {
              type: 'reveal',
              icon: '2️⃣',
              title: 'WP Baru Hasil Penggabungan, Peleburan, atau Pengambilalihan Usaha',
              body: '<p>Pada sisa Tahun Pajak berjalan, angsuran PPh 25 ditetapkan sebesar <strong>penjumlahan Angsuran PPh 25 dari seluruh WP yang terkait sebelum penggabungan, peleburan, dan/atau pengambilalihan usaha</strong>.</p>'
            },
            {
              type: 'reveal',
              icon: '3️⃣',
              title: 'WP Hasil Pemekaran Usaha',
              body: '<p>Jumlah Angsuran PPh 25 untuk seluruh WP hasil pemekaran usaha ditetapkan sebesar Angsuran PPh 25 sebelum pemekaran usaha. Dihitung berdasarkan persentase nilai harta yang dialihkan.</p>'
            },
            {
              type: 'reveal',
              icon: '4️⃣',
              title: 'WP Baru Hasil Perubahan Bentuk Badan Usaha',
              body: '<p>Pada Tahun Pajak berjalan, angsuran PPh 25 ditetapkan sebesar Angsuran PPh 25 bulan terakhir sebelum terjadinya perubahan bentuk badan usaha.</p>'
            }
          ]
        },

        /* --- WP OPPT --- */
        {
          type: 'card',
          variant: 'card-p25',
          icon: '🛒',
          title: 'WP OPPT: 0,75% dari Peredaran Bruto',
          html: `
            <p><strong>Definisi WP OPPT:</strong></p>
            <ul>
              <li>WP orang pribadi yang melakukan kegiatan usaha perdagangan atau jasa</li>
              <li>Tidak termasuk jasa sehubungan dengan pekerjaan bebas</li>
              <li>Pada 1 atau lebih tempat kegiatan usaha yang berbeda dengan tempat tinggal WP</li>
            </ul>
            <div class="callout p25" style="font-family:'JetBrains Mono',monospace;font-size:13px;">
              PPh 25 = 0,75% × Peredaran Bruto bulanan (per masing-masing tempat usaha)
            </div>
            <p><strong>Data Bachtiar:</strong> Memiliki 3 tempat usaha di wilayah kerja KPP Pratama A, B, dan C. Peredaran usaha masa Januari 2023:</p>
          `,
          extra: [
            {
              type: 'table',
              headers: ['Tempat Usaha', 'Peredaran Bruto', 'PPh 25'],
              rows: [
                { cells: ['KPP Pratama A', 'Rp 214.020.000', 'Rp 1.605.150'], variant: ['td-label','amt','amt'] },
                { cells: ['KPP Pratama B', 'Rp 178.050.000', 'Rp 1.335.375'], variant: ['td-label','amt','amt'] },
                { cells: ['KPP Pratama C', 'Rp 82.110.000',  'Rp 615.825'],   variant: ['td-label','amt','amt'] },
                { cells: ['<strong>Total</strong>', '', '<strong>Rp 3.556.350</strong>'], variant: ['td-label','','amt'] }
              ]
            },
            {
              type: 'callout',
              variant: 'p25',
              icon: '📌',
              title: 'Catatan',
              html: 'Setiap lokasi usaha harus didaftarkan di KPP masing-masing. Kode akun pajak: <strong>411125</strong>, kode jenis setor: <strong>101</strong>. Pembayaran per lokasi merupakan kredit pajak.'
            }
          ]
        },

        /* --- Prosedur Pengurangan --- */
        {
          type: 'card',
          variant: 'card-gold',
          icon: '📋',
          title: 'Prosedur Pengurangan PPh 25',
          html: '<p>Jika terjadi perubahan keadaan usaha, WP dapat mengajukan pengurangan atau harus menaikkan PPh 25:</p>',
          extra: [
            {
              type: 'two-col',
              left: {
                variant: 'p24',
                title: '📉 Usaha Menurun',
                html: `
                  <p><strong>Syarat:</strong> Setelah 3 bulan atau lebih berjalannya tahun pajak, WP dapat menunjukkan bahwa PPh terutang akan <strong>kurang dari 75%</strong> dari PPh terutang yang menjadi dasar perhitungan PPh 25.</p>
                  <p>WP dapat mengajukan permohonan tertulis ke KPP.</p>
                `
              },
              right: {
                variant: 'p25',
                title: '📈 Usaha Meningkat',
                html: `
                  <p>Jika dalam tahun pajak berjalan, WP mengalami peningkatan usaha dan PPh terutang diperkirakan <strong>lebih dari 150%</strong> dari dasar perhitungan PPh 25, maka PPh 25 untuk bulan-bulan tersisa harus dihitung kembali.</p>
                `
              }
            },
            {
              type: 'flow',
              steps: [
                { text: '1. Ajukan permohonan tertulis ke KPP', variant: '' },
                { text: '2. Sertakan penghitungan PPh terutang yang diperkirakan', variant: '' },
                { text: '3. Tunggu keputusan (maks 1 bulan)', variant: '' },
                { text: '4. Jika tidak dijawab → dianggap DITERIMA', variant: 'gold' },
                { text: '5. Bayar PPh 25 sesuai perhitungan baru', variant: 'p25' }
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
          q: 'Apa perbedaan mendasar PPh 25 dengan PPh 24?',
          options: [
            { text: 'PPh 25 dihitung akhir tahun, PPh 24 bulanan', correct: false },
            { text: 'PPh 24 = kredit pajak LN (akhir tahun), PPh 25 = angsuran bulanan (tahun berjalan)', correct: true },
            { text: 'Keduanya sama, hanya berbeda pasal', correct: false },
            { text: 'PPh 25 hanya untuk badan, PPh 24 hanya untuk orang pribadi', correct: false }
          ],
          explanation: 'PPh 24 adalah kredit pajak luar negeri yang dihitung di akhir tahun, sedangkan PPh 25 adalah angsuran pajak yang dibayar bulanan sepanjang tahun berjalan.'
        },
        {
          type: 'quiz',
          id: 'q25-2',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'PT JKL: PPh Terutang Rp 240 juta, Kredit PPh 22 Rp 20 juta. Berapa PPh 25 bulanan?',
          options: [
            { text: 'Rp 20.000.000', correct: false },
            { text: 'Rp 18.333.333', correct: true },
            { text: 'Rp 22.000.000', correct: false },
            { text: 'Rp 240.000.000', correct: false }
          ],
          explanation: 'PPh yang harus dibayar sendiri = 240jt − 20jt = 220jt. PPh 25 = (1/12) × 220jt = Rp 18.333.333/bulan.'
        },
        {
          type: 'quiz',
          id: 'q25-3',
          badge: 'Kuis PPh 25',
          xp: 10,
          q: 'Bagaimana perlakuan penghasilan tidak teratur dalam perhitungan dasar PPh 25?',
          options: [
            { text: 'Dimasukkan penuh sebagai dasar perhitungan', correct: false },
            { text: 'Dikeluarkan dari dasar perhitungan PPh 25', correct: true },
            { text: 'Dikenai PPh final terpisah', correct: false },
            { text: 'Diabaikan sepenuhnya', correct: false }
          ],
          explanation: 'Penghasilan tidak teratur seperti capital gain, selisih kurs, dan penghasilan insidentil dikeluarkan dari dasar perhitungan PPh 25 karena sifatnya yang tidak berulang.'
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
                <tr><td class="td-label">Konteks WP</td><td class="td-p24">WP dengan penghasilan LN</td><td class="td-p25">WP yang wajib bayar angsuran</td></tr>
                <tr><td class="td-label">Dasar Hitung</td><td class="td-p24">Pajak yang dibayar di LN</td><td class="td-p25">PPh terutang tahun lalu</td></tr>
                <tr><td class="td-label">Formula</td><td class="td-p24">min(PPh LN, Jumlah Tertentu, P3B)</td><td class="td-p25">1/12 × PPh yang harus dibayar sendiri</td></tr>
                <tr><td class="td-label">Mekanisme</td><td class="td-p24">Kredit terhadap PPh terutang</td><td class="td-p25">Pembayaran bertahap</td></tr>
                <tr><td class="td-label">Hubungan SPT</td><td class="td-p24">Komponen kredit pajak</td><td class="td-p25">Komponen kredit pajak</td></tr>
                <tr><td class="td-label">Kesalahan umum</td><td class="td-p24">Mengira semua pajak LN bisa dikreditkan</td><td class="td-p25">Mengira PPh 25 = PPh terutang ÷ 12</td></tr>
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
                { myth: 'Semua pajak yang dibayar di LN bisa dikreditkan.', fact: 'Hanya pajak yang <strong>LANGSUNG</strong> dikenakan atas penghasilan yang diterima WP DN. Pajak badan LN tidak bisa dikreditkan.' },
                { myth: 'PPh 25 = PPh terutang ÷ 12.', fact: 'PPh 25 = 1/12 × PPh yang <strong>harus dibayar sendiri</strong> (setelah dikurangi kredit pajak: PPh 22, 23, 24, dan 25 yang sudah dibayar).' },
                { myth: 'Kerugian LN bisa mengurangi penghasilan DN.', fact: 'Kerugian LN <strong>TIDAK BOLEH</strong> digabung, kecuali memiliki hubungan efektif dengan cabang/BUT di luar negeri.' },
                { myth: 'Kredit pajak bisa melebihi PPh terutang.', fact: 'Kredit pajak <strong>TIDAK BOLEH</strong> melebihi PPh terutang. Jika melebihi, dibatasi &amp; dialokasikan proporsional antar negara.' },
                { myth: 'Penghasilan final dimasukkan dalam PKP untuk PPh 24.', fact: 'Penghasilan yang dikenai <strong>PPh Final</strong> dan penghasilan istri yang dikenai pajak tersendiri <strong>TIDAK DIMASUKKAN</strong> dalam PKP untuk menghitung PPh 24.' }
              ]
            }
          ]
        },

        {
          type: 'card',
          variant: 'card-dark',
          icon: '🗺️',
          title: 'Posisi PPh 24 &amp; PPh 25 dalam Alur SPT Tahunan',
          html: `
            <p style="color:rgba(255,255,255,.85);margin-bottom:20px;">Dimana masing-masing pasal berperan dalam perhitungan PPh Badan?</p>
            <div class="flow">
              <div class="flow-step">Penghasilan Bruto (DN + LN)</div>
              <div class="flow-arrow">▼</div>
              <div class="flow-step">− Biaya (3M) &amp; Koreksi Fiskal</div>
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
        title: 'PT Maju Jaya — Tahun Pajak 2025',
        desc: 'Integrasikan seluruh konsep PPh 24 dan PPh 25 dalam satu kasus komprehensif. Anda berperan sebagai staf pajak.'
      },
      blocks: [
        {
          type: 'card',
          variant: 'card-gold',
          icon: '🎯',
          title: 'Brief Misi',
          html: `
            <p>Anda adalah staf pajak PT Maju Jaya. Siapkan perhitungan PPh Badan tahun 2025 berdasarkan data berikut:</p>
            <ul>
              <li><strong>Penghasilan neto dalam negeri:</strong> Rp 5.000.000.000</li>
              <li><strong>Negara A (usaha):</strong> Rp 1.500.000.000 — PPh LN Rp 300.000.000</li>
              <li><strong>Negara B (bunga):</strong> Rp 500.000.000 — PPh LN Rp 100.000.000</li>
              <li><strong>Kerugian Negara C:</strong> Rp 200.000.000 (tidak ada cabang)</li>
              <li><strong>Kredit pajak:</strong> PPh 22 Rp 150.000.000 · PPh 23 Rp 50.000.000</li>
              <li><strong>PPh 25 sudah dibayar:</strong> Rp 500.000.000</li>
              <li><strong>Tidak ada P3B</strong></li>
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
                &nbsp;&nbsp;• Negara C (rugi): <em>tidak digabung (tidak ada cabang)</em><br>
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
                PPh LN = Rp 300.000.000<br>
                → PPh 24 = <strong>Rp 300.000.000</strong> (nilai terkecil)
              </div>
            </div>
            <div class="calc-step p24">
              <div class="calc-label">Negara B — Penghasilan Bunga</div>
              <div class="calc-body">
                Jumlah Tertentu = (500.000.000 / 7.000.000.000) × 1.540.000.000 = <strong>Rp 110.000.000</strong><br>
                PPh LN = Rp 100.000.000<br>
                → PPh 24 = <strong>Rp 100.000.000</strong> (nilai terkecil)
              </div>
            </div>
            <div class="calc-final">Total PPh 24 = Rp 300.000.000 + Rp 100.000.000 = Rp 400.000.000</div>
          `,
          extra: [
            { type: 'callout', variant: 'warn', icon: '⚠️', title: 'Perhatikan', html: 'Kerugian Negara C sebesar Rp 200.000.000 <strong>TIDAK DAPAT</strong> digabungkan karena tidak ada cabang di Negara C.' },
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
                <tr><td>Kredit PPh 24</td><td class="amt">(Rp 400.000.000)</td></tr>
                <tr><td>Kredit PPh 25</td><td class="amt">(Rp 500.000.000)</td></tr>
                <tr class="row-subtotal"><td><strong>Total Kredit Pajak</strong></td><td class="amt"><strong>Rp 1.100.000.000</strong></td></tr>
                <tr class="row-total"><td><strong>PPh Kurang Bayar (PPh 29)</strong></td><td class="amt"><strong>Rp 440.000.000</strong></td></tr>
              </tbody>
            </table>
            <div class="calc-step p25" style="margin-top:16px;">
              <div class="calc-label">Proyeksi PPh 25 Tahun Berikutnya (2026)</div>
              <div class="calc-body">
                PPh yang harus dibayar sendiri = 1.540.000.000 − 150.000.000 − 50.000.000 − 400.000.000 = <strong>Rp 940.000.000</strong><br>
                PPh 25 = (1/12) × Rp 940.000.000 = <strong>Rp 78.333.333/bulan</strong>
              </div>
            </div>
          `,
          extra: [
            { type: 'callout', variant: 'ok', icon: '✅', title: 'Interpretasi Akhir', html: 'PT Maju Jaya harus menyetor <strong>PPh 29 sebesar Rp 440.000.000</strong> paling lambat sebelum SPT disampaikan. Untuk tahun 2026, angsuran PPh 25 menjadi <strong>Rp 78.333.333/bulan</strong>.' },
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
      explanation: 'PPh 24 menghindari double taxation atas penghasilan yang sudah dipajaki di negara sumber namun juga berpotensi dipajaki di Indonesia.'
    },
    {
      q: 'Bagaimana formula PPh 24 yang dapat dikreditkan?',
      options: [
        'PPh LN × tarif Indonesia',
        'Nilai terkecil dari (PPh LN, Jumlah Tertentu, Pajak menurut P3B)',
        'PPh Terutang ÷ jumlah negara',
        'Jumlah Tertentu + PPh LN'
      ],
      correct: 1,
      explanation: 'PPh 24 = min(PPh LN, Jumlah Tertentu, Pajak menurut P3B). Nilai terkecil dari tiga komponen inilah yang dapat dikreditkan.'
    },
    {
      q: 'Bagaimana perlakuan kerugian dari luar negeri?',
      options: [
        'Selalu bisa digabungkan dengan penghasilan DN',
        'Tidak boleh digabung kecuali memiliki hubungan efektif dengan cabang/BUT',
        'Hanya bisa digabung jika ada P3B',
        'Selalu diabaikan sepenuhnya'
      ],
      correct: 1,
      explanation: 'Kerugian LN tidak boleh digabung dengan penghasilan DN, KECUALI jika berasal dari harta/kegiatan yang memiliki hubungan efektif dengan cabang atau BUT di luar negeri.'
    },
    {
      q: 'Jika PPh LN Rp 300jt, Jumlah Tertentu Rp 220jt, dan PPh Terutang Rp 660jt — berapa PPh 24 yang dapat dikreditkan?',
      options: ['Rp 300.000.000', 'Rp 220.000.000', 'Rp 660.000.000', 'Rp 80.000.000'],
      correct: 1,
      explanation: 'Nilai terkecil dari tiga komponen: Rp 220.000.000 (Jumlah Tertentu) < Rp 300.000.000 (PPh LN) < Rp 660.000.000 (PPh Terutang). Maka PPh 24 = Rp 220.000.000.'
    },
    {
      q: 'Bagaimana formula dasar PPh Pasal 25?',
      options: [
        '22% × Penghasilan Neto',
        '1/12 × PPh yang harus dibayar sendiri',
        '1/12 × PPh Terutang',
        '0,75% × Peredaran Bruto'
      ],
      correct: 1,
      explanation: 'PPh 25 = 1/12 × PPh yang harus dibayar sendiri. Yang dimaksud "harus dibayar sendiri" adalah PPh Terutang dikurangi kredit pajak (PPh 22, 23, 24, dan 25 yang sudah dibayar).'
    },
    {
      q: 'Bagaimana perlakuan penghasilan tidak teratur dalam perhitungan dasar PPh 25?',
      options: [
        'Dimasukkan penuh sebagai dasar',
        'Dikeluarkan dari dasar perhitungan',
        'Dikenai PPh final terpisah',
        'Diabaikan sepenuhnya'
      ],
      correct: 1,
      explanation: 'Penghasilan tidak teratur (capital gain, selisih kurs, insidentil) dikeluarkan dari dasar perhitungan PPh 25 karena sifatnya yang tidak berulang.'
    },
    {
      q: 'WP OPPT menghitung PPh 25 sebesar…',
      options: [
        '22% × penghasilan neto per lokasi',
        '0,75% × peredaran bruto per lokasi per bulan',
        '1/12 × PPh Terutang',
        '5% × keuntungan'
      ],
      correct: 1,
      explanation: 'WP OPPT (Orang Pribadi Pengusaha Tertentu) menghitung PPh 25 sebesar 0,75% dari peredaran bruto bulanan untuk setiap lokasi usaha yang berbeda dengan tempat tinggal.'
    },
    {
      q: 'Apa yang dimaksud "PPh yang harus dibayar sendiri" dalam formula PPh 25?',
      options: [
        'PPh Terutang × tarif',
        'PPh Terutang dikurangi kredit pajak (PPh 22, 23, 24, 25 yang sudah dibayar)',
        'Penghasilan neto − PTKP',
        'PPh LN yang bisa dikreditkan'
      ],
      correct: 1,
      explanation: 'PPh yang harus dibayar sendiri = PPh Terutang − PPh 22 − PPh 23 − PPh 24 − PPh 25 yang sudah dibayar. Inilah dasar perhitungan angsuran PPh 25.'
    },
    {
      q: 'Penghasilan yang dikenai PPh Final…',
      options: [
        'Dimasukkan dalam PKP untuk PPh 24',
        'Tidak dimasukkan dalam PKP untuk PPh 24',
        'Dikreditkan sebagai PPh 24',
        'Dikenai PPh tambahan'
      ],
      correct: 1,
      explanation: 'Penghasilan yang dikenai PPh Final (Pasal 4 ayat 2 UU PPh) dan penghasilan istri yang dikenai pajak tersendiri TIDAK DIMASUKKAN dalam PKP untuk menghitung PPh 24.'
    },
    {
      q: 'Jika total kredit pajak melebihi PPh terutang, apa yang terjadi?',
      options: [
        'Kredit pajak tetap diberikan seluruhnya',
        'Kredit dibatasi sebesar PPh terutang dan dialokasikan proporsional',
        'Kelebihan otomatis menjadi restitusi',
        'Dikompensasikan ke tahun berikutnya'
      ],
      correct: 1,
      explanation: 'Kredit pajak tidak boleh melebihi PPh terutang. Jika melebihi, dibatasi sebesar PPh terutang dan dialokasikan secara proporsional berdasarkan penghasilan neto dari masing-masing negara.'
    }
  ]

}; // end TaxQuestContent