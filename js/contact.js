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


/* =====================================
   STATS ANIMATION
===================================== */

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
   LOGISTICS HERO IMAGE SLIDER
========================================================= */

const heroSlides =
    document.querySelectorAll(
        ".hero-slide"
    );

const heroCounter =
    document.querySelector(
        ".hero-current"
    );

const heroSlidesContainer =
    document.querySelector(
        ".hero-slides"
    );

let currentHeroSlide = 0;

const totalHeroSlides =
    heroSlides.length;



/* =========================================================
   CHECK HERO SLIDES
========================================================= */

if (totalHeroSlides > 0) {

    /* Remove active from all */

    heroSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    /* First image active */

    heroSlides[0].classList.add("active");


    /* Initial counter */

    if (heroCounter) {

        heroCounter.textContent = "01";

    }

}



/* =========================================================
   CHANGE HERO SLIDE
========================================================= */

function changeHeroSlide(index) {

    if (!heroSlides.length) return;


    /* Remove active */

    heroSlides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    /* Add active to selected image */

    heroSlides[index].classList.add(
        "active"
    );


    /* Update counter */

    if (heroCounter) {

        heroCounter.textContent =
            String(index + 1).padStart(
                2,
                "0"
            );

    }


    /* Flash effect */

    if (heroSlidesContainer) {

        heroSlidesContainer.classList.remove(
            "slide-flash"
        );


        /* Restart animation */

        void heroSlidesContainer.offsetWidth;


        heroSlidesContainer.classList.add(
            "slide-flash"
        );

    }

}



/* =========================================================
   AUTOMATIC HERO SLIDER
========================================================= */

if (totalHeroSlides > 1) {

    setInterval(function () {

        currentHeroSlide++;

        if (
            currentHeroSlide >=
            totalHeroSlides
        ) {

            currentHeroSlide = 0;

        }


        changeHeroSlide(
            currentHeroSlide
        );

    }, 2500);

}



/* =========================================================
   SCROLL TO NEXT SECTION
========================================================= */

const heroScrollBtn =
    document.getElementById(
        "heroScrollBtn"
    );

const nextSection =
    document.getElementById(
        "logisticsNextSection"
    );


