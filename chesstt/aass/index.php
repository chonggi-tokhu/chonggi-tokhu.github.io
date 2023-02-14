<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <meta content-type="text/html" charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://tistory1.daumcdn.net/tistory/5499297/skin/style.css">
    <link rel="stylesheet" href="https://tistory1.daumcdn.net/tistory/5925927/skin/style.css">
    <link rel="stylesheet" href="./asciiartanieman.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <style>
        @media only screen and (max-width: 400px) {
            body {
                width: 100vw;
            }
        }

        #htmlmode1 {
            position: absolute;
            right: 300px;
            top: -400px;
        }

        .errormessage2 {
            display: block;
            color: #ff0048;
            text-decoration: underline;
        }

        #yourposthere1 {
            position: absolute;
            top: 880px;
            left: 60px;
        }

        #submitarea90 {
            position: absolute;
            top: 596px;
            right: 0%;
        }

        #mycontent16 {
            padding-top: 6px;
            position: absolute;
            width: 60%;
            height: 80%;
            top: 265px;
            left: 60px;
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
            height: 80%;
            position: absolute;
            top: 105px;
            left: 60px;
            visibility: visible;
            color: #aaa;
        }
    </style>
</head>

<body onload="myinph4function()">
    <div>
        <div>
            현재 당신의 ip주소입니다
            <label><input type="checkbox" name="" id="showip1" onclick="myipshow()" checked>아이피 숨기기</label>
            <div id="showunshowip">
                <?php
                $ip = $_SERVER['REMOTE_ADDR'];
                echo $ip;
                ?>
            </div>

        </div>
        <a href="./default.php">home page</a>
        <p><br></p>
        <script>
            function myinph4function() {
                document.getElementById("htmlmode1").value = document.getElementById("mycontent17").outerHTML;
            }
            window.onload = function() {
                myinph4function()
            };

            function myipshow() {
                if (document.getElementById("showip1").checked === true) {
                    document.getElementById("showunshowip").style.display = "none";
                } else {
                    document.getElementById("showunshowip").style.display = "block";
                }
            }
        </script>
        <script>
            try {
                myipshow();
            } catch (err) {

            }
        </script>
        <script>
            function htmlilbanfunction() {
                document.getElementById("mycontent17").outerHTML = document.getElementById("htmlmode1").value;
            }
        </script>
        <script>
            function myplaceholderi8() {
                document.getElementById("placeholdertext4").value = document.getElementById("mycontent16").innerHTML;
            }

            function htmlmode01() {
                if (document.getElementById("mode-html-5").checked === true) {
                    document.getElementById("html-mode-5").style.display = "block";
                    document.getElementById("mycontent16").style.display = "none";
                } else {
                    document.getElementById("html-mode-5").style.display = "none";
                    document.getElementById("mycontent16").style.display = "block";
                }
            }
            window.onload = function() {
                htmlmode01();
            };
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
                                bcolour1.value = "color:" + (anchorcolour23);
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
                    <li>
                        <p contenteditable="true" id="image234">img source</p>
                    </li>
                    <li><button class="colourpurple" onclick="imageup234()">upload image</button></li>
                </ul>
                <br>
                <ul class="horizontalul">
                    <li><button onclick="hrefinsert234()">insert link</button></li>
                    <li>
                        <p id="anchorhref23" contenteditable="true">your link...</p>
                    </li>
                    <li>
                        <p id="anchorcolour23" contenteditable="true">your colour</p>
                    </li>
                    <li>
                        <p id="anchorcontent23" contenteditable="true">hyperlink text</p>
                    </li>
                </ul>
                <div id="mycontent16" contenteditable="true" onkeyup="myplaceholderi8(),myinph4function()">
                    <div class="mycontent17" id="mycontent17">
                        <p>쓰세요</p>
                    </div>
                </div>
                <textarea name="placeholdertext4" id="placeholdertext4" class="placeholdertext4" cols="50" rows="10" placeholder="마지막 글자를 쓰고 띄어쓰기를 안하면 오류가 생깁니다"></textarea>

                <br>
                <div style="position:absolute;right:2px;top:640px;">
                    <form action="./index.php" name="mypostformabc" method="post" accept-charset="utf-8">
                        <label style="position: absolute;right: 2px;"><input type="checkbox" name="" id="mode-html-5" onclick="htmlmode01()">html edit mode</label>
                        <br>
                        <div style="position: absolute;right:10px;" id="html-mode-5">
                            <textarea name="mypostcontentsabc" id="htmlmode1" cols="50" rows="10" placeholder="html edit mode"></textarea>
                        </div>
                        <br>
                        <input type="hidden" name="u1comment" value="">
                        <input type="text" name="yudongnik0" id="" placeholder="your user name that will be displayed" onkeyup="document.forms['mypostformabc']['yudongnik'].value=document.forms['mypostformabc']['yudongnik0'].value;">
                        <input type="hidden" name="yudongnik">
                        <br>
                        <input type="text" name="filenametext1" placeholder="post name...">
                        <br>
                        <input type="text" name="pwtodelete" placeholder="password to delete or edit">
                        <br>
                        <button type="submit" id="textoligi" class="mushroom-level4" onclick="htmlilbanfunction()">수정이 끝났나요? 글 올리기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <?php
    error_reporting(0);
    $ip = $_SERVER['REMOTE_ADDR'];
    function errornaogi1()
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        echo "<b>Error:\'관리자\'</b><span>닉네임은 불가능합니다<br>당신의 ip는";
        echo $ip;
        echo "</span>";
    }
    $username234 = $_POST["yudongnik"];
    if ($username234 == "관리자" && $ip !== "192.168.35.177") {
        $errormessage1 = "<b class=errormessage2>Error: '관리자' 닉네임을 사용할 권한이 없습니다</b>";
        echo $errormessage1;
    }

    if ($ip == "192.168.35.177") {
        $username234 = $_POST["yudongnik"];
        echo "관리자님이시로군요";
        $myfilename12 = $_POST["filenametext1"];
        $myfilecontents = $_POST["mypostcontentsabc"];
        $myfilename = fopen("./post/" . $myfilename12 . ".php", "x");
        fwrite($myfilename, "<!DOCTYPE html>");
        fwrite($myfilename, "<html lang=ko>");
        fwrite($myfilename, "<head>");
        fwrite($myfilename, "<meta charset=utf-8>");
        fwrite($myfilename, "<link rel=stylesheet href=https://tistory1.daumcdn.net/tistory/5499297/skin/style.css>");
        fwrite($myfilename, "<link rel=stylesheet href=https://tistory1.daumcdn.net/tistory/5925927/skin/style.css>");
        fwrite($myfilename, "</head>");
        fwrite($myfilename, "<body>");
        fwrite($myfilename, "<div>");
        fwrite($myfilename, "<header><a href=http://q0.r-e.kr/home.php><h1>q0사이트 홈</h1></a><br><a href=/postlist.php><h3>게시물 목록</h3></a></header>");
        fwrite($myfilename, "<div class=tt_article_useless_p_margin>");
        fwrite($myfilename, "<small>written by " . $username234 . "</small><br><input type=text placeholder=글을_삭제하기_위한_비번><a href=javascript:alert('삭제되었습니다')>게시물 삭제하기</a><br>");
        fwrite($myfilename, $myfilecontents);
        fwrite($myfilename, "</div>");
        fwrite($myfilename, "</div>");
        fwrite($myfilename, "</body>");
        fwrite($myfilename, "</html>");
        $chusoxx = ("<a href=/post/" . $myfilename12 . ".php class=yagwang9 id=yourposthere1>your post here</a>");
        echo $chusoxx;
    } else {
        $username234 = $_POST["yudongnik"];
        echo "글을 남겨주셔서 감사합니다";
        if ($username234 == "관리자") {
            function errornaogi1($errno, $errstr, $errfile, $errline)
            {
                $ip = $_SERVER['REMOTE_ADDR'];
                echo "<b class=errormessage2>Error 관리자</b><span>닉네임을 사용할 권한이 없습니다</span>";
            }
            set_error_handler("errornaogi1");
            trigger_error("권한없음");
        } else {
            $myfilename12 = $_POST["filenametext1"];
            $myfilecontents = $_POST["mypostcontentsabc"];
            $myfilename = fopen("./post/" . $myfilename12 . ".html", "w");
            fwrite($myfilename, "<!DOCTYPE html>");
            fwrite($myfilename, "<html lang=ko>");
            fwrite($myfilename, "<head>");
            fwrite($myfilename, "<meta charset=utf-8>");
            fwrite($myfilename, "<link rel=stylesheet href=https://tistory1.daumcdn.net/tistory/5499297/skin/style.css>");
            fwrite($myfilename, "<link rel=stylesheet href=https://tistory1.daumcdn.net/tistory/5925927/skin/style.css>");
            fwrite($myfilename, "</head>");
            fwrite($myfilename, "<body>");
            fwrite($myfilename, "<div>");
            fwrite($myfilename, "<header><a href=http://q0-r-e.kr/index.php><h1>q0사이트 홈</h1></a><br><a href=/postlist.php><h3>게시물 목록</h3></a></header>");
            fwrite($myfilename, "<div class=tt_article_useless_p_margin>");
            fwrite($myfilename, "<small>written by " . $username234 . "</small><br><input type=text placeholder=글을_삭제하기_위한_비번><a href=javascript:alert('삭제되었습니다')>게시물 삭제하기</a>");
            fwrite($myfilename, $myfilecontents);
            fwrite($myfilename, "</div>");
            fwrite($myfilename, "</div>");
            fwrite($myfilename, "</body>");
            fwrite($myfilename, "</html>");
            $chusoxx = ("<a href=/post/" . $myfilename12 . ".html class=yagwang9 id=yourposthere1>your post here</a>");
            echo $chusoxx;
        }
    };
    $chusoxx = ("<a href=/post/" . $myfilename12 . ".php class=yagwang9 id=yourposthere1>your post here</a>");
    echo $chusoxx;
    ?>
</body>

</html>