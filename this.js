function add(other, yet_another) {
  return this.value + other + (yet_another || 0)
}

var one = { value: 1, add: add }
var two = { value: 2, add: add }

//this === one
console.log(one.add(two.value))
  
//this === two 
console.log(two.add(3))
console.log(one['add'](two.value))

//when called directly this is the global object
console.log(add(two.value))

value = 2
console.log(add(two.value))

//Explicit Application
//call uses positional arguments
console.log(add.call(two, 2, 2)) // this === two
console.log(add.call(one, 2, 2)) // this === one 

//apply uses array 
console.log(add.apply(two, [2, 2])) // this === two
console.log(add.apply(one, [2, 2])) // this === one 
