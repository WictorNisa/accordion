// Get all accordion items
const accordionItems = document.querySelectorAll(".accordion-item");

// Add click event to each accordion heading
accordionItems.forEach((item) => {
  const heading = item.querySelector(".accordion-heading");
  const content = item.querySelector(".accordion-content");
  const icon = heading.querySelector(".plus-icon");

  heading.addEventListener("click", () => {
    // Toggle active class on heading
    heading.classList.toggle("active");

    // Toggle active class on content
    content.classList.toggle("active");

    // Toggle the accordion icon
    icon.src = heading.classList.contains("active")
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";
  });
});
