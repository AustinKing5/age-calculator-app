# age-calculator-app
This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./assets/images/age%20calculator%20app_screenshot.png)

### Links

- Solution URL: [solution URL](https://github.com/AustinKing5/age-calculator-app/)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I structured my website using semantic html5 markup. styling was done using css and its custom properties such as flexbox and css grid to position some of the elements. This project was to test my ability to implement javascript in a real project situation, hence did not implement any JS library.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Native JavaScript
- Desktop-first workflow
- **Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Structuring your website with semantic html makes styling and dom manipulation easier. i am able to make use of the attributes of these elements to effect the desired behaviour. 

```html
<h1>Some HTML, CSS and JS codes I'm proud of</h1>

<input
  type="number"
  name="days"
  id="days"
  aria-placeholder="Days"
  placeholder="DD"
  minlength="1"
  maxlength="2"
  min="1"
/>
<span class="error err-day" aria-live="polite"></span>
```

```css
/* Input field styling */
::placeholder {
  text-align: left;
  color: hsl(0, 1%, 44%);
  font-size: 32px;
  padding-left: 15px;
}
```
This is my first project where I try to incoporate the JavaScript I have learnt so for. Through the process i had to endure a lot of learning curves.

- It is great to layout the logic of the behaviour you want to effect on the website with Javasacript before you start coding.
- With javascript, you can try to be smart or write shorter codes but it is important to understand that js does not bend its rules.
- Coding is a continues learning process. The more you work on projects, you understand how things work.
- I learnt how to define functions and callback these functions at the appropriate situation.

```js
// this line of code ouputs results (users age) to the user
if (resultingDay === 1) {
  let text1 = document.getElementById("outputYear");
  let text2 = document.getElementById("outputMonth").innerHTML;
  document.getElementsByTagName("h1")[2].innerHTML =
    '<span id = "outputDay" class="dash"></span>day';
  let text3 = document.getElementById("outputDay");
  const load = () => {
    animate(text1, 0, resultingYear, 4000);
    animate(text2, 0, resultingMonth, 4000);
    animate(text3, 100, resultingDay, 4000);
  };
  load();
  reset1();
} else {
  let text1 = document.getElementById("outputYear");
  let text2 = document.getElementById("outputMonth");
  let text3 = document.getElementById("outputDay");
  const load = () => {
    animate(text1, 0, resultingYear, 4000);
    animate(text2, 0, resultingMonth, 4000);
    animate(text3, 100, resultingDay, 4000);
  };
  load();
  reset1();
}

// Animation function
function animate(obj, initVal, lastVal, duration) {
  var obj;
  let startTime = null;
  let currentTime = Date.now();

  const step = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start animating
  window.requestAnimationFrame(step);
}

// Form reset function
var reset1 = function () {
  setTimeout(function () {
    document.getElementById("submitForm").reset();
  }, 10000);
};
```

### Continued development

the next step in my development is to learn jquery. i believe my ability to implement a behabiour using a javascript library will improve my effectiveness and efficience in my frontend development journey. 
I plan to work on more projects to gain experience and learn.

### Useful resources

- [Tutorialpoint-creating animated counter](https://www.tutorialspoint.com/creating-animated-counter-using-html-css-and-javascript) - This is an amazing article which helped me finally understand how to animate my user output results. I really liked this pattern and will use it going forward. I'd recommend it to anyone still learning this concept.


## Author

- GitHub Website - [Augustine A. Asare](https://github.com/AustinKing5/)
- Frontend Mentor - [@AustinKing5](https://www.frontendmentor.io/profile/AustinKing5)
- LinkedIn - []()
- Twitter - [@aryetehasare](https://www.twitter.com/aryetehasare)

