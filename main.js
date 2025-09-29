/* Tailwind Configuration must be loaded before any custom CSS/JS that uses it.
   Since the original used an inline <script> for config, 
   we need to ensure the CDN script in index.html is still present. 
*/
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'clean-bg': '#FFFFFF',
                'clean-card': '#F7F7F7',
                'clean-text': '#111111',
                'clean-subtext': '#666666',
                'clean-border': '#DDDDDD',
            },
            fontFamily: {
                sans: ['SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
};

gsap.registerPlugin(ScrollTrigger);

// =========================================================================
// === DATA PRODUK: UBAH DATA DI BAWAH INI UNTUK MENGGANTI KONTEN KATALOG ===
// =========================================================================

// --- 1. PRODUK HORIZONTAL SCROLL (Total 28 Item) ---
// Perhatikan:
// - price & agentPrice: format string angka saja (contoh: "95.000")
// - mainBenefits: Array list manfaat (muncul di expanded view)
// - composition & usage: Paragraf detail (muncul di expanded view)

const horizontalProductsData = [
    // PRODUK 1: MADU
    { 
        title: "Madu Hutan Murni (250ml)", 
        price: "95.000", 
        agentPrice: "75.000", 
        pv: "15", 
        description: "Madu asli dari hutan pilihan, dipanen dengan metode ramah lingkungan, kaya antioksidan.",
        imgText: "MADU+MURNI",
        mainBenefits: ["Meningkatkan daya tahan tubuh.", "Sumber energi alami non-gula.", "Antioksidan tinggi.", "Menjaga kesehatan pencernaan."],
        composition: "100% Madu Hutan Murni (tanpa campuran gula atau pemanis buatan). Jaminan Halal dan keaslian.",
        usage: "Minum 1 sendok makan setiap pagi dan malam. Dapat dicampur dengan air hangat atau teh herbal."
    },
    // PRODUK 2: GAMIS
    { 
        title: "Gamis Syar'i Aulia Series", 
        price: "280.000", 
        agentPrice: "225.000", 
        pv: "40", 
        description: "Bahan Katun Jepang Premium, adem, jahitan rapi, desain elegan dan syar'i. Cocok untuk acara formal.", 
        imgText: "GAMIS+PREMIUM",
        mainBenefits: ["Nyaman & Adem (Katun Jepang).", "Busui Friendly (Resleting Depan).", "Wudhu Friendly (Manset Kancing)."],
        composition: "Material: Katun Jepang Grade A. Jahitan kuat dan rapi standar butik. Tersedia 4 pilihan warna: Black, Navy, Maroon, Dusty Pink.",
        usage: "Cuci tangan atau mesin dengan mode lembut. Hindari pemutih kuat. Jemur di tempat teduh."
    },
    // PRODUK 3: NUGGET
    { 
        title: "Nugget Ayam Crispy (500gr)", 
        price: "45.000", 
        agentPrice: "38.000", 
        pv: "7", 
        description: "Nugget ayam bersertifikasi Halal MUI, tanpa MSG, cocok untuk bekal anak-anak. Praktis dan lezat.", 
        imgText: "NUGGET+HALAL",
        mainBenefits: ["Tanpa MSG dan Pengawet Buatan.", "Tinggi protein hewani.", "Tekstur renyah di luar, lembut di dalam."],
        composition: "70% Daging Ayam Fillet, Tepung Roti Halal, Bumbu Rempah Alami. BPOM RI MD 245009001018.",
        usage: "Goreng dalam minyak panas sedang selama 3-4 menit hingga cokelat keemasan. Simpan di freezer."
    },
    // PRODUK 4: HABBATUSSAUDA
    { 
        title: "Minyak Habbatussauda Gold", 
        price: "120.000", 
        agentPrice: "98.000", 
        pv: "20", 
        description: "Ekstrak jintan hitam murni dalam kapsul, membantu meningkatkan daya tahan tubuh dan vitalitas.", 
        imgText: "HABBATUSSAUDA",
        mainBenefits: ["Mendukung sistem imun dan pernapasan.", "Meningkatkan energi dan vitalitas.", "Anti-inflamasi alami."],
        composition: "100% Minyak Jintan Hitam (Nigella Sativa) murni dalam kapsul Halal. Diproses Cold-Pressed.",
        usage: "2 kapsul, 2 kali sehari setelah makan. Konsumsi rutin untuk hasil maksimal."
    },
    // PRODUK 5: KOPI
    { 
        title: "Kopi Arabika Premium 200g", 
        price: "85.000", 
        agentPrice: "68.000", 
        pv: "12", 
        description: "Biji kopi arabika pilihan dari pegunungan Jawa, diproses secara Halal, aroma kuat dan rasa seimbang.", 
        imgText: "KOPI+ARABIKA",
        mainBenefits: ["Mengurangi risiko penyakit jantung.", "Meningkatkan fokus dan energi.", "Rendah asam lambung."],
        composition: "100% Biji Kopi Arabika Pilihan. Level Roast: Medium Dark. Aroma: Floral & Caramel.",
        usage: "Sajikan 1-2 sendok makan dengan air panas 200ml. Tambahkan pemanis alami sesuai selera."
    },
    // PRODUK 6: SABUN BIDARA
    { 
        title: "Sabun Mandi Bidara Cair", 
        price: "40.000", 
        agentPrice: "32.000", 
        pv: "6", 
        description: "Sabun mandi herbal dengan ekstrak Daun Bidara, menenangkan kulit dan membantu masalah kulit sensitif.", 
        imgText: "SABUN+BIDARA",
        mainBenefits: ["Menenangkan kulit gatal dan eksim.", "Aroma relaksasi alami.", "Formula lembut, tidak membuat kering."],
        composition: "Ekstrak Daun Bidara (Ziziphus mauritiana), Olive Oil, Minyak Kelapa. pH Balance.",
        usage: "Gunakan setiap mandi. Oleskan ke seluruh tubuh, busakan, lalu bilas hingga bersih."
    },
    // PRODUK 7: HIJAB
    { 
        title: "Hijab Instan Basic Jersey", 
        price: "70.000", 
        agentPrice: "58.000", 
        pv: "10", 
        description: "Jilbab instan bahan jersey premium, adem, tidak menerawang, cocok untuk aktivitas harian.", 
        imgText: "HIJAB+INSTAN",
        mainBenefits: ["Sangat praktis (langsung pakai).", "Bahan tidak mudah kusut.", "Menutup dada sempurna."],
        composition: "Premium Jersey Korea (Tebal, stretch, tidak gerah). Finishing jahit tepi rapi.",
        usage: "Dapat digunakan tanpa peniti atau jarum pentul. Tersedia dalam 10 pilihan warna."
    },
    // PRODUK 8: ZAITUN
    { 
        title: "Minyak Zaitun Extra Virgin 150ml", 
        price: "150.000", 
        agentPrice: "120.000", 
        pv: "25", 
        description: "Minyak zaitun murni kualitas terbaik, cold pressed, kaya omega 3 dan antioksidan.", 
        imgText: "ZAITUN+EVOO",
        mainBenefits: ["Baik untuk kesehatan jantung.", "Membantu menurunkan kolesterol jahat.", "Dapat digunakan untuk memasak tanpa merusak nutrisi."],
        composition: "100% Extra Virgin Olive Oil. Cold Pressed. Acidity level < 0.5%.",
        usage: "Diminum 1 sendok makan setiap pagi atau sebagai dressing salad."
    },
    // PRODUK 9: KURMA
    { 
        title: "Kurma Ajwa Jumbo 250g", 
        price: "110.000", 
        agentPrice: "90.000", 
        pv: "18", 
        description: "Kurma Ajwa Madinah kualitas Super, lembut, manis alami, sumber serat dan energi.", 
        imgText: "KURMA+AJWA",
        mainBenefits: ["Sumber energi cepat dan sehat.", "Tinggi serat, baik untuk pencernaan.", "Sesuai Sunnah."],
        composition: "Kurma Ajwa Pilihan Grade A. Dipacking dalam kemasan kedap udara.",
        usage: "Konsumsi 3-7 butir setiap hari, terutama saat sarapan."
    },
    // PRODUK 10: SEREAL
    { 
        title: "Sereal Gandum Penuh Serat", 
        price: "55.000", 
        agentPrice: "44.000", 
        pv: "8", 
        description: "Sereal sarapan sehat dari gandum utuh, tinggi serat, rendah gula, cocok untuk diet.", 
        imgText: "SEREAL+SEHAT",
        mainBenefits: ["Mengontrol nafsu makan.", "Membantu program diet sehat.", "Rendah indeks glikemik."],
        composition: "Gandum Utuh, Oat, Biji-bijian. Tanpa pewarna dan perasa buatan.",
        usage: "Campurkan 3 sendok sereal dengan susu hangat atau yogurt."
    },
    // PRODUK 11: SERUM WAJAH
    { 
        title: "Serum Wajah Anti-Aging Prop", 
        price: "180.000", 
        agentPrice: "145.000", 
        pv: "30", 
        description: "Serum dengan konsentrat Propolis, melawan tanda penuaan, melembabkan dan mencerahkan kulit.", 
        imgText: "SERUM+PROPOLIS",
        mainBenefits: ["Mengurangi garis halus dan kerutan.", "Mencerahkan kulit kusam.", "Memperbaiki tekstur kulit."],
        composition: "Propolis Extract, Niacinamide, Hyaluronic Acid. Paraben Free & Non-comedogenic.",
        usage: "Gunakan 3 tetes setelah toner, pijat lembut hingga meresap. Pagi dan malam hari."
    },
    // PRODUK 12: KEMEJA KOKO
    { 
        title: "Kemeja Koko Lengan Panjang", 
        price: "195.000", 
        agentPrice: "155.000", 
        pv: "28", 
        description: "Kemeja koko casual, bahan katun adem, desain modern, tersedia ukuran M, L, XL.", 
        imgText: "KEMEJA+KOKO",
        mainBenefits: ["Nyaman dipakai seharian.", "Desain timeless dan elegan.", "Mudah dicuci dan tidak cepat pudar."],
        composition: "100% Katun Linen Premium. Jahitan rapih. Standar ekspor.",
        usage: "Cocok untuk sholat, acara formal, atau kantor. Setrika dengan suhu sedang."
    },
    // PRODUK 13: SAJADAH
    { 
        title: "Sajadah Sholat Lipat (Travel)", 
        price: "60.000", 
        agentPrice: "48.000", 
        pv: "9", 
        description: "Sajadah tipis dan ringan, mudah dilipat, cocok untuk dibawa bepergian atau umrah/haji.", 
        imgText: "SAJADAH+TRAVEL",
        mainBenefits: ["Ultra-ringan dan ringkas.", "Anti-air dan mudah dibersihkan.", "Pouch kecil untuk dibawa."],
        composition: "Polyester Tahan Air, Busa Tipis. Ukuran Terbuka: 100x50 cm.",
        usage: "Selalu bawa untuk sholat di luar rumah. Lipat kembali setelah kering."
    },
    // PRODUK 14: CUKA APEL
    { 
        title: "Cuka Apel Murni 350ml", 
        price: "75.000", 
        agentPrice: "60.000", 
        pv: "11", 
        description: "Cuka apel murni tanpa pengawet, terbuat dari apel pilihan. Baik untuk pencernaan dan detoks.", 
        imgText: "CUKA+APEL",
        mainBenefits: ["Membantu detoksifikasi tubuh.", "Menyeimbangkan pH alami.", "Mendukung penurunan berat badan."],
        composition: "100% Fermentasi Sari Apel. Mengandung 'Mother' cuka apel.",
        usage: "Campurkan 1 sendok teh dengan air 200ml, minum sebelum makan. Dapat ditambahkan madu."
    },
    // PRODUK 15: TEPUNG BUMBU
    { 
        title: "Tepung Bumbu Serbaguna Halal", 
        price: "25.000", 
        agentPrice: "20.000", 
        pv: "3", 
        description: "Tepung bumbu instan, bebas MSG, renyah maksimal, jaminan Halal untuk gorengan keluarga.", 
        imgText: "TEPUNG+BUMBU",
        mainBenefits: ["Renyah tahan lama.", "Rasa gurih alami.", "Tanpa tambahan zat berbahaya."],
        composition: "Tepung Terigu, Tepung Beras, Bumbu Rempah Alami. Sertifikasi PIRT.",
        usage: "Campurkan dengan air, celupkan bahan, goreng hingga matang. Tidak perlu bumbu tambahan."
    },
    // PRODUK 16: DEODORAN
    { 
        title: "Deodoran Roll-On Non-Alkohol", 
        price: "35.000", 
        agentPrice: "28.000", 
        pv: "5", 
        description: "Deodoran alami tanpa alkohol, efektif menahan bau badan sepanjang hari. Aman untuk kulit sensitif.", 
        imgText: "DEODORAN+HALAL",
        mainBenefits: ["Tidak meninggalkan noda di baju.", "Mengontrol keringat berlebih.", "Aman untuk kulit ketiak sensitif."],
        composition: "Ekstrak Tawas Alami, Air Mawar, Essential Oil. Bebas Paraben dan Alkohol.",
        usage: "Gunakan setelah mandi. Tunggu kering sebelum berpakaian."
    },
    // PRODUK 17: KALDU JAMUR
    { 
        title: "Kaldu Jamur Powder 100g", 
        price: "42.000", 
        agentPrice: "33.000", 
        pv: "7", 
        description: "Pengganti MSG, terbuat dari ekstrak jamur alami, rasa umami yang lezat untuk masakan.", 
        imgText: "KALDU+JAMUR",
        mainBenefits: ["Pengganti penyedap rasa buatan.", "Aman untuk anak-anak.", "Rasa masakan lebih kaya dan alami."],
        composition: "Ekstrak Jamur Shiitake, Garam Laut, Gula Tebu. Bersertifikat Vegan.",
        usage: "Tambahkan 1 sendok teh pada setiap masakan berkuah atau tumisan."
    },
    // PRODUK 18: PARFUM
    { 
        title: "Parfum Roll-On Non-Alkohol (5ml)", 
        price: "90.000", 
        agentPrice: "72.000", 
        pv: "14", 
        description: "Minyak wangi murni, tanpa alkohol, aroma musk dan oud yang tahan lama dan elegan.", 
        imgText: "PARFUM+MUSK",
        mainBenefits: ["Aroma maskulin/feminin premium.", "Tahan lama hingga 12 jam.", "Halal (non-alkohol)."],
        composition: "Minyak Atsiri Murni, Absolute Musk, Oud Oil. Bebas dari zat kimia berbahaya.",
        usage: "Oleskan di titik nadi (pergelangan tangan, leher) untuk proyeksi aroma maksimal."
    },
    // PRODUK 19: MASKER
    { 
        title: "Masker Wajah Charcoal Detox", 
        price: "60.000", 
        agentPrice: "48.000", 
        pv: "10", 
        description: "Masker lumpur dengan Charcoal aktif, membersihkan pori-pori secara mendalam, mencerahkan.", 
        imgText: "MASKER+CHARCOAL",
        mainBenefits: ["Detoxifikasi kulit dan pori-pori.", "Mengurangi komedo dan jerawat.", "Kulit terasa lebih halus."],
        composition: "Bentonite Clay, Activated Charcoal Powder, Ekstrak Green Tea.",
        usage: "Gunakan 1-2 kali seminggu. Aplikasikan di wajah, diamkan 15 menit, bilas dengan air hangat."
    },
    // PRODUK 20: CELANA SIRWAL
    { 
        title: "Celana Sirwal Basic", 
        price: "160.000", 
        agentPrice: "128.000", 
        pv: "25", 
        description: "Celana Sirwal bahan katun tebal, nyaman, jahitan rapi, longgar dan tidak membentuk tubuh.", 
        imgText: "CELANA+SIRWAL",
        mainBenefits: ["Sangat nyaman untuk aktivitas harian.", "Desain longgar sesuai syariat.", "Bahan tidak mudah robek."],
        composition: "Katun Twill Premium (tebal, tidak panas). Dilengkapi karet pinggang dan tali.",
        usage: "Gunakan untuk acara santai, kajian, atau kegiatan di luar rumah. Tersedia size M-XXL."
    },
    // PRODUK 21: GULA AREN
    { 
        title: "Gula Aren Cair Premium 300ml", 
        price: "48.000", 
        agentPrice: "38.000", 
        pv: "6", 
        description: "Gula aren murni, higienis, cocok untuk kopi atau makanan penutup. Manis alami dan rendah glikemik.", 
        imgText: "GULA+AREN",
        mainBenefits: ["Pemanis alami rendah glikemik.", "Aroma otentik dan kaya.", "Tahan lama di suhu ruang."],
        composition: "100% Nira Pohon Aren. Tanpa pengental dan pengawet.",
        usage: "Pengganti gula pasir untuk minuman, kue, dan topping dessert."
    },
    // PRODUK 22: MINYAK TELON
    { 
        title: "Minyak Telon Plus Anti-Nyamuk", 
        price: "32.000", 
        agentPrice: "25.000", 
        pv: "4", 
        description: "Minyak telon untuk bayi dengan tambahan formula alami pengusir nyamuk. Hangat dan nyaman.", 
        imgText: "MINYAK+TELON",
        mainBenefits: ["Menghangatkan tubuh bayi.", "Melindungi dari gigitan nyamuk.", "Aroma lembut, tidak menyengat."],
        composition: "Minyak Kayu Putih, Minyak Anis, Minyak Kelapa, Citronella Oil.",
        usage: "Oleskan pada perut, dada, dan punggung bayi setelah mandi."
    },
    // PRODUK 23: BODY LOTION
    { 
        title: "Body Lotion Shea Butter Halal", 
        price: "70.000", 
        agentPrice: "56.000", 
        pv: "10", 
        description: "Lotion pelembab dengan Shea Butter, menutrisi kulit kering, aroma lembut dan Halal.", 
        imgText: "BODY+LOTION",
        mainBenefits: ["Melembabkan hingga 24 jam.", "Mencerahkan kulit secara bertahap.", "Aroma menenangkan."],
        composition: "Shea Butter, Olive Extract, Vitamin E. Tanpa Paraben.",
        usage: "Gunakan setiap hari, terutama setelah mandi, pada seluruh tubuh."
    },
    // PRODUK 24: SAMBAL
    { 
        title: "Sambal Kemasan Pedas Original", 
        price: "35.000", 
        agentPrice: "28.000", 
        pv: "4", 
        description: "Sambal rumahan dengan resep tradisional, pedas mantap, tanpa pengawet buatan. Halal.", 
        imgText: "SAMBAL+PEDAS",
        mainBenefits: ["Rasa otentik dan pedasnya pas.", "Siap santap kapan saja.", "Tahan hingga 3 bulan (segel)."],
        composition: "Cabai Segar, Bawang Merah, Bawang Putih, Minyak Nabati, Garam, Rempah Pilihan.",
        usage: "Sajikan sebagai pendamping lauk. Setelah dibuka, simpan di kulkas."
    },
    // PRODUK 25: TEH HIJAU
    { 
        title: "Teh Hijau Celup Premium (50pcs)", 
        price: "65.000", 
        agentPrice: "52.000", 
        pv: "9", 
        description: "Teh hijau kualitas ekspor, tinggi antioksidan, membantu metabolisme dan relaksasi.", 
        imgText: "TEH+HIJAU",
        mainBenefits: ["Membantu pembakaran lemak (metabolisme).", "Sumber antioksidan kuat.", "Menenangkan pikiran."],
        composition: "100% Daun Teh Hijau Pilihan. Dikemas dalam kantong celup Food Grade.",
        usage: "Seduh 1 kantong teh dengan air panas (80°C) selama 3 menit. Minum 2 kali sehari."
    },
    // PRODUK 26: SANDAL
    { 
        title: "Sandal Wudhu Anti-Slip", 
        price: "45.000", 
        agentPrice: "36.000", 
        pv: "5", 
        description: "Sandal ringan berbahan EVA, cepat kering, anti slip, ideal untuk area wudhu.", 
        imgText: "SANDAL+WUDHU",
        mainBenefits: ["Material EVA ringan dan nyaman.", "Desain anti slip, aman di area basah.", "Cepat kering."],
        composition: "Bahan EVA (Ethylene-Vinyl Acetate) berkualitas tinggi.",
        usage: "Khusus digunakan di kamar mandi/area wudhu. Cuci dengan sabun jika kotor."
    },
    // PRODUK 27: VITAMIN C
    { 
        title: "Vitamin C Murni (30 Tablet)", 
        price: "90.000", 
        agentPrice: "72.000", 
        pv: "15", 
        description: "Suplemen Vitamin C dosis tinggi, membantu jaga daya tahan tubuh, bersertifikasi BPOM.", 
        imgText: "VITAMIN+C",
        mainBenefits: ["Meningkatkan sistem kekebalan tubuh.", "Membantu penyerapan kolagen.", "Antioksidan seluler."],
        composition: "Ascorbic Acid (Vitamin C), Bahan Tambahan Farmasi. BPOM SD 12345678.",
        usage: "1 tablet per hari setelah makan. Jauhkan dari jangkauan anak-anak."
    },
    // PRODUK 28: SUSU KAMBING
    { 
        title: "Susu Kambing Etawa Bubuk", 
        price: "80.000", 
        agentPrice: "64.000", 
        pv: "12", 
        description: "Susu kambing etawa bubuk, kaya kalsium dan nutrisi, baik untuk tulang dan lambung.", 
        imgText: "SUSU+KAMBING",
        mainBenefits: ["Kalsium tinggi untuk tulang.", "Lebih mudah dicerna dibanding susu sapi.", "Baik untuk penderita alergi susu sapi."],
        composition: "Susu Kambing Etawa Murni, Krimer Nabati. Diproses secara steril.",
        usage: "Larutkan 2 sendok makan ke dalam 200ml air hangat. Minum 2 kali sehari."
    },
];


// --- 2. PRODUK STICKY STACKING (Total 10 Item) ---
// Perhatikan: consumerPrice & agentPrice HARUS ada "Rp" dan "Poin" di dalam string.

const stackingProductsData = [
    // SLIDE 1: DETERJEN
    { 
        title: "Deterjen Cair Konsentrat (1L)", 
        consumerPrice: "Rp 35.000", 
        agentPrice: "Rp 28.000", 
        pv: "6 Poin", 
        desc: "Formula Halal & eco-friendly, efektif angkat noda minyak, saus, dan keringat. Busanya pas, mudah dibilas.", 
        img: 'https://via.placeholder.com/600x400/5093A8/FFFFFF?text=DETERJEN+HALAL+LANDSCAPE' 
    },
    // SLIDE 2: PASTA GIGI
    { 
        title: "Pasta Gigi Siwak & Mint (120gr)", 
        consumerPrice: "Rp 22.000", 
        agentPrice: "Rp 18.000", 
        pv: "3 Poin", 
        desc: "Perlindungan alami dari ekstrak siwak & mint untuk napas segar lebih lama. Tanpa fluoride & SLS.", 
        img: 'https://via.placeholder.com/600x400/98C1D9/3D5A80?text=PASTA+GIGI+HERBAL+LANDSCAPE' 
    },
    // SLIDE 3: KERUDUNG
    { 
        title: "Kerudung Instan Basic Jersey", 
        consumerPrice: "Rp 70.000", 
        agentPrice: "Rp 58.000", 
        pv: "10 Poin", 
        desc: "Bahan jersey premium, adem & jatuhnya rapi, tidak menerawang. Tinggal pakai 3 detik.", 
        img: 'https://via.placeholder.com/600x400/E8DAB2/A8906F?text=KERUDUNG+INSTAN+LANDSCAPE' 
    },
    // SLIDE 4: PEMBERSIH LANTAI
    { 
        title: "Pembersih Lantai Aroma Lemon", 
        consumerPrice: "Rp 28.000", 
        agentPrice: "Rp 22.000", 
        pv: "4 Poin", 
        desc: "Formula non-alkohol, efektif membunuh kuman dan virus, memberikan kesegaran aroma lemon di rumah.", 
        img: 'https://via.placeholder.com/600x400/F0F0F0/666666?text=PEMBERSIH+LANTAI' 
    },
    // SLIDE 5: SHAMPOO
    { 
        title: "Shampo Herbal Anti-Ketombe", 
        consumerPrice: "Rp 50.000", 
        agentPrice: "Rp 40.000", 
        pv: "8 Poin", 
        desc: "Shampo dengan ekstrak kemiri dan lidah buaya, membersihkan kulit kepala, mengurangi ketombe dan rambut rontok.", 
        img: 'https://via.placeholder.com/600x400/C4A484/704214?text=SHAMPOO+HERBAL' 
    },
    // SLIDE 6: KECAP
    { 
        title: "Kecap Manis Gluten Free", 
        consumerPrice: "Rp 38.000", 
        agentPrice: "Rp 30.000", 
        pv: "5 Poin", 
        desc: "Kecap manis dari kedelai non-GMO, tanpa gluten, rasa otentik, cocok untuk yang sensitif terhadap gluten.", 
        img: 'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=KECAP+MANIS' 
    },
    // SLIDE 7: BUMBU
    { 
        title: "Bumbu Instan Rendang Halal", 
        consumerPrice: "Rp 20.000", 
        agentPrice: "Rp 16.000", 
        pv: "3 Poin", 
        desc: "Bumbu rendang siap pakai, resep asli Padang, praktis dan lezat, tanpa pengawet buatan.", 
        img: 'https://via.placeholder.com/600x400/A52A2A/FFFFFF?text=BUMBU+RENDANG' 
    },
    // SLIDE 8: LIP BALM
    { 
        title: "Lip Balm Madu & Shea Butter", 
        consumerPrice: "Rp 45.000", 
        agentPrice: "Rp 36.000", 
        pv: "7 Poin", 
        desc: "Pelembab bibir alami, mengandung madu dan shea butter, mengatasi bibir kering dan pecah-pecah.", 
        img: 'https://via.placeholder.com/600x400/FFD700/666666?text=LIP+BALM' 
    },
    // SLIDE 9: AROMATERAPI
    { 
        title: "Minyak Aromaterapi Eucalyptus", 
        consumerPrice: "Rp 60.000", 
        agentPrice: "Rp 48.000", 
        pv: "9 Poin", 
        desc: "Minyak esensial Eucalyptus murni, membantu meredakan hidung tersumbat dan menciptakan suasana rileks.", 
        img: 'https://via.placeholder.com/600x400/8FBC8F/FFFFFF?text=EUCALYPTUS+OIL' 
    },
    // SLIDE 10: FACE MIST
    { 
        title: "Face Mist Air Mawar Alami", 
        consumerPrice: "Rp 40.000", 
        agentPrice: "Rp 32.000", 
        pv: "6 Poin", 
        desc: "Face mist penyegar dari air mawar asli, melembabkan, menenangkan, dan membantu menyiapkan kulit sebelum make up.", 
        img: 'https://via.placeholder.com/600x400/F08080/FFFFFF?text=FACE+MIST+MAWAR' 
    },
];

// =========================================================================
// === GENERATOR & UTILITIES (TIDAK PERLU DIUBAH) ==========================
// =========================================================================

function createHorizontalCardHTML(data, index) {
    const formatPrice = (priceString) => {
        // Asumsi formatnya sudah benar (contoh: 95.000)
        return priceString;
    };
    
    // Konversi array benefits ke list HTML
    const benefitsList = data.mainBenefits ? data.mainBenefits.map(item => `<li>${item}</li>`).join('') : '<li>Detail manfaat belum tersedia.</li>';
    
    return `
        <div class="flex-shrink-0 w-[80vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[60vh] snap-center cursor-pointer" 
            id="card-wrapper-${index}" data-original-width-px="">
            <div class="bg-clean-card rounded-3xl p-6 md:p-8 product-card-detail shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-clean-text/10 border border-clean-subtext/10" id="card-detail-${index}">
                <div class="product-card-image" style="background-image: url('https://via.placeholder.com/300x330/DDDDDD/666666?text=${data.imgText}'); background-size: cover; background-position: center;"></div>
                <div class="product-info">
                    <h3 class="text-2xl font-bold text-clean-text truncate">${data.title}</h3>
                    <div class="info-content-wrapper">
                        <p class="product-main-description text-clean-subtext text-sm mt-1 line-clamp-2">${data.description}</p>
                        
                        <div class="expanded-details">
                            
                            <h4>Manfaat Utama:</h4>
                            <ul class="list-disc list-inside text-xs text-clean-subtext ml-2">
                                ${benefitsList}
                            </ul>
                            
                            <h4>Komposisi/Bahan:</h4>
                            <p class="text-xs text-clean-subtext">${data.composition || 'Data komposisi belum diisi.'}</p>
                            
                            <h4>Saran Pemakaian:</h4>
                            <p class="text-xs text-clean-subtext">${data.usage || 'Saran pemakaian belum diisi.'}</p>

                        </div>

                        <div class="product-price-grid">
                            <div class="price-item">
                                <span class="text-xs text-clean-subtext block">Harga Konsumen</span>
                                <span class="text-lg font-bold text-clean-text">Rp ${formatPrice(data.price)}</span>
                            </div>
                            <div class="price-item">
                                <span class="text-xs text-clean-subtext block">Harga Agen</span>
                                <span class="text-lg font-extrabold text-clean-text">Rp ${formatPrice(data.agentPrice)}</span>
                            </div>
                            <div class="price-item points">
                                <span class="text-xs text-clean-subtext block">Poin (PV)</span>
                                <span class="text-lg font-bold text-clean-text">${data.pv} Poin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createStackingSlideHTML(data, index) {
    return `
        <div class="stacking-product-slide" data-name="${data.title}">
            <div class="stacking-product-card-view" id="stack-view-${index}">
                <div class="stacking-product-card-image" style="background-image: url('${data.img}');"></div>
                <div class="stacking-product-info-detail">
                    <div class="detail-content w-2/3">
                        <h3 class="text-3xl font-bold text-clean-text truncate">${data.title}</h3>
                        <p class="text-clean-subtext text-base mt-1">
                            ${data.desc}
                        </p>
                        <ul class="mt-2 text-sm text-clean-subtext list-disc list-inside">
                            <li>Produk ke-${index} dari ${stackingProductsData.length}.</li>
                            <li>Halal MUI Certified.</li>
                        </ul>
                    </div>
                    <div class="stacking-product-price-grid w-1/3">
                        <div class="price-item">
                            <span class="text-xs text-clean-subtext block">Harga Konsumen</span>
                            <span class="text-xl font-bold text-clean-text">${data.consumerPrice}</span>
                        </div>
                        <div class="price-item">
                            <span class="text-xs text-clean-subtext block">Harga Agen</span>
                            <span class="text-xl font-extrabold text-clean-text">${data.agentPrice}</span>
                        </div>
                        <div class="price-item points">
                            <span class="text-xs text-clean-subtext block">Poin (PV)</span>
                            <span class="text-lg font-bold text-clean-text">${data.pv}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateHorizontalCards() {
    const container = document.getElementById('card-scroll-container');
    
    // Hapus semua kecuali penutup akhir (w-8 md:w-24 h-1)
    const fillerEnd = container.lastElementChild; 
    container.innerHTML = ''; 

    let html = '';
    // Loop untuk semua data (28 item)
    horizontalProductsData.forEach((data, i) => {
        html += createHorizontalCardHTML(data, i + 1);
    });
    
    container.innerHTML = html;
    container.appendChild(fillerEnd); // Masukkan penutup akhir lagi
}

function generateStackingSlides() {
    const container = document.getElementById('stacking-scroll-container');
    let html = '';
    
    // Generate semua slides dari data array (10 item)
    stackingProductsData.forEach((data, i) => {
        html += createStackingSlideHTML(data, i + 1);
    });
    
    container.innerHTML = html;
}

function setupFloatingText() {
    const titleWrapper = document.querySelector("#heroTitleWrapper");
    const scrollCueBtn = document.querySelector("#scrollCue");
    gsap.to(titleWrapper, { y: 5, ease: "sine.inOut", repeat: -1, yoyo: true, duration: 4 });
    gsap.to(scrollCueBtn, { y: 10, ease: "power1.inOut", repeat: -1, yoyo: true, duration: 0.8 });
    gsap.fromTo(titleWrapper, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
}

function setupHeroScrollAnimation() {
    const heroPin = document.querySelector("#hero-pin");
    const mumtasText = document.querySelector("#mumtas-bg");
    const heroContent = document.querySelector(".hero-title-content");
    const photoCards = gsap.utils.toArray(".product-photo-card");
    const scrollDuration = heroPin.offsetHeight * 1.8; 

    const tl = gsap.timeline({
        scrollTrigger: { trigger: heroPin, start: "top top", end: `+=${scrollDuration}`, scrub: 1, pin: true }
    });

    tl.to(mumtasText, { rotateX: 0, filter: 'blur(0px)', opacity: 0.8, ease: "power1.out" }, 0);
    tl.to(photoCards, { y: 0, opacity: 1, stagger: { each: 0.1, from: "random" }, duration: 0.5, ease: "back.out(1.2)" }, 0.1);
    tl.to(photoCards, { y: -50, opacity: 0, stagger: 0.05, duration: 0.3, ease: "power1.in" }, 0.7);
    tl.to(heroContent, { y: -150, opacity: 0, duration: 0.4, ease: "power2.in" }, 0.6);
}
 
function setupCardExpansion() {
    const featureSection = document.getElementById('features-section');
    const scrollContainer = document.getElementById('card-scroll-container');
    
    let cardWrappers = [];

    const closeBtn = document.getElementById('close-card-btn');
    const navArrows = document.getElementById('nav-arrows');
    
    const originalWidthData = new Map();

    function getCardWrappers() {
        return Array.from(scrollContainer.children).filter(el => !el.classList.contains('h-1') && el.id.startsWith('card-wrapper-'));
    }

    function getOriginalWidthData(cardElement) {
        if (originalWidthData.has(cardElement)) {
            return originalWidthData.get(cardElement);
        }

        const initialWidthPx = cardElement.getBoundingClientRect().width;
        
        const data = { 
            widthPx: initialWidthPx
        };
        originalWidthData.set(cardElement, data);
        return data;
    }

    function openCard(cardElement) {
        if (featureSection.classList.contains('is-card-open')) return;

        featureSection.classList.add('is-card-open');
        cardElement.classList.add('is-selected');
        
        const originalData = getOriginalWidthData(cardElement);
        const cardDetail = cardElement.querySelector('.product-card-detail');
        
        gsap.to(navArrows, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
        
        const targetWidth = scrollContainer.getBoundingClientRect().width * 0.7; 

        gsap.timeline({ defaults: { duration: 0.7, ease: "power2.inOut" } })
            .add('start')
            .to(cardElement, { 
                width: targetWidth, 
                zIndex: 20
            }, 'start')
            .add(() => {
                cardDetail.classList.add('is-expanded');
            }, 'start+=0.3'); 

        getCardWrappers().forEach(otherCard => {
            if (otherCard !== cardElement) {
                otherCard.classList.add('is-disabled');
            }
        });
    }

    function closeCard(cardElement) {
        if (!cardElement || !featureSection.classList.contains('is-card-open')) return;

        const originalData = getOriginalWidthData(cardElement);
        const cardDetail = cardElement.querySelector('.product-card-detail');
        
        cardDetail.classList.remove('is-expanded');

        gsap.timeline({ 
            defaults: { duration: 0.7, ease: "power2.inOut" },
            onComplete: () => {
                featureSection.classList.remove('is-card-open');
                cardElement.classList.remove('is-selected');
                cardElement.style.zIndex = '';
                cardElement.style.width = ''; 
                
                gsap.to(navArrows, { opacity: 1, duration: 0.3, pointerEvents: 'all' });
                window.updateArrows();
            }
        })
        .add('start')
        .to(cardElement, { 
            width: originalData.widthPx
        }, 'start');

        getCardWrappers().forEach(otherCard => {
            otherCard.classList.remove('is-disabled');
        });
    }

    window.initCardExpansion = function() {
        cardWrappers = getCardWrappers();
        cardWrappers.forEach(card => {
            getOriginalWidthData(card); 
            
            card.removeEventListener('click', handleCardClick);
            card.addEventListener('click', handleCardClick);
        });
    };

    function handleCardClick() {
        if (featureSection.classList.contains('is-card-open') && this.classList.contains('is-selected')) {
            closeCard(this);
        } else if (!featureSection.classList.contains('is-card-open')) {
            openCard(this);
        }
    }

    closeBtn.addEventListener('click', () => {
        const selectedCard = document.querySelector('.flex-shrink-0.is-selected');
        closeCard(selectedCard);
    });
    
    window.addEventListener('resize', () => {
        originalWidthData.clear();
        getCardWrappers().forEach(card => getOriginalWidthData(card));
    });

    window.initCardExpansion(); 
}

function setupCardScrolling() {
    const scrollContainer = document.getElementById('card-scroll-container');
    const prevBtn = document.getElementById('btnPrev');
    const nextBtn = document.getElementById('btnNext');
    const scrollCue = document.getElementById('scrollCue');
    const features = document.getElementById('features-section');

    const getCards = () => Array.from(scrollContainer.children).filter(el => !el.classList.contains('h-1'));
    const getGapPx = () => { const style = getComputedStyle(scrollContainer); return parseFloat(style.gap || style.columnGap || style.rowGap || '24'); };
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    function scrollByCard(direction, smooth = true) {
        if (features.classList.contains('is-card-open')) return;
        const cards = getCards(); if (!cards.length) return;
        const cardWidth = cards[0].getBoundingClientRect().width;
        const step = cardWidth + getGapPx();
        const target = clamp(scrollContainer.scrollLeft + direction * step, 0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
        scrollContainer.scrollTo({ left: target, behavior: smooth ? 'smooth' : 'auto' });
    }

    window.updateArrows = function updateArrows(){
        const atStart = scrollContainer.scrollLeft <= 0;
        const atEnd = scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
        prevBtn.classList.toggle('is-disabled', atStart);
        nextBtn.classList.toggle('is-disabled', atEnd);
        prevBtn.setAttribute('aria-disabled', String(atStart));
        nextBtn.setAttribute('aria-disabled', String(atEnd));
    }

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
    scrollContainer.addEventListener('scroll', window.updateArrows, { passive: true });
    window.addEventListener('resize', window.updateArrows);
    window.updateArrows();

    if (scrollCue && features) {
        scrollCue.addEventListener('click', () => {
            features.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

function setupCtaAnimation() {
    const ctaSection = document.getElementById('cta-section');
    if (!ctaSection) return; 

    gsap.from(ctaSection.children, {
        opacity: 0,
        y: 50, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 85%", 
        }
    });

    const benefitBoxes = gsap.utils.toArray("#cta-section .p-4");
    gsap.from(benefitBoxes, {
        opacity: 0,
        y: 20, 
        stagger: 0.2, 
        duration: 0.5,
        delay: 0.3, 
        ease: "power1.out",
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 75%", 
        }
    });
}

function setupNewStackingAnimation() {
    const section = document.getElementById("new-stacking-section");
    const slides = gsap.utils.toArray(".stacking-product-slide");
    const totalSlides = slides.length; 
    
    if (totalSlides === 0 || !section) return;

    const scrollPerSlide = 2000; 
    const totalScrollHeight = totalSlides * scrollPerSlide;

    ScrollTrigger.create({
        trigger: section,
        pin: true,
        pinSpacing: true, 
        start: "top top",
        end: `+=${totalScrollHeight}`, 
        markers: false 
    });

    const slidesTL = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top 100", 
            end: `+=${totalScrollHeight}`, 
            markers: false
        }
    });

    slides.forEach((slide, i) => {
        const view = slide.querySelector('.stacking-product-card-view');
        const startTime = i * (scrollPerSlide / 1000); 
        
        if (i === 0) {
             gsap.set(view, { y: "100vh", scale: 1, borderRadius: "1.5rem" });
             gsap.set(slide, { opacity: 0 });
        }

        slidesTL.to(slide, { opacity: 1, duration: 0.2 }, startTime)
                .to(view, { y: "-8vh", scale: 0.75, duration: 0.2 }, startTime);

        slidesTL.to(view, { y: "-8vh", scale: 0.75, duration: 1.5 }, startTime + 0.2); 

        slidesTL.to(slide, { opacity: 0, duration: 0.2 }, startTime + 1.7) 
                .to(view, { y: "-8vh", scale: 0.5, duration: 0.5, ease: "power1.in" }, startTime + 2); 

        if (i === 0) {
            slide.classList.add('is-active');
        } else {
            slidesTL.call(() => {
                slides.forEach(s => s.classList.remove('is-active'));
                slide.classList.add('is-active');
            }, null, startTime + 0.2);
            slidesTL.call(() => {
                slide.classList.remove('is-active');
            }, null, startTime + 1.9);
        }
    });
}

function setupTestimonialsCarousel() {
    const track = document.getElementById('tsTrack');
    const inner = document.getElementById('tsInner');
    const cards = Array.from(inner.querySelectorAll('.ts-card'));
    const btnPrev = document.getElementById('tsPrev');
    const btnNext = document.getElementById('tsNext');
    const dotsWrap = document.getElementById('tsDots');

    if (!track || !inner || cards.length === 0) return;

    const visibleCount = () => {
        const w = window.innerWidth;
        if (w >= 1024) return 2;  
        if (w >= 768) return 2;   
        return 1;                 
    };

    let index = 0;
    let autoplay = null;

    const pageCount = () => Math.max(1, Math.ceil(cards.length / visibleCount()));

    function renderDots() {
        dotsWrap.innerHTML = '';
        for (let i = 0; i < pageCount(); i++) {
            const b = document.createElement('button');
            b.className = 'w-2.5 h-2.5 rounded-full bg-clean-border aria-[current=true]:bg-clean-text transition';
            b.setAttribute('aria-label', 'Ke halaman ' + (i + 1));
            b.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(b);
        }
    }

    function updateDots() {
        const dots = Array.from(dotsWrap.children);
        dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));
    }

    function spotlight() {
        const v = visibleCount();
        const start = index * v;
        const end = Math.min(start + v - 1, cards.length - 1);
        cards.forEach((el, i) => {
            const active = i >= start && i <= end;
            gsap.to(el, {
                scale: active ? 1 : 0.97,
                opacity: active ? 1 : 0.7,
                boxShadow: active ? '0 20px 60px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.06)',
                duration: 0.35,
                ease: 'power2.out'
            });
        });
    }

    function goTo(i) {
        const max = pageCount() - 1;
        index = Math.max(0, Math.min(max, i));

        const v = visibleCount();
        const cardW = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(inner).gap || '28');
        const step = (cardW + gap) * v;
        const x = index * step * -1;

        gsap.to(inner, { x, duration: 0.55, ease: 'power2.out' });
        updateDots();
        spotlight();
        updateButtons();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function updateButtons() {
        const max = pageCount() - 1;
        if (window.innerWidth < 768) {
            btnPrev?.classList.add('hidden');
            btnNext?.classList.add('hidden');
        } else {
            btnPrev?.classList.remove('hidden');
            btnNext?.classList.remove('hidden');
        }
        btnPrev?.classList.toggle('is-disabled', index <= 0);
        btnNext?.classList.toggle('is-disabled', index >= max);
        btnPrev?.setAttribute('aria-disabled', String(index <= 0));
        btnNext?.setAttribute('aria-disabled', String(index >= max));
    }

    function startAutoplay() {
        stopAutoplay();
        autoplay = setInterval(() => {
            const max = pageCount() - 1;
            if (index >= max) { goTo(0); } else { next(); }
        }, 4200);
    }
    function stopAutoplay() { if (autoplay) clearInterval(autoplay); }

    btnPrev?.addEventListener('click', prev);
    btnNext?.addEventListener('click', next);

    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    let startX = 0, dx = 0;
    track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; dx = 0; stopAutoplay(); }, { passive: true });
    track.addEventListener('touchmove', (e) => { dx = e.touches[0].clientX - startX; }, { passive: true });
    track.addEventListener('touchend', () => { if (Math.abs(dx) > 40) (dx < 0 ? next() : prev()); startAutoplay(); });

    track.setAttribute('tabindex', '0');
    track.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); });

    const onResize = () => {
        gsap.set(inner, { x: 0 });
        renderDots();
        index = Math.min(index, pageCount() - 1);
        goTo(index);
    };
    window.addEventListener('resize', onResize);

    renderDots();
    goTo(0);
    startAutoplay();
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate konten dinamis (28 horizontal cards & 10 stacking slides)
    generateHorizontalCards();
    generateStackingSlides();

    // 2. Inisialisasi semua fungsi (memastikan GSAP dan DOM sudah siap)
    setupFloatingText();
    setupHeroScrollAnimation();
    
    // Perlu diinisialisasi ulang setelah konten horizontal dibuat
    setupCardScrolling(); 
    setupCardExpansion();
    
    setupCtaAnimation(); 
    setupNewStackingAnimation(); 
    setupTestimonialsCarousel(); 
    
    document.querySelectorAll('.flex-shrink-0').forEach(card => {
        card.setAttribute('data-original-width-px', card.getBoundingClientRect().width);
    });
});