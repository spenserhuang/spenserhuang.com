// ******************************************
// JQUERY ACTIONS
// ******************************************

$(document).ready(function(){
    $("#menu").hide();
    $("#menu-exit-icon").hide();
    $("#menu-tag").hide();
    $(".pg4-img-text").hide();
    $("#linkedin-white").hide();

    $("#menu-icon").hover(
        function() {
            $( "#menu-tag" ).fadeIn(500);
        },
        function() {
            $( "#menu-tag" ).fadeOut(500);
        }
    );

    $("#menu-icon").click(function(){
        $("#menu-icon").hide();
        $("#menu-tag").hide();
        $("#menu-exit-icon").fadeIn( "slow", function() {
        });
        $( "#menu" ).fadeIn( "slow", function() {
        });
    });

    $("#menu-exit-icon").click(function(){
        $("#menu-exit-icon").hide();
        $("#menu-icon").fadeIn( "slow", function() {
        });
        $( "#menu" ).fadeOut( "slow", function() {
        });
    });

    $("#down-arrow").click(function(){
        $('html, body').animate({
            scrollTop: $("#about-intro").offset().top
        }, 1000);
    });

    $("#scroll-up-icon").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $("#linkedin").mouseover(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/linkedin-with-circle.svg", "../images/linkedin-with-circle-invert.svg"));
    }).mouseout(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/linkedin-with-circle-invert.svg", "../images/linkedin-with-circle.svg"));
    });

    $("#mail").mouseover(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/mail-with-circle.svg", "../images/mail-with-circle-invert.svg"));
    }).mouseout(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/mail-with-circle-invert.svg", "../images/mail-with-circle.svg"));
    });

    $("#medium").mouseover(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/medium-with-circle.svg", "../images/medium-with-circle-invert.svg"));
    }).mouseout(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/medium-with-circle-invert.svg", "../images/medium-with-circle.svg"));
    });

    $("#instagram").mouseover(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/instagram-with-circle.svg", "../images/instagram-with-circle-invert.svg"));
    }).mouseout(function (e) {
        $(this).attr("src", $(this).attr("src").replace("../images/instagram-with-circle-invert.svg", "../images/instagram-with-circle.svg"));
    });

    // $("#pg4-row-1").mouseover(function(){
    //     $(".pg4-img-text-1").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-1").mouseleave(function(){
    //     $(".pg4-img-text-1").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-1").mouseover(function(){
    //     $("#pg4-img-1").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-1").mouseleave(function(){
    //     $("#pg4-img-1").fadeTo(1000, 1);
    // });

    // $("#pg4-row-2").mouseover(function(){
    //     $(".pg4-img-text-2").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-2").mouseleave(function(){
    //     $(".pg4-img-text-2").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-2").mouseover(function(){
    //     $("#pg4-img-2").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-2").mouseleave(function(){
    //     $("#pg4-img-2").fadeTo(1000, 1);
    // });

    // $("#pg4-row-3").mouseover(function(){
    //     $(".pg4-img-text-3").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-3").mouseleave(function(){
    //     $(".pg4-img-text-3").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-3").mouseover(function(){
    //     $("#pg4-img-3").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-3").mouseleave(function(){
    //     $("#pg4-img-3").fadeTo(1000, 1);
    // });

    // $("#pg4-row-4").mouseover(function(){
    //     $(".pg4-img-text-4").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-4").mouseleave(function(){
    //     $(".pg4-img-text-4").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-4").mouseover(function(){
    //     $("#pg4-img-4").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-4").mouseleave(function(){
    //     $("#pg4-img-4").fadeTo(1000, 1);
    // });

    // $("#pg4-row-5").mouseover(function(){
    //     $(".pg4-img-text-5").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-5").mouseleave(function(){
    //     $(".pg4-img-text-5").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-5").mouseover(function(){
    //     $("#pg4-img-5").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-5").mouseleave(function(){
    //     $("#pg4-img-5").fadeTo(1000, 1);
    // });

    // $("#pg4-row-6").mouseover(function(){
    //     $(".pg4-img-text-6").fadeIn( "slow", function() {
    //     });
    // });
    // $("#pg4-row-6").mouseleave(function(){
    //     $(".pg4-img-text-6").fadeOut( "slow", function() {
    //     });
    // });
    // $("#pg4-row-6").mouseover(function(){
    //     $("#pg4-img-6").fadeTo(1000, 0.4);
    // });
    // $("#pg4-row-6").mouseleave(function(){
    //     $("#pg4-img-6").fadeTo(1000, 1);
    // });
});

