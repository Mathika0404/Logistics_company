// =====================================
// SCROLLING NAVBAR
// =====================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =====================================
   PAGE PRELOADER
===================================== */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("pageLoader");

    if (!loader) return;

    setTimeout(function () {

        loader.classList.add("hide");

    }, 3000);

});



/* =========================================
   ABOUT LANDING
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const aboutSection =
            document.getElementById("aboutLanding");

        const slides =
            document.querySelectorAll(
                ".about-bg-slide"
            );


        /* -------------------------------------
           CHECK
        ------------------------------------- */

        if (!aboutSection) {

            console.log(
                "About section not found"
            );

            return;

        }


        if (slides.length === 0) {

            console.log(
                "About slides not found"
            );

            return;

        }


        /* -------------------------------------
           INITIAL
        ------------------------------------- */

        let currentSlide = 0;


        slides.forEach((slide, index) => {

            slide.classList.toggle(
                "active",
                index === 0
            );

        });


        /* -------------------------------------
           CONTENT ANIMATION
        ------------------------------------- */

        setTimeout(function () {

            aboutSection.classList.add(
                "about-visible"
            );

        }, 300);


        /* -------------------------------------
           BACKGROUND IMAGE SLIDER
        ------------------------------------- */

        setInterval(function () {

            /* Remove current */

            slides[currentSlide]
                .classList.remove("active");


            /* Next */

            currentSlide++;


            if (
                currentSlide >=
                slides.length
            ) {

                currentSlide = 0;

            }


            /* Show next */

            slides[currentSlide]
                .classList.add("active");


        }, 2500);

    }
);

/* =========================================
   LOGISTICS STORY SCROLL ANIMATION
========================================= */

const storySection =
    document.getElementById("logisticsStory");


if (storySection) {

    /* =====================================
       STORY OBSERVER
    ===================================== */

    const storyObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        storySection.classList.add(
                            "story-visible"
                        );

                        observer.unobserve(
                            storySection
                        );

                    }

                });

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );


    storyObserver.observe(storySection);


    /* =====================================
       IMAGE LOAD
    ===================================== */

    const storyImages =
        storySection.querySelectorAll(
            ".story-image img"
        );


    storyImages.forEach(image => {

        if (image.complete) {

            image.classList.add(
                "image-loaded"
            );

        } else {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "image-loaded"
                    );

                }
            );

        }

    });

}


/* =========================================
   LOGISTICS VISION SCROLL ANIMATION
========================================= */

const visionSection =
    document.getElementById("logisticsVision");


if (visionSection) {

    const visionObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        visionSection.classList.add(
                            "vision-visible"
                        );

                        observer.unobserve(
                            visionSection
                        );

                    }

                });

            },
            {
                threshold: 0.2,

                rootMargin:
                    "0px 0px -70px 0px"
            }
        );


    visionObserver.observe(visionSection);

}


/* =========================================
   LOGISTICS TEAM ANIMATION
========================================= */

const teamSection =
    document.getElementById("logisticsTeam");


if (teamSection) {

    const teamObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        teamSection.classList.add(
                            "team-visible"
                        );

                        observer.unobserve(
                            teamSection
                        );

                    }

                });

            },
            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );


    teamObserver.observe(teamSection);

}


/* =========================================
   NETWORK SECTION ANIMATION
========================================= */

const networkSection =
    document.getElementById("networkSection");


if (networkSection) {

    const networkObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        networkSection.classList.add(
                            "network-visible"
                        );

                        observer.unobserve(
                            networkSection
                        );

                    }

                });

            },
            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );


    networkObserver.observe(networkSection);

}

/* =========================================================
   LOGISTICS CULTURE SECTION ANIMATION
========================================================= */

const logisticsCulture =
    document.getElementById("logisticsCulture");

if (logisticsCulture) {

    const logisticsObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        logisticsCulture.classList.add(
                            "lc-visible"
                        );

                        observer.unobserve(
                            logisticsCulture
                        );
                    }

                });

            },
            {
                threshold: 0.18,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );

    logisticsObserver.observe(
        logisticsCulture
    );
}


/* =========================================================
   CARD HOVER MOVEMENT
========================================================= */

const logisticsCards =
    document.querySelectorAll(
        ".lc-card"
    );

logisticsCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        function (e) {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) /
                35;

            const rotateY =
                (centerX - x) /
                35;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.01)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform = "";
        }
    );
});


/* =========================================================
   ARROW BUTTON MICRO ANIMATION
========================================================= */

const lcArrows =
    document.querySelectorAll(
        ".lc-arrow"
    );

lcArrows.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            this.animate(
                [
                    {
                        transform:
                            "scale(1)"
                    },
                    {
                        transform:
                            "scale(.8) rotate(-8deg)"
                    },
                    {
                        transform:
                            "scale(1) rotate(0)"
                    }
                ],
                {
                    duration: 400,

                    easing:
                        "cubic-bezier(.22,1,.36,1)"
                }
            );

        }
    );
});


/* =========================================================
   PARALLAX IMAGE MOVEMENT
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const section =
            document.getElementById(
                "logisticsCulture"
            );

        if (!section) return;

        const rect =
            section.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        if (
            rect.bottom < 0 ||
            rect.top > windowHeight
        ) {
            return;
        }

        const progress =
            (windowHeight - rect.top) /
            (windowHeight + rect.height);

        const images =
            section.querySelectorAll(
                ".lc-image-wrap img"
            );

        images.forEach(
            (image, index) => {

                const movement =
                    (progress - .5) *
                    (index % 2 === 0
                        ? 18
                        : -18);

                image.style.setProperty(
                    "--parallax",
                    `${movement}px`
                );

            }
        );
    },
    {
        passive: true
    }
);

/* =========================================================
   LOGISTICS ACHIEVEMENTS SCROLL ANIMATION
========================================================= */

const logisticsAchievements =
    document.getElementById(
        "logisticsAchievements"
    );

if (logisticsAchievements) {

    const achievementObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        logisticsAchievements.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            logisticsAchievements
                        );

                    }

                });

            },
            {
                threshold: 0.2,

                rootMargin:
                    "0px 0px -80px 0px"
            }
        );

    achievementObserver.observe(
        logisticsAchievements
    );
}


/* =========================================================
   ICON HOVER MICRO EFFECT
========================================================= */

const achievementItems =
    document.querySelectorAll(
        ".achievement-item"
    );

achievementItems.forEach(item => {

    const icon =
        item.querySelector(
            ".achievement-icon"
        );

    item.addEventListener(
        "mouseenter",
        () => {

            if (!icon) return;

            icon.animate(
                [
                    {
                        transform:
                            "rotate(0deg) scale(1)"
                    },

                    {
                        transform:
                            "rotate(-12deg) scale(1.15)"
                    },

                    {
                        transform:
                            "rotate(6deg) scale(1.08)"
                    },

                    {
                        transform:
                            "rotate(0deg) scale(1)"
                    }
                ],
                {
                    duration: 550,

                    easing:
                        "cubic-bezier(.22,1,.36,1)"
                }
            );

        }
    );

});