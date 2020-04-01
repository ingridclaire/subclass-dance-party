var Wizard = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};
Wizard.prototype = Object.create(Dancer.prototype);
Wizard.prototype.constructor = Wizard;

Wizard.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.toggle();
  console.log($("body"));
  Dancer.prototype.setPosition.call(this, $("body").height() * Math.random(), $("body").width() * Math.random());
};

