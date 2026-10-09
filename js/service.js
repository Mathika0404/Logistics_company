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


// =========================================================
// STATS ANIMATION
// =========================================================

const statsSection =
    document.getElementById("statsSection");


if (statsSection) {

    window.addEventListener("load", function () {

        setTimeout(function () {

            const statsObserver =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(function (entry) {

                            if (entry.isIntersecting) {

                                if (
                                    typeof startStatsAnimation ===
                                    "function"
                                ) {

                                    startStatsAnimation();

                                }

                                statsObserver.unobserve(
                                    statsSection
                                );

                            }

                        });

                    },
                    {
                        threshold: 0.3
                    }
                );


            statsObserver.observe(statsSection);

        }, 3000);

    });

}


// =========================================================
// SERVICES BACKGROUND SLIDER
// =========================================================

const servicesSlides =
    document.querySelectorAll(
        ".services-slide"
    );


const servicesCurrent =
    document.querySelector(
        ".services-number.current"
    );


const servicesSlidesWrap =
    document.querySelector(
        ".services-slides"
    );


let currentServicesSlide = 0;

const servicesSlideDuration = 4500;


// =========================================================
// INITIAL SLIDE
// =========================================================

if (servicesSlides.length > 0) {

    servicesSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    servicesSlides[0].classList.add("active");


    if (servicesCurrent) {

        servicesCurrent.textContent = "01";

    }

}


// =========================================================
// CHANGE SERVICE SLIDE
// =========================================================

function changeServicesSlide(index) {

    if (!servicesSlides.length) return;


    servicesSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    servicesSlides[index].classList.add("active");


    // Update counter

    if (servicesCurrent) {

        servicesCurrent.textContent =
            String(index + 1).padStart(2, "0");

    }


    // Flash effect

    if (servicesSlidesWrap) {

        servicesSlidesWrap.classList.remove(
            "slide-change"
        );


        void servicesSlidesWrap.offsetWidth;


        servicesSlidesWrap.classList.add(
            "slide-change"
        );

    }

}


// =========================================================
// AUTOMATIC SLIDER
// =========================================================

if (servicesSlides.length > 1) {

    setInterval(function () {

        currentServicesSlide++;

        if (
            currentServicesSlide >=
            servicesSlides.length
        ) {

            currentServicesSlide = 0;

        }


        changeServicesSlide(
            currentServicesSlide
        );


    }, servicesSlideDuration);

}

/* =========================================================
   LOGISTICS CAPABILITY ANIMATION
========================================================= */

const capabilitySection =
    document.getElementById("logisticsCapability");


if (capabilitySection) {

    const capabilityObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        capabilitySection.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            capabilitySection
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    capabilityObserver.observe(
        capabilitySection
    );

}


/* =========================================================
   SERVICE ITEM INTERACTION
========================================================= */

const capabilityItems =
    document.querySelectorAll(
        ".capability-item"
    );


if (capabilityItems.length) {

    capabilityItems.forEach(function (item) {

        item.addEventListener(
            "mouseenter",
            function () {

                capabilityItems.forEach(
                    function (other) {

                        other.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add(
                    "active"
                );

            }
        );

    });

}

/* =========================================================
   FREIGHT SHOWCASE - SCROLL ANIMATION
========================================================= */
/* =========================================================
   FREIGHT SHOWCASE - REPEAT SCROLL ANIMATION
========================================================= */

const freightShowcase =
    document.getElementById("freightShowcase");


if (freightShowcase) {

    const freightObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /* START ANIMATION */

                        freightShowcase.classList.remove(
                            "freight-visible"
                        );

                        /* Force browser to restart animation */

                        void freightShowcase.offsetWidth;

                        /* Add animation class */

                        freightShowcase.classList.add(
                            "freight-visible"
                        );

                    } else {

                        /*
                         Remove class when section
                         leaves viewport.
                         So next time it enters,
                         animation starts again.
                        */

                        freightShowcase.classList.remove(
                            "freight-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    freightObserver.observe(
        freightShowcase
    );

}


/* =========================================================
   SCROLL REVEAL - ELEMENTS
========================================================= */

const freightElements = [

    ".freight-heading-wrap",
    ".freight-info-card",
    ".freight-small-image",
    ".freight-main-image",
    ".freight-stat"

];


freightElements.forEach(function (selector) {

    const elements =
        document.querySelectorAll(selector);


    elements.forEach(function (element, index) {

        /* INITIAL STATE */

        element.style.opacity = "0";

        element.style.transform =
            "translateY(60px)";


        element.style.transition =
            "opacity .9s cubic-bezier(.2,.8,.2,1), " +
            "transform .9s cubic-bezier(.2,.8,.2,1)";


        /* OBSERVER */

        const elementObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            setTimeout(function () {

                                element.style.opacity = "1";

                                element.style.transform =
                                    "translateY(0)";

                            }, index * 120);


                            observer.unobserve(
                                element
                            );

                        }

                    });

                },
                {
                    threshold: 0.15,

                    rootMargin:
                        "0px 0px -60px 0px"
                }
            );


        elementObserver.observe(
            element
        );

    });

});


/* =========================================================
   LOGISTICS SERVICES SCROLL ANIMATION
========================================================= */

const logisticsServices =
    document.getElementById("logisticsServices");


