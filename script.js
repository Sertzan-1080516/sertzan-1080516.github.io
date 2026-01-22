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
