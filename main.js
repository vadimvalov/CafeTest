document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  const dropdownItems = dropdownMenu.querySelectorAll("li");

  // Add click event listener to the toggle button
  dropdownToggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    console.log("Dropdown toggle button clicked.");
  });

  // Add click event listener to each dropdown item
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedValue = item.getAttribute("data-value");
      dropdownToggle.textContent = selectedValue; // Update the dropdown toggle text
      dropdown.classList.remove("active"); // Close the dropdown
    });
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });

  const selectACafe = document.getElementById("selectACafe");
  const customersSelector = document.getElementById("customersSelector");
  const avgRecipe = document.getElementById("avgRecipe");
  const addSubmit = document.getElementById("addSubmit");
  const error = document.getElementById("error");
  const loading = document.getElementById("loading");

  addSubmit.addEventListener("click", () => {
    error.classList.add("hidden");

    // Проверка на "Select a Cafe"
    if (selectACafe.textContent === "Select a Cafe") {
      showError("Please choose a cafe.");
      return;
    }

    const customersValue = parseInt(customersSelector.value);
    if (isNaN(customersValue)) {
      showError("Please enter a valid number of customers.");
      return;
    }

    const avgRecipeValue = parseFloat(avgRecipe.value.replace(",", "."));
    if (isNaN(avgRecipeValue)) {
      showError("Please enter a valid average spent per customer.");
      return;
    }

    addSubmit.classList.add("hidden");
    loading.classList.remove("hidden");

    setTimeout(() => {
      loading.classList.add("hidden");
      showRecorded();
    }, 3000);
  });

  function showError(errorMessage) {
    error.textContent = errorMessage;
    error.classList.remove("hidden");
  }

  function showRecorded() {
    error.textContent = "Recorded!";
    error.classList.remove("hidden");
    error.style.color = "green";

    setTimeout(() => {
      modalMenu.classList.add("hidden");
      modalBackground.classList.add("hidden");
      window.location.reload();
    }, 3000);
  }
});
