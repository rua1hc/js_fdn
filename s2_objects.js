// The simplest way to create an object is using an object literal
const circle = {
    radius: 1,
    draw: function () {},
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor.

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {},
    };
}

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {};
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle.location = {};
circle["location"] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ("location" in circle)
    // Abstraction means hiding the complexity/details and showing only the essentials.
    // We can hide the details by using private members. Replace "this" with "let".

    function Circle(radius) {
        // Public member
        this.radius = radius;

        // Private member
        let defaultLocation = {};
    }

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, "defaultLocation", {
    get: function () {
        return defaultLocation;
    },
    set: function (value) {
        defaultLocation = value;
    },
});

//Ex - Stop watch
function Stopwatch() {
    this.duration = 0;

    let start = 0,
        end = 0,
        running = false;

    this.start = function () {
        if (running) {
            console.error("Timer already started!");
            return;
        }
        start = Date.now();
        // start = new Date();
        running = true;
    };

    this.stop = function () {
        if (!running) {
            console.error("Timer is not started!");
            return;
        }
        end = Date.now();
        this.duration += (end - start) / 1000;

        // end = new Date().getTime();
        // this.duration += end.getTime() - start.getTime() / 1000;

        running = false;
    };

    this.reset = function () {
        this.duration = 0;
        running = false;

        start = null;
        end = null;
    };
}
