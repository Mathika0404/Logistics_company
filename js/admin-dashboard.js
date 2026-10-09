/* =====================================================
   STACKLY LOGISTICS ADMIN DASHBOARD
===================================================== */


/* =====================================================
   USER INFORMATION
===================================================== */

const loggedInEmail =
    localStorage.getItem("loggedInEmail");


const userNameElement =
    document.getElementById("userName");


const userEmailElement =
    document.getElementById("userEmail");

const mobileUserEmail =
    document.getElementById("mobileUserEmail");

if (loggedInEmail) {

    let name =
        loggedInEmail
            .split("@")[0]
            .replace(/[._-]/g, " ")
            .trim();

            if (mobileUserEmail && loggedInEmail) {
    mobileUserEmail.textContent = loggedInEmail;
}

    name =
        name
            .split(" ")
            .filter(Boolean)
            .map(word =>
                word.charAt(0).toUpperCase() +
                word.slice(1)
            )
            .join(" ");


    if (userNameElement) {
        userNameElement.textContent = name;
    }


    if (userEmailElement) {
        userEmailElement.textContent =
            loggedInEmail;
    }

}


/* =====================================================
   SIDEBAR
===================================================== */

const sidebar =
    document.getElementById("sidebar");


const menuBtn =
    document.getElementById("menuBtn");


const closeBtn =
    document.getElementById("closeBtn");


if (menuBtn && sidebar) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.add("active");

    });

}


if (closeBtn && sidebar) {

    closeBtn.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

}


/* =====================================================
   PAGE SECTIONS
===================================================== */

const dashboardSection =
    document.getElementById("dashboardSection");


const shipmentsSection =
    document.getElementById("shipmentsSection");


const clientsSection = 
    document.getElementById("clientsSection");

const fleetSection = document.getElementById("fleetSection");

const trackingSection = document.getElementById("trackingSection");

const menuLinks =
    document.querySelectorAll(".menu a");


