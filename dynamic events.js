//plain JS version
<!DOCTYPE html>
<html>
<body>

<p id = "demo">Click the button to make a BUTTON element with text.</p>

<button onclick="myFunction()">Try it</button>


<script>
function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  btn.id = "test1"
  document.body.appendChild(btn);
  btn.addEventListener("click", myFunction2);
}
function myFunction2() {
	document.getElementById("demo").innerHTML = "Hello World!";
    var test = document.getElementById("test1");
    console.log(test);
    test.parentNode.removeChild(test);
}

</script>

</body>
</html>


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// jQurey version

<!doctype html> 
    <html>
        <head>
            <title>Naslov</title>
            <script
                src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous">
            </script>
        </head>
        <body>
            <div>
                    <ul class='lst'>
                        <li class="listItem">First <button class='x'>x</button> </li>
                        <li class="listItem">Second<button class='x'>x</button></li>
                        <li class="listItem">Third<button class='x'>x</button></li>
                    </ul>
                    <input class='inp' type='text' />
                    <button class='btn'>Add item</button>
            </div>
                    <script>
                            let listItems = document.getElementsByTagName('li');
                            let lst = document.querySelector('.lst');
                            let inp = document.querySelector('.inp');
                            let btn = document.querySelector('.btn');
                            let btn2 = '<button class="x">x</button>';

                            function addListItem(){
                                lst.appendChild(document.createElement('li'));
                                let lstChild = lst.lastChild;
                                lstChild.innerHTML = inp.value + btn2;
                                lstChild.className = 'listItem';
                                lstChild.lastChild.addEventListener('click', removeListItem);
                                inp.value = '';
                            }

                            function removeListItem(){
                                 lst.removeChild(this.parentNode);
                            }

                            btn.addEventListener('click', addListItem);
                            $('.listItem .x').on('click', removeListItem);
                    </script>
        </body>
    </html>
