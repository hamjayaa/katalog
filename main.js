/* Tailwind Configuration must be loaded before any custom CSS/JS that uses it. */
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
// === GENERATOR KONTEN DINAMIS (Data diambil dari data.json) ============
// =========================================================================

function generateHeroGallery(cardsData) {
    const container = document.getElementById('hero-cards-container');
    if (!container) return;
    let html = '';
    cardsData.forEach(card => {
        html += `
            <div class="product-photo-card" style="${card.style}">
                <div class="card-content" style="background-image: url('${card.imageUrl}')"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function generateTestimonials(testimonialsData) {
    const container = document.getElementById('tsInner');
    if (!container) return;
    let html = '';
    testimonialsData.forEach(ts => {
        html += `
            <article class="ts-card shrink-0 w-[88vw] sm:w-[70vw] md:w-[44vw] lg:w-[420px] xl:w-[460px] aspect-square
                         bg-clean-bg p-7 md:p-9 rounded-3xl shadow-2xl border border-clean-border">
                <div class="h-full flex flex-col">
                    <div class="flex items-center gap-4 mb-5">
                        <img src="${ts.imgSrc}" alt="${ts.alt}" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
                        <div>
                            <h4 class="font-bold text-lg">${ts.name}</h4>
                            <p class="text-xs text-clean-subtext">${ts.role}</p>
                        </div>
                    </div>
                    <p class="ts-clamp ts-clamp-5 text-base sm:text-lg md:text-xl text-clean-text leading-relaxed">
                        ${ts.quote}
                    </p>
                    <div class="mt-auto pt-4 text-xs text-clean-subtext">${ts.kicker}</div>
                </div>
            </article>
        `;
    });
    container.innerHTML = html;
}

function createHorizontalCardHTML(productData, index) {
    const benefitsList = productData.mainBenefits ? productData.mainBenefits.map(item => `<li>${item}</li>`).join('') : '<li>Detail manfaat belum tersedia.</li>';
    
    return `
        <div class="flex-shrink-0 w-[80vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[60vh] snap-center cursor-pointer" 
            id="card-wrapper-${index}" data-original-width-px="">
            <div class="bg-clean-card rounded-3xl p-6 md:p-8 product-card-detail shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-clean-text/10 border border-clean-subtext/10" id="card-detail-${index}">
                <div class="product-card-image" style="background-image: url('${productData.imageUrl}'); background-size: cover; background-position: center;"></div>
                <div class="product-info">
                    <h3 class="text-2xl font-bold text-clean-text truncate">${productData.title}</h3>
                    <div class="info-content-wrapper">
                        <p class="product-main-description text-clean-subtext text-sm mt-1 line-clamp-2">${productData.description}</p>
                        <div class="expanded-details">
                            <h4>Manfaat Utama:</h4>
                            <ul class="list-disc list-inside text-xs text-clean-subtext ml-2">${benefitsList}</ul>
                            <h4>Komposisi/Bahan:</h4>
                            <p class="text-xs text-clean-subtext">${productData.composition || 'Data komposisi belum diisi.'}</p>
                            <h4>Saran Pemakaian:</h4>
                            <p class="text-xs text-clean-subtext">${productData.usage || 'Saran pemakaian belum diisi.'}</p>
                        </div>
                        <div class="product-price-grid">
                            <div class="price-item"><span class="text-xs text-clean-subtext block">Harga Konsumen</span><span class="text-lg font-bold text-clean-text">Rp ${productData.price}</span></div>
                            <div class="price-item"><span class="text-xs text-clean-subtext block">Harga Agen</span><span class="text-lg font-extrabold text-clean-text">Rp ${productData.agentPrice}</span></div>
                            <div class="price-item points"><span class="text-xs text-clean-subtext block">Poin (PV)</span><span class="text-lg font-bold text-clean-text">${productData.pv} Poin</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateHorizontalCards(productsData) {
    const container = document.getElementById('card-scroll-container');
    const fillerEnd = container.lastElementChild; 
    container.innerHTML = ''; 

    let html = '';
    productsData.forEach((product, i) => {
        html += createHorizontalCardHTML(product, i + 1);
    });
    
    container.innerHTML = html;
    container.appendChild(fillerEnd);
}

function createStackingSlideHTML(productData, index, total) {
    return `
        <div class="stacking-product-slide" data-name="${productData.title}">
            <div class="stacking-product-card-view" id="stack-view-${index}">
                <div class="stacking-product-card-image" style="background-image: url('${productData.img}');"></div>
                <div class="stacking-product-info-detail">
                    <div class="detail-content w-2/3">
                        <h3 class="text-3xl font-bold text-clean-text truncate">${productData.title}</h3>
                        <p class="text-clean-subtext text-base mt-1">${productData.desc}</p>
                        <ul class="mt-2 text-sm text-clean-subtext list-disc list-inside">
                            <li>Produk ke-${index} dari ${total}.</li>
                            <li>Halal MUI Certified.</li>
                        </ul>
                    </div>
                    <div class="stacking-product-price-grid w-1/3">
                        <div class="price-item"><span class="text-xs text-clean-subtext block">Harga Konsumen</span><span class="text-lg font-bold text-clean-text">${productData.consumerPrice}</span></div>
                        <div class="price-item"><span class="text-xs text-clean-subtext block">Harga Agen</span><span class="text-lg font-extrabold text-clean-text">${productData.agentPrice}</span></div>
                        <div class="price-item points"><span class="text-xs text-clean-subtext block">Poin (PV)</span><span class="text-lg font-bold text-clean-text">${productData.pv}</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStackingSlides(productsData) {
    const container = document.getElementById('stacking-scroll-container');
    let html = '';
    const total = productsData.length;
    productsData.forEach((product, i) => {
        html += createStackingSlideHTML(product, i + 1, total);
    });
    container.innerHTML = html;
}

// =========================================================================
// === FUNGSI ANIMASI & INTERAKTIVITAS (Tidak ada perubahan) ==============
// =========================================================================

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
    if (photoCards.length === 0) return;
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
    const closeBtn = document.getElementById('close-card-btn');
    const navArrows = document.getElementById('nav-arrows');
    const originalWidthData = new Map();

    function getCardWrappers() {
        return Array.from(scrollContainer.children).filter(el => el.id.startsWith('card-wrapper-'));
    }

    function getOriginalWidthData(cardElement) {
        if (originalWidthData.has(cardElement)) return originalWidthData.get(cardElement);
        const data = { widthPx: cardElement.getBoundingClientRect().width };
        originalWidthData.set(cardElement, data);
        return data;
    }

    function openCard(cardElement) {
        if (featureSection.classList.contains('is-card-open')) return;
        featureSection.classList.add('is-card-open');
        cardElement.classList.add('is-selected');
        const cardDetail = cardElement.querySelector('.product-card-detail');
        gsap.to(navArrows, { opacity: 0, duration: 0.3, pointerEvents: 'none' });
        const targetWidth = scrollContainer.getBoundingClientRect().width * 0.7; 
        gsap.timeline({ defaults: { duration: 0.7, ease: "power2.inOut" } })
            .to(cardElement, { width: targetWidth, zIndex: 20 }, 0)
            .add(() => cardDetail.classList.add('is-expanded'), 0.3);
        getCardWrappers().forEach(otherCard => {
            if (otherCard !== cardElement) otherCard.classList.add('is-disabled');
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
        }).to(cardElement, { width: originalData.widthPx }, 0);
        getCardWrappers().forEach(otherCard => otherCard.classList.remove('is-disabled'));
    }

    function handleCardClick() {
        if (featureSection.classList.contains('is-card-open') && this.classList.contains('is-selected')) {
            closeCard(this);
        } else if (!featureSection.classList.contains('is-card-open')) {
            openCard(this);
        }
    }

    window.initCardExpansion = function() {
        const cardWrappers = getCardWrappers();
        cardWrappers.forEach(card => {
            getOriginalWidthData(card); 
            card.removeEventListener('click', handleCardClick);
            card.addEventListener('click', handleCardClick);
        });
    };

    closeBtn.addEventListener('click', () => {
        const selectedCard = document.querySelector('.flex-shrink-0.is-selected');
        closeCard(selectedCard);
    });
    
    window.addEventListener('resize', () => {
        originalWidthData.clear();
        getCardWrappers().forEach(card => getOriginalWidthData(card));
    });

    // We will call initCardExpansion after the content is loaded
}

function setupCardScrolling() {
    const scrollContainer = document.getElementById('card-scroll-container');
    const prevBtn = document.getElementById('btnPrev');
    const nextBtn = document.getElementById('btnNext');
    const scrollCue = document.getElementById('scrollCue');
    const features = document.getElementById('features-section');

    const getCards = () => Array.from(scrollContainer.children).filter(el => el.id.startsWith('card-wrapper-'));
    const getGapPx = () => parseFloat(getComputedStyle(scrollContainer).gap || '24');
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    function scrollByCard(direction) {
        if (features.classList.contains('is-card-open')) return;
        const cards = getCards(); if (!cards.length) return;
        const step = cards[0].getBoundingClientRect().width + getGapPx();
        const target = clamp(scrollContainer.scrollLeft + direction * step, 0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
        scrollContainer.scrollTo({ left: target, behavior: 'smooth' });
    }

    window.updateArrows = function updateArrows(){
        const atStart = scrollContainer.scrollLeft <= 1;
        const atEnd = scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1;
        prevBtn.classList.toggle('is-disabled', atStart);
        nextBtn.classList.toggle('is-disabled', atEnd);
    }

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
    scrollContainer.addEventListener('scroll', window.updateArrows, { passive: true });
    window.addEventListener('resize', window.updateArrows);
    scrollCue.addEventListener('click', () => features.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    
    window.updateArrows();
}

function setupCtaAnimation() {
    const ctaSection = document.getElementById('cta-section');
    if (!ctaSection) return; 

    gsap.from(ctaSection.children, {
        opacity: 0, y: 50, stagger: 0.1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ctaSection, start: "top 85%" }
    });
    const benefitBoxes = gsap.utils.toArray("#cta-section .p-4");
    gsap.from(benefitBoxes, {
        opacity: 0, y: 20, stagger: 0.2, duration: 0.5, delay: 0.3, ease: "power1.out",
        scrollTrigger: { trigger: ctaSection, start: "top 75%" }
    });
}

function setupNewStackingAnimation() {
    const section = document.getElementById("new-stacking-section");
    const slides = gsap.utils.toArray(".stacking-product-slide");
    if (slides.length === 0 || !section) return;

    const scrollPerSlide = 1100;
    const totalScrollHeight = slides.length * scrollPerSlide;

    ScrollTrigger.create({
        trigger: section, pin: true, pinSpacing: true, start: "top top", end: `+=${totalScrollHeight}`
    });

    const slidesTL = gsap.timeline({
        scrollTrigger: { trigger: section, scrub: 1, start: "top 100", end: `+=${totalScrollHeight}` }
    });

    slides.forEach((slide, i) => {
        const view = slide.querySelector('.stacking-product-card-view');
        const startTime = i * (scrollPerSlide / 1000); 
        if (i === 0) {
             gsap.set(view, { y: "100vh", scale: 1, borderRadius: "1.5rem" });
             gsap.set(slide, { opacity: 0 });
        }
        slidesTL.to(slide, { opacity: 1, duration: 0.2 }, startTime)
                .to(view, { y: "-8vh", scale: 0.75, duration: 0.5 }, startTime)
                .to(view, { y: "-8vh", scale: 0.75, duration: 0.5 }, startTime + 0.2) 
                .to(slide, { opacity: 0, duration: 0.2 }, startTime + 1.7) 
                .to(view, { y: "-8vh", scale: 0.5, duration: 0.5, ease: "power1.in" }, startTime + 2); 
    });
}

function setupTestimonialsCarousel() {
    const track = document.getElementById('tsTrack');
    const inner = document.getElementById('tsInner');
    const cards = Array.from(inner.querySelectorAll('.ts-card'));
    if (cards.length === 0) return;

    const btnPrev = document.getElementById('tsPrev');
    const btnNext = document.getElementById('tsNext');
    const dotsWrap = document.getElementById('tsDots');
    let index = 0;
    let autoplay = null;

    const visibleCount = () => window.innerWidth >= 768 ? 2 : 1;
    const pageCount = () => Math.max(1, Math.ceil(cards.length / visibleCount()));
    
    function goTo(i) {
        index = Math.max(0, Math.min(pageCount() - 1, i));
        const step = (cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(inner).gap)) * visibleCount();
        gsap.to(inner, { x: index * step * -1, duration: 0.55, ease: 'power2.out' });
        updateUI();
    }
    
    function updateUI() {
        const dots = Array.from(dotsWrap.children);
        dots.forEach((d, i) => d.setAttribute('aria-current', String(i === index)));

        const v = visibleCount();
        const start = index * v;
        const end = Math.min(start + v - 1, cards.length - 1);
        cards.forEach((el, i) => {
            const active = i >= start && i <= end;
            gsap.to(el, {
                scale: active ? 1 : 0.97,
                opacity: active ? 1 : 0.7,
                duration: 0.35, ease: 'power2.out'
            });
        });
        btnPrev?.classList.toggle('is-disabled', index <= 0);
        btnNext?.classList.toggle('is-disabled', index >= pageCount() - 1);
    }
    
    function startAutoplay() { stopAutoplay(); autoplay = setInterval(() => goTo((index + 1) % pageCount()), 4200); }
    function stopAutoplay() { if (autoplay) clearInterval(autoplay); }
    
    function build() {
        dotsWrap.innerHTML = Array.from({ length: pageCount() }, (_, i) => 
            `<button class="w-2.5 h-2.5 rounded-full bg-clean-border aria-[current=true]:bg-clean-text transition" aria-label="Ke halaman ${i + 1}"></button>`
        ).join('');
        dotsWrap.childNodes.forEach((b, i) => b.addEventListener('click', () => goTo(i)));
        goTo(0);
    }
    
    btnPrev?.addEventListener('click', () => goTo(index - 1));
    btnNext?.addEventListener('click', () => goTo(index + 1));
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
    window.addEventListener('resize', () => { gsap.set(inner, { x: 0 }); build(); });

    build();
    startAutoplay();
}

// =========================================================================
// === INISIALISASI HALAMAN UTAMA =========================================
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ambil semua data konten dari file data.json
    fetch('data.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);
            return response.json();
        })
        .then(data => {
            // 2. Gunakan data untuk membangun semua bagian dinamis dari halaman
            generateHeroGallery(data.heroGalleryCards);
            generateHorizontalCards(data.horizontalProducts);
            generateStackingSlides(data.stackingProducts);
            generateTestimonials(data.testimonials);

            // 3. Setelah SEMUA konten ada di halaman, jalankan semua fungsi setup animasi dan interaktivitas
            setupFloatingText();
            setupHeroScrollAnimation(); 
            setupCardScrolling(); 
            setupCardExpansion();
            setupCtaAnimation(); 
            setupNewStackingAnimation(); 
            setupTestimonialsCarousel();
        })
        .catch(error => {
            console.error('Gagal memuat atau memproses data.json:', error);
            document.body.innerHTML = `<div style="text-align: center; padding: 50px; font-family: sans-serif;"><h1>Error</h1><p>Gagal memuat konten produk. Silakan periksa file 'data.json' atau koneksi Anda.</p><p><small>Detail: ${error.message}</small></p></div>`;
        });
});
