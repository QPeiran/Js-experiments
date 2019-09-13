function name() {
    console.log("I'm x");
    return 0;
}

var x = name();
console.log(x);

var y = function () {
    console.log("I'm y");
    return 1;
}();

console.log(y);


var z = () => {
    console.log("I'm z");
    return 2;
};

console.log(z());
