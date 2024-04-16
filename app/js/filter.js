const categoryDropdown = document.querySelector("#category");
const artworksDropdown = document.querySelector("#artworks");

categoryDropdown.addEventListener("click", () => {
    const selectedCategory = categoryDropdown.querySelector(".dropdown-item.active")?.textContent || "All Categories"; // initialize with "All Categories" if the query selector returns null
    const items = document.querySelectorAll(".fl-item");
    
    items.forEach(item => {
      const itemCategory = item.querySelector(".tagline")?.textContent || "All Categories"; // initialize with "All Categories" if the query selector returns null
      
      if (selectedCategory === "All Categories" || itemCategory === selectedCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
  
  
  

artworksDropdown.addEventListener("click", () => {
  const selectedArtwork = artworksDropdown.querySelector(".dropdown-item.active").textContent;
  const items = document.querySelectorAll(".fl-item");
  items.forEach(item => {
    const itemName = item.querySelector(".content a").textContent;
    if (selectedArtwork === "Default sorting" || (
      selectedArtwork === "Sort by Popularity" && itemName === "Taiyo Robotics") ||
       (selectedArtwork === "Sort by Latest" && itemName === "Jungle Cats") || (selectedArtwork === "Sort by View" && itemName === "Jelly Beasts")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
