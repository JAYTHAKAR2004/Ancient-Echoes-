document.getElementById('exploreButton').addEventListener('click', function() {
    const title = document.getElementById('title');
    const exploreButton = document.getElementById('exploreButton');

    // Apply zoom animation to the title
    title.classList.add('zoom');

    // Hide button and redirect after animation
    setTimeout(() => {
        exploreButton.style.display = 'none';
        window.location.href = 'second.html';
    }, 1000);
});
