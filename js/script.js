$(document).ready(function(){
    // References
    var highlight = $('.wrap-left li:not(:first-child) a');

    // Add/Remove highlight class on click
    highlight.click(function(){
        highlight.removeClass('highlight');
        $(this).addClass('highlight');
    });
}); //end of document ready