export default function softScrollSlider({ container, moreSection, colors, contents }) {
    let startY = 0;
    let startX = 0;
    let currentIndex = 0;

    const containerEl = document.querySelector(container);
    const moreSectionEl = document.querySelector(moreSection);
    const sections = containerEl.querySelectorAll('.section');
    const totalSections = sections.length;
    let zValue = 100;

    for (let i = 0; i < sections.length; i++){
        sections[i].style.zIndex = zValue;
        zValue--;
    }

    if (!containerEl || !moreSectionEl || !sections.length) {
        console.error('Soft Scroll Slider: One or more elements not found.');
        return;
    }

    function updateViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    function currentSectionUpdate() {
        document.body.style.backgroundColor = colors[currentIndex] || "#ffffff";
        moreSectionEl.innerHTML = contents[currentIndex] || "";
        moreSectionEl.style.zIndex = "1000";
    }

    function handleMoreSectionSwipe(e) {
        const endX = e.changedTouches[0].clientX;
        if (startX < endX - 70) {
            moreSectionEl.classList.remove('is-open');
        }
    }

    
    function handleContainerSwipe(e) {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;

        if (startY > endY + 50 && currentIndex < totalSections - 1) {
            sections[currentIndex].style.transform = 'translateY(-100vh)';
            sections[currentIndex + 1].style.top = '0vh';
            currentIndex++;
            currentSectionUpdate();
        } else if (startY < endY - 50 && currentIndex > 0) {
            sections[currentIndex - 1].style.transform = 'translateY(0vh)';
            sections[currentIndex].style.top = '20vh';
            sections[currentIndex].style.transition = '.9s';
            currentIndex--;
            currentSectionUpdate();
        }

        if (startX > endX + 70) {
            moreSectionEl.classList.add('is-open');
        }
    }

    // ініціалізація
    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);

    moreSectionEl.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    moreSectionEl.addEventListener('touchend', handleMoreSectionSwipe);

    containerEl.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });

    containerEl.addEventListener('touchend', handleContainerSwipe);

    // стартове оновлення
    currentSectionUpdate();
}
