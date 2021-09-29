function getTournaments(year) {

    //M=Men, W=Women, M-W=Men&Women, Mi=Mixed, >Men - Women - Mixed=Men&Women&Mixed, 
    // Κρητη = kriti, Στερεα Ελλαδα = sterea_ellada, Μακεδονια = macedonia, Αιγαιο = aegean, Θρακη = thraki, Ηπειρος = ipiros, Θεσσαλια = thessalia
    return [{
            startingDate: new Date("06/04/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Chania Full Moon",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("06/14/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Candia Beach",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("06/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Kings and Queens",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("07/04/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Athens Champion 1",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "sterea_ellada",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("07/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 2",
            type: "Men - Womend",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("07/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 3",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("08/04/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 4",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("11/04/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Chania Full Moon 2",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("10/11/2020"),
            endingDate: new Date("03/10/2020"),
            name: "Now tournament",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("10/11/2020"),
            endingDate: new Date("03/10/2020"),
            name: "Athens Now tournament",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "sterea_ellada",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("11/14/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Candia Beach 2",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("11/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Kings and Queens 2",
            type: "Men - Women - Mixed",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("12/04/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Athens Champion 5",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "sterea_ellada",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("12/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 6",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("12/24/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 7",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        },
        {
            startingDate: new Date("12/25/2020"),
            endingDate: new Date("05/06/2020"),
            name: "Creta Champion 8",
            type: "Men - Women",
            info: "10.30am - 7:30pm, all levels are welcome!",
            location: "kriti",
            level: "***",
            id: "tournament?id=1234"
        }
    ];
}

function sameDay(d1, d2) {

    // console.log("d1:" + d1.getUTCFullYear() + "/" + d1.getUTCMonth() + "/" + d1.getUTCDate());
    // console.log("d2:" + d2.getUTCFullYear() + "/" + d2.getUTCMonth() + "/" + d2.getUTCDate());

    return d1.getUTCFullYear() == d2.getUTCFullYear() &&
        d1.getUTCMonth() == d2.getUTCMonth() &&
        d1.getUTCDate() == d2.getUTCDate();
}

function renderAllTournaments(tournaments) {
    var allTournaments = '';



    tournaments.forEach(element => {
        allTournaments += renderTournament(element)
    });
    return allTournaments;
}

function renderTournament(element) {
    //inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)
    var today = new Date();
    var tournamentDate = new Date(element.startingDate);
    //var filterClass = 'now'; //s1 oncoming, s2 now, s3 past 
    if (tournamentDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
        filterClass = 'past';
        //console.log(element.name + ":" + "past");
    }
    if (tournamentDate.setHours(0, 0, 0, 0) > today.setHours(0, 0, 0, 0)) {
        filterClass = 'oncoming';
        //console.log(element.name + ":" + "oncoming");
    }
    if (tournamentDate.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0)) {
        filterClass = 'now';
        //console.log(element.name + ":" + "now");
    }


    var startingDateStr = element.startingDate.getUTCDate() + "/" + element.startingDate.getUTCMonth() + "/" + element.startingDate.getUTCFullYear();
    var endingDateStr = element.endingDate.getUTCDate() + "/" + element.endingDate.getUTCMonth() + "/" + element.endingDate.getUTCFullYear();
    var tournament = '\
    <div class="episode  flex-row align-items-start justify-content-start filterDiv  ' + element.location + ' ' + filterClass + '">\
<div>\
    <div class="episode_image">\
        <img src="../images/tournament-1-300x306.jpg" alt="">\
        <div class="tags">\
            <ul class="d-flex flex-row align-items-start justify-content-start">\
                <li><a href="#">***</a></li>\
                <!-- <li>***</li> -->\
            </ul>\
        </div>\
    </div>\
</div>\
<div class="episode_content">\
    <div class="episode_name"><a href="' + element.id + '">' + element.name + '</a></div>\
    <div class="episode_date">' + startingDateStr + ' - ' + endingDateStr + '</div>\
    <div class="show_info d-flex flex-row align-items-start justify-content-start">\
        <div class="show_fav d-flex flex-row align-items-center justify-content-start">\
            <!-- <div class="show_fav_icon show_info_icon"><img class="svg" src="../images/heart.svg" alt=""></div> -->\
            <div class="show_fav_count">' + element.level + '</div>\
            <div class="show_comments_count">' + element.type + '</div>\
        </div>\
    </div>\
    <!-- Player -->\
    <div class="single_player_container">\
        <div class="single_player d-flex flex-row align-items-center justify-content-start">\
            <div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">\
                <div class="jp-type-single">\
                    <div class="player_controls">\
                        <p class="text">10.30am - 7:30pm, all levels are welcome!</p>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
</div>';
    return tournament;
}

function renderTournaments() {

    var tournaments = document.getElementById('tournaments');

    tournaments.innerHTML = renderAllTournaments(getTournaments(2020));
}