function Accordion() {
    var buttons = document.querySelectorAll('.ef-accordion-container > button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            this.nextElementSibling.classList.toggle('collapsed');
        });
    });
}

module.exports = Accordion;
