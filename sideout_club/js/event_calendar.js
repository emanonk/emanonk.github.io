/*
final edition should be a framework that will read the list of the event objects and it will create title-table-rows per month
*/

// function mylog(){
//   console.log("ekana click");
// }
// document.getElementById("leytonButton").onclick = function() {mylog()};

//TOURNAMENT NAMEs
const NAME_AYCP = "All You Can Play";
const NAME_SPRING = "all-you-can-play.html";
const NAME_SUMMER = "all-you-can-play.html";
const NAME_ALL_NATIONS = "all-you-can-play.html";
const NAME_CEV = "all-you-can-play.html";
const NAME_CHALLENGER = "all-you-can-play.html";
const NAME_GRAND_PRIX = "all-you-can-play.html";
const NAME_LONDON_FINALS = "all-you-can-play.html";

//TOURNAMENT TYPES
const TYPE_TOURNAMENT = "Tournament";
const TYPE_PLAY = "Play";
const TYPE_TRAINING = "Training";

//EVENT LINKS
const URL_AYCP = "all-you-can-play.html";
const URL_SPRING = "all-you-can-play.html";
const URL_SUMMER = "all-you-can-play.html";
const URL_ALL_NATIONS = "all-you-can-play.html";
const URL_CEV = "all-you-can-play.html";
const URL_CHALLENGER = "all-you-can-play.html";
const URL_GRAND_PRIX = "all-you-can-play.html";
const URL_LONDON_FINALS = "all-you-can-play.html";


//TOURNAMENT COLORS
const COLOR_AYCP          = "#1d29e4";
const COLOR_SPRING        = "#229432";
const COLOR_SUMMER        = "#2b94b7";
const COLOR_ALL_NATIONS   = "#c1821c";
const COLOR_CEV           = "#1cc177";
const COLOR_CHALLENGER    = "#c11ca2";
const COLOR_GRAND_PRIX    = "#000000";
const COLOR_LONDON_FINALS = "#ea450e";
const COLOR_PARTY         = "#3a1d13";

var gsDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
var april_events = [
	{date: new Date("04/06/2019"), name: NAME_AYCP, type: TYPE_TOURNAMENT, info: "info1", url:URL_AYCP},
	{date: new Date("04/07/2019"), name: NAME_AYCP, type: TYPE_TOURNAMENT, info: "info1", url:URL_AYCP}
];

// function daysInMonth(month,year) {
//   return new Date(year, month, 0).getDate();
// }

function renderApril(eventList, elementId, filter, dateCheck){
	//console.log("RENDER APRIL");
	var i;
	var text = "";
	
	for (i = 0; i < eventList.length; i++) { 

		var eventType = eventList[i].type;

		if(eventType=='all' || eventType==filter){

		}
		var eventName = eventList[i].name;
		var eventInfo = eventList[i].info;
		var eventUrl = eventList[i].url;


		//dateCheck here if is in the future
		var dayOfWeekInt = eventList[i].date.getDay();
		var dayInt =  eventList[i].date.getDate();
		var monthInt = eventList[i].date.getMonth();
		var year = eventList[i].date.getFullYear();

		var color;
		
		switch(eventName) {
  			case NAME_AYCP:
    			color = COLOR_AYCP
    			break;
  			case NAME_SPRING:
    			color = COLOR_SPRING
    			break;
    		case NAME_SUMMER:
    			color = COLOR_SUMMER
    			break;
  			default:
    			color = COLOR_SUMMER
		}

		text += "<tr class=\"row100 body\">\
      			<td class=\"cell100 column1X\">"+ gsDayNames[dayOfWeekInt] + " " + dayInt  + " "+months[monthInt]+" "+  year+"</td>\
      			<td class=\"cell100 columnX\"><a style=\"color:"+color+"\" href="+eventUrl+">"+eventName+"</a></td>\
      			<td class=\"cell100 columnX\">"+eventType+"</td>\
      			<td class=\"cell100 columnX\">"+eventInfo+"</td></tr>";
      			console.log(text);
	}

	//console.log(text);
	var aprilTable = document.getElementById(elementId);
	aprilTable.innerHTML = "<table><tbody>" + text + "</tbody></table>";
}

function eventController(){
	renderApril(april_events,'april-table', 'all','');	
}

eventController();



