<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Closures</h2>

<p>Counting with a local variable.</p>

<button type="button" onclick="myFunction()">Count!</button>

<p id="demo">0</p>

<script>

for (var i = 0; i < 5; i++)
{
	(function IIFE() {var j = i; console.log(j);}) ();
}
console.log(j);
for (var i = 0; i < 5; i++)
{
	var j = i; 
    console.log(j);
}
console.log(j);

function myFunction(x) {
  var z = 5;
  return (function tryIt(y){return z+x+y;})(2);
}

document.getElementById("demo").innerHTML = myFunction(4);
</script>

</body>
</html>
