# pass.js  
Pass events through pure JavaScript Debounce or Throttle methods. 

<a href="https://pass-js.github.io"><img width="200" src="https://cdn.jsdelivr.net/gh/pass-js/pass-js.github.io@main/assets/logo.svg" /></a>
Open the <a href="https://pass-js.github.io">project page</a> or <a href="https://pass-js.github.io">demos</a>. 

## Features

### 1. No dependencies
Prepared with pure javaScript codes. Thus, it is self-sufficient without the need for various frameworks such as jQuery.

### 2. 813 Byte only
It was thought and prepared for the maximum scenarios with the least possible size. The keep the code short.

### 3. Multipurpose use
With the "leading" and "trailing" features, you can decide you want to set the new event on any edge of the event. Moreover, it allows multiple applications.

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

### 2. Initialize `pass.js`

```html
<script>
  var fn = function(){};
  pass.debounce(fn, 500);
</script>
```
[View the Demo on CodePen →](https://codepen.io/ionurboz/pen/vYKKBrV)

## Options

```javascript
{ leading: mixed, trailing: mixed }
```
Default: `true`

### 1. Leading

#### Debounce
If `leading` is set to a value other than boolean `false`, it will fire at the first edge of the event.

```html
<script>
  var fn = function(){};
  pass.debounce(fn, 500, { leading: true });
</script>
```

#### Throttle
If `leading` is set to a value other than boolean `false`, it will fire at the first edge of the event.

```html
<script>
  var fn = function(){};
  pass.throttle(fn, 500, { leading: false });
</script>
```

### 2. Trailing

#### Debounce
If `trailing` is set to a value other than boolean `false`, it will fire at the last edge of the event.

```html
<script>
  var fn = function(){};
  pass.debounce(fn, 500, { leading: true, trailing: true });
</script>
```

#### Throttle
If `trailing` is set to a value other than boolean `false`, it will fire at the trailing edge of the event.

```html
<script>
  var fn = function(){};
  pass.throttle(fn, 500, { leading: false, trailing: true });
</script>
```

## License
The code is available under the [MIT License](LICENSE).
