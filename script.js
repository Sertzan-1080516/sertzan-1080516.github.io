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

function show_languages(element) {
  var show_table = document.getElementById(element);
  if (show_table.style.display === "block") {
    show_table.style.display = "none";
  } else {
    show_table.style.display = "block";
  }
}
