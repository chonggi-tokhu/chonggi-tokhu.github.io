<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://tistory1.daumcdn.net/tistory/5499297/skin/style.css">
</head>

<body>
    <div>
        <header>
            <h1>list of postings</h1>
        </header>
        <?php
        $folder1 = "./post/";
        if (is_dir($folder1)) {
            if ($dh = opendir($folder1)) {
                while (($file = readdir($dh)) !== false) {
                    echo "<a href=/post/" . $file . " class=colourbluen>" . $file . "</a><br>";
                }
                closedir($dh);
            }
        }
        ?>
    </div>

</body>

</html>