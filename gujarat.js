document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const link = item.closest('a');
        if (link) {
            window.location.href = link.href;  // Navigate to the link's destination
        }
    });
});

