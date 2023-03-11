function videomandulgi1(element1) {
var videosrc1 = element1.getAttribute("data-video-src");
var videoid1 = element1.getAttribute("data-id");
return `<div><video src=` + videosrc1 + ` id="` + videoid1 + `"></video><span role="button" onclick="videoplayf1(` + videoid1 + `);"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" onclick="videopausef1(` + videoid1 + `);"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span></div>`;
}

function videoplayf1(videoelement1) {
  document.getElementById(videoelement1).play();
}
function videopausef1(videoelement1) {
  document.getElementById(videoelement1).pause();
}

var $videoplayer1tag = $("videoplayer1");
$videoplayer1tag.html(videomandulgi1($videoplayer1tag));