function showDashboardSection() {

    dashboardSection.style.display = "block";
    shipmentsSection.style.display = "none";
    clientsSection.style.display = "none";

    dashboardSection.classList.remove("dashboard-visible");

    void dashboardSection.offsetWidth;

    dashboardSection.classList.add("dashboard-visible");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showShipmentsSection() {

    dashboardSection.style.display = "none";
    shipmentsSection.style.display = "block";
    clientsSection.style.display = "none";

    shipmentsSection.classList.remove("shipment-visible");

    void shipmentsSection.offsetWidth;

    shipmentsSection.classList.add("shipment-visible");

    shipmentsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function showClientsSection() {

    dashboardSection.style.display = "none";
    shipmentsSection.style.display = "none";
    clientsSection.style.display = "block";

    clientsSection.classList.remove("client-visible");

    void clientsSection.offsetWidth;

    clientsSection.classList.add("client-visible");

    clientsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* =========================================================
   CLIENT FILTER + SEARCH
========================================================= */

const clientFilter = document.getElementById("clientFilter");
const clientSearch = document.getElementById("clientSearch");
const clientsTableBody = document.getElementById("clientsTableBody");

function filterClients() {

    const selectedStatus = clientFilter.value;
    const searchValue = clientSearch.value.toLowerCase().trim();

    const rows = clientsTableBody.querySelectorAll("tr");

    rows.forEach(row => {

        const rowStatus = row.getAttribute("data-status");
        const rowText = row.textContent.toLowerCase();

        // Status check
        const statusMatch =
            selectedStatus === "all" ||
            rowStatus === selectedStatus;

        // Search check
        const searchMatch =
            searchValue === "" ||
            rowText.includes(searchValue);

        // Show / Hide
        if (statusMatch && searchMatch) {

            row.style.display = "";

            row.style.animation = "clientRowIn 0.3s ease";

        } else {

            row.style.display = "none";

        }

    });
}


/* Status Filter */

if (clientFilter) {

    clientFilter.addEventListener("change", function () {

        filterClients();

    });

}


/* Search */

if (clientSearch) {

    clientSearch.addEventListener("input", function () {

        filterClients();

    });

}


/* =========================================================
   SHOW LIVE TRACKING
========================================================= */

function showTrackingSection() {

    dashboardSection.style.display = "none";
    shipmentsSection.style.display = "none";
    clientsSection.style.display = "none";
    fleetSection.style.display = "none";

    trackingSection.style.display = "block";

    trackingSection.classList.remove("tracking-visible");

    void trackingSection.offsetWidth;

    trackingSection.classList.add("tracking-visible");

    trackingSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* =========================================================
   SHOW FLEET SECTION
========================================================= */

function showFleetSection() {

    dashboardSection.style.display = "none";
    shipmentsSection.style.display = "none";
    clientsSection.style.display = "none";
    fleetSection.style.display = "block";

    fleetSection.classList.remove("fleet-visible");

    void fleetSection.offsetWidth;

    fleetSection.classList.add("fleet-visible");

    fleetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

/* =====================================================
   ANIMATION HELPER
===================================================== */

function restartAnimation(
    element,
    animationName
) {

    if (!element) return;


    element.style.animation = "none";


    void element.offsetWidth;


    element.style.animation =
        animationName;

}


/* =====================================================
   SHOW DASHBOARD
===================================================== */

function showDashboardSection() {


    /* Show Dashboard */

    if (dashboardSection) {

        dashboardSection.hidden = false;

        dashboardSection.style.display = "block";

        dashboardSection.style.transform = "none";


        restartAnimation(
            dashboardSection,
            "dashboardSectionIn .5s ease forwards"
        );

    }


    /* Hide Shipments */

    if (shipmentsSection) {

        shipmentsSection.style.display = "none";

        shipmentsSection.hidden = true;

        shipmentsSection.classList.remove(
            "shipment-visible"
        );

    }


    /* Hide Coming Soon */

    const comingSoon =
        document.getElementById(
            "comingSoonSection"
        );


    if (comingSoon) {

        comingSoon.style.display = "none";

        comingSoon.hidden = true;

    }


    /* Active Menu */

    menuLinks.forEach(link => {

        link.classList.remove("active");

    });


    const dashboardLink =
        document.querySelector(
            '.menu a[href="#dashboard"]'
        );


    if (dashboardLink) {

        dashboardLink.classList.add("active");

    }


    /* Scroll Top */

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW SHIPMENTS
===================================================== */

function showShipmentsSection() {


    /* Hide Dashboard */

    if (dashboardSection) {

        dashboardSection.style.display = "none";

        dashboardSection.hidden = true;

    }


    /* Hide Coming Soon */

    const comingSoon =
        document.getElementById(
            "comingSoonSection"
        );


    if (comingSoon) {

        comingSoon.style.display = "none";

        comingSoon.hidden = true;

    }


    /* Show Shipments */

    if (shipmentsSection) {

        shipmentsSection.hidden = false;

        shipmentsSection.style.display = "block";


        /* Restart Shipment Animation */

        shipmentsSection.classList.remove(
            "shipment-visible"
        );


        void shipmentsSection.offsetWidth;


        shipmentsSection.classList.add(
            "shipment-visible"
        );


        /* Scroll to Shipment */

        setTimeout(() => {

            shipmentsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 50);

    }


    /* Active Menu */

    menuLinks.forEach(link => {

        link.classList.remove("active");

    });


    const shipmentLink =
        document.querySelector(
            '.menu a[href="#shipments"]'
        );


    if (shipmentLink) {

        shipmentLink.classList.add("active");

    }

}


/* =====================================================
   COMING SOON
===================================================== */

function showComingSoonSection(pageName) {
    window.location.href = "404.html";
}


/* =====================================================
   SIDEBAR MENU SWITCHING
===================================================== */

menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const target =
                this.getAttribute("href");


            /* Close mobile sidebar */

            if (
                sidebar &&
                window.innerWidth <= 900
            ) {

                sidebar.classList.remove(
                    "active"
                );

            }


            /* Remove active */

            menuLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            /* =====================================
               DASHBOARD
            ===================================== */

            if (target === "#dashboard") {

                this.classList.add("active");

                showDashboardSection();

                return;

            }


            /* =====================================
               SHIPMENTS
            ===================================== */

            if (target === "#shipments") {

                this.classList.add("active");

                showShipmentsSection();

                return;

            }

            if (target === "#clients") {
    this.classList.add("active");
    showClientsSection();
    return;
}


if (target === "#fleet") {

    this.classList.add("active");

    showFleetSection();

    return;
}


if (target === "#tracking") {

    this.classList.add("active");

    showTrackingSection();

    return;
}





            /* =====================================
               OTHER MENU
            ===================================== */

            this.classList.add("active");


            const pageName =
                this.textContent.trim();


            showComingSoonSection(
                pageName
            );

        }
    );

});


/* =====================================================
   LIVE ROUTE STATUS
===================================================== */

const routeStatusButtons =
    document.querySelectorAll(
        ".route-status-btn"
    );


const fleetProgress =
    document.getElementById(
        "fleetProgress"
    );


const fleetProgressBar =
    document.getElementById(
        "fleetProgressBar"
    );


const distanceCovered =
    document.getElementById(
        "distanceCovered"
    );


const estimatedArrival =
    document.getElementById(
        "estimatedArrival"
    );


const routeData = {

    transit: {

        progress: 68,

        distance: "420 km",

        eta: "1h 35 min"

    },


    pending: {

        progress: 24,

        distance: "85 km",

        eta: "4h 20 min"

    },


    delivered: {

        progress: 100,

        distance: "680 km",

        eta: "Delivered"

    }

};


routeStatusButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            routeStatusButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add(
                "active"
            );


            const status =
                this.dataset.status;


            const data =
                routeData[status];


            if (!data) return;


            if (fleetProgress) {

                fleetProgress.textContent =
                    data.progress;

            }


            if (fleetProgressBar) {

                fleetProgressBar.style.width =
                    `${data.progress}%`;

            }


            if (distanceCovered) {

                distanceCovered.textContent =
                    data.distance;

            }


            if (estimatedArrival) {

                estimatedArrival.textContent =
                    data.eta;

            }

        }
    );

});


