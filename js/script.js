/* =========================================================
   STACKLY LOGISTICS
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR SCROLL
========================================================= */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn =
    document.getElementById("menu-btn");

const navLinks =
    document.getElementById("nav-links");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");

            menuBtn.classList.toggle("active");

        }
    );

}


/* =========================================
   STACKLY PAGE LOADER
========================================= */

(function () {
    const loader = document.getElementById("pageLoader");

    if (!loader) return;

    let loaderHidden = false;

    function hideLoader() {
        if (loaderHidden) return;

        loaderHidden = true;
        loader.classList.add("hide");

        setTimeout(function () {
            loader.style.display = "none";
        }, 750);
    }

    // Hide loader when page resources finish loading
    if (document.readyState === "complete") {
        setTimeout(hideLoader, 500);
    } else {
        window.addEventListener("load", function () {
            setTimeout(hideLoader, 500);
        }, { once: true });
    }

    // Fallback: don't keep loader visible for too long
    setTimeout(hideLoader, 2500);

})();


/* =========================================================
   ENGINE / IMAGE CONTENT SLIDER
========================================================= */

const imageCards =
    document.querySelectorAll(".image-card");

const contentSlides =
    document.querySelectorAll(".content-slide");

const totalSlides =
    contentSlides.length;

let currentSlide = 0;


function showSlide(index) {

    if (!totalSlides) return;


    currentSlide =
        (index + totalSlides) %
        totalSlides;


    /* -----------------------------------------
       IMAGE BOXES
    ----------------------------------------- */

    imageCards.forEach(function (card) {

        const images =
            card.querySelectorAll(".engine-img");


        images.forEach(function (image, imageIndex) {

            image.classList.toggle(
                "active",
                imageIndex === currentSlide
            );

        });

    });


    /* -----------------------------------------
       CONTENT SLIDES
    ----------------------------------------- */

    contentSlides.forEach(
        function (slide, slideIndex) {

            slide.classList.toggle(
                "active",
                slideIndex === currentSlide
            );

        }
    );

}


/* INITIAL */

if (totalSlides > 0) {

    showSlide(0);

}


/* AUTO SLIDE */

let autoSlide;


if (totalSlides > 1) {

    autoSlide =
        setInterval(function () {

            showSlide(
                currentSlide + 1
            );

        }, 5000);

}


/* RESET TIMER */

function resetTimer() {

    if (!totalSlides) return;

    clearInterval(autoSlide);

    autoSlide =
        setInterval(function () {

            showSlide(
                currentSlide + 1
            );

        }, 5000);

}


/* IMAGE CARD CONTROLS */

imageCards.forEach(function (card) {

    const prev =
        card.querySelector(".prev");

    const next =
        card.querySelector(".next");


    if (prev) {

        prev.addEventListener(
            "click",
            function () {

                showSlide(
                    currentSlide - 1
                );

                resetTimer();

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            function () {

                showSlide(
                    currentSlide + 1
                );

                resetTimer();

            }
        );

    }

});


/* CONTENT CONTROLS */

const contentPrev =
    document.querySelector(".content-prev");

const contentNext =
    document.querySelector(".content-next");


if (contentPrev) {

    contentPrev.addEventListener(
        "click",
        function () {

            showSlide(
                currentSlide - 1
            );

            resetTimer();

        }
    );

}


if (contentNext) {

    contentNext.addEventListener(
        "click",
        function () {

            showSlide(
                currentSlide + 1
            );

            resetTimer();

        }
    );

}


/* =========================================================
   LIVE SHIPMENT COUNTER
========================================================= */

const shipmentCount =
    document.getElementById(
        "shipmentCount"
    );

let shipments = 142809;


if (shipmentCount) {

    shipmentCount.textContent =
        shipments.toLocaleString("en-US");


    setInterval(function () {

        shipments +=
            Math.floor(
                Math.random() * 20
            ) + 1;


        shipmentCount.textContent =
            shipments.toLocaleString("en-US");

    }, 3000);

}


/* =========================================================
   JOURNAL CARD CLICK
========================================================= */

document
    .querySelectorAll(".journal-card")
    .forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                card.classList.add(
                    "journal-active"
                );


                setTimeout(function () {

                    card.classList.remove(
                        "journal-active"
                    );

                }, 300);

            }
        );

    });


