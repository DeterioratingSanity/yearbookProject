// Pulled pretty thoroughly from portfolio project; appended to "> 1" and in css shifted from sticky to fixed to allow better resizing without screen stutter.

document.addEventListener('scroll', headerSwitch); // When scroll occurs -- inefficient from high use but best method at time of development

function headerSwitch() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) { // If viewport is at top of document
    document.getElementById("hero").classList.remove("page_top"); // Toggle to scroll condition
    document.getElementById("hero").classList.add("page_scroll");
  } else {  // Otherwise
    document.getElementById("hero").classList.add("page_top"); // Toggle to top condition
    document.getElementById("hero").classList.remove("page_scroll");
  }
}
