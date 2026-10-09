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


            statsObserver.observe(
                statsSection
            );

        }, 3000);

    });

}

/* =========================================================
   BLOG HERO SLIDER
========================================================= */

const blogSlides =
    document.querySelectorAll(".blog-slide");

const blogCounter =
    document.querySelector(".blog-current");

const blogProgress =
    document.querySelector(".blog-progress span");

const blogHero =
    document.getElementById("blogHero");

let currentBlogSlide = 0;

const totalBlogSlides =
    blogSlides.length;


function changeBlogSlide(index) {

    if (!blogSlides.length) return;


    blogSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    blogSlides[index].classList.add("active");


    /* COUNTER */

    if (blogCounter) {

        blogCounter.textContent =
            String(index + 1).padStart(2, "0");

    }


    /* PROGRESS */

    if (blogProgress) {

        blogProgress.style.transition = "none";

        blogProgress.style.width = "0%";


        void blogProgress.offsetWidth;


        blogProgress.style.transition =
            "width 5s linear";

        blogProgress.style.width = "33.33%";
    }


    /* REPLAY TEXT ANIMATION */

    const content =
        document.querySelector(".blog-hero-content");

    if (content) {

        content.classList.remove(
            "blog-content-refresh"
        );

        void content.offsetWidth;

        content.classList.add(
            "blog-content-refresh"
        );

    }

}


/* =========================================================
   INITIAL SLIDE
========================================================= */

if (totalBlogSlides > 0) {

    blogSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    blogSlides[0].classList.add("active");


    if (blogCounter) {

        blogCounter.textContent = "01";

    }


    if (blogProgress) {

        blogProgress.style.width = "33.33%";

    }

}


/* =========================================================
   AUTO SLIDE
========================================================= */

if (totalBlogSlides > 1) {

    setInterval(function () {

        currentBlogSlide++;


        if (
            currentBlogSlide >=
            totalBlogSlides
        ) {

            currentBlogSlide = 0;

        }


        changeBlogSlide(
            currentBlogSlide
        );


    }, 5000);

}


/* =========================================================
   MOUSE PARALLAX
========================================================= */

if (blogHero) {

    blogHero.addEventListener(
        "mousemove",
        function (e) {

            const activeSlide =
                blogHero.querySelector(
                    ".blog-slide.active"
                );

            if (!activeSlide) return;


            const x =
                (e.clientX /
                    window.innerWidth -
                    0.5) * 12;


            const y =
                (e.clientY /
                    window.innerHeight -
                    0.5) * 8;


            activeSlide.style.marginLeft =
                `${x}px`;

            activeSlide.style.marginTop =
                `${y}px`;

        }
    );


    blogHero.addEventListener(
        "mouseleave",
        function () {

            const activeSlide =
                blogHero.querySelector(
                    ".blog-slide.active"
                );

            if (!activeSlide) return;


            activeSlide.style.marginLeft =
                "0px";

            activeSlide.style.marginTop =
                "0px";

        }
    );

}


/* =========================================================
   REFRESH TEXT ANIMATION
========================================================= */

const blogRefreshStyle =
    document.createElement("style");


blogRefreshStyle.innerHTML = `

.blog-content-refresh h1 {

    animation:
        blogHeadingReveal
        1s
        cubic-bezier(.16,1,.3,1)
        forwards;

}

.blog-content-refresh .blog-small-title {

    animation:
        blogTextReveal
        .7s
        ease
        forwards;

}

.blog-content-refresh .blog-meta {

    animation:
        blogTextReveal
        .7s
        .3s
        ease
        forwards;

}

`;


document.head.appendChild(
    blogRefreshStyle
);


/* =========================================================
   LOGISTICS FEATURE SECTION
========================================================= */

const logisticsFeature =
    document.getElementById("logisticsFeature");


