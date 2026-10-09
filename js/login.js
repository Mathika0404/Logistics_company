/* =========================================================
   STACKLY AUTH SYSTEM
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const showSignup =
    document.getElementById("showSignup");

const showLogin =
    document.getElementById("showLogin");


/* =========================================================
   SWITCH LOGIN / SIGNUP
========================================================= */

if (showSignup) {

    showSignup.addEventListener(
        "click",
        function () {

            loginForm.classList.remove("active");

            setTimeout(function () {

                loginForm.style.display = "none";

                signupForm.style.display = "block";

                requestAnimationFrame(function () {

                    signupForm.classList.add("active");

                });

            }, 150);

        }
    );

}


if (showLogin) {

    showLogin.addEventListener(
        "click",
        function () {

            signupForm.classList.remove("active");

            setTimeout(function () {

                signupForm.style.display = "none";

                loginForm.style.display = "block";

                requestAnimationFrame(function () {

                    loginForm.classList.add("active");

                });

            }, 150);

        }
    );

}


/* =========================================================
   PASSWORD TOGGLE
========================================================= */

function setupPasswordToggle(
    inputId,
    buttonId
) {

    const input =
        document.getElementById(inputId);

    const button =
        document.getElementById(buttonId);

    if (!input || !button) return;


    button.addEventListener(
        "click",
        function () {

            const icon =
                button.querySelector("i");


            if (input.type === "password") {

                input.type = "text";

                icon.classList.replace(
                    "ri-eye-off-line",
                    "ri-eye-line"
                );

            } else {

                input.type = "password";

                icon.classList.replace(
                    "ri-eye-line",
                    "ri-eye-off-line"
                );

            }

        }
    );

}


setupPasswordToggle(
    "loginPassword",
    "loginPasswordToggle"
);


setupPasswordToggle(
    "signupPassword",
    "signupPasswordToggle"
);


/* =========================================================
   ERROR HELPER
========================================================= */

function showError(
    input,
    errorElement,
    message
) {

    if (input) {

        input.classList.add(
            "input-error"
        );

    }


    if (errorElement) {

        errorElement.textContent =
            message;

    }

}


function clearError(
    input,
    errorElement
) {

    if (input) {

        input.classList.remove(
            "input-error"
        );

    }


    if (errorElement) {

        errorElement.textContent =
            "";

    }

}


/* =========================================================
   EMAIL VALIDATION
========================================================= */

function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


/* =========================================================
   LOGIN FORM
========================================================= */

const signinForm =
    document.getElementById(
        "signinForm"
    );


if (signinForm) {

    signinForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const role =
                document.getElementById(
                    "loginRole"
                ).value;


            const email =
                document.getElementById(
                    "loginEmail"
                );


            const password =
                document.getElementById(
                    "loginPassword"
                );


            const emailError =
                document.getElementById(
                    "loginEmailError"
                );


            const passwordError =
                document.getElementById(
                    "loginPasswordError"
                );


            let valid = true;


            clearError(
                email,
                emailError
            );


            clearError(
                password,
                passwordError
            );


            /* EMAIL */

            if (
                !validEmail(
                    email.value.trim()
                )
            ) {

                showError(
                    email,
                    emailError,
                    "Enter a valid business email address."
                );

                valid = false;

            }


            /* PASSWORD */

            if (
                password.value.trim().length < 6
            ) {

                showError(
                    password,
                    passwordError,
                    "Password must contain at least 6 characters."
                );

                valid = false;

            }


            if (!valid) return;


            /* SAVE EMAIL */

            localStorage.setItem(
                "loggedInEmail",
                email.value.trim()
            );


            localStorage.setItem(
                "loggedInRole",
                role
            );


            /* REMEMBER */

            const remember =
                document.getElementById(
                    "rememberLogin"
                );


            if (
                remember &&
                remember.checked
            ) {

                localStorage.setItem(
                    "rememberLogin",
                    "true"
                );

            }


            /* BUTTON */

            const button =
                signinForm.querySelector(
                    ".auth-submit"
                );


            button.classList.add(
                "loading"
            );


            button.querySelector(
                "span"
            ).textContent =
                "AUTHENTICATING...";


            setTimeout(function () {

                if (role === "admin") {

                    window.location.href =
                        "admin-dashboard.html";

                } else {

                    window.location.href =
                        "user-dashboard.html";

                }

            }, 900);

        }
    );

}


