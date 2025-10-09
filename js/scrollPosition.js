// scrollPosition.js

// Save scroll position before leaving the page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollY", window.scrollY);
});

// Restore scroll position after loading the new page
window.addEventListener("load", () => {
  const savedScroll = localStorage.getItem("scrollY");
  if (savedScroll !== null) {
    window.scrollTo({ top: parseInt(savedScroll, 10), behavior: "smooth" });
    // Optionally clear it so it doesn't persist for future visits
    localStorage.removeItem("scrollY");
  }
});