gsap.registerPlugin(ScrollTrigger);

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
    tl.to(photoCards, { y: 0, opacity: 1, stagger: { each: 0.15, from: "random" }, duration: 0.5, ease: "back.out(1.2)" }, 0.1);
    tl.to(photoCards, { y: -50, opacity: 0, stagger: 0.05, duration: 0.3, ease: "power1.in" }, 0.7);
    tl.to(heroContent, { y: -150, opacity: 0, duration: 0.4, ease: "power2.in" }, 0.6);
}
        
// --- MODIFIED FUNCTION TO HANDLE CARD EXPANSION (WIDTH-ONLY EXPANSION) ---
function setupCardExpansion() {
    const featureSection = document.getElementById('features-section');
    const scrollContainer = document.getElementById('card-scroll-container');
    const cardWrappers = Array.from(scrollContainer.children).filter(el => !el.classList.contains('h-1'));
    const closeBtn = document.getElementById('close-card-btn');
    const navArrows = document.getElementById('nav-arrows');
    
    const originalWidthData = new Map();

    function getOriginalWidthData(cardElement) {
        if (originalWidthData.has(cardElement)) {
            return originalWidthData.get(cardElement);
        }

        const classList = cardElement.className;
        const widthMatches = classList.match(/(?:^|\s)(w-\[\w+%?\]|w-\[\d+\.?\d*(?:vw|px|rem)?\]|(?:sm|md|lg|xl):w-\[\w+%?\]|(?:sm|md|lg|xl):w-\[\d+\.?\d*(?:vw|px|rem)?\])/g) || [];
        
        // Hitung lebar awal dalam pixel.
        const initialWidthPx = cardElement.getBoundingClientRect().width;
        
        const data = { 
            classes: widthMatches,
            widthPx: initialWidthPx
        };
        originalWidthData.set(cardElement, data);
        return data;
    }

    // Fungsi untuk membuka kartu
    function openCard(cardElement) {
        if (featureSection.classList.contains('is-card-open')) return;

        featureSection.classList.add('is-card-open');
        cardElement.classList.add('is-selected');
        
        const originalData = getOriginalWidthData(cardElement);
        const cardDetail = cardElement.querySelector('.product-card-detail');
        
        // Sembunyikan panah navigasi
        gsap.to(navArrows, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
        
        // Tentukan lebar target (contoh: 70% dari lebar container)
        const targetWidth = scrollContainer.getBoundingClientRect().width * 0.7; 

        // Transisi Lebar dan Konten
        gsap.timeline({ defaults: { duration: 0.7, ease: "power2.inOut" } })
            .add('start')
            // Animasi Melebar: Gunakan GSAP untuk menganimasikan lebar dalam PX
            .to(cardElement, { 
                width: targetWidth, 
                zIndex: 20
            }, 'start')
            // Animasi Konten: Ubah layout internal agar item jadi side-by-side
            .add(() => {
                cardDetail.classList.add('is-expanded');
            }, 'start+=0.3'); 

        // Nonaktifkan/blur kartu lain
        cardWrappers.forEach(otherCard => {
            if (otherCard !== cardElement) {
                otherCard.classList.add('is-disabled');
            }
        });
    }

    // Fungsi untuk menutup kartu
    function closeCard(cardElement) {
        if (!cardElement || !featureSection.classList.contains('is-card-open')) return;

        const originalData = getOriginalWidthData(cardElement);
        const cardDetail = cardElement.querySelector('.product-card-detail');
        
        // Hapus class layout expanded terlebih dahulu
        cardDetail.classList.remove('is-expanded');

        // Balikkan Transisi Lebar
        gsap.timeline({ 
            defaults: { duration: 0.7, ease: "power2.inOut" },
            onComplete: () => {
                // Cleanup classes dan reset state
                featureSection.classList.remove('is-card-open');
                cardElement.classList.remove('is-selected');
                cardElement.style.zIndex = '';
                
                // Kembalikan lebar ke kontrol CSS/Tailwind
                cardElement.style.width = ''; 
                
                // Aktifkan kembali panah navigasi
                gsap.to(navArrows, { opacity: 1, duration: 0.3, pointerEvents: 'all' });
                window.updateArrows();
            }
        })
        .add('start')
        // Animasi kembali ke lebar awal (dalam PX)
        .to(cardElement, { 
            width: originalData.widthPx
        }, 'start');

        // Aktifkan kembali kartu lain
        cardWrappers.forEach(otherCard => {
            otherCard.classList.remove('is-disabled');
        });
    }

    // Inisialisasi dan Event Listeners
    cardWrappers.forEach(card => {
        // Panggil sekali untuk menyimpan dimensi original
        getOriginalWidthData(card); 
        
        card.addEventListener('click', () => {
            if (featureSection.classList.contains('is-card-open') && card.classList.contains('is-selected')) {
                closeCard(card);
            } else if (!featureSection.classList.contains('is-card-open')) {
                openCard(card);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        const selectedCard = document.querySelector('.flex-shrink-0.is-selected');
        closeCard(selectedCard);
    });
    
    // Perbarui lebar awal saat resize
    window.addEventListener('resize', () => {
        originalWidthData.clear();
        cardWrappers.forEach(card => getOriginalWidthData(card));
    });
}
// --- END MODIFIED FUNCTION ---


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

// Tambahkan fungsi ini di file main.js

function setupCtaAnimation() {
    const ctaSection = document.getElementById('cta-section');
    if (!ctaSection) return; // Pastikan section ada

    // Animasi: Konten meluncur ke atas 20px dan opacity berubah dari 0 ke 1
    gsap.from(ctaSection.children, {
        opacity: 0,
        y: 50, // Meluncur 50px dari bawah
        stagger: 0.1, // Jeda kecil antar elemen
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 85%", // Mulai animasi ketika bagian atas section mencapai 85% dari viewport
            // toggleActions: "play none none none" // Hanya mainkan sekali
        }
    });

    // Animasikan kotak benefit secara terpisah dengan sedikit delay
    const benefitBoxes = gsap.utils.toArray("#cta-section .p-4");
    gsap.from(benefitBoxes, {
        opacity: 0,
        y: 20, 
        stagger: 0.2, 
        duration: 0.5,
        delay: 0.3, // Mulai sedikit setelah konten utama
        ease: "power1.out",
        scrollTrigger: {
            trigger: ctaSection,
            start: "top 75%", // Mulai sedikit lebih awal
            // toggleActions: "play none none none"
        }
    });
}

// ... di file main.js, tambahkan fungsi ini

function setupNewStackingAnimation() {
    const container = document.getElementById("stacking-scroll-container");
    const section = document.getElementById("new-stacking-section");
    const slides = gsap.utils.toArray(".stacking-product-slide");
    const totalSlides = slides.length;
    
    if (totalSlides === 0 || !section) return;

    const scrollPerSlide = 2000; 
    const totalScrollHeight = totalSlides * scrollPerSlide;

    // Perbaikan 2: Ganti Master Timeline ke SCROLLTRIGGER LANGSUNG
    // Ini adalah cara yang paling stabil untuk Pinning
    ScrollTrigger.create({
        trigger: section,
        pin: true,
        pinSpacing: true, // Kembali ke TRUE (Paling Stabil)
        start: "top top",
        end: `+=${totalScrollHeight}`, // END Pin hanya sepanjang animasi slides
        markers: false 
    });

    // Timeline untuk Memicu Animasi Slides
    const slidesTL = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top 100", // Mulai sedikit setelah Pin aktif
            end: `+=${totalScrollHeight}`, 
            markers: false
        }
    });

    // 3. Animasi Setiap Slide
    slides.forEach((slide, i) => {
        const view = slide.querySelector('.stacking-product-card-view');
        const startTime = i * (scrollPerSlide / 1000); // Waktu di TL dalam detik
        
        // KUNCI: Inisialisasi Posisi Awal Kartu Pertama
        if (i === 0) {
             gsap.set(view, { y: "100vh", scale: 1, borderRadius: "1.5rem" });
             gsap.set(slide, { opacity: 0 });
        }

        // A. Animasi Masuk: Set opacity dari 0 ke 1, sambil meluncur ke posisi 5vh
        slidesTL.to(slide, { opacity: 1, duration: 0.2 }, startTime)
                .to(view, { y: "-8vh", scale: 0.75, duration: 0.2 }, startTime);

        // B. Jeda Tampilan (Slide 2-3 akan muncul setelah ini)
        slidesTL.to(view, { y: "-8vh", scale: 0.75, duration: 2 }, startTime + 0.2); 

        // C. Animasi Keluar: Fade out dan Luncur ke atas
        slidesTL.to(slide, { opacity: 0, duration: 0.2 }, startTime + 1.5) 
                .to(view, { y: "-8vh", scale: 0.5, duration: 0.5, ease: "power1.in" }, startTime + 1.8);
    });
}

