/**
 * Created by rulyardiansyah on 1/12/2017.
 */

$(document).ready(function() {
  // Create dropdown component (and its wrapper), for mobile viewport
  $("<div />", {
    "id": "main-navigation-select-wrapper"
  }).appendTo("#main-navigation");

  $("<select />", {
    "id": "main-navigation-select"
  }).appendTo("#main-navigation-select-wrapper");

  $("<option />", {
    "selected": "selected",
    "value": "",
    "text": "-- Please select menu --"
  }).appendTo("#main-navigation-select");

  $("#main-navigation a").each(function() {
    var listOfMenu = $(this);
    $("<option />", {
      "value": listOfMenu.attr("href"),
      "text": listOfMenu.attr("aria-label")
    }).appendTo("#main-navigation-select");
  });

  $("#main-navigation-select").change(function() {
    window.location = $(this).find("option:selected").val();
  });
});