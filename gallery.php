<?php

function renderImages(){

    $VIDEOS_EXTENSIONS = array("mp4");
    $VIDEOS_DIR='videos/';

    if(!is_dir($VIDEOS_DIR)){
        return "<h4>Directory not found</h4>";
    }

    $file=true;
    $renderedImages="";
    $dir = opendir($VIDEOS_DIR);
    while(  
        ($file = readdir($dir))!= false 
    ){
        $file_path = $VIDEOS_DIR.$file;
        $file_extension=pathinfo($file_path, PATHINFO_EXTENSION);
        $isImage = in_array($file_extension,$VIDEOS_EXTENSIONS);
        if($isImage){
            $SRC=$file_path;
            $TITLE=pathinfo($file_path,PATHINFO_FILENAME);
            $VIDEOS_CONTAINER = "<div class='banner'><video src='$SRC'></video><h3 class='article-content' >'$TITLE'</h3></div>";
            $renderedImages = $renderedImages.$VIDEOS_CONTAINER;
        }
    }
    closedir($dir);
    echo($renderedImages);

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <!--<link rel="icon" href=favicon.ico" />-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<meta-->
    <!--name="description"-->
    <!--content=""-->
    <!--/>-->
    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
    <link rel="stylesheet" href="./styles/styles.css" />
    <link rel="stylesheet" href="./styles/gallery.css" />
    <script src="https://kit.fontawesome.com/025c12b0bf.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="./assets/logo.svg" type="image/x-icon">
    <title>UNXPORTED</title>
</head>

<body>
    <header>
        <nav class="contain">
        <a href="/">
                <div class="nav-logo">
                    <img src="./assets/logo.svg" alt="logo">
                    <h3 class="company-name">UNXPORTED</h3>
                </div>
            </a>
            <div id="links" class="link-box">
                <ul>
                <li><a href="/">Home</a></li>
                    <li>About</li>
                    <li>Team</li>
                    <li><button class="bg-button">Whitepaper</button></li>
                </ul>
            </div>
            <div class="hamburger" onclick="nav()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    <div class="latest">
        <div class="content-box contain">
            <h1 class="heading-left">latest</h1>
            <div class='video-contain'>
                <?php 
                renderImages(); 
            ?>
</div>
        </div>
    </div>

    <footer>
        <div id="copyright"></div>
        <div class="flinks">
            <div class="link"><i class="fa-brands fa-facebook"></i></div>
            <div class="link"><i class="fa-brands fa-twitter"></i></i></div>
            <div class="link"></i><i class="fa-brands fa-instagram"></i></div>
            <div class="link"><i class="fa-brands fa-youtube"></i></i></div>
        </div>
    </footer>

    <script src="./js/index.js"></script>
</body>

</html>