function getTimeFilter() {
    var filters = document.getElementById('filters');
    //console.log("element:" + filters.className);
    filterArray = filters.className.split(" ");
    var timeFilter = filterArray[0];
    //console.log("timeFilter:" + timeFilter);
    return timeFilter;
}

function getLocationFilter() {
    var filters = document.getElementById('filters');
    //console.log("element:" + filters.className);
    filterArray = filters.className.split(" ");
    var locationFilter = filterArray[1];
    //console.log("locationFilter:" + locationFilter);
    return locationFilter;
}

function filterSelection() {

    var timeFilter = getTimeFilter()
    var locationFilter = getLocationFilter()

    elements = document.getElementsByClassName("filterDiv");
    if (timeFilter == "all") {
        timeFilter = "";
        //locationFilter = "";
    }

    for (var i = 0; i < elements.length; i++) {
        w3RemoveClass(elements[i], "d-flex");
        //console.log("Remove:" + elements[i].innerHTML);


        var timeFilterOk = elements[i].className.indexOf(timeFilter) > -1;
        var locationFilterOk = elements[i].className.indexOf(locationFilter) > -1;
        //console.log("1: " + timeFilterOk);
        //console.log("2: " + locationFilterOk);

        if (timeFilterOk && locationFilterOk) {
            w3AddClass(elements[i], "d-flex");
            //console.log("->Add:" + elements[i].innerHTML);
        };
    }
}


function changeTimeMenuActiveClass(timeFilter) {
    var menu = document.getElementById('filterMenu');

    var past = "";
    var now = "";
    var oncoming = "";
    if (timeFilter === "oncoming") {
        oncoming = "active";
    }
    if (timeFilter === "now") {
        now = "active";
    }
    if (timeFilter === "past") {
        past = "active";
    }

    menu.innerHTML = '<ul class="d-flex flex-row align-items-start justify-content-center flex-wrap">\
        <li class="btn ' + oncoming + '" onclick="changeTimeMenuActiveClass(\'oncoming\')">Επομενα</li>\
        <li class="btn ' + now + '" onclick="changeTimeMenuActiveClass(\'now\')">Συμβαινουν τωρα</li>\
        <li class="btn ' + past + '" onclick="changeTimeMenuActiveClass(\'past\')">Εγιναν φετος</li>\
    </ul>';

    var locationFilter = getLocationFilter()
    var timeMenu = document.getElementById('filter-data');
    timeMenu.innerHTML = '<div id="filters" class="' + timeFilter + ' ' + locationFilter + '"></div>';
    filterSelection();
}

function changeLocationMenuActiveClass(locationFilter) {
    var menu = document.getElementById('location-menu');

    var sterea_ellada = "";
    var kriti = "";
    var macedonia = "";
    var eagean = "";
    var thraki = "";
    var ipiros = "";
    var thessalia = "";

    if (locationFilter === "sterea_ellada") {
        sterea_ellada = "active";
    }
    if (locationFilter === "kriti") {
        kriti = "active";
    }
    if (locationFilter === "macedonia") {
        macedonia = "active";
    }
    if (locationFilter === "eagean") {
        eagean = "active";
    }
    if (locationFilter === "thraki") {
        thraki = "active";
    }
    if (locationFilter === "ipiros") {
        ipiros = "active";
    }
    if (locationFilter === "thessalia") {
        thessalia = "active";
    }

    menu.innerHTML = '\
    <li ><a class="btn ' + sterea_ellada + '" onclick="changeLocationMenuActiveClass(\'sterea_ellada\')">Στερεα Ελλαδα</a></li>\
    <li ><a class="btn ' + macedonia + '" onclick="changeLocationMenuActiveClass(\'macedonia\')">Μακεδονια</a></li>\
    <li ><a class="btn ' + kriti + '" onclick="changeLocationMenuActiveClass(\'kriti\')">Κρητη</a></li>\
    <li ><a class="btn ' + eagean + '" onclick="changeLocationMenuActiveClass(\'eagean\')">Αιγαιο</a></li>\
    <li ><a class="btn ' + thraki + '"onclick="changeLocationMenuActiveClass(\'thraki\')">Θρακη</a></li>\
    <li ><a class="btn ' + ipiros + '" onclick="changeLocationMenuActiveClass(\'ipiros\')">Ηπειρος</a></li>\
    <li ><a class="btn ' + thessalia + '" onclick="changeLocationMenuActiveClass(\'thessalia\')">Θεσσαλια</a>\
    </li>';

    var timeFilter = getTimeFilter();
    var timeMenu = document.getElementById('filter-data');
    timeMenu.innerHTML = '<div id="filters" class="' + timeFilter + ' ' + locationFilter + '"></div>';
    filterSelection();
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}