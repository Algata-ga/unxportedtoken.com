<?php

function renderImages(){

    $VIDEOS_EXTENSIONS = array("png","jpeg","gif","jpg");
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
            $ALT=pathinfo($file_path,PATHINFO_FILENAME);
            $renderedImages = $renderedImages."<img src='$SRC' alt='$ALT' />";
        }
    }
    closedir($dir);
    echo($renderedImages);

}
?>

<!doctype html>
<head>
</head>
<body>
    <div>
    <?php 
        renderImages(); 
    ?>
    </div>
</body>
</html>
