window.onload=colorful;
var color=["red","green","#666666","#345656","#080868"];


function colorful()
{
    width1=500  ;
	height1=500 ;
	top1=200 ;
	left1=200 ;
	the_node=document.getElementsByTagName("body")[0];
	while((width1)>50)
	{
  
	
	the_child=document.createElement("div");
	
	the_child.style.width=width1+"px";
	the_child.style.height=height1+"px";
	the_child.style.left=left1+"px";
	the_child.style.top=top1+"px";
	the_child.style.background=color[Math.floor(Math.random()*5)];
	the_node.appendChild(the_child);
	width1=width1-(50);
	height1=height1-(50 );
	top1=top1+(25);
	left1=left1+(25);
	}
	
}
