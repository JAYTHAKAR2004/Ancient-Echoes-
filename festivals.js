document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const link = item.closest('a');
        if (link) {
            window.location.href = link.href;
        }
    });
});

const tooltip = document.getElementById('tooltip');
const map = document.querySelector('map');

map.addEventListener('mouseover', (e) => {
    tooltip.style.display = 'block';
});

map.addEventListener('mouseout', (e) => {
    tooltip.style.display = 'none';
});