// ******************************************
// GOOGLE MAPS API
// ******************************************

// TAIPEI
function initMap() {
    var tp = {lat: 25.0330, lng: 121.5654};
    var ks = {lat: 22.6252, lng: 120.3089};
    var ny = {lat: 40.7128, lng: -74.0059};
    var ch = {lat: 41.8781, lng: -87.6298};
    var is = {lat: 31.0461, lng: 34.8516};
    var tz = {lat: -6.3690, lng: 34.8888};
    var fb = {lat: 64.8378, lng: -147.7164};
    var tl = {lat: 15.8700, lng: 100.9925};
    var ls = {lat: 19.8563, lng: 102.4955};
    var ps = {lat: 48.8566, lng: 2.3522};
    var bt = {lat: 27.5142, lng: 90.4336};
    var pr = {lat: 18.2208, lng: -66.5901};
    var sf = {lat: 37.7749, lng: -122.4194};
    var la = {lat: 34.0522, lng: -118.2437};
    var mt = {lat: 45.5017, lng: -73.5673};
    var bs = {lat: 42.3601, lng: -71.0589};
    var sh = {lat: 31.2304, lng: 121.4737};
    var im = {lat: 40.8174, lng: 111.7663};
    var cl = {lat: 41.4993, lng: -81.6944};
    var dc = {lat: 38.9072, lng: -77.0369};
    var al = {lat: 41.1533, lng: 20.1683};
    var ko = {lat: 42.6675, lng: 21.16619};
    var mu = {lat: 48.1351, lng: 11.5820};
    var vn = {lat: 54.6872, lng: 25.2797};
    var cd = {lat: 43.2548, lng: 6.6379};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 30, lng: 0}
    });

var tpContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Taipei</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited December, 2016</p>'+
'</div>'+
'</div>';

var tpInfowindow = new google.maps.InfoWindow({
    content: tpContentString
});

var tpMarker = new google.maps.Marker({
    position: tp,
    map: map,
    title: 'Taipei'
});

tpMarker.addListener('click', function() {
    tpInfowindow.open(map, tpMarker);
});

// KAOHSIUNG
var ksContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Kaohsiung</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited December, 2016</p>'+
'</div>'+
'</div>';

var ksInfowindow = new google.maps.InfoWindow({
    content: ksContentString
});

var ksMarker = new google.maps.Marker({
    position: ks,
    map: map,
    title: 'Kaohsiung'
});

ksMarker.addListener('click', function() {
    ksInfowindow.open(map, ksMarker);
});

// NYC
var nyContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">New York City</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited September, 2016</p>'+
'</div>'+
'</div>';

var nyInfowindow = new google.maps.InfoWindow({
    content: nyContentString
});

var nyMarker = new google.maps.Marker({
    position: ny,
    map: map,
    title: 'New York City'
});

nyMarker.addListener('click', function() {
    nyInfowindow.open(map, nyMarker);
});

// CHICAGO
var chContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Chicago</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited March, 2017</p>'+
'</div>'+
'</div>';

var chInfowindow = new google.maps.InfoWindow({
    content: chContentString
});

var chMarker = new google.maps.Marker({
    position: ch,
    map: map,
    title: 'Chicago'
});

chMarker.addListener('click', function() {
    chInfowindow.open(map, chMarker);
});

// ISRAEL
var isContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Israel</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited September, 2016</p>'+
'</div>'+
'</div>';

var isInfowindow = new google.maps.InfoWindow({
    content: isContentString
});

var isMarker = new google.maps.Marker({
    position: is,
    map: map,
    title: 'Israel'
});

isMarker.addListener('click', function() {
    isInfowindow.open(map, isMarker);
});

