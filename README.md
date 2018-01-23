# snippets

## JS/UserAgent detection
Or crude way to make css exceptions for incapable browsers

```js
        var html = document.documentElement;
        var ie = false;
        var browser = navigator.userAgent.toLowerCase();
        html.classList.remove('no-js');
        html.className = 'js';

        if (browser.indexOf('msie') >= 0 || browser.indexOf('wow64') >= 0) {
            html.className = 'js msie';
            ie = true;
        }
        if (browser.indexOf('edge') >= 0) {
            html.classList.add('edge');
            ie = true;
        }
        if (browser.indexOf('iphone') >= 0) {
            html.classList.add('iphone');
        }
        if (browser.indexOf('firefox') >= 0) {
            html.classList.add('firefox');
        }
```

Minified

```js
var html=document.documentElement,ie=!1,browser=navigator.userAgent.toLowerCase();html.classList.remove("no-js"),html.className="js",(browser.indexOf("msie")>=0||browser.indexOf("wow64")>=0)&&(html.className="js msie",ie=!0),browser.indexOf("edge")>=0&&(html.classList.add("edge"),ie=!0),browser.indexOf("iphone")>=0&&html.classList.add("iphone"),browser.indexOf("firefox")>=0&&html.classList.add("firefox");
```
