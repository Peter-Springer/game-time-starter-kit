const assert = require('chai').assert;

const Brick = require('../lib/brick');

describe('Brick', function() {
  context('checks default values', function() {

    it('has default values', function() {
      let brick = new Brick

      assert.equal(brick.height, 20);
      assert.equal(brick.width, 60);
      assert.equal(brick.x, 100);
      assert.equal(brick.y, 100);
    });
  });

  context('check that we can set all values of brick', function() {

    let heightValue = 20;
    let widthValue = 30;
    let xValue = 60;
    let yValue = 40;
    let properties = {
      height: heightValue,
      width: widthValue,
      x: xValue,
      y: yValue
    };

    const brick = new Brick(properties);

    it('assigns xValue to brick x', function () {
      assert.equal(brick.x, xValue);
    })

    it('assigns yValue to the brick y', function() {
      assert.equal(brick.y, yValue);
    })

    it('assigns heightValue to the brick height', function() {
      assert.equal(brick.height, heightValue);
    })

    it('assigns widthValue to the brick width', function() {
      assert.equal(brick.width, widthValue);
    });

    it('defaults to having a status of true', function () {
      let brick = new Brick();
      assert.isTrue(brick.status);
    });

    it('can take a status option of false that sets the status of the brick to false', function () {
      let brick = new Brick({ status: false });
      assert.isFalse(brick.status);
    });
  })
});
