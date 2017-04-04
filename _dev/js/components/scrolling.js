function SmoothScroll() {
  var anchors = ['home', 'services', 'coaching'];

  var run = function(event, id) {
    event.preventDefault();
    var node = document.getElementById(id);
    var target = (id == 'home')
      ? 0
      : node.offsetTop - 85;
    window.scroll({
      top: target,
      behavior: 'smooth'
    });
  }

  anchors.forEach(function(anchor) {
    window.document.querySelector('a[href="#' + anchor + '"]')
      .addEventListener('click', function(event) {
        run(event, anchor);
      });
  });
}

module.exports = SmoothScroll;
