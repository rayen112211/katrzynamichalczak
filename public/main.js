const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

for (const link of document.querySelectorAll("[data-contact-email]")) {
  const email = link.dataset.contactEmail.match(/.{2}/g).map((pair) => String.fromCharCode(Number.parseInt(pair, 16))).join("");
  link.href = `mailto:${email}`;
  if (link.classList.contains("contact-email")) link.textContent = email;
}

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = document.querySelector("[data-contact-email]").dataset.contactEmail.match(/.{2}/g).map((pair) => String.fromCharCode(Number.parseInt(pair, 16))).join("");
  const values = new FormData(form);
  const message = [...values.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
  const subject = document.documentElement.lang === "pl" ? "Zaproszenie do współpracy" : "Invitation to collaborate";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation?.classList.toggle("is-open", willOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
}
