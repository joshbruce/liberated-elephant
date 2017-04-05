function HeaderResize() {
  window.addEventListener('scroll', function(e){
    var header = document.getElementById("header-primary");
    // console.log(header);
    var distanceY = window.pageYOffset;
    var shrinkOn = 300
    if (distanceY > shrinkOn) {
        header.classList.add('smaller');

    } else {
        header.classList.remove('smaller');

    }
  }, true);
}

module.exports = HeaderResize;
