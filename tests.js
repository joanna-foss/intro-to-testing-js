// Unit tests for the helloWorld function
/*
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
*/
describe('sayHello', function () {
    it('should be a defined funcion', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return "Hello, World" if input is \'true\'', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World" if input is \'false\'', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, 1!"', function () {
        expect(sayHello(1)).toBe("Hello, 1!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true when input is 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when an input is divisible by 5', function () {
        expect(isFive(20)).toBe(true);
    });
    it('should return false when input is not divisible by 5', function () {
        expect(isFive(3133)).toBe(false);
    });
    it('should return false if input is a string', function () {
        expect(isFive("miami")).toBe(false);
    });
    it('should return true if a number string that is divisible by 5 is passed through', function () {
        expect(isFive("250")).toBe(true);
    });
    it('should return false if a number string not divisible by 5 is passed through', function () {
        expect(isFive("333")).toBe(false);
    });
});