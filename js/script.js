$(document).ready(function(){
    // References
    var highlight = $('.wrap-left li:not(:first-child) a');
    var dropdownLinks = $('.with-dropdown > a');
    var dropMenu = $('.with-dropdown > .dropdown-menu');
    var highlightDropLinks = $('.wrap-right .with-dropdown > a');
    console.log(highlightDropLinks);


    // Add/Remove highlight class on click
    highlightText(highlight);
    highlightText(highlightDropLinks);


    // Show/Hide dropdown menus on click
    dropdownLinks.click(function(){
        // Selected menu
        var currentDownMenu = $(this).next('.dropdown-menu');

        // Reset already opened menu(if it exists)
        dropMenu.not(currentDownMenu).hide();

        // Show/Hide on click
        currentDownMenu.toggle();
    });
    
//end of document ready
}); 

// FUNCTIONS

// Add/Remove highlight class on click
function highlightText(list) {
    var previouslndex = null;
    list.click(function(){
        currentIndex = list.index(this);
        if (currentIndex != previouslndex){
            list.removeClass('highlight');
            $(this).addClass('highlight');
            previouslndex = currentIndex;
        }else{
            $(this).toggleClass('highlight');
        }
        
    });
}