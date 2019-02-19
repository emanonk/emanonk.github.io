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
var shortContent1 = document.getElementById('short-content1')
var shortContent2 = document.getElementById('short-content2')
var shortContent3 = document.getElementById('short-content3')
var beachTitle = document.getElementById('beachHeader')

var part1 = '<div id="venueBooking" style="top:;bottom:;left:;right:;width:960px;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz">\
  <div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">\
    <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto"';

var part2 = '></iframe></div></div>';

var shortContentLeyton1 = '\
<h3 class="entry-title">Opening Times & Bookings</h3>\
\
<p>From 1 April to 30 September, our courts are available to book between 10:00am and 10:00pm on weekdays. Weekend bookings are not available.\
<br /><br />\
​Courts can be booked up to 30 days in advance.\
<br /><br />\
For any block bookings beyond 30 days, corporate bookings or other private events, please feel free to contact us via the form at the bottom of this page!</p>'

var shortContentLeyton2 = '\
<h3 class="entry-title">Rates & Payment</h3>\
<p>Standard rate:  £21 per hour (maximum of 8 people per court)\
<br /><br />\
Members\' rate: £16 per hour (maximum of 8 people per court). Available only to members of SideOut Beach Volleyball Club. \
<br /><br />\
Payment: We only accept payment through PayPal, which offers maximum flexibility and ensures that your payments are secure! No additional charges apply and you do not need a PayPal account to make payment. </p>'

var shortContentLeyton3 = '\
<h3 class="entry-title">Address & Directions</h3>\
<p>Public Transport: Access is via Ive Farm Close, E10 5HQ. This is a 20-minute walk from Leyton underground station or a 15-minute walk from Leyton Midland Road overground station\
<br /><br />\
Driving: The venue car park can be accessed only from Orient Way. There is no postcode for this location yet, so please use the following on your SatNav: 51°33\'39.7"N 0°01\'18.0"W  or  51.561022, -0.021670. </p>'

var shortContentWorthing1 = '\
<h3 class="entry-title">Opening Times & Bookings</h3>\
\
<p>From 1 April to 30 September, our courts are available to book between 10:00am and 10:00pm on weekdays. Weekend bookings are not available.\
<br /><br />\
​Courts can be booked up to 30 days in advance.\
<br /><br />\
For any block bookings beyond 30 days, corporate bookings or other private events, please feel free to contact us via the form at the bottom of this page!</p>'


var shortContentWorthing2 = '\
<h3 class="entry-title">Rates & Payment</h3>\
<p>Standard rate:  £21 per hour (maximum of 8 people per court)\
<br /><br />\
Members\' rate: £16 per hour (maximum of 8 people per court). Available only to members of SideOut Beach Volleyball Club. \
<br /><br />\
Payment: We only accept payment through PayPal, which offers maximum flexibility and ensures that your payments are secure! No additional charges apply and you do not need a PayPal account to make payment. </p>'


var shortContentWorthing3 = '\
<h3 class="entry-title">Address & Directions</h3>\
<p>Worthing Beach Volleyball Courts, BN11 2FG. This is a 20-minute walk from Leyton underground station or a 15-minute walk from Leyton Midland Road overground station\
<br /><br />\
Driving or public transport: Access is via Brighton Road (A259).\
<br /><br />\
Cycling or walking: You can also access us via Beach Parade, the Worthing seafront promenade.</p>'


var beachTitleLeyton = '<header class="entry-header elements-heading"><h2 class="entry-title">Leyton Beach</h2></header>'

var beachTitleWorthing = '<header class="entry-header elements-heading"><h2 class="entry-title">Worthing Beach</h2></header>'

var link = '';
if( venue == 'leytonBooking'){
  beachTitle.innerHTML = beachTitleLeyton
  link= 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_8b9c89bc80e83f8ae0363b4d501a0396.html"';
  shortContent1.innerHTML = shortContentLeyton1;
  shortContent2.innerHTML = shortContentLeyton2;
  shortContent3.innerHTML = shortContentLeyton3;
}else{
  beachTitle.innerHTML = beachTitleWorthing
  link = 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"';
  shortContent1.innerHTML = shortContentWorthing1;
  shortContent2.innerHTML = shortContentWorthing2;
  shortContent3.innerHTML = shortContentWorthing3;
}





var element = part1 + link + part2;
d1.innerHTML = element;
//var d1 = document.getElementById('venue');
//d1.insertAdjacentHTML('beforeend', '<div id="worthingBooking" style="top:;bottom:;left:;right:;width:960px;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz"><div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">            <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto" src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"></iframe></div></div>');

////////////////////////////////////////////

function firstRender() {
  var link = 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_8b9c89bc80e83f8ae0363b4d501a0396.html"';
  var element = part1 + link + part2;
  document.getElementById("venue1").innerHTML = element;

}




}