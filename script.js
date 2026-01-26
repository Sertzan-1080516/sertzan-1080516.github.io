var dropdownElementList = [].slice.call(
  document.querySelectorAll(".dropdown-toggle"),
);
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});

function copy(id) {
  let copy = document.getElementById(id).href;
  if (copy.startsWith("mailto:")) {
    copy = copy.slice(7);
  }
  navigator.clipboard.writeText(copy);
}

function show_languages() {
  var show_table = document.getElementById("testing");
  if (show_table.display === "block") {
    show_table.style.display = "none";
  } else {
    show_table.style.display = "block";
  }
}