/* =========================================================
   SUBSCRIBE FORM
========================================================= */

const subscribeForm =
    document.getElementById(
        "subscribeForm"
    );

const emailInput =
    document.getElementById(
        "emailInput"
    );

const emailError =
    document.getElementById(
        "emailError"
    );


if (
    subscribeForm &&
    emailInput
) {

    subscribeForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const email =
                emailInput.value.trim();


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                if (emailError) {

                    emailError.textContent =
                        "Please enter a valid email address.";

                }

                emailInput.focus();

                return;

            }


            if (emailError) {

                emailError.textContent = "";

            }


            window.location.href =
                "404.html";

        }
    );

}


/* =========================================================
   =========================================================
   ADVANCED LOGISTICS HERO
   =========================================================
   ========================================================= */

const heroSlides =
    document.querySelectorAll(
        ".hero-slide"
    );

const heroImg =
    document.querySelector(
        ".hero-image img"
    );

const logisticsHero =
    document.querySelector(
        ".logistics-hero"
    );


/* HERO IMAGES */

const heroImages = [

    "./images/ocean2.jpg",

    "./images/ship.jpg",

    "./images/trucking.jpg",

    "./images/warehouse.jpg",

    "./images/aero1.jpg"

];


let heroIndex = 0;

let heroTimer = null;


/* =========================================================
   PRELOAD HERO IMAGES
========================================================= */

heroImages.forEach(function (src) {

    const image =
        new Image();

    image.src = src;

});


/* =========================================================
   SHOW HERO
========================================================= */

