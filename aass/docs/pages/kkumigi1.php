<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/bootstrap4/css/bootstrap.min.css">
</head>

<body>
    <div>
        <script>
            function menulinkcontent1(menulink0) {
                var my1menucontent = document.forms["yangsikform1"][menulink0].value;
                document.getElementById(menulink0).innerHTML = (my1menucontent);
            }

            function textcontent4() {
                var gradc1 = document.forms["yangsikform1"]["colour1select1"].value;
                var gradc2 = document.forms["yangsikform1"]["colour1select2"].value;
                var gradc3 = document.forms["yangsikform1"]["colour1select3"].value;
                var gradc4 = document.forms["yangsikform1"]["colour1select4"].value;
                var bgtxttype1 = document.forms["yangsikform1"]["bgitnuntxt1"].value;
                var bgttxtcontent1 = document.forms["yangsikform1"]["bghaltxt6"].value;
                if (bgtxttype1 == "txt3") {
                    document.getElementById("txt30").innerHTML = (bgttxtcontent1);
                    var style30 = document.createAttribute("style");
                    style30.value = ("background:linear-gradient(to right," + (gradc1) + "," + (gradc2) + "," + (gradc3) + "," + (gradc4) + ");");
                    document.getElementById("txt30").setAttributeNode(style30);
                }
                if (bgtxttype1 == "txt2") {
                    document.getElementById("txt20").innerHTML = (bgttxtcontent1);
                    var style20 = document.createAttribute("style");
                    style20.value = ("background:linear-gradient(to right," + (gradc1) + "," + (gradc2) + "," + (gradc3) + "," + (gradc4) + ");");
                    document.getElementById("txt20").setAttributeNode(style20);
                }
            }

            function submitfunction1() {
                var menusayong1 = document.forms["yangsikform1"]["dropdown1menu1"].value;
                var porspan1 = document.forms["yangsikform1"]["bgitnuntxt1"].value;
                var porx1 = document.getElementById("txt20").outerHTML;
                var sporx1 = document.getElementById("txt30").outerHTML;
                var profilemenu1 = document.getElementById("nav1menubar2").outerHTML;
                if (menusayong1 == "no1dropdown1") {
                    if (porspan1 == "txt2") {
                        document.forms["yangsikform1"]["profilekkumigi1"].value = (porx1);
                    }
                }
                if (menusayong1 == "no1dropdown1") {
                    if (porspan1 == "txt3") {
                        document.forms["yangsikform1"]["profilekkumigi1"].value = (sporx1);
                    }
                }
                if (menusayong1 == "dropdown1menu2") {
                    if (porspan1 == "txt2") {
                        document.forms["yangsikform1"]["profilekkumigi1"].value = (porx1) + (profilemenu1);
                    }
                }
                if (menusayong1 == "dropdown1menu2") {
                    if (porspan1 == "txt3") {
                        document.forms["yangsikform1"]["profilekkumigi1"].value = (sporx1) + (profilemenu1);
                    }
                }
            }
        </script>
        <div>
            <div>
                <form onsubmit="submitfunction1()" name="yangsikform1" action="./kkumigi1.php" method="post">
                    <fieldset>
                        <legend>나만의 프로필 만들기 입력양식</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td>그라디언트(그라데이션) 혹은 단색 적용 색깔 순서(네가지까지 가능합니다.<br> 세가지 이하로 설정하고 싶으시면 '없음'을 선택해주시고,<br> 그라데이션 없이 단색을 원하시면 첫번째만 선택해주세요)</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>
                                        <select name="colour1select1" id="">
                                            <option value="red">빨간색</option>
                                            <option value="blue">파란색</option>
                                            <option value="green">녹색</option>
                                            <option value="white">흰색</option>
                                            <option value="yellow">노란색</option>
                                            <option value="black">검은색</option>
                                            <option value="lightblue">무지개 파란색</option>
                                            <option value="lightpink">무지개 분홍색(오로라뜰때 핑크)</option>
                                            <option value="lightgreen">무지개 녹색</option>
                                            <option value="olive">국방색/올리브색</option>
                                            <option value="darkred">진빨간색</option>
                                            <option value="orange">주황색(오렌지색)</option>
                                            <option value="pink">분홍색(핑크색)</option>
                                            <option value="" title="최소한 한가지는 선택해주세요" disabled>없음</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="colour1select2" id="">
                                            <option value="red">빨간색</option>
                                            <option value="blue">파란색</option>
                                            <option value="green">녹색</option>
                                            <option value="white">흰색</option>
                                            <option value="yellow">노란색</option>
                                            <option value="black">검은색</option>
                                            <option value="lightblue">무지개 파란색</option>
                                            <option value="lightpink">무지개 분홍색(오로라뜰때 핑크)</option>
                                            <option value="lightgreen">무지개 녹색</option>
                                            <option value="olive">국방색/올리브색</option>
                                            <option value="darkred">진빨간색</option>
                                            <option value="orange">주황색(오렌지색)</option>
                                            <option value="pink">분홍색(핑크색)</option>
                                            <option value="colournone1" disabled>없음</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="colour1select3" id="">
                                            <option value="red">빨간색</option>
                                            <option value="blue">파란색</option>
                                            <option value="green">녹색</option>
                                            <option value="white">흰색</option>
                                            <option value="yellow">노란색</option>
                                            <option value="black">검은색</option>
                                            <option value="lightblue">무지개 파란색</option>
                                            <option value="lightpink">무지개 분홍색(오로라뜰때 핑크)</option>
                                            <option value="lightgreen">무지개 녹색</option>
                                            <option value="olive">국방색/올리브색</option>
                                            <option value="darkred">진빨간색</option>
                                            <option value="orange">주황색(오렌지색)</option>
                                            <option value="pink">분홍색(핑크색)</option>
                                            <option value="colournone1" disabled>없음</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select name="colour1select4" id="">
                                            <option value="red">빨간색</option>
                                            <option value="blue">파란색</option>
                                            <option value="green">녹색</option>
                                            <option value="white">흰색</option>
                                            <option value="yellow">노란색</option>
                                            <option value="black">검은색</option>
                                            <option value="lightblue">무지개 파란색</option>
                                            <option value="lightpink">무지개 분홍색(오로라뜰때 핑크)</option>
                                            <option value="lightgreen">무지개 녹색</option>
                                            <option value="olive">국방색/올리브색</option>
                                            <option value="darkred">진빨간색</option>
                                            <option value="orange">주황색(오렌지색)</option>
                                            <option value="pink">분홍색(핑크색)</option>
                                            <option value="colournone1" disabled>없음</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label><input type="radio" name="bgitnuntxt1" value="txt2" id="" checked>설정한 배경색을 적용할 글 타입:줄바꿈 있는 글(p태그)</label>
                                    </td>
                                    <td>
                                        <label><input type="radio" name="bgitnuntxt1" value="txt3" id="">설정한 배경색을 적용할 글 타입:줄바꿈 없는 글(span태그)</label>
                                    </td>
                                    <td>
                                        <label><input type="text" name="bghaltxt6" id="" onkeyup="textcontent4()">설정할 배경색을 적용할 글의 내용을 입력하세요</label>
                                    </td>
                                    <td>
                                        <span id="txt20"></span>
                                    </td>
                                    <td>
                                        <span id="txt30"></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>메뉴바도 설정 가능합니다.</td>
                                    <td>
                                        <label></label><input type="radio" name="dropdown1menu1" value="no1dropdown1" checked>없음</label>
                                    </td>
                                    <td>
                                        <label></label><input type="radio" name="dropdown1menu1" value="dropdown1menu2">사용</label>
                                    </td>
                                    <td>메뉴바 드롭다운 메뉴 콘텐츠(최대 9개)</td>
                                    <td>
                                        <div id="nav1menubar2">
                                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                                <a class="navbar-brand" href="#">Home</a>
                                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav mr-auto">
                                                        <li class="nav-item active">
                                                            <a class="nav-link" href="#"><span id="n0menulink0">first nav link</span><span class="sr-only">(current)</span></a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#"><span id="firstmenulink1">second nav link</span></a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#"><span id="secondmenulink2">third nav link</span></a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a href="#" class="nav-link"><span id="thirdmenulink3"></span></a>
                                                        </li>
                                                        <li class="nav-item dropdown my-2 my-lg-0">
                                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">dropdown menu</a>
                                                            <div class="dropdown-menu">
                                                                <a class="dropdown-item" href="#"><span id="firstmenudd1">first dropdown menu link</span></a>
                                                                <a class="dropdown-item" href="#"><span id="secondmenudd2">second</span></a>
                                                                <a href="#" class="dropdown-item"><span id="thirdmenudd3">third</span></a>
                                                                <div class="dropdown-divider"></div>
                                                                <a class="dropdown-item" href="#"><span id="dropdownlastbtn1" role="button" class="btn btn-primary">button</span></a>
                                                            </div>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link disabled"><span id="dnl0123"></span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(n0menulink0)" name="n0menulink0" id="" placeholder="first nav link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(firstmenulink1)" name="firstmenulink1" id="" placeholder="second nav link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(secondmenulink2)" name="secondmenulink2" id="" placeholder="third nav link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(thirdmenulink3)" name="thirdmenulink3" id="" placeholder="fourth nav link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(firstmenudd1)" name="firstmenudd1" id="" placeholder="first dropdown menu link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(secondmenudd2)" name="secondmenudd2" id="" placeholder="second dropdown menu link">
                                    </td>
                                    <td>
                                        <input type="text" onkeyup="menulinkcontent1(thirdmenudd3)" name="thirdmenudd3" id="" placeholder="third dropdown menu link">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="hidden" name="profilekkumigi1">
                        <button onclick="submitfunction1" type="submit">코드 받기</button>
                    </fieldset>

                </form>
            </div>
        </div>
    </div>
    <?php
    $codes1 = $_POST["profilekkumigi1"];
    echo htmlentities($codes1);
    ?>
</body>

</html>