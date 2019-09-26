<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>

<button type="button" onclick="loadDoc()">Request data</button>

<p id="demo"></p>
 
<script>
var xhttp = new XMLHttpRequest();
function loadDoc() {
function get(url)
  {
    return new Promise(function(resolve,reject)
                       {
                          var xhttp = new XMLHttpRequest();
                          xhttp.open("GET", url, true);
                          xhttp.onload = function()
                          {
                            if (xhttp.status == 200)
                            {
                             resolve(JSON.parse(xhttp.response));                      
                            }
                            else
                            {reject(xhttp.statusText);}
                          };
                          xhttp.onerror = function()
                          {reject(xhttp.statusText);};
                          xhttp.send();
                        });
  }


var promise = get("https://jsonplaceholder.typicode.com/todos/1");

promise.then(function(value){console.log(value);});

promise.then(function(value){console.log("okay" + value);}) //sigh..cause you concat string with [Object]
	   .catch(function(error){console.log(error);});
promise.then(value => {document.getElementById("demo").innerHTML = "Hello! " + value.title});
}


</script>

</body>
</html>
