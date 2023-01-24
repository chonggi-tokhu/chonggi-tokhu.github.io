<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://tistory1.daumcdn.net/tistory/5499297/skin/style.css">
    <link rel="stylesheet" href="https://tistory1.daumcdn.net/tistory/5925927/skin/style.css">
    <link rel="stylesheet" href="./asciiartanieman.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <style>
        #submitarea90 {
            position: absolute;
            top: 596px;
            right: 2px;
        }
        #mycontent16 {
            position:absolute;
            width: 60%;
            height: 80%;
            top:180px;
            left:60px;
            border: 1px solid #444;
            border-radius: 4%;
            overflow-y: scroll;
        }
        .horizontalul {
            box-shadow: inset 0 0 1px 1px #444;
            width: 92%;
            height: 38px;
            overflow-x: scroll;
        }
        .horizontalul li {
            float: left;
            width: 120px;
            height: 36px;
            box-shadow: 0 0 0.4px 0.4px #444;
            text-align: center;
            list-style: none;
        }
        .horizontalul li button {
            font-size: 14px;
            text-align: left;
        }
        .placeholdertext4 {
            visibility: hidden;
        }
        .placeholdertext4::placeholder {
            width: 60%;
            height: 80%;
            position: absolute;
            top: 170px;
            left: 60px;
            visibility: visible;
            color:#aaa;
        }
    </style>
</head>

<body>
    <div>
        <script>
            function myinph4function() {
                document.forms["mypostformabc"]["mypostcontentsabc"].value = document.getElementById("mycontent17").outerHTML;
            }
        </script>
        
        <script>
            function myplaceholderi8() {
                document.getElementById("placeholdertext4").value = document.getElementById("mycontent16").innerHTML;
            }
        </script>
        <div>
            <div>
                <header>
                    <h1>write a <span onclick="this.style.color='blue';">post</span>ing</h1>
                    <h3>post</h3>
                </header>
            </div>
            <div>
                <ul class="horizontalul">
                    <li>
                        <script>
                            
                            
                            function insertbluebtn234() {
                                var bbtn1 = document.createElement("button");
                                var bbtnattr1 = document.createAttribute("class");
                                bbtnattr1.value = "colourbluen";
                                bbtn1.setAttributeNode(bbtnattr1);
                                bbtn1.innerHTML = "btn";
                                document.getElementById("mycontent17").appendChild(bbtn1);
                            }
                            function hrefinsert234() {
                                var anchorhref23 = document.getElementById("anchorhref23").innerHTML;
                                var anchorcolour23 = document.getElementById("anchorcolour23").innerHTML;
                                var anchorcontent23 = document.getElementById("anchorcontent23").innerHTML;
                                var blink1 = document.createElement("a");
                                var bhref1 = document.createAttribute("href");
                                bhref1.value = (anchorhref23);
                                var bcolour1 = document.createAttribute("style");
                                bcolour1.value = "color:"+(anchorcolour23);
                                blink1.innerHTML = (anchorcontent23);
                                blink1.setAttributeNode(bhref1);
                                blink1.setAttributeNode(bcolour1);
                                document.getElementById("mycontent17").appendChild(blink1);
                            };
                            function imageup234() {
                                var myimageurl = document.getElementById("image234").innerHTML;
                                var newimage1 = document.createElement("img");
                                var imagesrc1 = document.createAttribute("src");
                                imagesrc1.value = (myimageurl);
                                newimage1.setAttributeNode(imagesrc1);
                                document.getElementById("mycontent17").appendChild(newimage1);
                            }
                        </script>
                        <button class="colourbluen" onclick="insertbluebtn234()">insert blue button</button>
                    </li>
                    <li><p contenteditable="true" id="image234">img source</p></li>
                    <li><button class="colourpurple" onclick="imageup234()">upload image</button></li>
                </ul>
                <br>
                <ul class="horizontalul"><li><button onclick="hrefinsert234()">insert link</button></li>
                    <li><p id="anchorhref23" contenteditable="true">your link...</p></li>
                    <li><p id="anchorcolour23" contenteditable="true">your colour</p></li>
                    <li><p id="anchorcontent23" contenteditable="true">hyperlink text</p></li>
                </ul>
                <div id="mycontent16" contenteditable="true" onkeyup="myplaceholderi8()"><div class="mycontent17" id="mycontent17">쓰세요</div></div>
                <textarea name="placeholdertext4" id="placeholdertext4" class="placeholdertext4" cols="30" rows="10" placeholder="write posting"></textarea>
                <div style="position: absolute;right:10px;">
                    <textarea name="htmlmode1" id="htmlmode1" cols="30" rows="10" placeholder="html edit mode"></textarea>
                    <br>
                    <button onclick="document.getElementById('mycontent17').innerHTML = document.getElementById('htmlmode1').value;" class="colourolive">insert your html code</button>
                </div>
                <br>
                <div style="position:absolute;right:2px;top:640px;">
                    <form action="./Default.asp" method="post" name="mypostformabc">
                        <input type="hidden" name="mypostcontentsabc">
                        <input type="text" name="filenametext1" placeholder="post name...">
                        <button type="submit" id="textoligi" class="mushroom-level4" onclick="myinph4function()">수정이 끝났나요? 글 올리기</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    <% response.Charset="UTF-8"
        dim fs,fname
        dim filenametext1,fcontent1
        set filenametext1=Request.Form("filenametext1")
        set fcontent1=Request.Form("mypostcontentsabc")
        set fs=Server.CreateObject("Scripting.FileSystemObject")
        set fname=fs.CreateTextFile("C:\Users\L340-15API\24\aacss\source\" & filenametext1 & ".html",true)
        fname.WriteLine("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8></head><body>"+fcontent1+"</body></html>")
        fname.Close
        set fname=nothing
        set fs=nothing
        Response.Write("<a href=./" & filenametext1 & ".html class=yagwang9>your post here</a>") %>
</body>

</html>