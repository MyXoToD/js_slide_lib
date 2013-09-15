$(document).ready(function() {
  var cX;
  var cY;
  var nC;
  var nY;

  $(this).mousedown(function(e) {
    cX = e.pageX;
    cY = e.pageY;
  });

  $(this).mouseup(function(e) {
    nX = e.pageX;
    nY = e.pageY;

    var x = getDiff(cX, nX);
    var y = getDiff(cY, nY);

    if (x > y) {
      // Left/Right Swipe
      if (cX > nX) {
        // Swipe from right to left
        // Do stuff here ...
      } else {
        // Swipe from left to right
        // Do stuff here ...
      }
    } else {
      // Up/Down Swipe
      if (cY > nY) {
        // Swipe from down to up
        // Do stuff here ...
      } else {
        // Swipe from up to down
        // Do stuff here ...
      }
    }
  });
});

function getDiff(a, b) {
  return Math.abs(a - b);
}