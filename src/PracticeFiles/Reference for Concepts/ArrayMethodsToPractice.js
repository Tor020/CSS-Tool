


/* multiFunctional  */
// Object.keys - Can be used on an array


//Just use arrays with array notation in loops to set dynamic variables ie  arr[i] inside the loop and return it i guess, test this
  
/*
// Misc Utility Methods
General non actionable methods

Array.from()          Creates a new Array instance from an array-like or iterable object.
Array.isArray()       Returns true if a variable is an array, if not false.
Array.of()            Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

// Mutator methods
These methods modify the array:

Array.copyWithin()                   Copies a sequence of array elements within the array.
Array.fill()                         Fills all the elements of an array from a start index to an end index with a static value.
Array.pop()                          Removes the last element from an array and returns that element.
Array.push()                         Adds one or more elements to the end of an array and returns the new length of the array.
Array.reverse()                      Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
Array.shift()                        Removes the first element from an array and returns that element.
Array.sort()                         Sorts the elements of an array in place and returns the array.
Array.splice()                       Adds and/or removes elements from an array.
Array.unshift()                      Adds one or more elements to the front of an array and returns the new length of the array

// Accessor methods
These methods do not modify the array and return some representation of the array.

Array.concat()                        Returns a new array comprised of this array joined with other array(s) and/or value(s).
Array.includes()                      Determines whether an array contains a certain element, returning true or false as appropriate.
Array.indexOf()                       Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.join()                          Joins all elements of an array into a string.
Array.lastIndexOf()                   Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
Array.slice()                         Extracts a section of an array and returns a new array.
Array.toSource()                      Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.
Array.toString()                      Returns a string representing the array and its elements. Overrides the Object.prototype.toString()  method.                     
Array.toLocaleString()                Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString()method

Iteration methods
Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

Array.entries()                       Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.every()                         Returns true if every element in this array satisfies the provided testing function.
Array.filter()                        Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.find()                          Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.findIndex()                     Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
Array.forEach()                       Calls a function for each element in the array.
Array.keys()                          Returns a new Array Iterator that contains the keys for each index in the array.
Array.map()                           Creates a new array with the results of calling a provided function on every element in this array.
Array.reduce()                        Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.reduceRight()                   Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.some()                          Returns true if at least one element in this array satisfies the provided testing function.
Array.values()                        Returns a new Array Iterator object that contains the values for each index in the array.
Array.[@@iterator]()                   Returns a new Array Iterator object that contains the values for each index in the array.


