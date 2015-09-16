function fixDiv() {
    var $div = $("#navwrap");
    if ($(window).scrollTop() > $div.data("top")) { 
        $('#navwrap').css({'position': 'fixed', 'top': '0', 'width': '100%'}); 
    }
    else {
        $('#navwrap').css({'position': 'static', 'top': 'auto', 'width': '100%'});
    }
}

$("#navwrap").data("top", $("#navwrap").offset().top); // set original position on load
$(window).scroll(fixDiv);