// TESTIMONI COI
function setupTestimonialsCarousel() {
        const track = document.getElementById('tsTrack');
        const inner = document.getElementById('tsInner');
        const cards = Array.from(inner.querySelectorAll('.ts-card'));
        const btnPrev = document.getElementById('tsPrev');
        const btnNext = document.getElementById('tsNext');
        const dotsWrap = document.getElementById('tsDots');

        if (!track || !inner || cards.length === 0) return;

        // Tampilkan 2 kartu di desktop (biar besar dan megah), 1 di mobile
        const visibleCount = () => {
                const w = window.innerWidth;
                if (w >= 1024) return 2;  // lg+
                if (w >= 768) return 2;   // md
                return 1;                 // mobile
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

        // Spotlight: kartu aktif lebih terang & scale 1
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

                // Geser per "page" = v kartu
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
                // Sembunyikan panah di mobile (opsional)
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

        // Events
        btnPrev?.addEventListener('click', prev);
        btnNext?.addEventListener('click', next);

        // Pause saat hover
        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', startAutoplay);

        // Swipe (mobile)
        let startX = 0, dx = 0;
        track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; dx = 0; stopAutoplay(); }, { passive: true });
        track.addEventListener('touchmove', (e) => { dx = e.touches[0].clientX - startX; }, { passive: true });
        track.addEventListener('touchend', () => { if (Math.abs(dx) > 40) (dx < 0 ? next() : prev()); startAutoplay(); });

        // Keyboard
        track.setAttribute('tabindex', '0');
        track.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); });

        // Resize
        const onResize = () => {
                gsap.set(inner, { x: 0 });
                renderDots();
                index = Math.min(index, pageCount() - 1);
                goTo(index);
        };
        window.addEventListener('resize', onResize);

        // Init
        renderDots();
        goTo(0);
        startAutoplay();
}

document.addEventListener('DOMContentLoaded', () => {
    setupFloatingText();
    setupHeroScrollAnimation();
    setupCardScrolling(); 
    setupCardExpansion();
    setupCtaAnimation(); 
    setupNewStackingAnimation(); 
    setupTestimonialsCarousel(); 
    
    // Panggil sekali saat dimuat untuk menyimpan lebar awal
    document.querySelectorAll('.flex-shrink-0').forEach(card => {
        card.setAttribute('data-original-width-px', card.getBoundingClientRect().width);
    });
});
