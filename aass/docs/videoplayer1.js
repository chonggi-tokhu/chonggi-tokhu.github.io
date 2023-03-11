var $videoplayer1tag = $("videoplayer1");
var videosrc1 = document.getElementsByTagName("videoplayer1").getAttribute("data-video-src");
$videoplayer1tag.html(`<video width="400" height="300" id="kkk" src="` + videosrc1 + `"></video><span role="button" onclick="videoplayf1()"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" onclick="videopausef1()"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span>`);

function videoplayf1() {
  document.getElementById("kkk").play();
}
function videopausef1() {
  document.getElementById("kkk").pause();
}


