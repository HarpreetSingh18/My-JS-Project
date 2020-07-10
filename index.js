var randomNumber=Math.floor(Math.random()*6)+1;

if(randomNumber===1)
{
	document.querySelector(".dice .img1").setAttribute("src","dice1.png");
}
else if(randomNumber===2)
{
	document.querySelector(".dice .img1").setAttribute("src","dice2.png");
}
else if(randomNumber===3)
{
	document.querySelector(".dice .img1").setAttribute("src","dice3.png");
}
else if(randomNumber===4)
{
	document.querySelector(".dice .img1").setAttribute("src","dice4.png");
}
else if(randomNumber===5)
{
	document.querySelector(".dice .img1").setAttribute("src","dice5.png");
}
else if(randomNumber===6)
{
	document.querySelector(".dice .img1").setAttribute("src","dice6.png");
}




var randomNumber1=Math.floor(Math.random()*6)+1;

if(randomNumber1===1)
{
	document.querySelector(".dice .img2").setAttribute("src","dice1.png");
}
else if(randomNumber1===2)
{
	document.querySelector(".dice .img2").setAttribute("src","dice2.png");
}
else if(randomNumber1===3)
{
	document.querySelector(".dice .img2").setAttribute("src","dice3.png");
}
else if(randomNumber1===4)
{
	document.querySelector(".dice .img2").setAttribute("src","dice4.png");
}
else if(randomNumber1===5)
{
	document.querySelector(".dice .img2").setAttribute("src","dice5.png");
}
else if(randomNumber1===6)
{
	document.querySelector(".dice .img2").setAttribute("src","dice6.png");
}


if(randomNumber===6)
{
	document.querySelector("h1").textContent="🚩Player 1 wins";  
}
else if(randomNumber===randomNumber1)
{
	document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1===6)
{
	document.querySelector("h1").textContent="Player 2 wins🚩";
}
