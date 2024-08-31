document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("nextButton");

    button.addEventListener("click", function() {
        button.classList.add("move-right");
        window.open('Culturalbooks.html', '_blank');
    });
});
