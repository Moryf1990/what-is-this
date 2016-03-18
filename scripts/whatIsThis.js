/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... this is the function whatIsThis being called and it's parameters are 'hello' and 'world'
// * because ...  the whatIsThis function is being declared above and it is being called with these new arguments




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ... the function what is being called with a window object, meaning it represents the entire window, and it's arguments are 'hello' and 'world'
// * because ...  the whatIsThis function is being declared above and it is being called with these new arguments and a window property





// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ... an object with one of its values being a function and that function's arguments are being reset to 'face' and 'book'
// * because ...  instead of having a standard value associated with it's key, the test1 and test2 values both have the key whatIsThis, which is a function declared above and test2 is
//picking up on this even though it is nested one level deeper because one of the object keys is called 'anotherObject' and it has an object, so you have an object within an object and
//it's value is being reset from the function above




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ... an error saying inAnObject.anotherObject.test1 is not a function
// * because ... there has not been a function declared abovecalled anotherObject and it has not been passed into the inAnObject object either. 
//If there had been a value of test1 associated with anotherObject then this would have worked, but since there isn't we are getting an error




// * Problem 5
inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... redefining the test2 to say twitter and book
// * because ... there is a value inside the inAnObject called anotherObject (which is also an object) and it has a value called test2 and it is set to equal the whatIsThis 
//function and threfore it redefines 'a' and 'b' from that function to equal 'twitter' and 'book'




// * Problem 6
// whatIsThis.call();
// * "this" is ...
// * because ...




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ...
// * because ...




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...
// * because ...




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ...
// * because ...




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ...
// * because ...




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ...
// * because ...




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...
// * because ...




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ...
// * because ...




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ...




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...
// * because ...




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...
// * because ...




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...
// * because ...
































