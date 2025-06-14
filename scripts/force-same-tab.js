// force-same-tab.js

const observer = new MutationObserver(() => {
  const links = document.querySelectorAll(
    '#navigation-items a[target="_blank"][href="https://sanebase.dev"]'
  );

  for (const link of links) {
    if (link.textContent.includes("Back to")) {
      // Remove target to stay in same tab
      link.removeAttribute("target");
      link.removeAttribute("rel");

      // If docs are running on localhost, redirect link to local app
      if (window.location.hostname === "localhost") {
        link.setAttribute("href", "http://localhost:3000");
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
