var wall = document.querySelector('.wall');
var roof = document.querySelector('.roof');
var door = document.querySelector('.door');

var lineDrawing = anime({
  targets: [wall, roof, door],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 4000,
  begin: function(anim) {
    /*the beginning of roof*/
    wall.setAttribute("stroke", "black");
    wall.setAttribute("fill", "none");
    /*the beginning of roof*/
    roof.setAttribute("stroke", "black");
    roof.setAttribute("fill", "none");
    /*the beginning of roof*/
    door.setAttribute("stroke", "black");
    door.setAttribute("fill", "none");
  },
  complete: function(anim) {
    /*the beginning of roof*/
    wall.setAttribute("stroke", "none");
    wall.setAttribute("fill", "#ffffb9");
    /*the beginning of roof*/
    roof.setAttribute("stroke", "none");
    roof.setAttribute("fill", "#6495ED");
    /*the beginning of roof*/
    door.setAttribute("stroke", "none");
    door.setAttribute("fill", "#DEB887");
  },
  autoplay: true,
});