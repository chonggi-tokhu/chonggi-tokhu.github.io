var $videoplayer1tag = $("videoplayer1");
var videosrc1 = document.getElementById("videoplayer1").getAttribute("src");
$videoplayer1tag.html(`<video width="400" height="300" id="kkk" src=" ${videosrc1} "></video><span role="button" onclick="videoplayf1()"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" onclick="videopausef1()"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span>`);

videotagsss.videoplayf1 = function (kkk) {
  kkk.play();
}
videotagsss.videopausef1 = function (kkk) {
  kkk.pause();
}

var videotagsss = document.getElementsByTagName("videoplayer2");

videotagsss.videotagmandulgi1 = function (kkk) {
  var videosrc1 = kkk.getAttribute("src");
  var naeyong1 = `<video width="400" height="300" src=" ${videosrc1} "></video><span role="button" id="videoplayf1"><svg height="200" width="200"><path d="M0 0 L50 50 L0 100 Z" fill="blue" /></svg></span><span role="button" id="videopausef1"><svg height="200" width="200"><path d="M0 0 L10 0 L10 30 L0 30 Z" fill="orange" /></svg></span>`;
  kkk.innerHTML = naeyong1;
};

videotagsss.videotagmandulgi1(this);
document.getElementById("videoplayf1").onclick = function () {
    videotagsss.videoplayf1(this);
}

document.getElementById("videopausef1").onclick = function () {
    videotagsss.videopausef1(this);
}


