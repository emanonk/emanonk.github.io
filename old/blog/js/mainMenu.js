function mainMenuF(indexLevel, viewsLevel) {
  return '\
  <!-- Logo -->\
  <div class="logo">\
    <a href="' + indexLevel + 'index.html"><span>BV</span>tour</a>\
  </div>\
\
  <div class="container">\
    <div class="row">\
      <div class="col">\
        <div class="header_content d-flex flex-row align-items-center justify-content-start trans_400">\
          <nav class="main_nav">\
            <ul class="d-flex flex-row align-items-start justify-content-start">\
              <li><a href="' + indexLevel + 'index.html">Home</a></li>\
              <li><a href="' + viewsLevel + 'tournaments.html">General</a></li>\
              <li><a href="' + viewsLevel + 'sportcenters.html">Technology</a></li>\
              <li><a href="' + viewsLevel + 'coaches.html">Travel</a></li>\
            </ul>\
          </nav>\
        </div>\
      </div>\
    </div>\
  </div>\
\
  <!-- Submit & Social -->\
  <div class="header_right d-flex flex-row align-items-start justify-content-start">\
\
    <!-- Submit -->\
    <!-- <div class="submit"><a href="#">Submit a Podcast</a></div>-->\
    \
    <!-- Social -->\
    <div class="social">\
      <ul class="d-flex flex-row align-items-start justify-content-start">\
        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>\
        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>\
        <li><a href="#"><i class="fa fa-soundcloud" aria-hidden="true"></i></a></li>\
        <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>\
        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>\
      </ul>\
    </div>\
\
    <!-- Hamburger -->\
    <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>\
    \
  </div>';
}


function mobileMenuF(indexLevel, viewsLevel) {
  return '\
  <div class="menu_content d-flex flex-column align-items-end justify-content-start">\
      <ul class="menu_nav_list text-right">\
        <li><a href="' + indexLevel + 'index.html">Αρχικη</a></li>\
        <li><a href="' + viewsLevel + 'tournaments.html">Τουρνουα</a></li>\
        <li><a href="' + viewsLevel + 'sportcenters.html">Αθλητικα Κεντρα</a></li>\
        <li><a href="' + viewsLevel + 'coaches.html">Προπονητες</a></li>\
        <li><a href="' + viewsLevel + 'players.html">Παικτες</a></li>\
        <!--<li><a href="' + viewsLevel + 'organisers.html">Διοργανωτες</a></li> -->\
        <li><a href="' + viewsLevel + 'venues.html">Γηπεδα</a></li>\
			</ul>\
			<div class="menu_extra d-flex flex-column align-items-end justi\fy-content-start">\
				<div class="menu_submit"><a href="#">Submit your podcast</a></div>\
				<div class="social">\
					<ul class="d-flex flex-row align-items-start justify-content-start">\
						<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>\
						<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>\
						<li><a href="#"><i class="fa fa-soundcloud" aria-hidden="true"></i></a></li>\
						<li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>\
						<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>\
					</ul>\
				</div>\
			</div>\
		</div>\
  ';
}

const PART2 =

  '</ul>\
          </nav>\
          <div class="hamburger-menu d-lg-none">\
              <span></span>\
              <span></span>\
              <span></span>\
              <span></span>\
          </div>\
      </div>\
  </div>\
</div>';

function renderMainMenu(page) {

  var indexLevel = "";
  var viewLevel = "";
  if (page === "index") {
    indexLevel = "";
    viewLevel = "views/"
  }
  console.log(navigator.userAgent);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("mobile_view:ON");
  }

  var menu = document.getElementById('mainMenu');
  menu.innerHTML = mainMenuF(indexLevel, viewLevel);
  var mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.innerHTML = mobileMenuF(indexLevel, viewLevel);

}