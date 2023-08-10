var colorMode = document.querySelector('#colorMode');
colorMode.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        colorMode.src="Img/moon.png";
    }else{
        colorMode.src="Img/sun.png";
    }
}