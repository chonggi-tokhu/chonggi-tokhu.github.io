var $videoplayer1tag = $("videoplayer1");
$videoplayer1tag.html(`<video style="display:block;z-index:2;" width="400" height="300" id="kkk" src="https://chonggi-tokhu.github.io/merong.mp4"></video><span role="button" onclick="videoplayf1()"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" onclick="videopausef1()"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span>`);

function videoplayf1() {
  document.getElementById("kkk").play();
}
function videopausef1() {
  document.getElementById("kkk").pause();
}


