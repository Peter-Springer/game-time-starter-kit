const assert = require('chai').assert;

const Paddle = require('../lib/paddle');

describe('Paddle', function() {
  context('checks default values', function() {

    var paddle = new Paddle({});

    it('has default values', function() {
      assert.equal(paddle.height, 5);
      assert.equal(paddle.width, 10);
      assert.equal(paddle.x, 50);
      assert.equal(paddle.y, 30);
    });
  });

  context('check that we can set all values of paddle', function() {

    var heightValue = 10;
    var widthValue = 5;
    var xValue = 70;
    var yValue = 40;
    var properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue
    };
    var paddle = new Paddle(properties);

    it('assigns xValue to the paddle x', function() {
      assert.equal(paddle.x, xValue);
    });

    it('assigns yValue to the paddle y', function() {
      assert.equal(paddle.y, yValue);
    });

    it('assigns heightValue to the paddle height', function() {
      assert.equal(paddle.height, heightValue);
    });

    it('assigns weightValue to the paddle weight', function() {
      assert.equal(paddle.width, widthValue);
    });
  });

 context('check that paddle methods exist', function() {
    it('should have a method called "moveRight()"', function() {
      var paddle = new Paddle({});
      assert.isFunction(paddle.moveRight)
    });

    it('should have a method called "moveLeft()"', function() {
      var paddle = new Paddle({});
      assert.isFunction(paddle.moveLeft)
    });
  });

  context('paddle should be able to move left and right', function() {
    it('should move one to the right', function(){
      var paddle = new Paddle({});
      paddle.moveRight()
      assert.equal(paddle.x, 61)
    })
  })
});