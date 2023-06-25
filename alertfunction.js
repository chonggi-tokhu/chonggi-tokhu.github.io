function alertfunction(times, message) {
  alert(message);
  for (var i = 0; i < times; i++) {
    alert(times - i + "번남음");
  }
  alert("0번남음");
}
function redirectfunction(url) {
  window.location.replace(url);
}
function documentwrite(message) {
  document.write(message);
}
window.onload = function () {
  var abcddd = confirm("게임");
  if (abcddd == true) {
    alertfunction(400, "hihihi");
    documentwrite("월척!!!!");
    window.setTimeout(function () {
      redirectfunction("https://forms.gle/SeJYgVrS7eC1X1uCA");
    }, 3000);
  }
};
