# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- **Bonus Feature:** Close the share menu automatically when clicking anywhere outside of the desktop tooltip or the share button.

### Screenshot

![](/images/screenshot.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/mnyellison/article-preview-component)
- Live Site URL: [Vercel Deploy](https://article-preview-component-a.vercel.app/)

---

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (DOM manipulation and event handling)

---

### What I learned

During this project, I gained a deep understanding of how images behave inside flexible containers in CSS and how event bubbling works in JavaScript.

On the CSS side, I had an intensive battle with the desktop layout where the image was refusing to scale properly.

On the JavaScript side, I implemented a robust "Click Outside" feature to enhance user experience. I learned how to monitor global document clicks and use the .contains() method to verify if the user's action happened outside the active boundaries of my components:

```js
document.addEventListener("click", (event) => {
  if (!shareContainer.classList.contains("hidden")) {
    if (
      !shareContainer.contains(event.target) &&
      !buttonShare.contains(event.target)
    ) {
      shareContainer.classList.add("hidden");
      buttonShare.classList.remove("active");
    }
  }
});
```

---

### Continued development

In future projects, I want to keep focusing on:

- Advanced CSS positioning (`absolute` vs `relative` alignments in complex tooltips).
- Refactoring global event listeners in JavaScript to optimize performance.
- Writing cleaner, modular utility classes for CSS animations.

---

### AI Collaboration

I collaborated with Gemini throughout the debugging and polishing phases of this project.

- **How it was used:** Brainstorming structural alignment fixes for the mobile/desktop layout switcher, and resolving active-class logic conflicts within the toggle scripts.
- **What worked well:** The assistant pinpointed exact layout breaking points using uploaded screenshots of the Chrome DevTools, which saved time tracing CSS overflow issues. It also helped write clean code snippets for the click-outside event guard.

---

## Author

- Frontend Mentor - [@mnyellison](https://www.frontendmentor.io/profile/mnyellison)
