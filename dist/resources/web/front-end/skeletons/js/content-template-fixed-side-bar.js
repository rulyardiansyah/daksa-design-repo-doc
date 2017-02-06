/**
 * Created by rulyardiansyah on 1/18/2017.
 */

$(document).ready(function() {
  var currentYear = new Date;
  $("#current-year").text(currentYear.getFullYear());

  $("#project-workspace a").addClass("active");

  // DUPLICATE USER LINKS FOR MOBILE VIEWPORT
  $("#user-links > ul").clone().appendTo("#user-links-helper");

  // PREVENT TO OPEN A LINK FROM ACTIVE MENU
  $("#app-menu .active").click(function() {
    return false;
  });

  // APP MENU ACCORDION
  $(".accordion-header").click(function(e) {
    e.preventDefault();
    $(this).closest("li").find(".accordion-content").not(":animated").slideToggle({
      duration: 400
    });
    $(this).toggleClass("chevron-rotated");
  });
});