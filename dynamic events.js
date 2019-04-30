<!doctype html>
    <html>
        <head>
            <title>Naslov</title>
            <script
                src="https://code.jquery.com/jquery-3.3.1.min.js"
                integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                crossorigin="anonymous">
            </script>
            <style>
                div{
                    width: 17%;
                }
                li{
                    box-sizing: border-box;
                    border: 2px solid #fff;
                    width: 100%;
                }
                li button:hover{
                    cursor: pointer;
                    transform: scale(1.2, 1.2);
                    transition: 0.5s;
                }
                li .x{
                    color: red;
                    background-color: black;
                    border-radius: 8px;
                    display: inline-block;
                    float: right;
                    text-align: center;
                    vertical-align: center;
                }
            </style>
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