function showHero(index) {

    if (
        !heroSlides.length ||
        !heroImg
    ) {

        return;

    }


    /* -----------------------------------------
       NORMALIZE INDEX
    ----------------------------------------- */

    heroIndex =
        (
            index +
            heroImages.length
        ) %
        heroImages.length;


    /* -----------------------------------------
       REMOVE ALL TEXT ACTIVE
    ----------------------------------------- */

    heroSlides.forEach(
        function (slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    /* -----------------------------------------
       FORCE CSS ANIMATION RESTART
    ----------------------------------------- */

    void document.body.offsetWidth;


    /* -----------------------------------------
       CURRENT TEXT SLIDE
    ----------------------------------------- */

    const textIndex =
        heroIndex %
        heroSlides.length;


    if (heroSlides[textIndex]) {

        heroSlides[textIndex]
            .classList
            .add("active");

    }


    /* -----------------------------------------
       IMAGE CONTAINER
    ----------------------------------------- */

    const imageContainer =
        document.querySelector(
            ".hero-image"
        );


    if (imageContainer) {

        imageContainer.classList.add(
            "image-changing"
        );

    }


    /* -----------------------------------------
       FADE OUT
    ----------------------------------------- */

    heroImg.style.opacity = "0";


    /* -----------------------------------------
       CHANGE IMAGE
    ----------------------------------------- */

    setTimeout(function () {

        heroImg.src =
            heroImages[heroIndex];


        heroImg.onload =
            function () {

                heroImg.style.opacity =
                    "1";


                if (imageContainer) {

                    imageContainer.classList.remove(
                        "image-changing"
                    );

                }

            };


    }, 400);

}


/* =========================================================
   INITIAL HERO
========================================================= */

if (
    heroSlides.length &&
    heroImg
) {

    showHero(0);

}


/* =========================================================
   HERO AUTO SLIDER
========================================================= */

function startHeroSlider() {

    if (
        heroSlides.length <= 1 ||
        !heroImg
    ) {

        return;

    }


    clearInterval(heroTimer);


    heroTimer =
        setInterval(function () {

            heroIndex++;


            if (
                heroIndex >=
                heroImages.length
            ) {

                heroIndex = 0;

            }


            showHero(heroIndex);

        }, 5000);

}


startHeroSlider();


/* =========================================================
   HERO SCROLL ANIMATION
   REPLAYS EVERY TIME
========================================================= */

if (logisticsHero) {

    const heroObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            /* --------------------------------
                               RESET
                            -------------------------------- */

                            logisticsHero
                                .classList
                                .remove(
                                    "scroll-active"
                                );


                            /* --------------------------------
                               FORCE RESTART
                            -------------------------------- */

                            void logisticsHero
                                .offsetWidth;


                            /* --------------------------------
                               START
                            -------------------------------- */

                            logisticsHero
                                .classList
                                .add(
                                    "scroll-active"
                                );


                            /* --------------------------------
                               RESTART CURRENT TEXT
                            -------------------------------- */

                            heroSlides.forEach(
                                function (slide) {

                                    slide.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            void logisticsHero
                                .offsetWidth;


                            const currentText =
                                heroIndex %
                                heroSlides.length;


                            if (
                                heroSlides[currentText]
                            ) {

                                heroSlides[currentText]
                                    .classList
                                    .add("active");

                            }

                        } else {

                            /* --------------------------------
                               RESET WHEN LEAVING
                            -------------------------------- */

                            logisticsHero
                                .classList
                                .remove(
                                    "scroll-active"
                                );

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    heroObserver.observe(
        logisticsHero
    );

}


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

if (logisticsHero) {

    const heroParallaxImage =
        document.querySelector(
            ".hero-image img"
        );


    logisticsHero.addEventListener(
        "mousemove",
        function (event) {

            if (!heroParallaxImage) {
                return;
            }


            const rect =
                logisticsHero
                    .getBoundingClientRect();


            const mouseX =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width -
                0.5;


            const mouseY =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height -
                0.5;


            const moveX =
                mouseX * 12;


            const moveY =
                mouseY * 8;


            heroParallaxImage.style.transform =
                `
                scale(1.08)
                translate(
                    ${moveX}px,
                    ${moveY}px
                )
                `;

        }
    );


    logisticsHero.addEventListener(
        "mouseleave",
        function () {

            if (!heroParallaxImage) {
                return;
            }


            heroParallaxImage.style.transform =
                "scale(1.08)";

        }
    );

}


/* =========================================================
   =========================================================
   STATS NUMBER COUNTER
   =========================================================
   ========================================================= */

const statsSection =
    document.querySelector(
        ".stats-section"
    );

const statNumbers =
    document.querySelectorAll(
        ".stat-item h2"
    );


let statsStarted = false;


/* =========================================================
   COUNTER
========================================================= */

function animateCounter(
    element,
    target,
    suffix = ""
) {

    if (!element) return;


    const duration = 4000;

    const startTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) / duration,
                1
            );


        const easeOut =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const currentValue =
            target *
            easeOut;


        if (
            target % 1 !== 0
        ) {

            element.innerHTML =
                currentValue.toFixed(1) +
                `<span>${suffix}</span>`;

        } else {

            element.innerHTML =
                Math.floor(
                    currentValue
                ).toLocaleString() +
                `<span>${suffix}</span>`;

        }


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        } else {

            if (
                target % 1 !== 0
            ) {

                element.innerHTML =
                    target.toFixed(1) +
                    `<span>${suffix}</span>`;

            } else {

                element.innerHTML =
                    target.toLocaleString() +
                    `<span>${suffix}</span>`;

            }

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}


/* =========================================================
   START STATS
========================================================= */

function startStatsAnimation() {

    if (
        statsStarted ||
        !statsSection
    ) {

        return;

    }


    statsStarted = true;


    statsSection.classList.add(
        "stats-visible"
    );


    if (statNumbers[0]) {

        animateCounter(
            statNumbers[0],
            480,
            "K"
        );

    }


    if (statNumbers[1]) {

        animateCounter(
            statNumbers[1],
            122,
            ""
        );

    }


    if (statNumbers[2]) {

        animateCounter(
            statNumbers[2],
            99.8,
            ""
        );

    }


    if (statNumbers[3]) {

        animateCounter(
            statNumbers[3],
            2.4,
            "B"
        );

    }

}


/* =========================================================
   STATS SCROLL OBSERVER
========================================================= */

if (statsSection) {

    const statsObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            setTimeout(
                                function () {

                                    startStatsAnimation();

                                },
                                300
                            );


                            observer.unobserve(
                                statsSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.3
            }
        );


    statsObserver.observe(
        statsSection
    );

}


/* =========================================================
   =========================================================
   GLOBAL LOGISTICS MAP
   =========================================================
   ========================================================= */

const mapSection =
    document.querySelector(
        ".global-logistics-section"
    );

const mapWrapper =
    document.querySelector(
        ".map-wrapper"
    );


/* =========================================================
   MAP SCROLL
========================================================= */

if (mapSection) {

    const mapObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            setTimeout(
                                function () {

                                    mapSection
                                        .classList
                                        .add(
                                            "logistics-visible"
                                        );

                                },
                                500
                            );


                            observer.unobserve(
                                mapSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    mapObserver.observe(
        mapSection
    );

}


/* =========================================================
   MOVING ROUTE PARTICLES
========================================================= */

if (mapWrapper) {

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "route-particle";


        particle.style.left =
            (
                Math.random() * 80 +
                8
            ) + "%";


        particle.style.top =
            (
                Math.random() * 55 +
                20
            ) + "%";


        particle.style.animationDelay =
            (
                Math.random() * 4
            ) + "s";


        mapWrapper.appendChild(
            particle
        );

    }

}


/* =========================================================
   =========================================================
   ENGINE SECTION
   =========================================================
   ========================================================= */

const engineSection =
    document.querySelector(
        ".engine-section"
    );


if (engineSection) {

    const engineObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            engineSection
                                .classList
                                .add(
                                    "engine-visible"
                                );


                            observer.unobserve(
                                engineSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.20
            }
        );


    engineObserver.observe(
        engineSection
    );

}


