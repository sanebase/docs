// force-same-tab.js

const observer = new MutationObserver(() => {
  const links = document.querySelectorAll(
    '#navigation-items a[target="_blank"][href="https://sanebase.dev"]'
  );

  links.forEach((link) => {
    if (link.textContent.includes("Back to")) {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
