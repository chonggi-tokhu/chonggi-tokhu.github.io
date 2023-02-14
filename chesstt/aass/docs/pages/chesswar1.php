<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://q0.r-e.kr/bootstrap4/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/home.php">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home.php">HOME <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/index.php">write a posting</a>
                    </li>
                    <li class="nav-item">
                        <a href="/docs/tutorial/doc.php" class="nav-link">docs</a>
                    </li>
                    <li class="nav-item">
                        <a href="/docs/pages/heilcheckmate.php" class="nav-link">웃긴짤</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">menu</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/postlist.php">posts list</a>
                            <a class="dropdown-item" href="/default.php">subhome</a>
                            <a href="/mobilesubdefault.php" class="dropdown-item-colourorange btn-orange">mobile sub default</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" onclick="myalert1function(400)"><span class=" btn btn-danger">function</span></a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                    <li>
                        <?php
                        error_reporting(0);
                        $kongjisoljong1 = $_POST['kongji1'];
                        $kongjisoljong2 = $_POST['kongji2'];
                        $kongjidul = ("<a href=/post/" . $kongjisoljong1 . " class=kongjisahang>" . $kongjisoljong2 . "</a>");
                        echo $kongjidul;
                        ?>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
    <div class="colourblack" style="width:100%;height:800px;">
        <img src="/images/chesswar1.jpg" alt="" width="400px">
    </div>
</body>
</html>