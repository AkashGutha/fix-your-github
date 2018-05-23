function setStyle(el, css) {
  el.setAttribute("style", el.getAttribute("style") + ";" + css);
}

const sidebar = document.getElementsByClassName("dashboard-sidebar")[0];
setStyle(sidebar, "float:right;");
