// Scroll Effect for Navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});





// Επιλέγουμε όλα τα sections που θα έχουν animation
const sections = document.querySelectorAll(".section");

// Συνάρτηση που ελέγχει ποια sections είναι ορατά στο παράθυρο
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85; // σημείο ενεργοποίησης (85% του ύψους οθόνης)

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show"); // το εμφανίζει
    } else {
      section.classList.remove("show"); // το κρύβει πάλι (αν θες να ξαναεξαφανίζεται)
    }
  });
}

// Εκτελείται κάθε φορά που κάνεις scroll
window.addEventListener("scroll", revealSections);

// Και μία φορά όταν φορτώνει η σελίδα
revealSections();



// ========== MOBILE MENU TOGGLE ==========
const mobileMenu = document.getElementById("mobileMenu");
const mobileBtn = document.getElementById("mobileMenuBtn");
const closeMenuBtn = document.getElementById("closeMobileMenu");

// Άνοιγμα mobile menu
mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.add("open");
});

// Κλείσιμο mobile menu
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
});

// Κλείσιμο όταν γίνει κλικ σε κάποιο link
document.querySelectorAll(".mobile-menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});
