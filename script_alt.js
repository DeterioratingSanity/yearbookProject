document.addEventListener('scroll', scrollOperator); // When scroll occurs -- inefficient from high use but best method at time of development

function scrollOperator() {
  headerSwitch();
  scrollProgression();

  var width = window.innerWidth;
  var offset = document.getElementById("textMain").offsetWidth;

  document.getElementById("scroll_svg").style.right += offset * (1.18 + (offset / width));  //offset * 1.65 // Maybe can become more smart (1.65)

  // TESTER || console.log((1 + (offset / (width / 1.4))));
  // divide something to determine what percent of the width is occupied by the offset, add to one?

  // console.log(document.getElementById("textMain").offsetWidth);
}

// Pulled pretty thoroughly from portfolio project; appended to "> 1" and in css shifted from sticky to fixed to allow better resizing without screen stutter.
function headerSwitch() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) { // If viewport is at top of document
    document.getElementById("hero").classList.remove("page_top"); // Toggle to scroll condition
    document.getElementById("hero").classList.add("page_scroll");
  } else {  // Otherwise
    document.getElementById("hero").classList.add("page_top"); // Toggle to top condition
    document.getElementById("hero").classList.remove("page_scroll");
  }
}

// Get the id of the <path> element and the length of <path>
var line_path = document.getElementById("scroll_svg_path");
var line_length = line_path.getTotalLength();
var line_position = document.getElementById("scroll_svg_path");
var line_text_X = document.getElementById("scroll_svg_text").getAttribute("x");

// The start position of the drawing
line_path.style.strokeDasharray = line_length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
line_path.style.strokeDashoffset = line_length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

function scrollProgression() {
  // What % down is it?

  // SET TO MAIN_OUTER PROGRESS?

  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  // Length to offset the dashes
  var draw = line_length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  line_path.style.strokeDashoffset = line_length - draw;

  //get point at length
  var endPoint = line_path.getPointAtLength(draw);
  scroll_svg_pos.setAttribute("cx", endPoint.x);
  scroll_svg_pos.setAttribute("cy", endPoint.y);

  document.getElementById("scroll_svg_text").textContent = (Math.trunc(scrollpercent * 100) + "%");

  //var bbox = document.getElementById("myText").getBBox();
  //var width = bbox.width;

  var width = document.getElementById("scroll_svg_text").getComputedTextLength();

  document.getElementById("scroll_svg_text").setAttribute('x', (line_text_X - (width / 2)));

}
