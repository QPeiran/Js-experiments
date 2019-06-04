//env -- https://www.w3schools.com/js/tryit.asp?filename=tryjson_jsonp_php

<!DOCTYPE html>
<html>

<body>

<h2>Click the Button.</h2>
<p>A script tag with a src attribute is created and placed in the document.</p>
<p>The PHP file returns a call to a function with the JSON object as a parameter.</p>

<button onclick="clickButton()">Click me!</button>

<p id="demo"></p>

<p>Try changing the table property from "customers" to "products".</p>

<p id="demo1"></p>
<script>
function clickButton() {
  var obj, s
  obj = { table: "customers", limit: 20 };
  s = document.createElement("script");
  s.src = "jsonp_demo_db.php?x=" + JSON.stringify(obj);
  document.body.appendChild(s);
}

function myFunc(myObj) {
  var x, txt = "";
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    txt += "</table>"  
  document.getElementById("demo1").innerHTML = txt;
}

var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<table border='1'>"
    for (x in myObj) {
      txt += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    txt += "</table>"    
    document.getElementById("demo").innerHTML = txt;
  }
};
xmlhttp.open("POST", "json_demo_db_post.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
</script>

</body>
</html>
