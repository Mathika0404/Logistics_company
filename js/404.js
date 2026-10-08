// =========================================
// STACKLY 404 PAGE JAVASCRIPT
// =========================================


// -----------------------------------------
// BUTTON REFERENCES
// -----------------------------------------

const backHomeBtn = document.getElementById("backHomeBtn");
const goBackBtn = document.getElementById("goBackBtn");


// -----------------------------------------
// BACK TO HOME
// -----------------------------------------
// Always goes to index.html

backHomeBtn.addEventListener("click", function () {

    window.location.href = "index.html";

});


// -----------------------------------------
// GO BACK
// -----------------------------------------
// Returns to the exact previous page.
//
// Example:
//
// login.html
//     ↓
// 404.html
//     ↓
// Go Back
//     ↓
// login.html
//
// admin-dashboard.html
//     ↓
// 404.html
//     ↓
// Go Back
//     ↓
// admin-dashboard.html
//
// user-dashboard.html
//     ↓
// 404.html
//     ↓
// Go Back
//     ↓
// user-dashboard.html
// -----------------------------------------

goBackBtn.addEventListener("click", function () {

    if (window.history.length > 1) {

        window.history.back();

    } else {

        // If there is no previous browser history,
        // go to home page instead.

        window.location.href = "index.html";

    }

});