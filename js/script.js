$(document).ready(function(){
    // References
    var highlight = $('.wrap-left li:not(:first-child) a');
    var dropdownLinks = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .dropdown-menu');
    var highlightDropLinks = $('.wrap-right .with-dropdown > a');


    // Add/Remove highlight class on click
    highlightText(highlight);
    highlightText(highlightDropLinks);




    // Show/Hide dropdown menus on click
    dropdownLinks.click(function(){
        // Selected menu
        var actualDownMenu = $(this).next('.dropdown-menu');

        // Reset already opened menu(if it exists)
        dropMenu.not(actualDownMenu).hide();

        // Show/Hide on click
        actualDownMenu.toggle();
    });
}); //end of document ready

// FUNCTIONS

// Add/Remove highlight class on click
function highlightText(list) {
    list.click(function(){
        list.removeClass('highlight');
        $(this).addClass('highlight');
    });
}