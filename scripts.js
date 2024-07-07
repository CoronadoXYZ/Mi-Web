$(document).ready(function() {
    $('.card-button').click(function() {
        alert('Button clicked!');
    });

    // Example carousel functionality (simple fade in/out)
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemAmt = items.length;

    function cycleItems() {
        const item = $('.carousel-item').eq(currentIndex);
        items.hide();
        item.css('display', 'block');
    }

    const autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        ;
    },)
});
