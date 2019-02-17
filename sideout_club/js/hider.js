function hider(hide, appear) {
  var link = document.getElementById(hide);
//link.style.display = 'none'; //or
link.style.visibility = 'hidden';
var link = document.getElementById(appear);
link.style.visibility = 'visible';
}

function appender(venuePlace) {

var venue = venuePlace;

var d1 = document.getElementById('venue');

var part1 = '<div id="venueBooking" style="top:;bottom:;left:;right:;width:960px;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz">\
  <div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">\
    <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto"';

var part2 = '></iframe></div></div>';



var link = '';
if( venue == 'leytonBooking'){
  link= 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_8b9c89bc80e83f8ae0363b4d501a0396.html"';
}else{
  link = 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"';
}





var element = part1 + link + part2;
d1.innerHTML = element;
//var d1 = document.getElementById('venue');
//d1.insertAdjacentHTML('beforeend', '<div id="worthingBooking" style="top:;bottom:;left:;right:;width:960px;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz"><div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">            <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto" src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"></iframe></div></div>');






}