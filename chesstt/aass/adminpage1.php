<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.3.js"></script>
    <link rel="stylesheet" href="./bootstrap4/css/bootstrap.min.css">
</head>

<body>
    <div>
        <div>
            <h3>관리자페이지</h3>
            <div>
                <input type="text" name="kongji1">
                <input type="text" name="kongji2">
                <button class="btn btn-primary">공지 올리기</button>
            </div>
        </div>
    </div>
    <script>
        var pw = prompt("로봇인지\,인간인지\,패륜아인지 확인하기 위한 보안절차입니다\. 다음 문장을 입력창에 따라쓰시오\: \'저는 김정일이고 아버진 김일성이고 제 아들은 김정은입니다\'", "");
        if (pw !== "저는 김정일이고 아버진 김일성이고 제 아들은 김정은입니다") {
            window.location.replace("./failtologin1.php");
        }

        $(".btn").click(function(){
            window.location.replace("./failtologin1.php");
        });
    </script>
</body>

</html>