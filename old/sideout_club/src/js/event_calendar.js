/*
final edition should be a framework that will read the list of the event objects and it will create title-table-rows per month
*/

// function mylog(){
//   console.log("ekana click");
// }
// document.getElementById("leytonButton").onclick = function() {mylog()};

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
	{ date: new Date("04/06/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "10.30am - 7:30pm, all levels are welcome!", url: URL_AYCP },
	{ date: new Date("04/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/08/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/09/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/10/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/11/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/12/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/13/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/14/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/15/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/16/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/17/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/18/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/19/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/20/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/21/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/22/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/27/2019"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	{ date: new Date("04/28/2019"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SPRING },
	{ date: new Date("04/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var may_events_leyton = [
	{ date: new Date("05/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/04/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("05/05/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("05/06/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/11/2019"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_ALL_NATIONS },
	{ date: new Date("05/12/2019"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MIXED, url: URL_ALL_NATIONS },
	{ date: new Date("05/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/18/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("05/19/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/25/2019"), name: NAME_CEV, type: TYPE_TOURNAMENT, info: "", url: URL_CEV },
	{ date: new Date("05/26/2019"), name: NAME_CEV, type: TYPE_TOURNAMENT, info: "", url: URL_CEV },
	{ date: new Date("05/27/2019"), name: "Venue closed", type: "-", info: "", url: "" },
	{ date: new Date("05/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/31/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var june_events_leyton = [
	{ date: new Date("06/01/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/02/2019"), name: "King & Queen of the Court", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	{ date: new Date("06/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/04/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/06/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/08/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("06/09/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("06/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/11/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/15/2019"), name: "'1, 2, BBQ!' Old School Tournie", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	{ date: new Date("06/16/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/18/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/22/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("06/23/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/27/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/29/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/30/2019"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_GRAND_PRIX },
	{ date: new Date("06/30/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var july_events_leyton = [
	{ date: new Date("07/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/04/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/06/2019"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_ALL_NATIONS },
	{ date: new Date("07/07/2019"), name: NAME_ALL_NATIONS, type: TYPE_TOURNAMENT, info: MIXED, url: URL_ALL_NATIONS },
	{ date: new Date("07/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/11/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/13/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("07/14/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("07/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/18/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/20/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/21/2019"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_GRAND_PRIX },
	{ date: new Date("07/21/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/27/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/28/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("07/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/31/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var august_events_leyton = [
	{ date: new Date("08/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/03/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/04/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/06/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/10/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("08/11/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("08/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/17/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("08/18/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/24/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/25/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/26/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/27/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/31/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var september_events_leyton = [
	{ date: new Date("09/01/2019"), name: NAME_GRAND_PRIX, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_GRAND_PRIX },
	{ date: new Date("09/01/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/07/2019"), name: NAME_LONDON_FINALS, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_LONDON_FINALS },
	{ date: new Date("09/08/2019"), name: NAME_LONDON_FINALS, type: TYPE_TOURNAMENT, info: MIXED + " + M & W semis and finals", url: URL_LONDON_FINALS },
	{ date: new Date("09/14/2019"), name: "Polonia's One More Beach Tournie", type: TYPE_TOURNAMENT, info: "M & W & Mixed", url: URL_TRAINING },
	{ date: new Date("09/15/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("09/17/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("09/18/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("09/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("09/21/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/22/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/28/2019"), name: NAME_END_OF_SEASON_PARTY, type: "", info: "", url: "" }
];

//WOTHRING
var april_events_worthing = [
	{ date: new Date("04/06/2019"), name: "Official Opening. Free play, all day!", type: TYPE_PLAY, info: "", url: "" },
	{ date: new Date("04/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/08/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/09/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/10/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/11/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/12/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/13/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/14/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/15/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/16/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/17/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/18/2019"), name: NAME_OPEN_PLAY, type: TYPE_PLAY, info: INFO_OPEN_PLAY, url: "#" },
	{ date: new Date("04/19/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/20/2019"), name: "Private bookings", type: "-", info: "", url: "" },
	{ date: new Date("04/21/2019"), name: "Private bookings", type: "-", info: "", url: "" },
	{ date: new Date("04/22/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("04/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/27/2019"), name: NAME_SPRING, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SPRING },
	{ date: new Date("04/28/2019"), name: "Mix 'n' Match", type: TYPE_TOURNAMENT, info: MIXED, url: "" },
	{ date: new Date("04/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("04/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var may_events_worthing = [
	{ date: new Date("05/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/04/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/05/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/06/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/11/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("05/12/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("05/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/18/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/19/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("05/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/25/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/26/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/27/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("05/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("05/31/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var june_events_worthing = [
	{ date: new Date("06/01/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("06/02/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("06/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/04/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/06/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/08/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/09/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/11/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/15/2019"), name: "'Combi 60'", type: TYPE_TOURNAMENT, info: "", url: "" },
	{ date: new Date("06/16/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/18/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/22/2019"), name: "King & Queen of the Court", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	{ date: new Date("06/23/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("06/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/27/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("06/29/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("06/30/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP }
];

var july_events_worthing = [
	{ date: new Date("07/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/03/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/04/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/06/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/10/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/11/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/13/2019"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Men", url: "" },
	{ date: new Date("07/14/2019"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Women", url: "" },
	{ date: new Date("07/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/17/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/18/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/20/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/21/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("07/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/24/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/25/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/26/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/27/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("07/28/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("07/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("07/31/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING }
];

var august_events_worthing = [
	{ date: new Date("08/01/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/02/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/03/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/04/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/05/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/06/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/07/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/08/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/09/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/10/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("08/11/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/12/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/13/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/14/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/15/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/16/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/17/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/18/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/19/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/20/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/21/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/22/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/23/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/24/2019"), name: "'1, 2, BBQ!' Old School Tournie", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	{ date: new Date("08/25/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("08/26/2019"), name: "King & Queen of the Court", type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: "" },
	{ date: new Date("08/27/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/28/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/29/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/30/2019"), name: NAME_TRAINING, type: TYPE_TRAINING, info: "", url: URL_TRAINING },
	{ date: new Date("08/31/2019"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Women", url: "" }
];

var september_events_worthing = [
	{ date: new Date("09/01/2019"), name: "SideOut South Coast Grand Prix", type: TYPE_TOURNAMENT, info: "Men", url: "" },
	{ date: new Date("09/07/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/08/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/14/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/15/2019"), name: NAME_CHALLENGER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_CHALLENGER },
	{ date: new Date("09/21/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MEN_N_WOMEN, url: URL_SUMMER },
	{ date: new Date("09/22/2019"), name: NAME_SUMMER, type: TYPE_TOURNAMENT, info: MIXED, url: URL_SUMMER },
	{ date: new Date("09/28/2019"), name: NAME_AYCP, type: TYPE_PLAY, info: "", url: URL_AYCP },
	{ date: new Date("09/29/2019"), name: NAME_END_OF_SEASON_PARTY, type: "", info: "", url: "" }
];


const TABLE_HEADER =
	'<table>\
	<thead>\
		<tr class="row100 head">\
			<th class="cell100 column1X">Date</th>\
			<th class="cell100 columnX">Event Name</th>\
			<th class="cell100 columnX">Event Type</th>\
			<th class="cell100 columnX">Info</th>\
		</tr>\
	</thead>\
</table>';

function renderMonthTable(eventList, elementId, filter, dateCheck) {
	//console.log(eventList);
	var i;
	var text = "";

	for (i = 0; i < eventList.length; i++) {
		//console.log('i:' + i);
		var eventType = eventList[i].type;

		if (filter == 'display-all' || filter == eventType) {

			var eventName = eventList[i].name;
			var eventInfo = eventList[i].info;
			var eventDate = eventList[i].date;
			var eventUrl = eventList[i].url;

			//dateCheck here if is in the future
			var today = new Date();
			var thisDate = new Date(eventDate);
			var appendEvent = true;
			if (thisDate < today && dateCheck) {
				appendEvent = false;
			}

			if (appendEvent) {

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

				var color;

				switch (eventName) {
					case NAME_AYCP:
						color = COLOR_AYCP;
						break;
					case NAME_SPRING:
						color = COLOR_SPRING;
						break;
					case NAME_SUMMER:
						color = COLOR_SUMMER;
						break;
					case NAME_ALL_NATIONS:
						color = COLOR_ALL_NATIONS;
						break;
					case NAME_CHALLENGER:
						color = COLOR_CHALLENGER;
						break;
					case NAME_GRAND_PRIX:
						color = COLOR_GRAND_PRIX;
						break;
					case NAME_LONDON_FINALS:
						color = COLOR_LONDON_FINALS;
						break;
					case NAME_CEV:
						color = COLOR_CEV;
						break;
					default:
						color = COLOR_DEFAULT;
				}

				text += "<tr class=\"row100 body\">\
      			<td class=\"cell100 column1X\">"+ gsDayNames[dayOfWeekInt] + " " + dayInt + " " + months[monthInt] + " " + year + "</td>\
      			<td class=\"cell100 columnX\"><a style=\"color:"+ color + "\" href=" + eventUrl + ">" + eventName + "</a></td>\
      			<td class=\"cell100 columnX\">"+ eventType + "</td>\
      			<td class=\"cell100 columnX\">"+ eventInfo + "</td></tr>";
				//console.log(text);
			}
		}
	}
	var aprilTable = document.getElementById(elementId);
	aprilTable.innerHTML = "<table><tbody>" + text + "</tbody></table>";
}

function filterButtons(filter) {

	//btn gradient-bg - btn red-border 

	var buttonAll = "btn red-border";
	var buttonTournament = "btn red-border";
	var buttonPlay = "btn red-border";
	var buttonTraining = "btn red-border";

	switch (filter) {
		case TYPE_TOURNAMENT:
			buttonTournament = "btn gradient-bg";
			break;
		case TYPE_PLAY:
			buttonPlay = "btn gradient-bg";
			break;
		case TYPE_TRAINING:
			buttonTraining = "btn gradient-bg";
			break;
		default:
			buttonAll = "btn gradient-bg";
	}

	document.getElementById('filter-buttons').innerHTML =
		"<a onclick=\"eventController('display-all')\" href=\"#\" style='width: 250px' class=\" " + buttonAll + " \">All Events</a>\
    <a onclick=\"eventController('Tournament')\" href=\"#\" style='width: 250px' class=\" "+ buttonTournament + " \">Tournaments</a>\
    <a onclick=\"eventController('Play')\" href=\"#\" style='width: 250px' class=\" "+ buttonPlay + " \">Play</a>\
    <a onclick=\"eventController('Training')\" href=\"#\" style='width: 250px' class=\" "+ buttonTraining + " \">Training</a>";
}

function eventController(filter,dateFilter) {
	
	filterButtons(filter);
	var url = window.location.href;
	var isleyton = url.includes("calendar-leyton");


	document.getElementById('table-header-april').innerHTML = TABLE_HEADER;
	document.getElementById('table-header-may').innerHTML = TABLE_HEADER;
	document.getElementById('table-header-june').innerHTML = TABLE_HEADER;
	document.getElementById('table-header-july').innerHTML = TABLE_HEADER;
	document.getElementById('table-header-august').innerHTML = TABLE_HEADER;
	document.getElementById('table-header-september').innerHTML = TABLE_HEADER;

	if (isleyton) {
		renderMonthTable(april_events_leyton, 'april-table', filter, dateFilter);
		renderMonthTable(may_events_leyton, 'may-table', filter, dateFilter);
		renderMonthTable(june_events_leyton, 'june-table', filter, dateFilter);
		renderMonthTable(july_events_leyton, 'july-table', filter, dateFilter);
		renderMonthTable(august_events_leyton, 'august-table', filter, dateFilter);
		renderMonthTable(september_events_leyton, 'september-table', filter, dateFilter);
	} else {
		renderMonthTable(april_events_worthing, 'april-table', filter, dateFilter);
		renderMonthTable(may_events_worthing, 'may-table', filter, dateFilter);
		renderMonthTable(june_events_worthing, 'june-table', filter, dateFilter);
		renderMonthTable(july_events_worthing, 'july-table', filter, dateFilter);
		renderMonthTable(august_events_worthing, 'august-table', filter, dateFilter);
		renderMonthTable(september_events_worthing, 'september-table', filter, dateFilter);
	}
}


function renderNextEvents(eventList, beach, counter) {

	if (counter == 3) {
		return 3;
	}

	var i;
	var text = "";
	var eventDiv;
	if (beach == 'Leyton') {
		eventDiv = document.getElementById('upcomingEventLeyton');
	} else {
		eventDiv = document.getElementById('upcomingEventWorthing');
	}

	eventDiv.innerHTML = '<div class="section-heading">\
                            <h2 class="entry-title">Upcoming Events '+ beach + '</h2>\
                        </div>';


	for (i = 0; i < eventList.length; i++) {

		var eventType = eventList[i].type;

		if ((eventType == TYPE_PLAY || eventType == TYPE_TOURNAMENT) && counter < 3) {

			var eventName = eventList[i].name;
			var eventDate = eventList[i].date;
			var eventUrl = eventList[i].url;
			var today = new Date();

			var thisDate = new Date(eventDate);

			if (thisDate > today) {
				

				var dayOfWeekInt = eventDate.getDay();
				var dayInt = eventDate.getDate();
				var monthInt = eventDate.getMonth();
				var year = eventDate.getFullYear();

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
				counter++;
				eventDiv.innerHTML += htmlEvent;
			}

		}
	}
	return counter;
}
//console.log("Page location is " + window.location.href);


//run
var path = window.location.pathname;
var page = path.split("/").pop();
//console.log( page );
if (page == 'index.html') {
	
	var counterLeyton = renderNextEvents(april_events_leyton, "Leyton", 0);
	counterLeyton = renderNextEvents(may_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(june_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(july_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(august_events_leyton, "Leyton", counterLeyton);
	counterLeyton = renderNextEvents(september_events_leyton, "Leyton", counterLeyton);

	var counterWorthing = renderNextEvents(april_events_worthing, "Worthing", 0);	
	counterWorthing = renderNextEvents(may_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(june_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(july_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(august_events_worthing, "Worthing", counterWorthing);
	counterWorthing = renderNextEvents(september_events_worthing, "Worthing", counterWorthing);
}
//event pages with dateFilter
if (page == 'calendar-leyton.html' || page == 'calendar-worthing.html'){
	eventController('display-all',true);
}
//event pages without dateFilter


