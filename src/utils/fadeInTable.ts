export async function fadeInTableRows() {
  const rows = document.querySelectorAll(".interests-table tr");

  const fadeRowsInOnScroll = () => {
    const windowHeight = window.innerHeight;

    rows.forEach((row) => {
      const rect = row.getBoundingClientRect();

      // Check if the row is visible in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        row.classList.add("fade-in");
      } else {
        row.classList.remove("fade-in");
      }
    });
  };

  // Run on scroll
  window.addEventListener("scroll", fadeRowsInOnScroll);

  // Run initially in case some rows are already in view
  fadeRowsInOnScroll();
}
