const tooltip = document.getElementById('tooltip');

document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseover', (e) => {
        tooltip.style.display = 'block';
        tooltip.textContent = area.title;
    });

    area.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.style.top = `${e.pageY + 10}px`;
    });

    area.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});