if (logisticsServices) {

    const servicesObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /*
                         Reset
                        */

                        logisticsServices.classList.remove(
                            "is-visible"
                        );


                        /*
                         Force animation restart
                        */

                        void logisticsServices.offsetWidth;


                        /*
                         Play
                        */

                        logisticsServices.classList.add(
                            "is-visible"
                        );

                    } else {

                        /*
                         Reset when leaving
                        */

                        logisticsServices.classList.remove(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    servicesObserver.observe(
        logisticsServices
    );

}


/* =========================================================
   SERVICE IMAGE SWITCH
========================================================= */

const serviceRows =
    document.querySelectorAll(
        ".service-row"
    );

const previewImage =
    document.querySelector(
        ".preview-image"
    );

const previewNumber =
    document.querySelector(
        ".preview-number"
    );


if (
    serviceRows.length &&
    previewImage
) {

    serviceRows.forEach(function (row) {

        row.addEventListener(
            "mouseenter",
            function () {

                serviceRows.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                row.classList.add(
                    "active"
                );


                const image =
                    row.dataset.image;


                if (image) {

                    previewImage.style.opacity =
                        "0";


                    setTimeout(function () {

                        previewImage.style.backgroundImage =
                            `url("${image}")`;

                        previewImage.style.opacity =
                            "1";

                    }, 180);

                }


                if (previewNumber) {

                    const number =
                        row.querySelector(
                            ".service-row-number"
                        );

                    if (number) {

                        previewNumber.textContent =
                            number.textContent.trim();

                    }

                }

            }
        );

    });

}

/* =========================================================
   SMART WAREHOUSE - REPEAT SCROLL ANIMATION
========================================================= */

const warehouseService =
    document.getElementById("warehouseService");


if (warehouseService) {

    const warehouseObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /* RESET */

                        warehouseService.classList.remove(
                            "is-visible"
                        );


                        /* FORCE RESTART */

                        void warehouseService.offsetWidth;


                        /* START */

                        warehouseService.classList.add(
                            "is-visible"
                        );

                    } else {

                        /* RESET AFTER LEAVING */

                        warehouseService.classList.remove(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    warehouseObserver.observe(
        warehouseService
    );

}


/* =========================================================
   FEATURE HOVER
========================================================= */

const warehouseFeatures =
    document.querySelectorAll(
        ".warehouse-feature"
    );


warehouseFeatures.forEach(function (feature) {

    feature.addEventListener(
        "mouseenter",
        function () {

            warehouseFeatures.forEach(
                function (item) {

                    item.classList.remove(
                        "feature-active"
                    );

                }
            );


            feature.classList.add(
                "feature-active"
            );

        }
    );

});


/* =========================================================
   ROUTE INTELLIGENCE - REPEAT SCROLL ANIMATION
========================================================= */

const routeIntelligence =
    document.getElementById("routeIntelligence");


if (routeIntelligence) {

    const routeObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /*
                         RESET
                        */

                        routeIntelligence.classList.remove(
                            "is-visible"
                        );


                        /*
                         FORCE RESTART
                        */

                        void routeIntelligence.offsetWidth;


                        /*
                         START
                        */

                        routeIntelligence.classList.add(
                            "is-visible"
                        );

                    } else {

                        /*
                         RESET AFTER LEAVING
                        */

                        routeIntelligence.classList.remove(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    routeObserver.observe(
        routeIntelligence
    );

}


/* =========================================================
   LIVE COUNTERS
========================================================= */

function animateRouteCounters() {

    const counters =
        routeIntelligence.querySelectorAll(
            ".route-counter"
        );


    counters.forEach(function (counter) {

        const target =
            parseFloat(
                counter.dataset.target
            );

        const isDecimal =
            target % 1 !== 0;

        let start = 0;

        const duration = 1400;

        const startTime =
            performance.now();


        function updateCounter(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const value =
                target * eased;


            if (isDecimal) {

                counter.textContent =
                    value.toFixed(1) + "%";

            } else {

                counter.textContent =
                    Math.floor(value);

                if (
                    counter.parentElement
                    .querySelector("span")
                    .textContent
                    .includes("UTILIZATION")
                ) {

                    counter.textContent += "%";

                }

            }


            if (progress < 1) {

                requestAnimationFrame(
                    updateCounter
                );

            }

        }


        requestAnimationFrame(
            updateCounter
        );

    });

}


/* =========================================================
   START COUNTERS WHEN SECTION ENTERS
========================================================= */

if (routeIntelligence) {

    const counterObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        setTimeout(
                            function () {

                                animateRouteCounters();

                            },
                            1100
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    counterObserver.observe(
        routeIntelligence
    );

}

/* =========================================================
   SPECIAL LOGISTICS - REPEAT SCROLL ANIMATION
========================================================= */

const specialLogistics =
    document.getElementById("specialLogistics");


if (specialLogistics) {

    const specialObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        /* RESET */

                        specialLogistics.classList.remove(
                            "is-visible"
                        );


                        /* FORCE RESTART */

                        void specialLogistics.offsetWidth;


                        /* PLAY */

                        specialLogistics.classList.add(
                            "is-visible"
                        );

                    } else {

                        /* RESET AFTER LEAVING */

                        specialLogistics.classList.remove(
                            "is-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    specialObserver.observe(
        specialLogistics
    );

}