// Simple UI niceties (no frameworks)

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Year in footer */
$("#year").textContent = new Date().getFullYear();

/* Mobile nav */
const navToggle = $(".nav-toggle");
const mainNav = $(".main-nav");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    mainNav.style.display = open ? "none" : "flex";
  });
}

/* Modal helpers */
const loginModal = $("#modal-login");
const signupModal = $("#modal-signup");

$$("[data-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const which = btn.getAttribute("data-open");
    (which === "login" ? loginModal : signupModal).showModal();
  });
});

/* Quick form validation (demo only) */
$("#quick-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.elements.email;
  const password = form.elements.password;
  let ok = true;

  const emailErr = email.parentElement.querySelector(".error");
  const passErr = password.parentElement.querySelector(".error");
  emailErr.textContent = "";
  passErr.textContent = "";

  if (!email.value || !/.+@.+\..+/.test(email.value)) {
    emailErr.textContent = "Please enter a valid work email.";
    ok = false;
  }
  if (!password.value || password.value.length < 8) {
    passErr.textContent = "Password should be at least 8 characters.";
    ok = false;
  }

  if (ok) {
    // Replace with your real auth flow
    alert("Logging in… (wire this to your backend)");
  }
});
