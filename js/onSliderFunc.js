let MainPic=document.getElementById("two");
let TopPic=document.getElementById("one");
let BotPic=document.getElementById("three");
let containerTop;
let containerBot;
function onSeeTop(){
    containerTop=MainPic.src;
    MainPic.src=TopPic.src;
    TopPic.src=containerTop;
}
function onSeeBot(){
    containerBot=MainPic.src;
    MainPic.src=BotPic.src;
    BotPic.src=containerBot;
}