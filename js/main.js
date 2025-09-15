// js/main.js

// Ensure page always loads from top
window.addEventListener('load', () => {
  console.log("Welcome to Fresh Coconut Shop!");

  // Always scroll to top after reload
  window.scrollTo(0, 0);

  // Remove any hash (#contact, #order, etc.) from the URL
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
  }
});

// Before reload, clear the hash from URL so browser doesn't remember it
window.addEventListener('beforeunload', () => {
  history.replaceState(null, '', location.pathname + location.search);
  window.scrollTo(0, 0);
});
