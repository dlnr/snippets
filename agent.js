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
if (browser.indexOf('safari') >= 0 && browser.indexOf('macintosh') >= 0) {
    html.classList.add('safari');
}