# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

- It is a simple card that has radio buttons with which a user can give feedbaack which appears on a new card after clicking submit

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](images/screenshot1.png)
![](images/screenshot2.png)
![](images/screenshot3.png)

### Links

- Solution URL: [Github](https://github.com/hanzlasaadi/Interactive-rating-component)
- Live Site URL: [Github Page](https://hanzlasaadi.github.io/Interactive-rating-component/)

## My process

- First I created the main layout with the header(svg) => rounded corners
- Then my most time was taken up by radio buttons and displaying labels inside it
- At the end, I added button with rounded border and styled it.
- With JavaScript, I did 2 things with an event handler function to the button:
  - I hid the previous card with the help of "hidden" class.
  - Then, I used the radio button value to display in the second card.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Vanilla](http://vanilla-js.com/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I honed my skills with git and github. I wrote my own JavaScript code which felt more than great. I also leared that I should also opt for back-end development cause I suck at front-

**I love this layout (I can add/remove as many classes as I want)**

```html
<div class="thanks hidden">
  <span class="thanks hidden">
    <img src="images/illustration-thank-you.svg" alt="thanks" />
  </span>
</div>
```

**I know these are simple selectors but love them cause' how I used them.**

```css
.hidden {
  display: none;
}

.center {
  display: flex;
  justify-content: center;
}
```

**Completely wrote the code myself, proud of myself😊**

```js
button.addEventListener("click", function () {
  first.forEach((el) => {
    el.classList.add("hidden");
  });
  thanks.forEach((el) => {
    el.classList.remove("hidden");
    el.classList.add("center");
  });

  radioButtons.forEach((el) => {
    if (el.checked) {
      bigDot.textContent = `You selected ${el.value} out of 5`;
    }
  });
});
```

### Continued development

- I really want to learn more about jquery on how it uses radio buttons cause' that is one of weak points.

## Author

- LinkedIn - [hanzlasaadi](https://www.linkedin.com/in/hanzla-saadi-47a263235/)
- Frontend Mentor - [hanzlasaadi](https://www.frontendmentor.io/profile/hanzlasaadi)
- Twitter - [@hanzla_saadi](https://twitter.com/hanzla_saadi)
