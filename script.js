document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    
    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event bubbling
        this.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function () {
        dropdown.classList.remove("active");
    });
});