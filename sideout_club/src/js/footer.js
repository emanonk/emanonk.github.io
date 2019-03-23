const COLUMN_DESC_N_SOCIAL = 
'<div class="col-12 col-md-6 col-lg-3">\
  <div class="foot-about">\
    <h2><a class="foot-logo" href="#"><img src="images/footer.png" alt=""></a></h2>\
    <p>Established in April 2015, SideOut Beach Volleyball Club is the UK\'s largest, most innovative, dynamic and member-focused beach volleyball club. We are based in Leyton, East London and in Worthing, West Sussex.</p>\
    <ul class="d-flex flex-wrap align-items-center">\
        <li><a href="https://www.facebook.com/SideOutLtd"><i class="fa fa-facebook"></i></a></li>\
        <li><a href="https://twitter.com/SideOut_UK"><i class="fa fa-twitter"></i></a></li>\
        <li><a href="https://www.instagram.com/sideout_uk/"><i class="fa fa-instagram"></i></a></li>\
        <li><a href="https://www.youtube.com/user/SideOutUK"><i class="fa fa-youtube"></i></a></li>\
    </ul>\
  </div>\
</div>';

const COLUMN_LINKS = 
'<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
  <h2>Useful Links</h2>\
  <ul>\
    <li><a href="#">Privacy Policy</a></li>\
    <li><a href="#">Become a Volunteer</a></li>\
    <li><a href="#">Donate</a></li>\
    <li><a href="#">Testimonials</a></li>\
    <li><a href="#">Causes</a></li>\
    <li><a href="#">Portfolio</a></li>\
    <li><a href="#">News</a></li>\
  </ul>\
  <ul>\
    <li><a href="https://sideout.co.uk">Sideout ltd</a></li>\
  </ul>\
</div>';

const COLUMN_UPDATES = 
'<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
  <div class="foot-latest-news">\
    <h2>Important Updates</h2>\
      <ul>\
        <li>\
            <h3><a href="#">New Leyton Beach</a></h3>\
            <div class="posted-date">April 1, 2019</div>\
        </li>\
        <li>\
            <h3><a href="#">New Worthing Beach</a></h3>\
            <div class="posted-date">April 1, 2019</div>\
        </li>\
        <li>\
            <h3><a href="#">London to host CEV Continental Cup</a></h3>\
            <div class="posted-date">May 25, 2019</div>\
        </li>\
    </ul>\
  </div>\
</div>';

const COLUMN_CONTACT = 
'<div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">\
  <div class="foot-contact">\
    <h2>Contact</h2>\
    <ul>\
        <li><i class="fa fa-envelope"></i><span>info@sideout.co.uk</span></li>\
        <li><i class="fa fa-map-marker"></i><span>London, Ive Farm Close, E10 5HQ</span></li>\
        <li><i class="fa fa-map-marker"></i><span>Worthing, Beach Volleyball, BN11 2FG</span></li>\
    </ul>\
  </div>\
</div>';

const RIGHTS = 
'<div class="container">\
  <div class="row">\
    <div class="col-12">\
        <p class="m-0">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  |  SideOut Beach Volleyball Club Ltd  |  Template by <a href="https://colorlib.com" target="_blank">Colorlib</a>\
    </div>\
  </div>\
</div>'

function renderFooter(){
  var footerRow = document.getElementById('footer-widget');
	footerRow.innerHTML = 
  '<div class="container">\
    <div class="row">'
      +COLUMN_DESC_N_SOCIAL + COLUMN_LINKS + COLUMN_UPDATES + COLUMN_CONTACT+
  '</div>\
  </div>';

  var footerRow = document.getElementById('footer-bar');
	footerRow.innerHTML = RIGHTS;
}
renderFooter();