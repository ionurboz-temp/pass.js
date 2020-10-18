# pass.js
Pass events through pure JavaScript Debounce or Throttle methods. 

## Features

### 1. No dependencies
Prepared with pure javaScript codes. Thus, it is self-sufficient without the need for various frameworks such as jQuery.

### 2. 813 Byte only
It was thought and prepared for the maximum scenarios with the least possible size. The keep the code short.

### 3. Multipurpose use
With the "leading" and "trailing" features, you can decide you want to set the new event on any edge of the event. Moreover, it allows multiple applications.

[View the Demo on CodePen →](https://codepen.io/ionurboz/pen/vYKKBrV)

## Getting Started
You can find the compiled and ready-to-use code in the `dist` directory.

### 1. Include `pass.js` on your site

#### Direct Download
You [can download the files directly from GitHub](https://github.com/bozdev/pass.js/archive/main.zip).

```html
<script src="path/to/pass.min.js"></script>
```
#### From CDN
You can also use the [jsDelivr CDN](https://cdn.jsdelivr.net/gh/bozdev/pass.js@main/dist/).

```html
<!-- Always get the latest version -->
<script src="https://cdn.jsdelivr.net/gh/bozdev/pass.js/dist/pass.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/gh/bozdev/pass.js@1/dist/pass.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/gh/bozdev/pass.js@1.0/dist/pass.min.js"></script>

<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/bozdev/pass.js@1.0.1/dist/pass.min.js"></script>
```

### 2. Initialize Bouncer

```html
<script>
  var fn = function(){};
  pass.debounce(fn, 500);
</script>
```