if (logisticsFeature) {

    const featureObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsFeature.classList.add(
                            "feature-visible"
                        );

                        observer.unobserve(
                            logisticsFeature
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    featureObserver.observe(
        logisticsFeature
    );


    /* =====================================================
       IMAGE MOUSE PARALLAX
    ===================================================== */

    const featureImage =
        logisticsFeature.querySelector(
            ".feature-image img"
        );


    logisticsFeature.addEventListener(
        "mousemove",
        function (e) {

            if (!featureImage) return;


            const rect =
                logisticsFeature.getBoundingClientRect();


            const x =
                (e.clientX - rect.left)
                / rect.width
                - 0.5;


            const y =
                (e.clientY - rect.top)
                / rect.height
                - 0.5;


            featureImage.style.transform =
                `scale(1.05)
                 translate(${x * 12}px, ${y * 12}px)`;

        }
    );


    logisticsFeature.addEventListener(
        "mouseleave",
        function () {

            if (!featureImage) return;


            featureImage.style.transform =
                "scale(1.02)";

        }
    );

}


/* =========================================================
   404 BUTTON
========================================================= */

const featureReadBtn =
    document.getElementById(
        "featureReadBtn"
    );


if (featureReadBtn) {

    featureReadBtn.addEventListener(
        "click",
        function () {

            window.location.href =
                "404.html";

        }
    );

}

/* =========================================================
   LOGISTICS DISPATCHES
========================================================= */

const logisticsDispatches =
    document.getElementById(
        "logisticsDispatches"
    );


if (logisticsDispatches) {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const dispatchItems =
        logisticsDispatches.querySelectorAll(
            ".dispatch-item"
        );


    const dispatchObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "dispatch-show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    dispatchItems.forEach(function (item) {

        dispatchObserver.observe(item);

    });


    /* =====================================================
       FILTER SYSTEM
    ===================================================== */

    const filterButtons =
        logisticsDispatches.querySelectorAll(
            ".dispatch-filter"
        );


    filterButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const filter =
                    button.dataset.filter;


                /* ACTIVE BUTTON */

                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                /* FILTER CARDS */

                dispatchItems.forEach(
                    function (item) {

                        const category =
                            item.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            item.style.display =
                                "";

                            setTimeout(
                                function () {

                                    item.classList.add(
                                        "dispatch-show"
                                    );

                                },
                                50
                            );

                        } else {

                            item.style.display =
                                "none";

                        }

                    }
                );

            }
        );

    });


    /* =====================================================
       FEATURE IMAGE PARALLAX
    ===================================================== */

    const featureImage =
        logisticsDispatches.querySelector(
            ".dispatch-feature-image img"
        );


    const featureCard =
        logisticsDispatches.querySelector(
            ".dispatch-feature"
        );


    if (featureImage && featureCard) {

        featureCard.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    featureCard.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width
                    - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height
                    - .5;


                featureImage.style.transform =
                    `scale(1.05)
                     translate(${x * 10}px, ${y * 10}px)`;

            }
        );


        featureCard.addEventListener(
            "mouseleave",
            function () {

                featureImage.style.transform =
                    "scale(1.03)";

            }
        );

    }


    /* =====================================================
       SMALL CARD IMAGE PARALLAX
    ===================================================== */

    const smallCards =
        logisticsDispatches.querySelectorAll(
            ".dispatch-small-card"
        );


    smallCards.forEach(function (card) {

        const image =
            card.querySelector("img");


        if (!image) return;


        card.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width
                    - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height
                    - .5;


                image.style.transform =
                    `scale(1.04)
                     translate(${x * 7}px, ${y * 7}px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                image.style.transform =
                    "scale(1.02)";

            }
        );

    });


    /* =====================================================
       CYAN CARD MOUSE MOVEMENT
    ===================================================== */

    const cyanCard =
        logisticsDispatches.querySelector(
            ".dispatch-cyan-card"
        );


    if (cyanCard) {

        cyanCard.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    cyanCard.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width
                    - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height
                    - .5;


                cyanCard.style.transform =
                    `translate(
                        ${x * 5}px,
                        ${y * 5}px
                    )`;

            }
        );


        cyanCard.addEventListener(
            "mouseleave",
            function () {

                cyanCard.style.transform =
                    "translate(0,0)";

            }
        );

    }

}

/* =========================================================
   LOGISTICS INTELLIGENCE
========================================================= */

const logisticsIntelligence =
    document.getElementById(
        "logisticsIntelligence"
    );


if (logisticsIntelligence) {

    const intelligenceObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsIntelligence.classList.add(
                            "intelligence-visible"
                        );

                        observer.unobserve(
                            logisticsIntelligence
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    intelligenceObserver.observe(
        logisticsIntelligence
    );

}


/* =========================================================
   LOGISTICS NETWORK SIGNUP
========================================================= */

const logisticsNetworkSignup =
    document.getElementById(
        "logisticsNetworkSignup"
    );


if (logisticsNetworkSignup) {

    const signupObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsNetworkSignup.classList.add(
                            "signup-visible"
                        );

                        observer.unobserve(
                            logisticsNetworkSignup
                        );

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    signupObserver.observe(
        logisticsNetworkSignup
    );

}


/* =========================================================
   NEWSLETTER / EMAIL VALIDATION
========================================================= */

const logisticsEmail =
    document.getElementById(
        "logisticsEmail"
    );


const logisticsSubscribeBtn =
    document.getElementById(
        "logisticsSubscribeBtn"
    );


const signupMessage =
    document.getElementById(
        "signupMessage"
    );


if (
    logisticsEmail &&
    logisticsSubscribeBtn &&
    signupMessage
) {

    logisticsSubscribeBtn.addEventListener(
        "click",
        function () {

            const email =
                logisticsEmail.value.trim();


            if (email === "") {

                signupMessage.textContent =
                    "ENTER YOUR BUSINESS EMAIL.";

                signupMessage.style.color =
                    "#8b0000";

                logisticsEmail.focus();

                return;

            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                signupMessage.textContent =
                    "ENTER A VALID EMAIL ADDRESS.";

                signupMessage.style.color =
                    "#8b0000";

                return;

            }


            signupMessage.textContent =
                "NETWORK ACCESS REQUEST RECEIVED.";

            signupMessage.style.color =
                "#03090c";


            logisticsEmail.value = "";


            logisticsSubscribeBtn.style.transform =
                "translateX(8px)";


            setTimeout(function () {

                logisticsSubscribeBtn.style.transform =
                    "translateX(0)";

            }, 300);

        }
    );


    logisticsEmail.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                logisticsSubscribeBtn.click();

            }

        }
    );

}

/* =========================================================
   LIVE LOGISTICS PULSE
========================================================= */

const logisticsLivePulse =
    document.getElementById(
        "logisticsLivePulse"
    );


if (logisticsLivePulse) {


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const liveElements =
        logisticsLivePulse.querySelectorAll(
            ".live-left-column, .live-main-feature, .live-career-card, .live-dashboard-image"
        );


    liveElements.forEach(function (element, index) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(45px)";


        const observer =
            new IntersectionObserver(
                function (entries, obs) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.transition =
                                `opacity .8s ease ${index * .12}s,
                                 transform .9s cubic-bezier(.16,1,.3,1) ${index * .12}s`;

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";


                            obs.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: .15
                }
            );


        observer.observe(element);

    });


    /* =====================================================
       MAIN IMAGE PARALLAX
    ===================================================== */

    const mainImage =
        logisticsLivePulse.querySelector(
            ".live-main-image img"
        );


    const mainFeature =
        logisticsLivePulse.querySelector(
            ".live-main-feature"
        );


    if (mainImage && mainFeature) {

        mainFeature.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    mainFeature.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height - .5;


                mainImage.style.transform =
                    `scale(1.045)
                     translate(${x * 12}px, ${y * 12}px)`;

            }
        );


        mainFeature.addEventListener(
            "mouseleave",
            function () {

                mainImage.style.transform =
                    "scale(1.025)";

            }
        );

    }


    /* =====================================================
       LEFT IMAGE PARALLAX
    ===================================================== */

    const miniImage =
        logisticsLivePulse.querySelector(
            ".live-mini-image img"
        );


    const miniCard =
        logisticsLivePulse.querySelector(
            ".live-mini-image"
        );


    if (miniImage && miniCard) {

        miniCard.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    miniCard.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height - .5;


                miniImage.style.transform =
                    `scale(1.04)
                     translate(${x * 7}px, ${y * 7}px)`;

            }
        );


        miniCard.addEventListener(
            "mouseleave",
            function () {

                miniImage.style.transform =
                    "scale(1.02)";

            }
        );

    }


    /* =====================================================
       DASHBOARD IMAGE PARALLAX
    ===================================================== */

    const dashboardImage =
        logisticsLivePulse.querySelector(
            ".live-dashboard-image img"
        );


    const dashboardCard =
        logisticsLivePulse.querySelector(
            ".live-dashboard-image"
        );


    if (dashboardImage && dashboardCard) {

        dashboardCard.addEventListener(
            "mousemove",
            function (e) {

                const rect =
                    dashboardCard.getBoundingClientRect();


                const x =
                    (e.clientX - rect.left)
                    / rect.width - .5;


                const y =
                    (e.clientY - rect.top)
                    / rect.height - .5;


                dashboardImage.style.transform =
                    `scale(1.035)
                     translate(${x * 7}px, ${y * 7}px)`;

            }
        );


        dashboardCard.addEventListener(
            "mouseleave",
            function () {

                dashboardImage.style.transform =
                    "scale(1.02)";

            }
        );

    }

}


function subscribeTo404() {
    const emailField = document.getElementById("logisticsEmail");

    if (!emailField || emailField.value.trim() === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!emailField.checkValidity()) {
        alert("Please enter a valid email address.");
        return;
    }

    window.location.href = "./404.html";
}