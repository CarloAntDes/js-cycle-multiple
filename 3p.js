for (var i=0; i<100; i++) {

  if (i % 5 == 0) {
    document.getElementById("multi5").innerHTML+= i + "<br>";
  }

  if (i % 7 == 0) {
    document.getElementById("multi7").innerHTML+= i + "<br>";
  }

  if (i % 5 != 0 && i % 7 !=0) {
    document.getElementById("altro").innerHTML+= i + "<br>";
  }
}