// TANZANIA
var tzContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Tanzania</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited June, 2013</p>'+
'</div>'+
'</div>';

var tzInfowindow = new google.maps.InfoWindow({
    content: tzContentString
});

var tzMarker = new google.maps.Marker({
    position: tz,
    map: map,
    title: 'Tanzania'
});

tzMarker.addListener('click', function() {
    tzInfowindow.open(map, tzMarker);
});

// FAIRBANKS
var fbContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Fairbanks</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited November, 2015</p>'+
'</div>'+
'</div>';

var fbInfowindow = new google.maps.InfoWindow({
    content: fbContentString
});

var fbMarker = new google.maps.Marker({
    position: fb,
    map: map,
    title: 'Fairbanks'
});

fbMarker.addListener('click', function() {
    fbInfowindow.open(map, fbMarker);
});

// THAILAND
var tlContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Thailand</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited July, 2013</p>'+
'</div>'+
'</div>';

var tlInfowindow = new google.maps.InfoWindow({
    content: tlContentString
});

var tlMarker = new google.maps.Marker({
    position: tl,
    map: map,
    title: 'Thailand'
});

tlMarker.addListener('click', function() {
    tlInfowindow.open(map, tlMarker);
});

// LAOS
var lsContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Laos</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited July, 2013</p>'+
'</div>'+
'</div>';

var lsInfowindow = new google.maps.InfoWindow({
    content: lsContentString
});

var lsMarker = new google.maps.Marker({
    position: ls,
    map: map,
    title: 'Laos'
});

lsMarker.addListener('click', function() {
    lsInfowindow.open(map, lsMarker);
});

// Paris
var psContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Paris</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited December, 2017</p>'+
'</div>'+
'</div>';

var psInfowindow = new google.maps.InfoWindow({
    content: psContentString
});

var psMarker = new google.maps.Marker({
    position: ps,
    map: map,
    title: 'psance'
});

psMarker.addListener('click', function() {
    psInfowindow.open(map, psMarker);
});

// Bhutan
var btContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Bhutan</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited January, 2015</p>'+
'</div>'+
'</div>';

var btInfowindow = new google.maps.InfoWindow({
    content: btContentString
});

var btMarker = new google.maps.Marker({
    position: bt,
    map: map,
    title: 'Bhutan'
});

btMarker.addListener('click', function() {
    btInfowindow.open(map, btMarker);
});

// PUERTO RICO
var prContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Puerto Rico</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited February, 2017</p>'+
'</div>'+
'</div>';

var prInfowindow = new google.maps.InfoWindow({
    content: prContentString
});

var prMarker = new google.maps.Marker({
    position: pr,
    map: map,
    title: 'Puerto Rico'
});

prMarker.addListener('click', function() {
    prInfowindow.open(map, prMarker);
});

// SAN FRANCISCO
var sfContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">San Francisco</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited August, 2016</p>'+
'</div>'+
'</div>';

var sfInfowindow = new google.maps.InfoWindow({
    content: sfContentString
});

var sfMarker = new google.maps.Marker({
    position: sf,
    map: map,
    title: 'San Francisco'
});

sfMarker.addListener('click', function() {
    sfInfowindow.open(map, sfMarker);
});

// LOS ANGELES
var laContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Los Angeles</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited March, 2016</p>'+
'</div>'+
'</div>';

var laInfowindow = new google.maps.InfoWindow({
    content: laContentString
});

var laMarker = new google.maps.Marker({
    position: la,
    map: map,
    title: 'Los Angeles'
});

laMarker.addListener('click', function() {
    laInfowindow.open(map, laMarker);
});

// MONTREAL
var mtContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Montreal</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited November, 2016</p>'+
'</div>'+
'</div>';

var mtInfowindow = new google.maps.InfoWindow({
    content: mtContentString
});

var mtMarker = new google.maps.Marker({
    position: mt,
    map: map,
    title: 'Montreal'
});

// BOSTON
var bsContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Boston</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited September, 2015</p>'+
'</div>'+
'</div>';

var bsInfowindow = new google.maps.InfoWindow({
    content: bsContentString
});

