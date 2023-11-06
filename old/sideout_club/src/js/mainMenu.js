
const PART1 =
  '<div class="container">\
  <div class="row">\
      <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">\
          <div class="site-branding d-flex align-items-center">\
              <a class="d-block" href="index.html" rel="home"><img class="d-block" src="images/logo_3.png"\
                      alt="logo"></a>\
          </div><!-- .site-branding -->\
  \
          <nav class="site-navigation d-flex justify-content-end align-items-center">\
              <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">';

const PART2 =

  '</ul>\
          </nav><!-- .site-navigation -->\
  \
          <div class="hamburger-menu d-lg-none">\
              <span></span>\
              <span></span>\
              <span></span>\
              <span></span>\
          </div><!-- .hamburger-menu -->\
      </div><!-- .col -->\
  </div><!-- .row -->\
</div><!-- .container -->';

function renderMenu(filter, level) {

  console.log(navigator.userAgent);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("yes");
   }

  var index = '<li><a href="index.html">Home</a></li>';
  var membership = '<li><a href="membership.html">Membership</a></li>';
  var bookCourt = '<li><a href="book-a-court-leyton.html">Book a court</a></li>';
  var calendar = '<li><a href="calendar-leyton.html">Events Calendar</a></li>';
  var tournaments = '<li><a href="tournaments.html">Tournaments</a></li>';
  var camps = '<li><a href="camps-and-clinics.html">Camps & Clinics</a></li>';
  var team = '<li><a href="meet-the-team.html">Meet the Team</a></li>';

  switch (filter) {
    case "index":
      index = '<li class="current-menu-item"><a href="' + level + 'index.html">Home</a></li>';
      break;
    case "membership":
      membership = '<li class="current-menu-item"><a href="' + level + 'membership.html">Membership</a></li>';
      break;
    case "bookCourt":
      bookCourt = '<li class="current-menu-item"><a href="' + level + 'book-a-court-leyton.html">Book a court</a></li>';
      break;
    case "calendar":
      calendar = '<li class="current-menu-item"><a href="' + level + 'calendar-leyton.html">Events Calendar</a></li>';
      break;
    case "tournaments":
    tournaments = '<li class="current-menu-item"><a href="' + level + 'tournaments.html">Tournaments</a></li>';
      break;
    case "camps":
      camps = '<li class="current-menu-item"><a href="' + level + 'camps-and-clinics.html">Camps & Clinics</a></li>';
      break;
    case "team":
      team = '<li class="current-menu-item"><a href="' + level + 'meet-the-team.html">Meet the Team</a></li>';
      break;
    default:
    // buttonAll = "btn gradient-bg";
  }


  var links = index + membership + bookCourt + calendar + tournaments + camps + team;


  var menu = document.getElementById('mainMenu');
  menu.innerHTML = PART1 + links + PART2;


}