if (
    heroScrollBtn &&
    nextSection
) {

    heroScrollBtn.addEventListener(
        "click",
        function () {

            nextSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

}



/* =========================================================
   MOUSE PARALLAX
========================================================= */

const logisticsHero =
    document.getElementById(
        "logisticsHero"
    );


if (logisticsHero) {

    logisticsHero.addEventListener(
        "mousemove",
        function (e) {

            const activeSlide =
                logisticsHero.querySelector(
                    ".hero-slide.active"
                );


            if (!activeSlide) return;


            const x =
                (e.clientX /
                    window.innerWidth -
                    0.5) * 8;

            const y =
                (e.clientY /
                    window.innerHeight -
                    0.5) * 5;


            activeSlide.style.marginLeft =
                `${x}px`;

            activeSlide.style.marginTop =
                `${y}px`;

        }
    );


    logisticsHero.addEventListener(
        "mouseleave",
        function () {

            const activeSlide =
                logisticsHero.querySelector(
                    ".hero-slide.active"
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
   LOGISTICS CONTACT SECTION ANIMATION
========================================================= */

const logisticsContact =
    document.getElementById(
        "logisticsContact"
    );


if (logisticsContact) {

    const contactObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsContact.classList.add(
                            "contact-visible"
                        );

                        observer.unobserve(
                            logisticsContact
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


    contactObserver.observe(
        logisticsContact
    );

}



/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

const contactForm =
    document.getElementById(
        "logisticsContactForm"
    );


const contactSuccess =
    document.getElementById(
        "contactSuccess"
    );


if (contactForm) {

    const nameField =
        document.getElementById(
            "contactName"
        );

    const emailField =
        document.getElementById(
            "contactEmail"
        );

    const subjectField =
        document.getElementById(
            "contactSubject"
        );

    const messageField =
        document.getElementById(
            "contactMessage"
        );


    const fields = [
        nameField,
        emailField,
        subjectField,
        messageField
    ];


    /* =====================================================
       VALIDATE SINGLE FIELD
    ===================================================== */

    function validateField(field) {

        if (!field) return false;


        const wrapper =
            field.closest(
                ".contact-field"
            );


        if (!wrapper) return false;


        const value =
            field.value.trim();


        let valid = true;


        /* NAME */

        if (
            field.id ===
            "contactName"
        ) {

            if (value.length < 2) {

                valid = false;
            }

        }


        /* EMAIL */

        if (
            field.id ===
            "contactEmail"
        ) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailPattern.test(
                    value
                )
            ) {

                valid = false;
            }

        }


        /* SUBJECT */

        if (
            field.id ===
            "contactSubject"
        ) {

            if (
                value.length < 3
            ) {

                valid = false;
            }

        }


        /* MESSAGE */

        if (
            field.id ===
            "contactMessage"
        ) {

            if (
                value.length < 10
            ) {

                valid = false;
            }

        }


        if (valid) {

            wrapper.classList.remove(
                "has-error"
            );

            wrapper.classList.add(
                "valid"
            );

        } else {

            wrapper.classList.remove(
                "valid"
            );

            wrapper.classList.add(
                "has-error"
            );

        }


        return valid;
    }



    /* =====================================================
       REAL-TIME VALIDATION
    ===================================================== */

    fields.forEach(function (field) {

        if (!field) return;


        field.addEventListener(
            "blur",
            function () {

                validateField(
                    field
                );

            }
        );


        field.addEventListener(
            "input",
            function () {

                const wrapper =
                    field.closest(
                        ".contact-field"
                    );


                if (
                    wrapper &&
                    wrapper.classList.contains(
                        "has-error"
                    )
                ) {

                    validateField(
                        field
                    );

                }

            }
        );

    });



    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            let formValid = true;

            let firstInvalid = null;


            fields.forEach(function (field) {

                if (!field) return;


                const valid =
                    validateField(
                        field
                    );


                if (!valid) {

                    formValid = false;


                    if (!firstInvalid) {

                        firstInvalid =
                            field;
                    }

                }

            });


            /* =============================================
               INVALID FORM
            ============================================= */

            if (!formValid) {

                const submitButton =
                    contactForm.querySelector(
                        ".contact-submit"
                    );


                if (submitButton) {

                    submitButton.classList.remove(
                        "submit-error"
                    );


                    void submitButton.offsetWidth;


                    submitButton.classList.add(
                        "submit-error"
                    );

                }


                if (firstInvalid) {

                    firstInvalid.focus();

                }


                return;

            }


            /* =============================================
               SUCCESS
            ============================================= */

            if (contactSuccess) {

                contactSuccess.classList.add(
                    "show"
                );

            }


            const submitButton =
                contactForm.querySelector(
                    ".contact-submit"
                );


            if (submitButton) {

                submitButton.innerHTML = `
                    <span>TRANSMISSION SENT</span>
                    <i class="ri-checkbox-circle-line"></i>
                `;

                submitButton.style.background =
                    "#fff";

                submitButton.style.color =
                    "#000";

                submitButton.disabled =
                    true;

            }


            /* =============================================
               RESET AFTER SUCCESS
            ============================================= */

            setTimeout(function () {

                contactForm.reset();


                fields.forEach(function (field) {

                    if (!field) return;


                    const wrapper =
                        field.closest(
                            ".contact-field"
                        );


                    if (wrapper) {

                        wrapper.classList.remove(
                            "valid",
                            "has-error"
                        );

                    }

                });


                if (contactSuccess) {

                    contactSuccess.classList.remove(
                        "show"
                    );

                }


                if (submitButton) {

                    submitButton.innerHTML = `
                        <span>SEND TRANSMISSION</span>
                        <i class="ri-arrow-right-up-line"></i>
                    `;

                    submitButton.style.background =
                        "";

                    submitButton.style.color =
                        "";

                    submitButton.disabled =
                        false;

                }
                window.location.href = "./404.html";

            }, 1500);

        }
    );

}

/* =========================================================
   LOGISTICS NETWORK NODES
   SCROLL ANIMATION
========================================================= */

const logisticsNodes =
    document.getElementById(
        "logisticsNodes"
    );


if (logisticsNodes) {

    const nodesObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsNodes.classList.add(
                            "nodes-visible"
                        );

                        observer.unobserve(
                            logisticsNodes
                        );

                    }

                });

            },
            {
                threshold: 0.18,

                rootMargin:
                    "0px 0px -70px 0px"
            }
        );


    nodesObserver.observe(
        logisticsNodes
    );

}