/* =========================================================
   VORTEX SECTION
   REPLAY ANIMATION EVERY TIME ON SCROLL
========================================================= */

const vortexSection =
    document.querySelector(".vortex-section");


if (vortexSection) {

    const vortexObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /* remove */

                        vortexSection.classList.remove(
                            "vortex-visible"
                        );


                        /* force CSS restart */

                        void vortexSection.offsetWidth;


                        /* add again */

                        vortexSection.classList.add(
                            "vortex-visible"
                        );

                    } else {

                        /* reset */

                        vortexSection.classList.remove(
                            "vortex-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.22
            }
        );


    vortexObserver.observe(
        vortexSection
    );

}


/* =========================================================
   =========================================================
   PARTNERS SECTION
   =========================================================
   ========================================================= */

const partnersSection =
    document.querySelector(
        ".partners-section"
    );


if (partnersSection) {

    const partnersObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            partnersSection
                                .classList
                                .add(
                                    "partners-visible"
                                );


                            observer.unobserve(
                                partnersSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.20
            }
        );


    partnersObserver.observe(
        partnersSection
    );

}


/* =========================================================
   =========================================================
   SUSTAINABILITY SECTION
   =========================================================
   ========================================================= */

const sustainSection =
    document.querySelector(
        ".sustainability-section"
    );


if (sustainSection) {

    const sustainObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            sustainSection
                                .classList
                                .add(
                                    "sustain-visible"
                                );


                            observer.unobserve(
                                sustainSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.20
            }
        );


    sustainObserver.observe(
        sustainSection
    );

}


/* =========================================================
   =========================================================
   JOURNAL SECTION
   =========================================================
   ========================================================= */

const journalSection =
    document.querySelector(
        ".journal-section"
    );


if (journalSection) {

    const journalObserver =
        new IntersectionObserver(
            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            journalSection
                                .classList
                                .add(
                                    "is-visible"
                                );


                            observer.unobserve(
                                journalSection
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );


    journalObserver.observe(
        journalSection
    );

}


/* =========================================================
   END
========================================================= */