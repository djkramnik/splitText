# splitText

Based on the GSAP SplitText animation library, which as of this writing requires a membership. What it does seems simple enough, so why not make a free and open source version with a similar API?

Currently this only supports splitting lines but will be expanded to include split by word and by character.

## Usage

### Basic usage

```javascript
// Split the text within '#copy' into separate divs
const revert = await splitText(document.getElementById('copy'));

// Revert the original html after the animation is complete
revert();
```

### Extended options

You may also provide an object with options:

```javascript
const options = {
  markup: '<div class="custom-class">{slot}</div>',
};
```

#### markup

Allows for passing in custom markup in which the line will be wrapped, instead of a default `<div>`. The term `{slot}` in this string will be replaced with the line.

```javascript
splitText(document.getElementById('copy'), {
  markup:
    '<div class="stagger-line"><div class="stagger-line__wrap">{slot}</div></div>',
});
```

Would result in:

```html
<div class="stagger-line">
  <div class="stagger-line__wrap">My first line</div>
</div>
<div class="stagger-line">
  <div class="stagger-line__wrap">and my second</div>
</div>
```

### Demo

A small test file can be found in `/demo/index.html`.
