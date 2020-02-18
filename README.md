## splitText

Based on the GSAP SplitText animation library, which as of this writing requires a membership.  What it does seems simple enough,
so why not make a free and open source version with a similar API?  Currently this only supports splitting lines but will be
expanded to include split by word and by character.

### Usage

```
// split the text within '#copy' into separate divs
var revert = await splitText(document.getElementById('copy'));

// revert the original html after the animation is complete
revert();
```

### Demo

A small test file can be found in `/demo/index.html`.


