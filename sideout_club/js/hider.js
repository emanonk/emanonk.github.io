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
var locationHeader = document.getElementById('locationHeader')
var map = document.getElementById('google-map')

var part1 = '<div id="venueBooking" style="top:;bottom:;left:;right:;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz">\
  <div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">\
    <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto"';

var part2 = '></iframe></div></div>';

var mapLeyton = '<iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=51.5630325,-0.01934853&amp;q=E10%205HQ+(Sideout%20Beach)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a></iframe>';
var mapWorthing = '<iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=BN11%202FG+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Draw map route</a></iframe>';

var shortContentLeyton1 = '\
From 1 April to 30 September, our courts are available to book between 10:00am and 10:00pm on weekdays. Weekend bookings are not available.\
<br /><br />\
​Courts can be booked up to 30 days in advance.\
<br /><br />\
For any block bookings beyond 30 days, corporate bookings or other private events, please feel free to contact us via the form at the bottom of this page!'

var shortContentLeyton2 = '\
Standard rate:  £21 per hour (maximum of 8 people per court)\
<br /><br />\
Members\' rate: £16 per hour (maximum of 8 people per court). Available only to members of SideOut Beach Volleyball Club. \
<br /><br />\
Payment: We only accept payment through PayPal, which offers maximum flexibility and ensures that your payments are secure! No additional charges apply and you do not need a PayPal account to make payment.'

var shortContentLeyton3 = '\
Public Transport: Access is via Ive Farm Close, E10 5HQ. This is a 20-minute walk from Leyton underground station or a 15-minute walk from Leyton Midland Road overground station\
<br /><br />\
Driving: The venue car park can be accessed only from Orient Way. There is no postcode for this location yet, so please use the following on your SatNav: 51°33\'39.7"N 0°01\'18.0"W  or  51.561022, -0.021670.'

var shortContentWorthing1 = '\
From 1 April to 30 September, our courts are available to book between 10:00am and 10:00pm on weekdays. Weekend bookings are not available.\
<br /><br />\
​Courts can be booked up to 30 days in advance.\
<br /><br />\
For any block bookings beyond 30 days, corporate bookings or other private events, please feel free to contact us via the form at the bottom of this page!'


var shortContentWorthing2 = '\
<p>Standard rate:  £21 per hour (maximum of 8 people per court)\
<br /><br />\
Members\' rate: £16 per hour (maximum of 8 people per court). Available only to members of SideOut Beach Volleyball Club. \
<br /><br />\
Payment: We only accept payment through PayPal, which offers maximum flexibility and ensures that your payments are secure! No additional charges apply and you do not need a PayPal account to make payment.'


var shortContentWorthing3 = '\
<p>Worthing Beach Volleyball Courts, BN11 2FG. This is a 20-minute walk from Leyton underground station or a 15-minute walk from Leyton Midland Road overground station\
<br /><br />\
Driving or public transport: Access is via Brighton Road (A259).\
<br /><br />\
Cycling or walking: You can also access us via Beach Parade, the Worthing seafront promenade.'


var beachTitleLeyton = '<header class="entry-header elements-heading"><h2 class="entry-title">Leyton Beach</h2></header>'

var beachTitleWorthing = '<header class="entry-header elements-heading"><h2 class="entry-title">Worthing Beach</h2></header>'

var link = '';
if( venue == 'leytonBooking'){
  beachTitle.innerHTML = beachTitleLeyton
  locationHeader.innerHTML = 'Leyton Beach Location'
  link= 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_8b9c89bc80e83f8ae0363b4d501a0396.html"';
  shortContent1.innerHTML = shortContentLeyton1;
  shortContent2.innerHTML = shortContentLeyton2;
  shortContent3.innerHTML = shortContentLeyton3;
  map.innerHTML = mapLeyton;
}else{
  beachTitle.innerHTML = beachTitleWorthing
  locationHeader.innerHTML = 'Worthing Beach Location'
  link = 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"';
  shortContent1.innerHTML = shortContentWorthing1;
  shortContent2.innerHTML = shortContentWorthing2;
  shortContent3.innerHTML = shortContentWorthing3;
  map.innerHTML = mapWorthing;
}





var element = part1 + link + part2;
d1.innerHTML = element;
//var d1 = document.getElementById('venue');
//d1.insertAdjacentHTML('beforeend', '<div id="worthingBooking" style="top:;bottom:;left:;right:;width:960px;height:1200px;position:" class="htco1" data-state="hasContent" id="HtmlCmpnnt0-apz"><div id="HtmlCmpnnt0-apziFrameHolder" class="htco1iFrameHolder">            <iframe width="100%" height="100%" name="htmlComp-iframe" scrolling="auto" src="https://www-sideout-co-uk.filesusr.com/html/a1273a_31379c57d27a21ec3f54f346939fc991.html"></iframe></div></div>');

////////////////////////////////////////////

// function firstRender() {
//   var link = 'src="https://www-sideout-co-uk.filesusr.com/html/a1273a_8b9c89bc80e83f8ae0363b4d501a0396.html"';
//   var element = part1 + link + part2;
//   document.getElementById("venue1").innerHTML = element;

// }




}