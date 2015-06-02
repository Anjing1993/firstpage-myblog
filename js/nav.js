	var o = null;
	var aLis = null;
	var oBar = null;
	var iTime = null;
	var iSpeed = 0;
	var iAcc = 3;
	var onOff = 0;
	var iPrev = 0;
	var iNext = 0;
	function goTime()
	{
		for(var x = 0; x < aLis.length; x+=1)
		{
			if(aLis[x] === this)
			{
				var iTarget = (aLis[0].offsetWidth) * x;
				iNext = x;
				onOff = iNext - iPrev;
					if(iTime)
					{
					clearInterval(iTime);
					}
					if(onOff>=0)
					{
						iTime = setInterval("elasticity("+ iTarget +")",10);
					}
					else
					{
						iTime = setInterval("postpone("+ iTarget +")",10);
					}
				iPrev = iNext;
			}
			aLis[x].className="";
			this.className="active";
		}
	}
	function elasticity(target)
	{
		var width = oBar.offsetLeft;
		iSpeed+=iAcc;
		width += iSpeed;
		if(width >= target)
		{
			iSpeed*=-0.7;
			if(Math.abs(iSpeed)<=iAcc)
			{
				clearInterval(iTime);
				iTime=null;
			}
			width=target;
		}
		oBar.style.left = width + "px";
	}
	function postpone(target)
	{
		if(oBar.offsetLeft===target)
		{
			clearInterval(iTime);
			iTime=null;
		}
		else
		{
			iSpeed = (target - oBar.offsetLeft)/5;
			oBar.style.left = oBar.offsetLeft + iSpeed + "px";
		}
	}
		
window.onload = function(){
	
		o= document.getElementById("nav");
		aLis = o.getElementsByTagName("li");
		oBar = document.getElementById("bar");
		
		for(var x = 0; x < aLis.length; x+=1)
		{
			if(aLis[x].id!="bar")
			{
				aLis[x].onmouseover = goTime;
			}
	}
	
	
	
	
	
var runimg=new runImg();
  runimg.count=5;
  runimg.imgurl=[
  						'<img src="./images/box1.jpg"/>',
						'<img src="./images/box2.jpg"/>',
						'<img src="./images/box3.jpg"/>',
						'<img src="./images/box4.jpg"/>',
						'<img src="./images/box5.jpg"/>'];
  runimg.info("#box");
  runimg.action("#box");	
	
	
	
	

	
	
	
	
	
	
};