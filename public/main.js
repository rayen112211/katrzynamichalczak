document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

const contactForm = document.querySelector("[data-contact-form]");
contactForm?.removeAttribute("hidden");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const email = form.dataset.email;
  const subject = form.dataset.subject;
  const values = new FormData(form);
  const body = [...values.entries()].filter(([, value]) => String(value).trim()).map(([key, value]) => {
    const input = form.elements.namedItem(key);
    const label = input.labels[0].firstChild.textContent.trim();
    return `${label}: ${String(value).trim()}`;
  }).join("\n\n");
  const preview = form.querySelector("[data-message-preview]");
  const message = form.querySelector("[data-prepared-message]");
  message.value = `${email}\n${subject}\n\n${body}`;
  form.querySelector("[data-open-email]").href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector("[data-message-status]").textContent = "";
  preview.hidden = false;
  message.focus();
});

document.querySelector("[data-copy-message]")?.addEventListener("click", async () => {
  const message = contactForm.querySelector("[data-prepared-message]");
  const status = contactForm.querySelector("[data-message-status]");
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = contactForm.dataset.copySuccess;
  } catch {
    message.focus();
    message.select();
    status.textContent = contactForm.dataset.copyFailure;
  }
});

const quoteCards = [...document.querySelectorAll("[data-quote-card]")];
const quoteCount = document.querySelector("[data-quote-count]");
let activeQuote = 0;

function showQuote(index) {
  if (!quoteCards.length) return;
  activeQuote = (index + quoteCards.length) % quoteCards.length;
  quoteCards.forEach((card, cardIndex) => {
    card.hidden = cardIndex !== activeQuote;
    card.classList.toggle("is-active", cardIndex === activeQuote);
  });
  if (quoteCount) quoteCount.textContent = `${String(activeQuote + 1).padStart(2, "0")} / ${String(quoteCards.length).padStart(2, "0")}`;
}

document.querySelector("[data-quote-prev]")?.addEventListener("click", () => showQuote(activeQuote - 1));
document.querySelector("[data-quote-next]")?.addEventListener("click", () => showQuote(activeQuote + 1));
document.querySelector(".quote-controls")?.removeAttribute("hidden");

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  navigation.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
}

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation?.classList.toggle("is-open", willOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const dropdown = navigation?.querySelector("details[open]");
  if (dropdown) {
    dropdown.removeAttribute("open");
    dropdown.querySelector("summary").focus();
  } else if (navigation?.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});

window.matchMedia("(max-width: 1180px)").addEventListener("change", closeMenu);

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
