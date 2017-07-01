 window.onload = function(){
 		var ids =["canvas1","canvas2","canvas3","canvas4"];
        rad = Math.PI*2/100, //将360度分成100份，那么每一份就是rad度
        speed1 = 0.1; //加载的快慢就靠它了 
        speed2 = 0.1; //加载的快慢就靠它了 
        speed3 = 0.1; //加载的快慢就靠它了 
        speed4 = 0.1; //加载的快慢就靠它了 
        //加速度
        a1 = 0.1;
        a2 = 0.15;
        a3 = 0.2;
        a4 = 0.25;
        //最大停下地方
        max1 = 90;
        max2 = 80;
        max3 = 70;
        max4 = 60;
        
        //从新开始的时间
        bl = 0;
        maxbl = 100;
        
        //是否开始的标志
        flog1 = 1;
        flog2 = 1;
        flog3 = 1;
        flog4 = 1;
        var getCav=function(id){
        	var cav  = document.getElementById(id);
        	return cav
        }
        //绘制5像素宽的运动外圈
        function blueCircle(n,pcav){
        	var context =pcav.getContext('2d')
            context.save();
            context.strokeStyle = "#E1751C"; //设置描边样式
            context.lineWidth = 15; //设置线宽
            context.beginPath(); //路径开始
            var centerX =pcav.width/2;
            var centerY =pcav.height/2;
            context.arc(centerX, centerY, 230 , -Math.PI/2, -Math.PI/2 +n*rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            context.stroke(); //绘制
            context.closePath(); //路径结束
            context.restore();
        }
        //绘制白色外圈
        function whiteCircle(pcav){
        	var context =pcav.getContext('2d')
            context.save();
            context.beginPath();
            context.lineWidth = 10; //设置线宽
            context.strokeStyle = "#000";
            var centerX =pcav.width/2;
            var centerY =pcav.height/2;
            context.arc(centerX, centerY, 230 , 0, Math.PI*2, false);
            context.stroke();
            context.closePath();
            context.restore();
        }  
        //百分比文字绘制
        function text(n,pcav){
        	var context =pcav.getContext('2d')
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
//          context.strokeStyle = "#fff"; //设置描边样式
            var centerX =pcav.width/2;
            var centerY =pcav.height/2;
            context.fillStyle="#E1751C";
            context.font = "200px 楷体"; //设置字体大小和字体
            //绘制字体，并且指定位置
            if(n<10){
            context.fillText(n.toFixed(0)+"%", centerX-100, centerY+60);
            }else{
            context.fillText(n.toFixed(0)+"%", centerX-140, centerY+60);	
            }
            context.stroke(); //执行绘制
            context.restore();
        } 
        //动画循环
        (function drawFrame(){
            window.requestAnimationFrame(drawFrame);
            for(var i =0;i<ids.length;i++){
            		
	            	if(i==0){
	            		if(flog1==1){
		            		if(speed1 > max1){
				         		//speed1 = 0;
				         		flog1 = 2;
				         	}
			            	speed1 += a1;
		            		var context = getCav(ids[i]).getContext('2d')
			            	context.clearRect(0, 0, getCav(ids[i]).width, getCav(ids[i]).height);
				            whiteCircle(getCav(ids[i]));
				            text(speed1,getCav(ids[i]));
				            blueCircle(speed1,getCav(ids[i]));
	            		}else{
	            			bl++;
	            			if(bl>maxbl){
	            				speed1 = 0;
	            				flog1 = 1;
	            			}
	            		}
	            	}
	            	if(i==1){
	            		if(flog2==1){
	            		if(speed2 > max2){
//			         		speed2 = 0;
                            flog2 = 2;
			         	}
		            	speed2 += a2;
	            		var context = getCav(ids[i]).getContext('2d')
		            	context.clearRect(0, 0, getCav(ids[i]).width, getCav(ids[i]).height);
			            whiteCircle(getCav(ids[i]));
			            text(speed2,getCav(ids[i]));
			            blueCircle(speed2,getCav(ids[i]));  
			            }else{
	            			bl++;
	            			if(bl>maxbl){
	            				speed2 = 0;
	            				flog2 = 1;
	            			}
	            		}
	            	}
	            	if(i==2){
	            		if(flog3==1){
	            		if(speed3 > max3){
//			         		speed2 = 0;
                            flog3 = 2;
			         	}
		            	speed3 += a3;
	            		var context = getCav(ids[i]).getContext('2d')
		            	context.clearRect(0, 0, getCav(ids[i]).width, getCav(ids[i]).height);
			            whiteCircle(getCav(ids[i]));
			            text(speed3,getCav(ids[i]));
			            blueCircle(speed3,getCav(ids[i])); 
			            }else{
	            			bl++;
	            			if(bl>maxbl){
	            				speed3 = 0;
	            				flog3 = 1;
	            			}
	            		}
	            	}
	            	if(i==3){
	            		if(flog4==1){
	            		if(speed4 > max4){
//			         		speed2 = 0;
                            flog4 = 2;
			         	}
		            	speed4 += a4;
	            		var context = getCav(ids[i]).getContext('2d')
		            	context.clearRect(0, 0, getCav(ids[i]).width, getCav(ids[i]).height);
			            whiteCircle(getCav(ids[i]));
			            text(speed4,getCav(ids[i]));
			            blueCircle(speed4,getCav(ids[i]));  
			            }else{
	            			bl++;
	            			if(bl>maxbl){
	            				speed4 = 0;
	            				flog4= 1;
	            			}
	            		}
	            	}
            	       	    
            }
        }());
    }