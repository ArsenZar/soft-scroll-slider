
<h1>#SOFT SCROLL SLIDER</h1>
<p>Hi, this is my first library, but I believe it can make your projects more effective and interesting.</p>
<p><i>If it helped you even a little, let me know, your feedback will be important.</i></p>

# Soft Scroll Slider

Soft Scroll Slider — This is a simple JavaScript library for smooth swipe scrolling between sections on mobile devices.

> ⚠️ The library is focused on mobile devices. A desktop version will be released later.

---

## 🚀 Fast START

## 1. HTML

<div class="moreSection"></div>

<div class="container">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
  <div class="section">Section 3</div>
</div>
__________________________________________________________________________________________
## 2. CSS - Minimum styles that must be present:

body {
  overflow: hidden;
  transition: background-color 0.6s ease;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100vh;
  transition: all 0.6s ease;
}

.section:first-child {
  top: 0;
}

.moreSection {
  position: fixed;
  right: -100%;
  top: 0;
  width: 80%;
  height: 100%;
  background: white;
  transition: right 0.4s ease;
  overflow-y: auto;
  z-index: 100;
}

.moreSection.is-open {
  right: 0;
}
__________________________________________________________________________________________
# Initialization

import softScrollSlider from 'soft-scroll-slider';

softScrollSlider({
  container: '.container',
  moreSection: '.moreSection',
  colors: ['#00674F', '#919598', '#638CB3'],
  contents: {
    0: '<h1>Screen 1</h1>',
    1: '<h1>Screen 2</h1>',
    2: '<h1>Screen 3</h1>'
  }
});
