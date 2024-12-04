let allSelected = document.querySelectorAll("h1, .myClass, .yourClass, #p_tag");

allSelected.forEach(function (parameterAll) {
  parameterAll.style.color = "red";
});

allSelected.forEach(function (parameterAll) {
  parameterAll.style.cssText =
    "background: yellow; color: white; fontSize: 4em";
});

// This makes permanent change//

// use for loop - sequence has beginning and end
// most efficient way to iterate over a sequence

for (let i = 0; i < allSelected.length; i++) {
  //allSelected[i].style.color = "red";
  allSelected[i].style.cssText = "background: yellow; fontSize: 4em";
}
