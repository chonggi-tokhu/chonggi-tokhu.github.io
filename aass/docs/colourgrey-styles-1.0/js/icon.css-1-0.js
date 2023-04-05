function myicofunction1() {
  var icoxxx1 = document.getElementsByTagName("cgreyico1");
  for (var i = 0; i < icoxxx1.length; i++) {
    var icoxxx2 = icoxxx1[i];
    var icoxsrc1 = icoxxx1[i].getAttribute("type");
    var naeyong5 = `<span style="background-image:url(https://chonggi-tokhu.github.io/aass/docs/colourgrey-styles-1.0/${icoxsrc1});height:20px;width:20px;display:block;">_</span>`;
    icoxxx1[i].innerHTML = naeyong5;
  }
}
window.onload = function () {
  myicofunction1();
}
