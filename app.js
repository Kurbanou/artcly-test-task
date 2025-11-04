const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const phonsButton = header?.querySelector(".contacts_button");
const navBurger = header?.querySelector(".nav_burger");
const contacts = header?.querySelector(".contacts");
const navLinks = header?.querySelector(".nav-links");
const navLinksItems = header?.querySelectorAll("a");

// === Управление скроллом ===
function toggleScroll(lock) {
  document.body.classList.toggle("no-scroll", !!lock);
}

// === Закрытие всех активных элементов ===
function closeAll() {
  if (contacts) contacts.classList.remove("visible");
  if (navLinks) navLinks.classList.remove("visible");
  if (phonsButton) phonsButton.classList.remove("active");
  if (navBurger) navBurger.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  if (header) header.classList.remove("active");
  toggleScroll(false);
}

// === Открытие контактов ===
function toggleContacts() {
  if (!phonsButton || !contacts || !overlay || !header) return;

  if (navLinks) navLinks.classList.remove("visible");
  if (navBurger) navBurger.classList.remove("active");

  const isActive = phonsButton.classList.toggle("active");
  contacts.classList.toggle("visible", isActive);
  overlay.classList.toggle("active", isActive);
  header.classList.toggle("active", isActive);
  toggleScroll(isActive);
}

// === Открытие меню ===
function toggleMenu() {
  if (!navBurger || !navLinks || !overlay || !header) return;

  if (contacts) contacts.classList.remove("visible");
  if (phonsButton) phonsButton.classList.remove("active");

  const isActive = navBurger.classList.toggle("active");
  navLinks.classList.toggle("visible", isActive);
  overlay.classList.toggle("active", isActive);
  header.classList.toggle("active", isActive);
  toggleScroll(isActive);
}

// === Слушатели событий ===
if (phonsButton) phonsButton.addEventListener("click", toggleContacts);
if (navBurger) navBurger.addEventListener("click", toggleMenu);
if (overlay) overlay.addEventListener("click", closeAll);
if (navLinksItems) {
  navLinksItems.forEach((link) => {
    link.addEventListener("click", closeAll);
  });
}

// === Закрытие по клику вне header ===
document.addEventListener("click", (e) => {
  if (!header || !overlay) return;

  const clickedOutsideHeader = !header.contains(e.target);
  const overlayActive = overlay.classList.contains("active");

  if (clickedOutsideHeader && overlayActive) {
    closeAll();
  }
});