/* =========================================================
   SIGNUP FORM
========================================================= */

const signupAuthForm =
    document.getElementById(
        "signupAuthForm"
    );


if (signupAuthForm) {

    signupAuthForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const name =
                document.getElementById(
                    "signupName"
                );


            const company =
                document.getElementById(
                    "signupCompany"
                );


            const email =
                document.getElementById(
                    "signupEmail"
                );


            const phone =
                document.getElementById(
                    "signupPhone"
                );


            const password =
                document.getElementById(
                    "signupPassword"
                );


            const nameError =
                document.getElementById(
                    "signupNameError"
                );


            const emailError =
                document.getElementById(
                    "signupEmailError"
                );


            const phoneError =
                document.getElementById(
                    "signupPhoneError"
                );


            let valid = true;


            clearError(
                name,
                nameError
            );


            clearError(
                email,
                emailError
            );


            clearError(
                phone,
                phoneError
            );


            /* NAME */

            if (
                name.value.trim().length < 2
            ) {

                showError(
                    name,
                    nameError,
                    "Please enter your full name."
                );

                valid = false;

            }


            /* COMPANY */

            if (
                company.value.trim().length < 2
            ) {

                company.classList.add(
                    "input-error"
                );

                valid = false;

            } else {

                company.classList.remove(
                    "input-error"
                );

            }


            /* EMAIL */

            if (
                !validEmail(
                    email.value.trim()
                )
            ) {

                showError(
                    email,
                    emailError,
                    "Enter a valid business email."
                );

                valid = false;

            }


            /* PHONE */

            if (
                !/^[0-9]{10}$/.test(
                    phone.value.trim()
                )
            ) {

                showError(
                    phone,
                    phoneError,
                    "Enter a valid 10-digit phone number."
                );

                valid = false;

            }


            /* PASSWORD */

            if (
                password.value.trim().length < 6
            ) {

                password.classList.add(
                    "input-error"
                );

                valid = false;

            } else {

                password.classList.remove(
                    "input-error"
                );

            }


            if (!valid) return;


            /* SAVE DETAILS */

            localStorage.setItem(
                "loggedInEmail",
                email.value.trim()
            );


            localStorage.setItem(
                "loggedInName",
                name.value.trim()
            );


            localStorage.setItem(
                "loggedInCompany",
                company.value.trim()
            );


            localStorage.setItem(
                "loggedInRole",
                "user"
            );


            /* BUTTON */

            const button =
                signupAuthForm.querySelector(
                    ".auth-submit"
                );


            button.querySelector(
                "span"
            ).textContent =
                "CREATING ACCOUNT...";


            button.classList.add(
                "loading"
            );


            setTimeout(function () {

                window.location.href =
                    "user-dashboard.html";

            }, 900);

        }
    );

}


/* =========================================================
   PHONE - NUMBERS ONLY
========================================================= */

const signupPhone =
    document.getElementById(
        "signupPhone"
    );


if (signupPhone) {

    signupPhone.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );

        }
    );

}


/* =========================================================
   REMOVE ERROR WHILE TYPING
========================================================= */

document
    .querySelectorAll(
        ".input-wrap input"
    )
    .forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                this.classList.remove(
                    "input-error"
                );

            }
        );

    });


/* =========================================================
   INITIAL STATE
========================================================= */

if (signupForm) {

    signupForm.style.display =
        "none";

}


if (loginForm) {

    loginForm.style.display =
        "block";

    loginForm.classList.add(
        "active"
    );

}