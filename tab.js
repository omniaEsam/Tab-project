
let $home = document.querySelector(".home");
let $pro = document.querySelector(".pro");
let $masg = document.querySelector(".masg");
let $setting =document.querySelector(".setting");
let $tabcontent =document.querySelector(".tabcontent");

$home.addEventListener("click", function(e){
    e.preventDefault();
    $tabcontent.innerHTML="This is Home content";
})
$pro.addEventListener("click", function(e){
    e.preventDefault();
    $tabcontent.innerHTML="This is Profile content";
})
$masg.addEventListener("click", function(e){
    e.preventDefault();
    $tabcontent.innerHTML="This is Massage content";  
})
$setting.addEventListener("click", function(e){
    e.preventDefault();
    $tabcontent.innerHTML="This is Settings content";
})
$tabcontent.classList.add("contentstyle");
