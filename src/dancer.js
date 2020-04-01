// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  if (this instanceof BouncyDancer) {
    this.$node = $('<span class="dancer">&#129314;</span>');
  } else if (this instanceof BlinkyDancer){
    this.$node = $('<span class="dancer">&#128561;</span>');
  } else {
    this.$node = $('<span class="dancer">&#129497;</span>');
  }
  //refactor with this

  //refactor with this
  //add the params as properties of Dancer

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};


Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  var context = this;
  setTimeout(function() {context.step();}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left = this.left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  //console.log(top);
  this.$node.css(styleSettings);
};