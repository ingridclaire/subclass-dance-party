$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);

    $('body').append(dancer.$node);
  });


  //declare a variable and set its value to the line-up button
  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      Dancer.prototype.setPosition.call(window.dancers[i], 250);
    }
  });

  $('.breakUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      Dancer.prototype.setPosition.call(
        window.dancers[i],
        ($("body").height() - 200) * Math.random(),
        $("body").width() * Math.random());
    }
  });

  $("span.dancer").on('mouseenter', function(event) {
    $('.dancer').css('font-size', '300px');
  });
  //decalre a jquery onclick function for the line-up button

  //iterate over the dancers arr
  //bring all dancers to the same vertical position (re-set their top variable)




});