/* =====================================================
   MAP ZOOM
===================================================== */

const zoomIn =
    document.getElementById("zoomIn");


const zoomOut =
    document.getElementById("zoomOut");


const logisticsMap =
    document.querySelector(".logistics-map");


let mapScale = 1;


function updateMapScale() {

    if (!logisticsMap) return;


    const mapBackground =
        document.querySelector(
            ".map-background"
        );


    const mapRoads =
        document.querySelectorAll(
            ".map-road"
        );


    const route =
        document.querySelector(
            ".delivery-route"
        );


    const locations =
        document.querySelectorAll(
            ".route-location, .current-vehicle"
        );


    if (mapBackground) {

        mapBackground.style.transform =
            `scale(${mapScale})`;

    }


    mapRoads.forEach(road => {

        road.style.transform =
            `scale(${mapScale})`;

    });


    if (route) {

        route.style.transform =
            `scale(${mapScale})`;

    }


    locations.forEach(item => {

        item.style.transform =
            `scale(${mapScale})`;

    });

}


if (zoomIn) {

    zoomIn.addEventListener(
        "click",
        () => {

            mapScale += .1;


            if (mapScale > 1.5) {

                mapScale = 1.5;

            }


            updateMapScale();

        }
    );

}


if (zoomOut) {

    zoomOut.addEventListener(
        "click",
        () => {

            mapScale -= .1;


            if (mapScale < .8) {

                mapScale = .8;

            }


            updateMapScale();

        }
    );

}


/* =====================================================
   ALERT DETAILS
===================================================== */

const alertDetails =
    document.getElementById(
        "alertDetails"
    );


if (alertDetails) {

    alertDetails.addEventListener(
        "click",
        () => {

            showComingSoonSection(
                "ALERT DETAILS"
            );

        }
    );

}


/* =====================================================
   VIEW ALL ALERTS
===================================================== */

const viewAlerts =
    document.getElementById(
        "viewAlerts"
    );


if (viewAlerts) {

    viewAlerts.addEventListener(
        "click",
        () => {

            showComingSoonSection(
                "ALL ALERTS"
            );

        }
    );

}


/* =====================================================
   SHIPMENT FILTER
===================================================== */

const shipmentFilterButtons =
    document.querySelectorAll(
        ".shipment-filter-btn"
    );


const shipmentRows =
    document.querySelectorAll(
        "#shipmentTableBody tr"
    );


shipmentFilterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {


            shipmentFilterButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            this.classList.add("active");


            const filter =
                this.dataset.filter;


            shipmentRows.forEach(row => {

                const status =
                    row.dataset.status;


                if (
                    filter === "all" ||
                    status === filter
                ) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }
    );

});


/* =====================================================
   SHIPMENT ACTION BUTTONS
===================================================== */

const shipmentActionButtons =
    document.querySelectorAll(
        ".shipment-action"
    );


shipmentActionButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            showComingSoonSection(
                "SHIPMENT DETAILS"
            );

        }
    );

});


/* =====================================================
   NEW SHIPMENT
===================================================== */

const newShipmentBtn =
    document.getElementById(
        "newShipmentBtn"
    );


if (newShipmentBtn) {

    newShipmentBtn.addEventListener(
        "click",
        () => {

            showComingSoonSection(
                "NEW SHIPMENT"
            );

        }
    );

}


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900 &&
            sidebar
        ) {

            sidebar.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* Default page */

        showDashboardSection();


        /* Default route */

        const defaultRoute =
            document.querySelector(
                '.route-status-btn[data-status="transit"]'
            );


        if (defaultRoute) {

            defaultRoute.click();

        }

    }
);

