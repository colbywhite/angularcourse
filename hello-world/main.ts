function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log('var i', i);
  }
  // note that i is now 5. this is because var is scoped to nearest function, not block
  // and thus it is available outside of the for loop
  console.log('outside loop, i=', i);

  for (let j = 0; j < 5; j++) {
    console.log('let j', j);
  }
  // note that the following won't compile since typescript makes sure the j stays scoped to the loop
  // console.log('outside loop, j=', j)
}

doSomething();


class Point {
  // _x and _y are fields
  constructor(private _x: number, private _y: number) {
  }

  // x is a property, i.e. a field that uses an accessor method
  public get x() {
    return this._x;
  }

  public set x(value: number) {
    if (value < 0) {
      throw new Error('Coordinate cannot be less than zero');
    }
    this._x = value;
  }

  // y is a property, i.e. a field that uses an accessor method
  public get y() {
    return this._y;
  }

  public set y(value: number) {
    if (value < 0) {
      throw new Error('Coordinate cannot be less than zero');
    }
    this._y = value;
  }

}

let point = new Point(1, 4);
// from the outside, properties look like fields, but they're slight different
console.log('x', point.x, 'y', point.y);
