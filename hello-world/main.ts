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