/* =========================================================
   NODE ARROW MICRO ANIMATION
========================================================= */

const nodeArrows =
    document.querySelectorAll(
        ".node-arrow"
    );


nodeArrows.forEach(function (arrow) {

    arrow.addEventListener(
        "click",
        function () {

            this.animate(
                [
                    {
                        transform:
                            "translateX(0)"
                    },

                    {
                        transform:
                            "translateX(8px)"
                    },

                    {
                        transform:
                            "translateX(3px)"
                    },

                    {
                        transform:
                            "translateX(6px)"
                    }
                ],
                {
                    duration: 450,

                    easing:
                        "cubic-bezier(.22,1,.36,1)"
                }
            );

        }
    );

});


/* =========================================================
   CARD MOUSE TILT
========================================================= */

const nodeCards =
    document.querySelectorAll(
        ".node-card"
    );


nodeCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (e) {

            if (
                window.innerWidth <=
                700
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                e.clientX -
                rect.left;


            const y =
                e.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (y - centerY) /
                45;


            const rotateY =
                (centerX - x) /
                45;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)
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
   LOGISTICS FAQ
   SCROLL + ACCORDION
========================================================= */

const logisticsFaq =
    document.getElementById(
        "logisticsFaq"
    );


/* =========================================================
   SCROLL REVEAL
========================================================= */

if (logisticsFaq) {

    const faqObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsFaq.classList.add(
                            "faq-visible"
                        );

                        observer.unobserve(
                            logisticsFaq
                        );

                    }

                });

            },
            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -70px 0px"
            }
        );


    faqObserver.observe(
        logisticsFaq
    );

}


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(function (item) {

    const question =
        item.querySelector(
            ".faq-question"
        );


    if (!question) return;


    question.addEventListener(
        "click",
        function () {

            const isActive =
                item.classList.contains(
                    "active"
                );


            /* Close all other items */

            faqItems.forEach(function (otherItem) {

                if (
                    otherItem !== item
                ) {

                    otherItem.classList.remove(
                        "active"
                    );


                    const otherButton =
                        otherItem.querySelector(
                            ".faq-question"
                        );


                    if (otherButton) {

                        otherButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }

            });


            /* Toggle current */

            if (isActive) {

                item.classList.remove(
                    "active"
                );

                question.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                item.classList.add(
                    "active"
                );

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});

/* =========================================================
   LOGISTICS PARTNERSHIP SECTION
   SCROLL REVEAL
========================================================= */

const logisticsPartner =
    document.getElementById(
        "logisticsPartner"
    );


if (logisticsPartner) {

    const partnerObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsPartner.classList.add(
                            "partner-visible"
                        );

                        observer.unobserve(
                            logisticsPartner
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


    partnerObserver.observe(
        logisticsPartner
    );

}


/* =========================================================
   BACKGROUND IMAGE MOUSE PARALLAX
========================================================= */

if (logisticsPartner) {

    const partnerImage =
        logisticsPartner.querySelector(
            ".partner-bg img"
        );


    logisticsPartner.addEventListener(
        "mousemove",
        function (e) {

            if (
                window.innerWidth <=
                700
            ) {
                return;
            }


            if (!partnerImage) return;


            const x =
                (e.clientX /
                    window.innerWidth -
                    0.5) * 14;

            const y =
                (e.clientY /
                    window.innerHeight -
                    0.5) * 8;


            partnerImage.style.transform =
                `scale(1.03)
                 translate(${x}px, ${y}px)`;

        }
    );


    logisticsPartner.addEventListener(
        "mouseleave",
        function () {

            if (!partnerImage) return;


            partnerImage.style.transform =
                "scale(1) translate(0, 0)";

        }
    );

}


/* =========================================================
   GLOBAL LOGISTICS IMAGE REVEAL
========================================================= */

const logisticsMapSection =
    document.getElementById("logisticsMapSection");

if (logisticsMapSection) {

    const mapObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        logisticsMapSection.classList.add(
                            "map-visible"
                        );

                        observer.unobserve(
                            logisticsMapSection
                        );

                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -60px 0px"
            }
        );

    mapObserver.observe(logisticsMapSection);
}