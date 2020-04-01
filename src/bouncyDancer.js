var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer">&#129314;</span>');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({marginTop: '-=250px'});
  this.$node.animate({marginTop: '+=250px'});

};