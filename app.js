const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const phonsButton = header.querySelector(".contacts_button");
const navBurger = header.querySelector(".nav_burger");
const contacts = header.querySelector(".contacts");
const navLinks = header.querySelector(".nav-links");
const navLinksItems = header.querySelectorAll("a");

// === Управление скроллом ===
function toggleScroll(lock) {
  document.body.classList.toggle("no-scroll", lock);
}

// === Закрытие всех активных элементов ===
function closeAll() {
  contacts.classList.remove("visible");
  navLinks.classList.remove("visible");
  phonsButton.classList.remove("active");
  navBurger.classList.remove("active");
  overlay.classList.remove("active");
  header.classList.remove("active");
  toggleScroll(false);
}

// === Открытие контактов ===
function toggleContacts() {
  navLinks.classList.remove("visible");
  navBurger.classList.remove("active");

  const isActive = phonsButton.classList.toggle("active");
  contacts.classList.toggle("visible", isActive);
  overlay.classList.toggle("active", isActive);
  header.classList.toggle("active", isActive);
  toggleScroll(isActive);
}

// === Открытие меню ===
function toggleMenu() {
  contacts.classList.remove("visible");
  phonsButton.classList.remove("active");

  const isActive = navBurger.classList.toggle("active");
  navLinks.classList.toggle("visible", isActive);
  overlay.classList.toggle("active", isActive);
  header.classList.toggle("active", isActive);
  toggleScroll(isActive);
}

// === Слушатели событий ===
phonsButton.addEventListener("click", toggleContacts);
navBurger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeAll);
navLinksItems.forEach((link) => link.addEventListener("click", closeAll));

// === Закрытие по клику вне header ===
document.addEventListener("click", (e) => {
  if (!header.contains(e.target) && overlay.classList.contains("active")) {
    closeAll();
  }
});
