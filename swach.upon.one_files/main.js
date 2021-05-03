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

let previousYPos = 0;

function changePic() {
  var yPos = pageYOffset;
  let scrollDirection = Math.sign(yPos - previousYPos);
  previousYPos = yPos;
  let rightPartImages = document.querySelectorAll(".rightPart");
  let leftPartImages = document.querySelectorAll(".leftPart");

  //   console.log(yPos / window.innerHeight, yPos, window.innerHeight);

  //right part needs to be changed when index is even
  //left part needs to be changed when index is odd

  //even index needs be decremented (expect 0)
  //odd index needs to be incremented ()

  function hideAll(images, indexName, indexToShow) {
    let actualIndex = Math.round(indexToShow / 2);
    if (indexName == "odd") {
      // actualIndex = actualIndex + 1;
      //we offset odd index because the first image is shown without an overlay
    }
    // console.log(scrollDirection);
    if (scrollDirection < 0) {
      actualIndex = actualIndex - 1;
    }

    images.forEach((element, index) => {
      if (actualIndex == index) {
        element.style.opacity = "1";
        // console.log("making visible", index, element.style.opacity);
      } else {
        // console.log("making invisible", index);
        element.style.opacity = "0";
      }
    });
  }

  let div = yPos / window.innerHeight;

  let scrollIndex = Math.round(div);

  // console.log(scrollIndex, allowChange(div));
  if (allowChange(div)) {
    if (scrollIndex % 2 == 0) {
      hideAll(leftPartImages, "even", scrollIndex);
    } else {
      hideAll(rightPartImages, "odd", scrollIndex);
    }
  }

  if (scrollIndex <= 0) rightPartImages[0].style.opacity = 1;
}

function allowChange(number) {
  let min = number - Math.round(number);

  min = min * 100;
  if (min < 0) min = min * -1;
  console.log(min);
  if (min < 5) return true;
  return false;
}

window.onload = changePic;
window.onscroll = changePic;
