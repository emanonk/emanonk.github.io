
//INFO
const MEN_N_WOMEN = "Men & Women";
const MIXED = "Mixed";

//TOURNAMENT NAMEs
const NAME_AYCP = "All You Can Play";
const NAME_OPEN_PLAY = "Open Play"
const NAME_SPRING = "SideOut Spring Tourney";
const NAME_SUMMER = "SideOut Summer Series";
const NAME_ALL_NATIONS = "All Nations";
const NAME_CEV = "CEV Continental Cup Tournament";
const NAME_CHALLENGER = "SideOut Challenger Series";
const NAME_GRAND_PRIX = "SideOut London Grand Prix";
const NAME_LONDON_FINALS = "SideOut London Finals";
const NAME_TRAINING = "Training";
const NAME_END_OF_SEASON_PARTY = "End of Season Party!"

//TOURNAMENT TYPES
const TYPE_TOURNAMENT = "Tournament";
const TYPE_PLAY = "Play";
const TYPE_TRAINING = "Training";

//EVENT LINKS
const URL_AYCP = "all-you-can-play.html";
const URL_SPRING = "tournament-spring-tourney.html";
const URL_SUMMER = "tournament-summer-series.html";
const URL_ALL_NATIONS = "tournament-all-nations.html";
const URL_CEV = "cev-continental-cup.html";
const URL_CHALLENGER = "tournament-challenger-series.html";
const URL_GRAND_PRIX = "tournament-grand-prix.html";
const URL_LONDON_FINALS = "london-finals.html";
const URL_TRAINING = "membership.html"

//INFO
// const INFO_OPEN_PLAY = "18:00-22:00, £10 per person (£5 for Club members, FREE with Social, Open Group or Private Group add-on), No need to register"
const INFO_OPEN_PLAY = "18:00-22:00"

//TOURNAMENT COLORS
const COLOR_AYCP = "#1d29e4";
const COLOR_SPRING = "#229432";
const COLOR_SUMMER = "#2b94b7";
const COLOR_ALL_NATIONS = "#c1821c";
const COLOR_CEV = "#1cc177";
const COLOR_CHALLENGER = "#c11ca2";
const COLOR_GRAND_PRIX = "#000000";
const COLOR_LONDON_FINALS = "#ea450e";
const COLOR_DEFAULT = "#3a1d13";

var gsDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var april_events_leyton = [
	{ date: new Date("04/02/2018"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	{ date: new Date("04/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];



function renderNextEvents(eventList, beach) {
	//console.log(eventList);
	var i;
	var text = "";
	var eventDiv;
	if(beach == 'Leyton'){
		eventDiv = document.getElementById('upcomingEventLeyton');
	}else{
		eventDiv = document.getElementById('upcomingEventWorthing');
	}

	eventDiv.innerHTML = '<div class="section-heading">\
                            <h2 class="entry-title">Upcoming Events '+beach+'</h2>\
                        </div>';

	var counter = 0;
	for (i = 0; i < eventList.length; i++) {
		console.log('i : ' + i);
		var eventType = eventList[i].type;


		if (eventType == TYPE_PLAY || eventType == TYPE_TOURNAMENT) {

			// var eventName = eventList[i].name;

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var eventUrl = eventList[i].url;
			var today = new Date();

			var thisDate = new Date(eventList[i].date);
			
			if (thisDate > today) {
				//console.log('ee the date : ' + thisDate + ' ' + today + '=' + islater);

				var dayOfWeekInt = eventList[i].date.getDay();
				var dayInt = eventList[i].date.getDate();
				var monthInt = eventList[i].date.getMonth();
				var year = eventList[i].date.getFullYear();

				var htmlEvent = '\
				<div class="event-wrap d-flex flex-wrap justify-content-between">\
                            <!-- <figure class="m-0">\
                                <img src="images/event-1.jpg" alt="">\
                            </figure> -->\
\
                            <div class="event-content-wrap">\
                                <header class="entry-header d-flex flex-wrap align-items-center">\
                                    <h3 class="entry-title w-100 m-0"><a href='+ eventUrl + '>' + eventName + '</a></h3>\
\
									<div class="posted-date">\
									<p>'+ gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year + '</p>\
									<!--<a href="#">Aug 25, 2018 </a> -->\
                                    </div>\
\
                                    <!-- <div class="cats-links">\
                                         <a href="#">Ball Room New York</a>\
                                    </div>-->\
                                </header>\
\
								<!-- <div class="entry-content">\
                                    <p class="m-0">Registration for 2019 membership opens soon!</p>\
                                </div>-->\
\
                                <div class="entry-footer">\
                                    <a href='+ eventUrl + '>Read More</a>\
                                </div>\
                            </div>\
						</div>';

				eventDiv.innerHTML += htmlEvent;
			}
			// else{
			// 	console.log('ee the date : '+thisDate + ' '+today + '=' +islater);
			// }
			//dateCheck here if is in the future




		}
	}
}

renderNextEvents(april_events_leyton, "Leyton");
renderNextEvents(april_events_leyton, "Worthing");
