
<h1>#SOFT SCROLL SLIDER</h1>
<p>Hi, this is my first library, but I believe it can make your projects more effective and interesting.</p>
<p><i>If it helped you even a little, let me know, your feedback will be important.</i></p>

# Soft Scroll Slider

Soft Scroll Slider — This is a simple JavaScript library for smooth swipe scrolling between sections on mobile devices.

> ⚠️ The library is focused on mobile devices. A desktop version will be released later.

### DEMO
> You want to see how i create this lib stepByStep?
> 
> https://arsenzar.github.io/soft-scroll-slider/
> 
> ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 
> Here i describe all updates, u can use this


<img src="./images/demo.gif" alt="Slider Demo" width="300" />

---

### NPM Start
📦 Installation & Usage (npm)
```bash
npm install soft-scroll-slider
```

## 🚀 Quick Start

### 1. Basic HTML Structure

```html
<div class="moreSection"></div>

<div class="container">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
  <div class="section">Section 3</div>
</div>

<script type="module" src="./main.js">
```

### 2. Required CSS (Minimum Styling)

```css
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: sans-serif;
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
            top: 20vh;
            transition: all 0.6s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            color: white;
        }

        .section:first-child {
            top: 0;
        }

        .moreSection {
            position: fixed;
            right: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.95);
            transition: right 0.4s ease;
            padding: 20px;
            overflow-y: auto;
            z-index: 100;
        }

        .moreSection.is-open {
            right: 0;
        }
```

### 3. JavaScript Initialization

If you're using it as a simple script:

```html
<script src="index.js"></script>
```

---

## 📦 Installation (coming soon via npm)

```bash
npm install soft-scroll-slider
```

Then in your JavaScript:

```js
import softScrollSlider from 'soft-scroll-slider';

softScrollSlider({
  container: '.container',
  moreSection: '.moreSection',
  colors: ['#color1', '#color2', '#color3'],
  contents: {
    0: '<p>HTML for section 0</p>',
    1: '<p>HTML for section 1</p>',
    2: '<p>HTML for section 2</p>',
  }
});
```

---

## 🧠 How It Works

- Vertical swipes scroll between sections.
- Horizontal swipe right opens the `.moreSection`.
- Horizontal swipe left closes the `.moreSection`.
- Background color and content are dynamically updated based on the active section index.

---

## 🧪 Example

To see a working version, open `example.html` in your browser.

---

## 🙌 Feedback

This is my first JavaScript library. If it helped you, even a little — let me know!  
Any feedback or contribution is highly appreciated.  
Stay tuned for updates and improvements!

---

## 🔗 License

MIT © [ArsenZar](https://github.com/ArsenZar)


## A great idea for a startup. est. 2021.

This is the story of how this library came about. 3-4 years ago, in the era of the emergence of endless ticks, I created a crude version of the slider. https://youtube.com/shorts/zjkiF1HckFc
But then it worked by taking the value of the scrollbar position and if it was > 200px, the next block appeared, if > 400px ... and so on :)

At that time, I was talking to various coffee shops, bloggers and other people to create their own site based on this concept, but unfortunately I heard refusals. After a while, I decided that I wanted to create my own startup based on this UI interface and call it ShareLink. It was supposed to be like Linktree and Clutch collaborated, only with a taste for style)

The goal of the startup was to create pages of people who could talk on each screen about what they could be useful for, and all this was also supported by a rating. Here is the story of its appearance, I don't think anyone will be interested in it)