/* =========================================================
   FLEET FILTER
========================================================= */

const fleetTabs = document.querySelectorAll(".fleet-tab");
const fleetCards = document.querySelectorAll(".vehicle-card");
const fleetSearch = document.getElementById("fleetSearch");


fleetTabs.forEach(tab => {

    tab.addEventListener("click", function () {

        /* Remove active from all tabs */

        fleetTabs.forEach(item => {
            item.classList.remove("active");
        });

        /* Add active to clicked tab */

        this.classList.add("active");

        const filter = this.getAttribute("data-fleet-filter");

        const searchValue = fleetSearch
            ? fleetSearch.value.toLowerCase().trim()
            : "";

        filterFleet(filter, searchValue);

    });

});


function filterFleet(filter = "all", searchValue = "") {

    fleetCards.forEach((card, index) => {

        const status = card.getAttribute("data-fleet-status");

        const cardText = card.textContent.toLowerCase();

        const statusMatch =
            filter === "all" ||
            status === filter;

        const searchMatch =
            searchValue === "" ||
            cardText.includes(searchValue);

        if (statusMatch && searchMatch) {

            card.style.display = "block";

            card.style.animation = "none";

            void card.offsetWidth;

            card.style.animation = `vehicleCardIn 0.45s ease ${index * 0.05}s both`;

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================================
   FLEET SEARCH
========================================================= */

if (fleetSearch) {

    fleetSearch.addEventListener("input", function () {

        const activeTab =
            document.querySelector(".fleet-tab.active");

        const filter =
            activeTab
                ? activeTab.getAttribute("data-fleet-filter")
                : "all";

        filterFleet(
            filter,
            this.value.toLowerCase().trim()
        );

    });

}

/* =========================================================
   LIVE TRACKING CLOCK
========================================================= */

const trackingTime = document.getElementById("trackingTime");

function updateTrackingTime() {

    if (!trackingTime) return;

    const now = new Date();

    trackingTime.textContent =
        now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

}

updateTrackingTime();

setInterval(updateTrackingTime, 1000);


/* =========================================================
   LIVE TRACKING MAP ZOOM
========================================================= */

/* =========================================================
   LIVE TRACKING MAP ZOOM
========================================================= */

const liveMap = document.getElementById("liveMap");
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const locateFleetBtn = document.getElementById("locateFleet");

let mapZoom = 1;

const MIN_ZOOM = 1;
const MAX_ZOOM = 1.8;
const ZOOM_STEP = 0.2;


/* =========================================================
   GET MAP ELEMENTS
========================================================= */

const mapZoomElements = liveMap
    ? liveMap.querySelectorAll(
        ".map-grid, .tracking-route, .map-point, .moving-truck, .map-road, .map-water"
      )
    : [];


/* =========================================================
   SAVE ORIGINAL TRANSFORMS
========================================================= */

mapZoomElements.forEach(element => {

    const originalTransform =
        getComputedStyle(element).transform;

    element.dataset.originalTransform =
        originalTransform === "none"
            ? ""
            : originalTransform;

});


/* =========================================================
   APPLY ZOOM
========================================================= */

function applyMapZoom() {

    if (!liveMap) return;

    mapZoomElements.forEach(element => {

        const originalTransform =
            element.dataset.originalTransform || "";

        element.style.transform =
            `${originalTransform} scale(${mapZoom})`;

        element.style.transformOrigin =
            "center center";

    });

}


/* =========================================================
   ZOOM IN
========================================================= */

if (zoomInBtn) {

    zoomInBtn.addEventListener("click", function () {

        if (mapZoom >= MAX_ZOOM) return;

        mapZoom = Math.min(
            mapZoom + ZOOM_STEP,
            MAX_ZOOM
        );

        applyMapZoom();

        this.classList.add("zoom-click");

        setTimeout(() => {
            this.classList.remove("zoom-click");
        }, 200);

    });

}


/* =========================================================
   ZOOM OUT
========================================================= */

if (zoomOutBtn) {

    zoomOutBtn.addEventListener("click", function () {

        if (mapZoom <= MIN_ZOOM) return;

        mapZoom = Math.max(
            mapZoom - ZOOM_STEP,
            MIN_ZOOM
        );

        applyMapZoom();

        this.classList.add("zoom-click");

        setTimeout(() => {
            this.classList.remove("zoom-click");
        }, 200);

    });

}