var bsMarker = new google.maps.Marker({
    position: bs,
    map: map,
    title: 'Boston'
});

bsMarker.addListener('click', function() {
    bsInfowindow.open(map, bsMarker);
});

// SHANGHAI
var shContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Shanghai</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited August, 2016</p>'+
'</div>'+
'</div>';

var shInfowindow = new google.maps.InfoWindow({
    content: shContentString
});

var shMarker = new google.maps.Marker({
    position: sh,
    map: map,
    title: 'Shanghai'
});

shMarker.addListener('click', function() {
    shInfowindow.open(map, shMarker);
});

// INNER MONGOLIA
var imContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Inner Mongolia</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited September, 2014</p>'+
'</div>'+
'</div>';

var imInfowindow = new google.maps.InfoWindow({
    content: imContentString
});

var imMarker = new google.maps.Marker({
    position: im,
    map: map,
    title: 'Inner Mongolia'
});

imMarker.addListener('click', function() {
    imInfowindow.open(map, imMarker);
});

// CLEVELAND
var clContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Cleveland</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited August, 2014</p>'+
'</div>'+
'</div>';

var clInfowindow = new google.maps.InfoWindow({
    content: clContentString
});

var clMarker = new google.maps.Marker({
    position: cl,
    map: map,
    title: 'Cleveland'
});

clMarker.addListener('click', function() {
    clInfowindow.open(map, clMarker);
});

// WASHINGTON DC
var dcContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Washington DC</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited July, 2014</p>'+
'</div>'+
'</div>';
var dcInfowindow = new google.maps.InfoWindow({
    content: dcContentString
});

var dcMarker = new google.maps.Marker({
    position: dc,
    map: map,
    title: 'Washington DC'
});

dcMarker.addListener('click', function() {
    dcInfowindow.open(map, dcMarker);
});

// ALBANIA
var alContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Albania</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited November, 2017</p>'+
'</div>'+
'</div>';
var alInfowindow = new google.maps.InfoWindow({
    content: alContentString
});

var alMarker = new google.maps.Marker({
    position: al,
    map: map,
    title: 'Albania'
});

alMarker.addListener('click', function() {
    alInfowindow.open(map, alMarker);
});

// KOSOVO
var koContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Kosovo</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited November, 2017</p>'+
'</div>'+
'</div>';
var koInfowindow = new google.maps.InfoWindow({
    content: koContentString
});

var koMarker = new google.maps.Marker({
    position: ko,
    map: map,
    title: 'Kosovo'
});

koMarker.addListener('click', function() {
    koInfowindow.open(map, koMarker);
});

// MUNICH
var muContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Munich</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited September, 2017</p>'+
'</div>'+
'</div>';
var muInfowindow = new google.maps.InfoWindow({
    content: muContentString
});

var muMarker = new google.maps.Marker({
    position: mu,
    map: map,
    title: 'Munich'
});

muMarker.addListener('click', function() {
    muInfowindow.open(map, muMarker);
});

// VILNIUS
var vnContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Vilnius</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited October, 2017</p>'+
'</div>'+
'</div>';
var vnInfowindow = new google.maps.InfoWindow({
    content: vnContentString
});

var vnMarker = new google.maps.Marker({
    position: vn,
    map: map,
    title: 'Vilnius'
});

vnMarker.addListener('click', function() {
    vnInfowindow.open(map, vnMarker);
});

// COTES D'AZUR
var cdContentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Cotes D\'Azur</h1>'+
'<div id="bodyContent">'+
'<p>' +
'Last visited October, 2017</p>'+
'</div>'+
'</div>';
var cdInfowindow = new google.maps.InfoWindow({
    content: cdContentString
});

var cdMarker = new google.maps.Marker({
    position: cd,
    map: map,
    title: 'Cotes D\'Azur'
});

cdMarker.addListener('click', function() {
    cdInfowindow.open(map, cdMarker);
});

// ******************************************
// GOOGLE MAPS TEXT OVERLAY
// ******************************************

var myControl = document.getElementById('mapTitle');
map.controls[google.maps.ControlPosition.TOP_CENTER].push(myControl);
}
