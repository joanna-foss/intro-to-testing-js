// helloWorld function 
/*
function helloWorld() {
    return "Hello, World!";
}
*/
// const helloWorld = function () {
//     return "Hello, World!";
// }

//sayHello function

function sayHello(input) {
	if (typeof input === 'boolean') {
		input = "World";
	} else if (typeof input === 'number') {
		input = String(input);
	}
	return "Hello, " + input + "!";
};

function isFive(input) {
	if (input === isNaN) {
		return false;
	} else
		return input % 5 == 0;
};

function isEven(input) {
	if ((input % 2 == 0) && (typeof input !== 'boolean')) {
		return true;
	} else
		return false;
};