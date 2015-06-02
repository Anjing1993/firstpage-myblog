
window.onload=function()
{	
	var oPlay=document.getElementById('play');
	var oOl=oPlay.getElementsByTagName('ol')[0];
	var aLi1=oOl.getElementsByTagName('li');
	var oUl=oPlay.getElementsByTagName('ul')[0];
	var aLi2=oUl.getElementsByTagName('li');
	var i=iNum=direction=0;
	var times=null;
	var play=null;
	
	for(i=0;i<aLi1.length;i++)
	{
		aLi1[i].index=i;
		aLi1[i].onclick=function()
		{
			iNum=this.index;
			show();
		};
	}
	
	//按钮点击后调用的函数
	function show()
	{
		for(i=0;i<aLi1.length;i++)
		{
			aLi1[i].className='';
		}
		aLi1[iNum].className='active1';
		startMove(-(iNum*95));
	}
	//自动播放转向
	function autoPlay()
	{
		if(iNum>=aLi1.length-1)
		{
			direction=1;
		}
		else if(iNum<=0)
		{
			direction=0;
		}
		
		if(direction==0)
		{
			iNum++;
		}
		else if(direction==1)
		{
			iNum--;
		}
		show();
	}
	//自动播放
	play=setInterval(autoPlay,3000);
	
	//鼠标移入展示区停止自动播放
	oPlay.onmouseover=function()
	{
		clearInterval(play);
	};
	//鼠标移出展示区开启自动播放
	oPlay.onmouseout=function()
	{
		play=setInterval(autoPlay,3000);
	};
	
	function startMove(iTarget)
	{
		clearInterval(times);
		times=setInterval(function()
		{
			doMove(iTarget);
		},30);
	}
	function doMove(iTarget)
	{
		
		var iSpeed1=(iTarget-oUl.offsetTop)/10;
		iSpeed1=iSpeed1>0?Math.ceil(iSpeed1):Math.floor(iSpeed1);
		
		if(oUl.offsetTop==iTarget)
		{
			clearInterval(times)
		}
		else
		{
			oUl.style.top=oUl.offsetTop+iSpeed1+'px';
		}
		
	}
};
