function openNav() {
  document.getElementById("sideButton").value = "Active";
  document.getElementById("sideBar").style.left = "80%";
}
function closeNav() {
  document.getElementById("sideBar").style.left = "100%";
  document.getElementById("sideButton").value = "notActive";
}

function accessSideBar() {
  if (document.getElementById("sideButton").value == "notActive") {
    openNav();
  } else {
    closeNav();
  }
}
function show(me) {
  let name = me.innerText.toLowerCase().replace(/\s/gi, "-");
  var elmnt = document.getElementById(name);
  elmnt.scrollIntoView({ behavior: "smooth", block: "center" });
}
function changePic() {
  var yPos = pageYOffset;
  console.log(yPos / window.innerHeight);

  if (yPos / window.innerHeight > 2) {
    document.getElementById("part2").src = "./index_files/some2.jpg";
  }
  if (yPos / window.innerHeight > 1) {
    document.getElementById("part1").src = "./index_files/some4.jpg";
  }
  if (yPos / window.innerHeight <= 1) {
    document.getElementById("part1").src = "./index_files/some.jpg";
  }
  if (yPos / window.innerHeight <= 2) {
    document.getElementById("part2").src = "./index_files/space.jpg";
  }

  if (yPos / window.innerHeight > 4) {
    document.getElementById("part2").src = "./index_files/some6.jpg";
  }
}
window.onscroll = changePic;
