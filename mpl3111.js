function kkkf(text) {
  var rtv = "";
  for (var i = 0; i < text.length; i++) {
    for (var i1 = 0; i1 < 3; i1++) {
      rtv += text[i];
    }
  }
  return rtv;
}

var retxt = document.getElementsByClassName("reTxt");
for (var i = 0; i < retxt.length; i++){
    var retxtp = retxt[i];
    retxtp.innerHTML = kkkf(retxtp.innerHTML);
    console.log(kkkf(retxtp.innerHTML));
}
