var $videoplayer1tag = $("videoplayer1");
$videoplayer1tag.html(`<div><video width="400" height="300" id="kkk" controls><source src="https://chonggi-tokhu.github.io/merong.mp4" type="video/mp4"><source src="https://chonggi-tokhu.github.io/merong.ogg" type="video/ogg"></video><span role="button" onclick="videoplayf1()"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" onclick="videopausef1()"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span></div>`);

function videoplayf1() {
  document.getElementById("kkk").play();
}
function videopausef1() {
  document.getElementById("kkk").pause();
}


