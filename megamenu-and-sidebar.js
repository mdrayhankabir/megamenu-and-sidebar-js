/*** Disable sub-menu on hover ***/
//#et-top-navigation #top-menu li.et-hover ul.sub-menu { display: none!important; }

/*** Shows submenu on click ***/
//#et-top-navigation #top-menu li.show-submenu ul.sub-menu { display: block!important; visibility: visible!important; opacity: 1!important; }




(function($) {

jQuery(document).ready(function() {
jQuery('#top-menu li.mega-menu > a, #et-secondary-nav li.mega-menu > a').click(function(e) {
e.preventDefault();

jQuery('.show-submenu').removeClass('show-submenu');
jQuery(this).parent().toggleClass('show-submenu');
});
});

jQuery(document).click(function(e) {
if(!$(e.target).closest('.show-submenu').length) {
jQuery('.show-submenu').removeClass('show-submenu');
}
});

})(jQuery);



$(".info-bar").on("click", function (e) {
    e.preventDefault();
    
    $(".sidebar-area").addClass("sidebar-opened");
    $(".body-overlay").addClass("overlay-open");
  });
  $(".sidebar-close-btn").on("click", function (e) {
    e.preventDefault();
    $(".sidebar-area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("overlay-open");
  });


  $(".body-overlay").on("click", function () {
    $(".sidebar-area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("overlay-open");
  });
