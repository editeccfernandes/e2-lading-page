$(document).ready(function(){
var header = $('.intro_section');

var backgrounds = new Array(
    'url(../images/pic1.jpg)'
  , 'url(../images/pic2.jpg))'
  , 'url(../images/pic3.jpg)'
  , 'url(../images/pic1.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);
});