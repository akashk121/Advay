const searchInput = document.querySelector("#search-bar");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".fl-item");
  items.forEach(item => {
    const itemName = item.querySelector(".content a").textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
