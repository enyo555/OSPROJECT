var money=0;
function bet(money,bet)
{
	if((money=="")||(bet==""))
	    document.getElementById("notice").innerHTML="Please enter both money and bet";
	else
	{
		money=parseFloat(document.getElementById("money").value);
		var bet=parseFloat(document.getElementById("bet").value);
		if (money<1000)
		{
			document.getElementById("notice").innerHTML="We cannot play because your money is lower than 1000 baht !!!";
			document.getElementById("chooseresult").innerHTML="";
			document.getElementById("randomresult").innerHTML="";
			document.getElementById("result").innerHTML=""; 
			document.getElementById("remain").innerHTML="";   
		}
		else if (money<bet)
		{
			document.getElementById("notice").innerHTML="We cannot play because your bet is lower than money you got !!!";
			document.getElementById("chooseresult").innerHTML="";
			document.getElementById("randomresult").innerHTML="";
			document.getElementById("result").innerHTML=""; 
			document.getElementById("remain").innerHTML="";   
		}
		else
		{
			var number=parseInt(document.getElementById("guessnum").value);
			var randomnum=parseInt(Math.random()*6);
				 
			document.getElementById("notice").innerHTML="";
			document.getElementById("chooseresult").innerHTML="You choose number = "+number;
			document.getElementById("randomresult").innerHTML="Random number    = "+randomnum;
			if (number>randomnum)
			{
				money=money+bet;
				document.getElementById("result").innerHTML="You Win !!!, You get 1000 Baht ;)"; 
			}
			else
			{
				money=money-bet;
				document.getElementById("result").innerHTML="You Lose !!!";
			}
				document.getElementById("remain").innerHTML="Money remaining = "+money+" Baht";   
		}
	}
}