var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;



var im="dice"+randomNumber1+".png";
var imgs=document.querySelectorAll("img")[0];
imgs.setAttribute("src" ,im);



var ran2=Math.random();
ran2=(ran2*6)+1;
var ro=Math.floor(ran2);

var i="dice"+ro+".png";
var q=document.querySelectorAll("img")[1];
q.setAttribute("src",i);


if(randomNumber1>ran2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(ran2<randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}