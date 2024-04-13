let distractionCount = 0;
const distractionText = document.getElementById('distraction-text');
const distractionCountSpan = document.getElementById('distraction-count');
const increaseBtn = document.getElementById('increase-btn');

increaseBtn.addEventListener('click', () => {
    distractionCount++;
    distractionCountSpan.textContent = distractionCount;
    updateDistractionText();
});

function updateDistractionText() {
    let countText = distractionCount === 1 ? 'kere' : 'kere';
    distractionText.textContent = `Çalışmaya başladığınızdan beri telefonunuz ${distractionCount} ${countText} dikkatinizi dağıttı.`;
}
