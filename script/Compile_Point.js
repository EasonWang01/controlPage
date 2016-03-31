var movePos=[];
var ass;
$(document).ready(function(){

buildSubscription();
//IO的參數(另一部分寫在ReadValueLine)
ReadValue(id_21,var_21);ReadValue(id_22,var_22);ReadValue(id_23,var_23);ReadValue(id_24,var_24);
ReadValue(id_25,var_25);ReadValue(id_26,var_26);ReadValue(id_27,var_27);ReadValue(id_28,var_28);
ReadValue(id_29,var_29);ReadValue(id_30,var_30);ReadValue(id_31,var_31);ReadValue(id_32,var_32);
ReadValue(id_33,var_33);ReadValue(id_34,var_34);ReadValue(id_35,var_35);ReadValue(id_36,var_36);
ReadValue(id_37,var_37);ReadValue(id_38,var_38);ReadValue(id_39,var_39);ReadValue(id_40,var_40);
ReadValue(id_41,var_41); ReadValue(id_42,var_42); ReadValue(id_43,var_43); ReadValue(id_44,var_44);
ReadValue(id_45,var_45); ReadValue(id_46,var_46); ReadValue(id_47,var_47); ReadValue(id_48,var_48);
ReadValue(id_49,var_49); ReadValue(id_50,var_50);

 for(i=1;i<10;i++){
var loop ='#'+'inp_0'+i+'5';
$(loop).hide().width(125);

}
 for(i=10;i<31;i++){
var loop ='#'+'inp_'+i+'5';
$(loop).hide().width(125);

}
 
 
for(i=1;i<10;i++){
var loop ='#'+'inp_015'+i;
$(loop).hide();

}
 
for(i=20;i<41;i++){
var loop ='#'+'inp_015'+i;
$(loop).hide();

}
/////////////////////以下為修正控制方向鍵剛換頁須點第二下才開始動之bug
////將原btn_Y1Z1_up改為btnup1等
$(document).ready(function(){

///////////左方按鈕上
document.getElementById("btnup1").addEventListener('mousedown',btnupf1,false);
document.getElementById("btnup1").addEventListener('mouseup',btnupf2,false);

document.getElementById("btnup1").addEventListener('touchstart',btnupf1,false);

document.getElementById("btnup1").addEventListener('touchend',btnupf2,false);
///////////左方按鈕左
document.getElementById("btnleft1").addEventListener('mousedown',btnleftf1,false);
document.getElementById("btnleft1").addEventListener('mouseup',btnleftf2,false);

document.getElementById("btnleft1").addEventListener('touchstart',btnleftf1,false);

document.getElementById("btnleft1").addEventListener('touchend',btnleftf2,false);
///////////左方按鈕下
document.getElementById("btndown1").addEventListener('mousedown',btndownf1,false);
document.getElementById("btndown1").addEventListener('mouseup',btndownf2,false);

document.getElementById("btndown1").addEventListener('touchstart',btndownf1,false);

document.getElementById("btndown1").addEventListener('touchend',btndownf2,false);
///////////左方按鈕右
document.getElementById("btnright1").addEventListener('mousedown',btnrightf1,false);
document.getElementById("btnright1").addEventListener('mouseup',
	btnrightf2,false);

document.getElementById("btnright1").addEventListener('touchstart',btnrightf1,false);

document.getElementById("btnright1").addEventListener('touchend',btnrightf2,false);
///////X左
document.getElementById("btnxleft1").addEventListener('mousedown',btnxleftf1,false);
document.getElementById("btnxleft1").addEventListener('mouseup',btnxleftf2,false);

document.getElementById("btnxleft1").addEventListener('touchstart',btnxleftf1,false);

document.getElementById("btnxleft1").addEventListener('touchend',btnxleftf2,false);
//////X右
document.getElementById("btnxright1").addEventListener('mousedown',btnxrightf1,false);
document.getElementById("btnxright1").addEventListener('mouseup',
	btnxrightf2,false);

document.getElementById("btnxright1").addEventListener('touchstart',btnxrightf1,false);

document.getElementById("btnxright1").addEventListener('touchend',btnxrightf2,false);


});







///////////左方按鈕上
function btnupf1(id){

		document.getElementById("btnup1").style.background="url(../image/bg_BtnDown_top.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");

		};

		function btnupf2(id){ 
		
		document.getElementById("btnup1").style.background="url(../image/bg_BtnUp_top.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
		
	};
///////////左方按鈕左
function btnleftf1(id){

		document.getElementById("btnleft1").style.background="url(../image/bg_BtnDown_left.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");

		};

		function btnleftf2(id){ 
		
		document.getElementById("btnleft1").style.background="url(../image/bg_BtnUp_left.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
		
	};
///////////左方按鈕下
function btndownf1(id){

		document.getElementById("btndown1").style.background="url(../image/bg_BtnDown_bottom.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");

		};

		function btndownf2(id){ 
		
		document.getElementById("btndown1").style.background="url(../image/bg_BtnUp_bottom.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
		
	};
///////////左方按鈕右
function btnrightf1(id){

		document.getElementById("btnright1").style.background="url(../image/bg_BtnDown_right.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");

		};

		function btnrightf2(id){ 
		
		document.getElementById("btnright1").style.background="url(../image/bg_BtnUp_right.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
		
	};
///////////X左
function btnxleftf1(id){

		document.getElementById("btnxleft1").style.background="url(../image/bg_BtnDown_left8150.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");

		};

		function btnxleftf2(id){ 
		
		document.getElementById("btnxleft1").style.background="url(../image/bg_BtnUp_left8150.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
		
	};
///////////X右
function btnxrightf1(id){

		document.getElementById("btnxright1").style.background="url(../image/bg_BtnDown_right7550.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");

		};

		function btnxrightf2(id){ 
		
		document.getElementById("btnxright1").style.background="url(../image/bg_BtnUp_right7550.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
		
	};
});



function BtnDown(id){
    if(id=="SingleStep"){
	    writeValueFN("true", "unit/dHdGlobal.gboSingleStep");
	}
	else if(id=="LastStep"){
	    writeValueFN("true", "unit/dHdGlobal.gboLastStep");
	}
	else if(id=="NextStep"){
	    writeValueFN("true", "unit/dHdGlobal.gboNextStep");
	}
	else if(id=="StepDownload"){
	    writeValueFN("true", "unit/dHdGlobal.gboStepDownload");
	}
}

function writeSingleVar1(id){
    if(id=="inp_010"){
	
	
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
	      	 writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].tMon");
		     document.getElementById("inp_011").style.display="none";
		     document.getElementById("inp_012").style.display="none";
		     document.getElementById("inp_013").style.display="none";
		     document.getElementById("inp_014").style.display="none";
		     document.getElementById("inp_015").style.display="none";
		     document.getElementById("inp_016").style.display="none";
		     document.getElementById("inp_017").style.display="none";
			 document.getElementById("inp_0151").style.display="none";
		}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
			document.getElementById("inp_011").style.display="block";
			document.getElementById("inp_012").style.display="block";
			document.getElementById("inp_013").style.display="block";
			document.getElementById("inp_014").style.display="block";
			document.getElementById("inp_015").style.display="none";
			document.getElementById("inp_016").style.display="none";
			document.getElementById("inp_017").style.display="block";
			document.getElementById("inp_0151").style.display="none";
		}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
			document.getElementById("inp_011").style.display="none";
			document.getElementById("inp_012").style.display="none";
			document.getElementById("inp_013").style.display="none";
			document.getElementById("inp_014").style.display="none";
			document.getElementById("inp_015").style.display="none";
			document.getElementById("inp_016").style.display="none";
			document.getElementById("inp_017").style.display="block";
			document.getElementById("inp_0151").style.display="none";
		}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
			document.getElementById("inp_011").style.display="none";
			document.getElementById("inp_012").style.display="none";
			document.getElementById("inp_013").style.display="none";
			document.getElementById("inp_014").style.display="none";
			document.getElementById("inp_015").style.display="block";
			document.getElementById("inp_0151").style.display="none";
			document.getElementById("inp_016").style.display="block";
			document.getElementById("inp_017").style.display="block";
		}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
			document.getElementById("inp_011").style.display="none";
			document.getElementById("inp_012").style.display="none";
			document.getElementById("inp_013").style.display="none";
			document.getElementById("inp_014").style.display="none";
			document.getElementById("inp_015").style.display="none";
			document.getElementById("inp_0151").style.display="block";
			document.getElementById("inp_016").style.display="block";
			document.getElementById("inp_017").style.display="block";
		}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[1].eCmd");
			document.getElementById("inp_011").style.display="none";
			document.getElementById("inp_012").style.display="none";
			document.getElementById("inp_013").style.display="none";
			document.getElementById("inp_014").style.display="none";
			document.getElementById("inp_015").style.display="none";
			document.getElementById("inp_016").style.display="none";
			document.getElementById("inp_017").style.display="none";
			document.getElementById("inp_0151").style.display="none";
		}
    }
    else if(id=="inp_011"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[1].x");
    }
    else if(id=="inp_012"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[1].y1");
    }
    else if(id=="inp_013"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[1].z1");
    }
    else if(id=="inp_015"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
	}
	else if(id=="inp_0151"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[1].P1");
		}
	}
    else if(id=="inp_016"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[1].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[1].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[1].P2");
		 }
	}
    else if(id=="inp_017"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[1].tMon");
	}
}
function writeSingleVar2(id){
    if(id=="inp_020"){    
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].tMon");
		     document.getElementById("inp_021").style.display="none";
			 document.getElementById("inp_022").style.display="none";
			 document.getElementById("inp_023").style.display="none";
			 document.getElementById("inp_024").style.display="none";
			 document.getElementById("inp_025").style.display="none";
			 document.getElementById("inp_026").style.display="none";
			 document.getElementById("inp_027").style.display="none";
			 document.getElementById("inp_0152").style.display="none";
		}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
			document.getElementById("inp_021").style.display="block";
			document.getElementById("inp_022").style.display="block";
			document.getElementById("inp_023").style.display="block";
			document.getElementById("inp_024").style.display="block";
			document.getElementById("inp_025").style.display="none";
			document.getElementById("inp_026").style.display="none";
			document.getElementById("inp_027").style.display="block";
			document.getElementById("inp_0152").style.display="none";
			
		}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
			document.getElementById("inp_021").style.display="none";
			document.getElementById("inp_022").style.display="none";
			document.getElementById("inp_023").style.display="none";
			document.getElementById("inp_024").style.display="none";
			document.getElementById("inp_025").style.display="none";
			document.getElementById("inp_026").style.display="none";
			document.getElementById("inp_027").style.display="block";
			document.getElementById("inp_0152").style.display="none";
		}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
			document.getElementById("inp_021").style.display="none";
			document.getElementById("inp_022").style.display="none";
			document.getElementById("inp_023").style.display="none";
			document.getElementById("inp_024").style.display="none";
			document.getElementById("inp_025").style.display="block";
			document.getElementById("inp_026").style.display="block";
			document.getElementById("inp_027").style.display="block";
			document.getElementById("inp_0152").style.display="none";
		}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
			document.getElementById("inp_021").style.display="none";
			document.getElementById("inp_022").style.display="none";
			document.getElementById("inp_023").style.display="none";
			document.getElementById("inp_024").style.display="none";
			document.getElementById("inp_025").style.display="none";
			document.getElementById("inp_026").style.display="block";
			document.getElementById("inp_027").style.display="block";
			document.getElementById("inp_0152").style.display="block";
		}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[2].eCmd");
			document.getElementById("inp_021").style.display="none";
			document.getElementById("inp_022").style.display="none";
			document.getElementById("inp_023").style.display="none";
			document.getElementById("inp_024").style.display="none";
			document.getElementById("inp_025").style.display="none";
			document.getElementById("inp_026").style.display="none";
			document.getElementById("inp_027").style.display="none";
			document.getElementById("inp_0152").style.display="none";
		}
    }
    else if(id=="inp_021"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[2].x");
    }
    else if(id=="inp_022"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[2].y1");
    }
    else if(id=="inp_023"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[2].z1");
    }
    else if(id=="inp_025"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
	}
	else if(id=="inp_0152"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[2].P1");
		}
	}
    else if(id=="inp_026"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[2].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[2].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[2].P2");
		 }
	}
    else if(id=="inp_027"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[2].tMon");
	}
}
function writeSingleVar3(id){
    if(id=="inp_030"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].tMon");
		     document.getElementById("inp_031").style.display="none";
			document.getElementById("inp_032").style.display="none";
			document.getElementById("inp_033").style.display="none";
			document.getElementById("inp_034").style.display="none";
			document.getElementById("inp_035").style.display="none";
			document.getElementById("inp_036").style.display="none";
			document.getElementById("inp_037").style.display="none";
			document.getElementById("inp_0153").style.display="none";
		}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
			document.getElementById("inp_031").style.display="block";
			document.getElementById("inp_032").style.display="block";
			document.getElementById("inp_033").style.display="block";
			document.getElementById("inp_034").style.display="block";
			document.getElementById("inp_035").style.display="none";
			document.getElementById("inp_036").style.display="none";
			document.getElementById("inp_037").style.display="block";
			document.getElementById("inp_0153").style.display="none";
		}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
			document.getElementById("inp_031").style.display="none";
			document.getElementById("inp_032").style.display="none";
			document.getElementById("inp_033").style.display="none";
			document.getElementById("inp_034").style.display="none";
			document.getElementById("inp_035").style.display="none";
			document.getElementById("inp_036").style.display="none";
			document.getElementById("inp_037").style.display="block";
			document.getElementById("inp_0153").style.display="none";
		}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
			document.getElementById("inp_031").style.display="none";
			document.getElementById("inp_032").style.display="none";
			document.getElementById("inp_033").style.display="none";
			document.getElementById("inp_034").style.display="none";
			document.getElementById("inp_035").style.display="block";
			document.getElementById("inp_036").style.display="block";
			document.getElementById("inp_037").style.display="block";
			document.getElementById("inp_0153").style.display="none";
		}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
			document.getElementById("inp_031").style.display="none";
			document.getElementById("inp_032").style.display="none";
			document.getElementById("inp_033").style.display="none";
			document.getElementById("inp_034").style.display="none";
			document.getElementById("inp_035").style.display="none";
			document.getElementById("inp_036").style.display="block";
			document.getElementById("inp_037").style.display="block";
			document.getElementById("inp_0153").style.display="block";
		}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[3].eCmd");
			document.getElementById("inp_031").style.display="none";
			document.getElementById("inp_032").style.display="none";
			document.getElementById("inp_033").style.display="none";
			document.getElementById("inp_034").style.display="none";
			document.getElementById("inp_035").style.display="none";
			document.getElementById("inp_036").style.display="none";
			document.getElementById("inp_037").style.display="none";
			document.getElementById("inp_0153").style.display="none";
		}
    }
    else if(id=="inp_031"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[3].x");
    }
    else if(id=="inp_032"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[3].y1");
    }
    else if(id=="inp_033"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[3].z1");
    }
    else if(id=="inp_035"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
	}
	else if(id=="inp_0153"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[3].P1");
		}
	}
    else if(id=="inp_036"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[3].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[3].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[3].P2");
		 }
	}
    else if(id=="inp_037"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[3].tMon");
	}
}
function writeSingleVar4(id){
    if(id=="inp_040"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].tMon");
		     document.getElementById("inp_041").style.display="none";
			 document.getElementById("inp_042").style.display="none";
			 document.getElementById("inp_043").style.display="none";
			 document.getElementById("inp_044").style.display="none";
			 document.getElementById("inp_045").style.display="none";
			 document.getElementById("inp_046").style.display="none";
			 document.getElementById("inp_047").style.display="none";
			 document.getElementById("inp_0154").style.display="none";
		}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
			document.getElementById("inp_041").style.display="block";
			document.getElementById("inp_042").style.display="block";
			document.getElementById("inp_043").style.display="block";
			document.getElementById("inp_044").style.display="block";
			document.getElementById("inp_045").style.display="none";
			document.getElementById("inp_046").style.display="none";
			document.getElementById("inp_047").style.display="block";
			document.getElementById("inp_0154").style.display="none";
		}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
			document.getElementById("inp_041").style.display="none";
			document.getElementById("inp_042").style.display="none";
			document.getElementById("inp_043").style.display="none";
			document.getElementById("inp_044").style.display="none";
			document.getElementById("inp_045").style.display="none";
			document.getElementById("inp_046").style.display="none";
			document.getElementById("inp_047").style.display="block";
			document.getElementById("inp_0154").style.display="none";
		}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
			document.getElementById("inp_041").style.display="none";
			document.getElementById("inp_042").style.display="none";
			document.getElementById("inp_043").style.display="none";
			document.getElementById("inp_044").style.display="none";
			document.getElementById("inp_045").style.display="block";
			document.getElementById("inp_046").style.display="block";
			document.getElementById("inp_047").style.display="block";
		document.getElementById("inp_0154").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
			document.getElementById("inp_041").style.display="none";
			document.getElementById("inp_042").style.display="none";
			document.getElementById("inp_043").style.display="none";
			document.getElementById("inp_044").style.display="none";
			document.getElementById("inp_045").style.display="none";
			document.getElementById("inp_046").style.display="block";
			document.getElementById("inp_047").style.display="block";
		document.getElementById("inp_0154").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[4].eCmd");
			document.getElementById("inp_041").style.display="none";
			document.getElementById("inp_042").style.display="none";
			document.getElementById("inp_043").style.display="none";
			document.getElementById("inp_044").style.display="none";
			document.getElementById("inp_045").style.display="none";
			document.getElementById("inp_046").style.display="none";
			document.getElementById("inp_047").style.display="none";
			document.getElementById("inp_0154").style.display="none";
		}
    }
    else if(id=="inp_041"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[4].x");
    }
    else if(id=="inp_042"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[4].y1");
    }
    else if(id=="inp_043"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[4].z1");
    }
    else if(id=="inp_045"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
	}
	else if(id=="inp_0154"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[4].P1");
		}
	}
    else if(id=="inp_046"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[4].P2");

	    }else if(document.getElementById(id).value=="1"){
	    writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[4].P2");
		}
	     else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[4].P2");
		 }
	}
    else if(id=="inp_047"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[4].tMon");
	}
}
function writeSingleVar5(id){
    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].tMon");
		     document.getElementById("inp_051").style.display="none";
			document.getElementById("inp_052").style.display="none";
			document.getElementById("inp_053").style.display="none";
			document.getElementById("inp_054").style.display="none";
			document.getElementById("inp_055").style.display="none";
			document.getElementById("inp_056").style.display="none";
			document.getElementById("inp_057").style.display="none";
		document.getElementById("inp_0155").style.display="none";}
    else if(id=="inp_050"){
		if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
			document.getElementById("inp_051").style.display="block";
			document.getElementById("inp_052").style.display="block";
			document.getElementById("inp_053").style.display="block";
			document.getElementById("inp_054").style.display="block";
			document.getElementById("inp_055").style.display="none";
			document.getElementById("inp_056").style.display="none";
			document.getElementById("inp_057").style.display="block";
		document.getElementById("inp_0155").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
			document.getElementById("inp_051").style.display="none";
			document.getElementById("inp_052").style.display="none";
			document.getElementById("inp_053").style.display="none";
			document.getElementById("inp_054").style.display="none";
			document.getElementById("inp_055").style.display="none";
			document.getElementById("inp_056").style.display="none";
			document.getElementById("inp_057").style.display="block";
		document.getElementById("inp_0155").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
			document.getElementById("inp_051").style.display="none";
			document.getElementById("inp_052").style.display="none";
			document.getElementById("inp_053").style.display="none";
			document.getElementById("inp_054").style.display="none";
			document.getElementById("inp_055").style.display="block";
			document.getElementById("inp_056").style.display="block";
			document.getElementById("inp_057").style.display="block";
		document.getElementById("inp_0155").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
			document.getElementById("inp_051").style.display="none";
			document.getElementById("inp_052").style.display="none";
			document.getElementById("inp_053").style.display="none";
			document.getElementById("inp_054").style.display="none";
			document.getElementById("inp_055").style.display="none";
			document.getElementById("inp_056").style.display="block";
			document.getElementById("inp_057").style.display="block";
		document.getElementById("inp_0155").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[5].eCmd");
			document.getElementById("inp_051").style.display="none";
			document.getElementById("inp_052").style.display="none";
			document.getElementById("inp_053").style.display="none";
			document.getElementById("inp_054").style.display="none";
			document.getElementById("inp_055").style.display="none";
			document.getElementById("inp_056").style.display="none";
			document.getElementById("inp_057").style.display="none";
		document.getElementById("inp_0155").style.display="none";}
    }
    else if(id=="inp_051"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[5].x");
    }
    else if(id=="inp_052"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[5].y1");
    }
    else if(id=="inp_053"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[5].z1");
    }
    else if(id=="inp_055"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
	}else if(id=="inp_0155"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[5].P1");
		}
	}
    else if(id=="inp_056"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[5].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[5].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[5].P2");
		 }
	}
    else if(id=="inp_057"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[5].tMon");
	}
}
function writeSingleVar6(id){
    if(id=="inp_060"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].tMon");
		     document.getElementById("inp_061").style.display="none";
			document.getElementById("inp_062").style.display="none";
			document.getElementById("inp_063").style.display="none";
			document.getElementById("inp_064").style.display="none";
			document.getElementById("inp_065").style.display="none";
			document.getElementById("inp_066").style.display="none";
			document.getElementById("inp_067").style.display="none";
		document.getElementById("inp_0156").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
			document.getElementById("inp_061").style.display="block";
			document.getElementById("inp_062").style.display="block";
			document.getElementById("inp_063").style.display="block";
			document.getElementById("inp_064").style.display="block";
			document.getElementById("inp_065").style.display="none";
			document.getElementById("inp_066").style.display="none";
			document.getElementById("inp_067").style.display="block";
		document.getElementById("inp_0156").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
			document.getElementById("inp_061").style.display="none";
			document.getElementById("inp_062").style.display="none";
			document.getElementById("inp_063").style.display="none";
			document.getElementById("inp_064").style.display="none";
			document.getElementById("inp_065").style.display="none";
			document.getElementById("inp_066").style.display="none";
			document.getElementById("inp_067").style.display="block";
		document.getElementById("inp_0156").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
			document.getElementById("inp_061").style.display="none";
			document.getElementById("inp_062").style.display="none";
			document.getElementById("inp_063").style.display="none";
			document.getElementById("inp_064").style.display="none";
			document.getElementById("inp_065").style.display="block";
			document.getElementById("inp_066").style.display="block";
			document.getElementById("inp_067").style.display="block";
		document.getElementById("inp_0156").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
			document.getElementById("inp_061").style.display="none";
			document.getElementById("inp_062").style.display="none";
			document.getElementById("inp_063").style.display="none";
			document.getElementById("inp_064").style.display="none";
			document.getElementById("inp_065").style.display="none";
			document.getElementById("inp_066").style.display="block";
			document.getElementById("inp_067").style.display="block";
		document.getElementById("inp_0156").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[6].eCmd");
			document.getElementById("inp_061").style.display="none";
			document.getElementById("inp_062").style.display="none";
			document.getElementById("inp_063").style.display="none";
			document.getElementById("inp_064").style.display="none";
			document.getElementById("inp_065").style.display="none";
			document.getElementById("inp_066").style.display="none";
			document.getElementById("inp_067").style.display="none";
		document.getElementById("inp_0156").style.display="none";}
    }
    else if(id=="inp_061"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[6].x");
    }
    else if(id=="inp_062"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[6].y1");
    }
    else if(id=="inp_063"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[6].z1");
    }
    else if(id=="inp_065"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
	}else if(id=="inp_0156"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[6].P1");
		}
	}
    else if(id=="inp_066"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[6].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[6].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[6].P2");
		 }
	}
    else if(id=="inp_067"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[6].tMon");
	}
}
function writeSingleVar7(id){
    if(id=="inp_070"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].tMon");
		     document.getElementById("inp_071").style.display="none";
			document.getElementById("inp_072").style.display="none";
			document.getElementById("inp_073").style.display="none";
			document.getElementById("inp_074").style.display="none";
			document.getElementById("inp_075").style.display="none";
			document.getElementById("inp_076").style.display="none";
			document.getElementById("inp_077").style.display="none";
		document.getElementById("inp_0157").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
			document.getElementById("inp_071").style.display="block";
			document.getElementById("inp_072").style.display="block";
			document.getElementById("inp_073").style.display="block";
			document.getElementById("inp_074").style.display="block";
			document.getElementById("inp_075").style.display="none";
			document.getElementById("inp_076").style.display="none";
			document.getElementById("inp_077").style.display="block";
		document.getElementById("inp_0157").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
			document.getElementById("inp_071").style.display="none";
			document.getElementById("inp_072").style.display="none";
			document.getElementById("inp_073").style.display="none";
			document.getElementById("inp_074").style.display="none";
			document.getElementById("inp_075").style.display="none";
			document.getElementById("inp_076").style.display="none";
			document.getElementById("inp_077").style.display="block";
		document.getElementById("inp_0157").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
			document.getElementById("inp_071").style.display="none";
			document.getElementById("inp_072").style.display="none";
			document.getElementById("inp_073").style.display="none";
			document.getElementById("inp_074").style.display="none";
			document.getElementById("inp_075").style.display="block";
			document.getElementById("inp_076").style.display="block";
			document.getElementById("inp_077").style.display="block";
		document.getElementById("inp_0157").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
			document.getElementById("inp_071").style.display="none";
			document.getElementById("inp_072").style.display="none";
			document.getElementById("inp_073").style.display="none";
			document.getElementById("inp_074").style.display="none";
			document.getElementById("inp_075").style.display="none";
			document.getElementById("inp_076").style.display="block";
			document.getElementById("inp_077").style.display="block";
		document.getElementById("inp_0157").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[7].eCmd");
			document.getElementById("inp_071").style.display="none";
			document.getElementById("inp_072").style.display="none";
			document.getElementById("inp_073").style.display="none";
			document.getElementById("inp_074").style.display="none";
			document.getElementById("inp_075").style.display="none";
			document.getElementById("inp_076").style.display="none";
			document.getElementById("inp_077").style.display="none";
		document.getElementById("inp_0157").style.display="none";}
    }
    else if(id=="inp_071"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[7].x");
    }
    else if(id=="inp_072"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[7].y1");
    }
    else if(id=="inp_073"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[7].z1");
    }
    else if(id=="inp_075"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
	}else if(id=="inp_0157"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[7].P1");
		}
	}
    else if(id=="inp_076"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[7].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[7].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[7].P2");
		 }
	}
    else if(id=="inp_077"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[7].tMon");
	}
}
function writeSingleVar8(id){
    if(id=="inp_080"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].tMon");
		     document.getElementById("inp_081").style.display="none";
			document.getElementById("inp_082").style.display="none";
			document.getElementById("inp_083").style.display="none";
			document.getElementById("inp_084").style.display="none";
			document.getElementById("inp_085").style.display="none";
			document.getElementById("inp_086").style.display="none";
			document.getElementById("inp_087").style.display="none";
		document.getElementById("inp_0158").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
			document.getElementById("inp_081").style.display="block";
			document.getElementById("inp_082").style.display="block";
			document.getElementById("inp_083").style.display="block";
			document.getElementById("inp_084").style.display="block";
			document.getElementById("inp_085").style.display="none";
			document.getElementById("inp_086").style.display="none";
			document.getElementById("inp_087").style.display="block";
		document.getElementById("inp_0158").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
			document.getElementById("inp_081").style.display="none";
			document.getElementById("inp_082").style.display="none";
			document.getElementById("inp_083").style.display="none";
			document.getElementById("inp_084").style.display="none";
			document.getElementById("inp_085").style.display="none";
			document.getElementById("inp_086").style.display="none";
			document.getElementById("inp_087").style.display="block";
		document.getElementById("inp_0158").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
			document.getElementById("inp_081").style.display="none";
			document.getElementById("inp_082").style.display="none";
			document.getElementById("inp_083").style.display="none";
			document.getElementById("inp_084").style.display="none";
			document.getElementById("inp_085").style.display="block";
			document.getElementById("inp_086").style.display="block";
			document.getElementById("inp_087").style.display="block";
		document.getElementById("inp_0158").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
			document.getElementById("inp_081").style.display="none";
			document.getElementById("inp_082").style.display="none";
			document.getElementById("inp_083").style.display="none";
			document.getElementById("inp_084").style.display="none";
			document.getElementById("inp_085").style.display="none";
			document.getElementById("inp_086").style.display="block";
			document.getElementById("inp_087").style.display="block";
		document.getElementById("inp_0158").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[8].eCmd");
			document.getElementById("inp_081").style.display="none";
			document.getElementById("inp_082").style.display="none";
			document.getElementById("inp_083").style.display="none";
			document.getElementById("inp_084").style.display="none";
			document.getElementById("inp_085").style.display="none";
			document.getElementById("inp_086").style.display="none";
			document.getElementById("inp_087").style.display="none";
		document.getElementById("inp_0158").style.display="none";}
    }
    else if(id=="inp_081"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[8].x");
    }
    else if(id=="inp_082"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[8].y1");
    }
    else if(id=="inp_083"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[8].z1");
    }
    else if(id=="inp_085"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
	}else if(id=="inp_0158"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[8].P1");
		}
	}
    else if(id=="inp_086"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[8].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[8].P2");
		 }
		else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[8].P2");
		 }
	}
    else if(id=="inp_087"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[8].tMon");
	}
}
function writeSingleVar9(id){
    if(id=="inp_090"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].tMon");
		     document.getElementById("inp_091").style.display="none";
			document.getElementById("inp_092").style.display="none";
			document.getElementById("inp_093").style.display="none";
			document.getElementById("inp_094").style.display="none";
			document.getElementById("inp_095").style.display="none";
			document.getElementById("inp_096").style.display="none";
			document.getElementById("inp_097").style.display="none";
		document.getElementById("inp_0159").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
			document.getElementById("inp_091").style.display="block";
			document.getElementById("inp_092").style.display="block";
			document.getElementById("inp_093").style.display="block";
			document.getElementById("inp_094").style.display="block";
			document.getElementById("inp_095").style.display="none";
			document.getElementById("inp_096").style.display="none";
			document.getElementById("inp_097").style.display="block";
		document.getElementById("inp_0159").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
			document.getElementById("inp_091").style.display="none";
			document.getElementById("inp_092").style.display="none";
			document.getElementById("inp_093").style.display="none";
			document.getElementById("inp_094").style.display="none";
			document.getElementById("inp_095").style.display="none";
			document.getElementById("inp_096").style.display="none";
			document.getElementById("inp_097").style.display="block";
		document.getElementById("inp_0159").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
			document.getElementById("inp_091").style.display="none";
			document.getElementById("inp_092").style.display="none";
			document.getElementById("inp_093").style.display="none";
			document.getElementById("inp_094").style.display="none";
			document.getElementById("inp_095").style.display="block";
			document.getElementById("inp_096").style.display="block";
			document.getElementById("inp_097").style.display="block";
		document.getElementById("inp_0159").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
			document.getElementById("inp_091").style.display="none";
			document.getElementById("inp_092").style.display="none";
			document.getElementById("inp_093").style.display="none";
			document.getElementById("inp_094").style.display="none";
			document.getElementById("inp_095").style.display="none";
			document.getElementById("inp_096").style.display="block";
			document.getElementById("inp_097").style.display="block";
		document.getElementById("inp_0159").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[9].eCmd");
			document.getElementById("inp_091").style.display="none";
			document.getElementById("inp_092").style.display="none";
			document.getElementById("inp_093").style.display="none";
			document.getElementById("inp_094").style.display="none";
			document.getElementById("inp_095").style.display="none";
			document.getElementById("inp_096").style.display="none";
			document.getElementById("inp_097").style.display="none";
		document.getElementById("inp_0159").style.display="none";}
    }
    else if(id=="inp_091"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[9].x");
    }
    else if(id=="inp_092"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[9].y1");
    }
    else if(id=="inp_093"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[9].z1");
    }
    else if(id=="inp_095"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
	}else if(id=="inp_0159"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[9].P1");
		}
	}
    else if(id=="inp_096"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[9].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[9].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[9].P2");
		 }
	}
    else if(id=="inp_097"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[9].tMon");
	}
}
function writeSingleVar10(id){
    if(id=="inp_100"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].tMon");
		     document.getElementById("inp_101").style.display="none";
			document.getElementById("inp_102").style.display="none";
			document.getElementById("inp_103").style.display="none";
			document.getElementById("inp_104").style.display="none";
			document.getElementById("inp_105").style.display="none";
			document.getElementById("inp_106").style.display="none";
			document.getElementById("inp_107").style.display="none";
		document.getElementById("inp_01520").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
			document.getElementById("inp_101").style.display="block";
			document.getElementById("inp_102").style.display="block";
			document.getElementById("inp_103").style.display="block";
			document.getElementById("inp_104").style.display="block";
			document.getElementById("inp_105").style.display="none";
			document.getElementById("inp_106").style.display="none";
			document.getElementById("inp_107").style.display="block";
		document.getElementById("inp_01520").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
			document.getElementById("inp_101").style.display="none";
			document.getElementById("inp_102").style.display="none";
			document.getElementById("inp_103").style.display="none";
			document.getElementById("inp_104").style.display="none";
			document.getElementById("inp_105").style.display="none";
			document.getElementById("inp_106").style.display="none";
			document.getElementById("inp_107").style.display="block";
		document.getElementById("inp_01520").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
			document.getElementById("inp_101").style.display="none";
			document.getElementById("inp_102").style.display="none";
			document.getElementById("inp_103").style.display="none";
			document.getElementById("inp_104").style.display="none";
			document.getElementById("inp_105").style.display="block";
			document.getElementById("inp_106").style.display="block";
			document.getElementById("inp_107").style.display="block";
		document.getElementById("inp_01520").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
			document.getElementById("inp_101").style.display="none";
			document.getElementById("inp_102").style.display="none";
			document.getElementById("inp_103").style.display="none";
			document.getElementById("inp_104").style.display="none";
			document.getElementById("inp_105").style.display="none";
			document.getElementById("inp_106").style.display="block";
			document.getElementById("inp_107").style.display="block";
		document.getElementById("inp_01520").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[10].eCmd");
			document.getElementById("inp_101").style.display="none";
			document.getElementById("inp_102").style.display="none";
			document.getElementById("inp_103").style.display="none";
			document.getElementById("inp_104").style.display="none";
			document.getElementById("inp_105").style.display="none";
			document.getElementById("inp_106").style.display="none";
			document.getElementById("inp_107").style.display="none";
		document.getElementById("inp_01520").style.display="none";}
    }
    else if(id=="inp_101"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[10].x");
    }
    else if(id=="inp_102"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[10].y1");
    }
    else if(id=="inp_103"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[10].z1");
    }
    else if(id=="inp_105"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
	}else if(id=="inp_01520"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[10].P1");
		}
	}
    else if(id=="inp_106"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[10].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[10].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[10].P2");
		 }
	}
    else if(id=="inp_107"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[10].tMon");
	}
}
function writeSingleVar11(id){
    if(id=="inp_110"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].tMon");
		     document.getElementById("inp_111").style.display="none";
			document.getElementById("inp_112").style.display="none";
			document.getElementById("inp_113").style.display="none";
			document.getElementById("inp_114").style.display="none";
			document.getElementById("inp_115").style.display="none";
			document.getElementById("inp_116").style.display="none";
			document.getElementById("inp_117").style.display="none";
		document.getElementById("inp_01521").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
			document.getElementById("inp_111").style.display="block";
			document.getElementById("inp_112").style.display="block";
			document.getElementById("inp_113").style.display="block";
			document.getElementById("inp_114").style.display="block";
			document.getElementById("inp_115").style.display="none";
			document.getElementById("inp_116").style.display="none";
			document.getElementById("inp_117").style.display="block";
		document.getElementById("inp_01521").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
			document.getElementById("inp_111").style.display="none";
			document.getElementById("inp_112").style.display="none";
			document.getElementById("inp_113").style.display="none";
			document.getElementById("inp_114").style.display="none";
			document.getElementById("inp_115").style.display="none";
			document.getElementById("inp_116").style.display="none";
			document.getElementById("inp_117").style.display="block";
		document.getElementById("inp_01521").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
			document.getElementById("inp_111").style.display="none";
			document.getElementById("inp_112").style.display="none";
			document.getElementById("inp_113").style.display="none";
			document.getElementById("inp_114").style.display="none";
			document.getElementById("inp_115").style.display="block";
			document.getElementById("inp_116").style.display="block";
			document.getElementById("inp_117").style.display="block";
		document.getElementById("inp_01521").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
			document.getElementById("inp_111").style.display="none";
			document.getElementById("inp_112").style.display="none";
			document.getElementById("inp_113").style.display="none";
			document.getElementById("inp_114").style.display="none";
			document.getElementById("inp_115").style.display="none";
			document.getElementById("inp_116").style.display="block";
			document.getElementById("inp_117").style.display="block";
		document.getElementById("inp_01521").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[11].eCmd");
			document.getElementById("inp_111").style.display="none";
			document.getElementById("inp_112").style.display="none";
			document.getElementById("inp_113").style.display="none";
			document.getElementById("inp_114").style.display="none";
			document.getElementById("inp_115").style.display="none";
			document.getElementById("inp_116").style.display="none";
			document.getElementById("inp_117").style.display="none";
		document.getElementById("inp_01521").style.display="none";}
    }
    else if(id=="inp_111"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[11].x");
    }
    else if(id=="inp_112"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[11].y1");
    }
    else if(id=="inp_113"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[11].z1");
    }
    else if(id=="inp_115"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
	}else if(id=="inp_01521"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[11].P1");
		}
	}
    else if(id=="inp_116"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[11].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[11].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[11].P2");
		 }
	}
    else if(id=="inp_117"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[11].tMon");
	}
}
function writeSingleVar12(id){
    if(id=="inp_120"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].tMon");
		     document.getElementById("inp_121").style.display="none";
			document.getElementById("inp_122").style.display="none";
			document.getElementById("inp_123").style.display="none";
			document.getElementById("inp_124").style.display="none";
			document.getElementById("inp_125").style.display="none";
			document.getElementById("inp_126").style.display="none";
			document.getElementById("inp_127").style.display="none";
		document.getElementById("inp_01522").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
			document.getElementById("inp_121").style.display="block";
			document.getElementById("inp_122").style.display="block";
			document.getElementById("inp_123").style.display="block";
			document.getElementById("inp_124").style.display="block";
			document.getElementById("inp_125").style.display="none";
			document.getElementById("inp_126").style.display="none";
			document.getElementById("inp_127").style.display="block";
		document.getElementById("inp_01522").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
			document.getElementById("inp_121").style.display="none";
			document.getElementById("inp_122").style.display="none";
			document.getElementById("inp_123").style.display="none";
			document.getElementById("inp_124").style.display="none";
			document.getElementById("inp_125").style.display="none";
			document.getElementById("inp_126").style.display="none";
			document.getElementById("inp_127").style.display="block";
		document.getElementById("inp_01522").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
			document.getElementById("inp_121").style.display="none";
			document.getElementById("inp_122").style.display="none";
			document.getElementById("inp_123").style.display="none";
			document.getElementById("inp_124").style.display="none";
			document.getElementById("inp_125").style.display="block";
			document.getElementById("inp_126").style.display="block";
			document.getElementById("inp_127").style.display="block";
		document.getElementById("inp_01522").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
			document.getElementById("inp_121").style.display="none";
			document.getElementById("inp_122").style.display="none";
			document.getElementById("inp_123").style.display="none";
			document.getElementById("inp_124").style.display="none";
			document.getElementById("inp_125").style.display="none";
			document.getElementById("inp_126").style.display="block";
			document.getElementById("inp_127").style.display="block";
		document.getElementById("inp_01522").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[12].eCmd");
			document.getElementById("inp_121").style.display="none";
			document.getElementById("inp_122").style.display="none";
			document.getElementById("inp_123").style.display="none";
			document.getElementById("inp_124").style.display="none";
			document.getElementById("inp_125").style.display="none";
			document.getElementById("inp_126").style.display="none";
			document.getElementById("inp_127").style.display="none";
		document.getElementById("inp_01522").style.display="none";}
    }
    else if(id=="inp_121"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[12].x");
    }
    else if(id=="inp_122"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[12].y1");
    }
    else if(id=="inp_123"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[12].z1");
    }
    else if(id=="inp_125"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
	}else if(id=="inp_01522"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[12].P1");
		}
	}
    else if(id=="inp_126"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[12].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[12].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[12].P2");
		 }
	}
    else if(id=="inp_127"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[12].tMon");
	}
}
function writeSingleVar13(id){
    if(id=="inp_130"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].tMon");
		     document.getElementById("inp_131").style.display="none";
			 document.getElementById("inp_132").style.display="none";
			 document.getElementById("inp_133").style.display="none";
			 document.getElementById("inp_134").style.display="none";
			 document.getElementById("inp_135").style.display="none";
			 document.getElementById("inp_136").style.display="none";
			 document.getElementById("inp_137").style.display="none";
		document.getElementById("inp_01523").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
			document.getElementById("inp_131").style.display="block";
			document.getElementById("inp_132").style.display="block";
			document.getElementById("inp_133").style.display="block";
			document.getElementById("inp_134").style.display="block";
			document.getElementById("inp_135").style.display="none";
			document.getElementById("inp_136").style.display="none";
			document.getElementById("inp_137").style.display="block";
		document.getElementById("inp_01523").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
			document.getElementById("inp_131").style.display="none";
			document.getElementById("inp_132").style.display="none";
			document.getElementById("inp_133").style.display="none";
			document.getElementById("inp_134").style.display="none";
			document.getElementById("inp_135").style.display="none";
			document.getElementById("inp_136").style.display="none";
			document.getElementById("inp_137").style.display="block";
		document.getElementById("inp_01523").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
			document.getElementById("inp_131").style.display="none";
			document.getElementById("inp_132").style.display="none";
			document.getElementById("inp_133").style.display="none";
			document.getElementById("inp_134").style.display="none";
			document.getElementById("inp_135").style.display="block";
			document.getElementById("inp_136").style.display="block";
			document.getElementById("inp_137").style.display="block";
		document.getElementById("inp_01523").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
			document.getElementById("inp_131").style.display="none";
			document.getElementById("inp_132").style.display="none";
			document.getElementById("inp_133").style.display="none";
			document.getElementById("inp_134").style.display="none";
			document.getElementById("inp_135").style.display="none";
			document.getElementById("inp_136").style.display="block";
			document.getElementById("inp_137").style.display="block";
		document.getElementById("inp_01523").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[13].eCmd");
			document.getElementById("inp_131").style.display="none";
			document.getElementById("inp_132").style.display="none";
			document.getElementById("inp_133").style.display="none";
			document.getElementById("inp_134").style.display="none";
			document.getElementById("inp_135").style.display="none";
			document.getElementById("inp_136").style.display="none";
			document.getElementById("inp_137").style.display="none";
		document.getElementById("inp_01523").style.display="none";}
    }
    else if(id=="inp_131"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[13].x");
    }
    else if(id=="inp_132"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[13].y1");
    }
    else if(id=="inp_133"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[13].z1");
    }
    else if(id=="inp_135"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
	}else if(id=="inp_01523"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[13].P1");
		}
	}
    else if(id=="inp_136"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[13].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[13].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[13].P2");
		 }
	}
    else if(id=="inp_137"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[13].tMon");
	}
}
function writeSingleVar14(id){
    if(id=="inp_140"){
	     if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].tMon");
		     document.getElementById("inp_141").style.display="none";
			 document.getElementById("inp_142").style.display="none";
			 document.getElementById("inp_143").style.display="none";
			 document.getElementById("inp_144").style.display="none";
			 document.getElementById("inp_145").style.display="none";
			 document.getElementById("inp_146").style.display="none";
			 document.getElementById("inp_147").style.display="none";
		document.getElementById("inp_01524").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
			document.getElementById("inp_141").style.display="block";
			document.getElementById("inp_142").style.display="block";
			document.getElementById("inp_143").style.display="block";
			document.getElementById("inp_144").style.display="block";
			document.getElementById("inp_145").style.display="none";
			document.getElementById("inp_146").style.display="none";
			document.getElementById("inp_147").style.display="block";
		document.getElementById("inp_01524").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
			document.getElementById("inp_141").style.display="none";
			document.getElementById("inp_142").style.display="none";
			document.getElementById("inp_143").style.display="none";
			document.getElementById("inp_144").style.display="none";
			document.getElementById("inp_145").style.display="none";
			document.getElementById("inp_146").style.display="none";
			document.getElementById("inp_147").style.display="block";
		document.getElementById("inp_01524").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
			document.getElementById("inp_141").style.display="none";
			document.getElementById("inp_142").style.display="none";
			document.getElementById("inp_143").style.display="none";
			document.getElementById("inp_144").style.display="none";
			document.getElementById("inp_145").style.display="block";
			document.getElementById("inp_146").style.display="block";
			document.getElementById("inp_147").style.display="block";
		document.getElementById("inp_01524").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
			document.getElementById("inp_141").style.display="none";
			document.getElementById("inp_142").style.display="none";
			document.getElementById("inp_143").style.display="none";
			document.getElementById("inp_144").style.display="none";
			document.getElementById("inp_145").style.display="none";
			document.getElementById("inp_146").style.display="block";
			document.getElementById("inp_147").style.display="block";
		document.getElementById("inp_01524").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[14].eCmd");
			document.getElementById("inp_141").style.display="none";
			document.getElementById("inp_142").style.display="none";
			document.getElementById("inp_143").style.display="none";
			document.getElementById("inp_144").style.display="none";
			document.getElementById("inp_145").style.display="none";
			document.getElementById("inp_146").style.display="none";
			document.getElementById("inp_147").style.display="none";
		document.getElementById("inp_01524").style.display="none";}
    }
    else if(id=="inp_141"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[14].x");
    }
    else if(id=="inp_142"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[14].y1");
    }
    else if(id=="inp_143"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[14].z1");
    }
    else if(id=="inp_145"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
	}else if(id=="inp_01524"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[14].P1");
		}
	}
    else if(id=="inp_146"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[14].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[14].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[14].P2");
		 }
	}
    else if(id=="inp_147"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[14].tMon");
	}
}
function writeSingleVar15(id){
    if(id=="inp_150"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].tMon");
		     document.getElementById("inp_151").style.display="none";
			 document.getElementById("inp_152").style.display="none";
			 document.getElementById("inp_153").style.display="none";
			 document.getElementById("inp_154").style.display="none";
			 document.getElementById("inp_155").style.display="none";
			 document.getElementById("inp_156").style.display="none";
			 document.getElementById("inp_157").style.display="none";
		document.getElementById("inp_01525").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
			document.getElementById("inp_151").style.display="block";
			document.getElementById("inp_152").style.display="block";
			document.getElementById("inp_153").style.display="block";
			document.getElementById("inp_154").style.display="block";
			document.getElementById("inp_155").style.display="none";
			document.getElementById("inp_156").style.display="none";
			document.getElementById("inp_157").style.display="block";
		document.getElementById("inp_01525").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
			document.getElementById("inp_151").style.display="none";
			document.getElementById("inp_152").style.display="none";
			document.getElementById("inp_153").style.display="none";
			document.getElementById("inp_154").style.display="none";
			document.getElementById("inp_155").style.display="none";
			document.getElementById("inp_156").style.display="none";
			document.getElementById("inp_157").style.display="block";
		document.getElementById("inp_01525").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
			document.getElementById("inp_151").style.display="none";
			document.getElementById("inp_152").style.display="none";
			document.getElementById("inp_153").style.display="none";
			document.getElementById("inp_154").style.display="none";
			document.getElementById("inp_155").style.display="block";
			document.getElementById("inp_156").style.display="block";
			document.getElementById("inp_157").style.display="block";
		document.getElementById("inp_01525").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
			document.getElementById("inp_151").style.display="none";
			document.getElementById("inp_152").style.display="none";
			document.getElementById("inp_153").style.display="none";
			document.getElementById("inp_154").style.display="none";
			document.getElementById("inp_155").style.display="none";
			document.getElementById("inp_156").style.display="block";
			document.getElementById("inp_157").style.display="block";
		document.getElementById("inp_01525").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[15].eCmd");
			document.getElementById("inp_151").style.display="none";
			document.getElementById("inp_152").style.display="none";
			document.getElementById("inp_153").style.display="none";
			document.getElementById("inp_154").style.display="none";
			document.getElementById("inp_155").style.display="none";
			document.getElementById("inp_156").style.display="none";
			document.getElementById("inp_157").style.display="none";
		document.getElementById("inp_01525").style.display="none";}
    }
    else if(id=="inp_151"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[15].x");
    }
    else if(id=="inp_152"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[15].y1");
    }
    else if(id=="inp_153"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[15].z1");
    }
    else if(id=="inp_155"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
	}else if(id=="inp_01525"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[15].P1");
		}
	}
    else if(id=="inp_156"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[15].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[15].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[15].P2");
		 }
	}
    else if(id=="inp_157"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[15].tMon");
	}
}
function writeSingleVar16(id){
    if(id=="inp_160"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].tMon");
		     document.getElementById("inp_161").style.display="none";
			 document.getElementById("inp_162").style.display="none";
			 document.getElementById("inp_163").style.display="none";
			 document.getElementById("inp_164").style.display="none";
			 document.getElementById("inp_165").style.display="none";
			 document.getElementById("inp_166").style.display="none";
			 document.getElementById("inp_167").style.display="none";
		document.getElementById("inp_01526").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
			document.getElementById("inp_161").style.display="block";
			document.getElementById("inp_162").style.display="block";
			document.getElementById("inp_163").style.display="block";
			document.getElementById("inp_164").style.display="block";
			document.getElementById("inp_165").style.display="none";
			document.getElementById("inp_166").style.display="none";
			document.getElementById("inp_167").style.display="block";
		document.getElementById("inp_01526").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
			document.getElementById("inp_161").style.display="none";
			document.getElementById("inp_162").style.display="none";
			document.getElementById("inp_163").style.display="none";
			document.getElementById("inp_164").style.display="none";
			document.getElementById("inp_165").style.display="none";
			document.getElementById("inp_166").style.display="none";
			document.getElementById("inp_167").style.display="block";
		document.getElementById("inp_01526").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
			document.getElementById("inp_161").style.display="none";
			document.getElementById("inp_162").style.display="none";
			document.getElementById("inp_163").style.display="none";
			document.getElementById("inp_164").style.display="none";
			document.getElementById("inp_165").style.display="block";
			document.getElementById("inp_166").style.display="block";
			document.getElementById("inp_167").style.display="block";
		document.getElementById("inp_01526").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
			document.getElementById("inp_161").style.display="none";
			document.getElementById("inp_162").style.display="none";
			document.getElementById("inp_163").style.display="none";
			document.getElementById("inp_164").style.display="none";
			document.getElementById("inp_165").style.display="none";
			document.getElementById("inp_166").style.display="block";
			document.getElementById("inp_167").style.display="block";
		document.getElementById("inp_01526").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[16].eCmd");
			document.getElementById("inp_161").style.display="none";
			document.getElementById("inp_162").style.display="none";
			document.getElementById("inp_163").style.display="none";
			document.getElementById("inp_164").style.display="none";
			document.getElementById("inp_165").style.display="none";
			document.getElementById("inp_166").style.display="none";
			document.getElementById("inp_167").style.display="none";
		document.getElementById("inp_01526").style.display="none";}
    }
    else if(id=="inp_161"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[16].x");
    }
    else if(id=="inp_162"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[16].y1");
    }
    else if(id=="inp_163"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[16].z1");
    }
    else if(id=="inp_165"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
	}else if(id=="inp_01526"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[16].P1");
		}
	}
    else if(id=="inp_166"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[16].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[16].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[16].P2");
		 }
	}
    else if(id=="inp_167"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[16].tMon");
	}
}
function writeSingleVar17(id){
    if(id=="inp_170"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].tMon");
		     document.getElementById("inp_171").style.display="none";
			 document.getElementById("inp_172").style.display="none";
			 document.getElementById("inp_173").style.display="none";
			 document.getElementById("inp_174").style.display="none";
			 document.getElementById("inp_175").style.display="none";
			 document.getElementById("inp_176").style.display="none";
			 document.getElementById("inp_177").style.display="none";
		document.getElementById("inp_01527").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
			document.getElementById("inp_171").style.display="block";
			document.getElementById("inp_172").style.display="block";
			document.getElementById("inp_173").style.display="block";
			document.getElementById("inp_174").style.display="block";
			document.getElementById("inp_175").style.display="none";
			document.getElementById("inp_176").style.display="none";
			document.getElementById("inp_177").style.display="block";
		document.getElementById("inp_01527").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
			document.getElementById("inp_171").style.display="none";
			document.getElementById("inp_172").style.display="none";
			document.getElementById("inp_173").style.display="none";
			document.getElementById("inp_174").style.display="none";
			document.getElementById("inp_175").style.display="none";
			document.getElementById("inp_176").style.display="none";
			document.getElementById("inp_177").style.display="block";
		document.getElementById("inp_01527").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
			document.getElementById("inp_171").style.display="none";
			document.getElementById("inp_172").style.display="none";
			document.getElementById("inp_173").style.display="none";
			document.getElementById("inp_174").style.display="none";
			document.getElementById("inp_175").style.display="block";
			document.getElementById("inp_176").style.display="block";
			document.getElementById("inp_177").style.display="block";
		document.getElementById("inp_01527").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
			document.getElementById("inp_171").style.display="none";
			document.getElementById("inp_172").style.display="none";
			document.getElementById("inp_173").style.display="none";
			document.getElementById("inp_174").style.display="none";
			document.getElementById("inp_175").style.display="none";
			document.getElementById("inp_176").style.display="block";
			document.getElementById("inp_177").style.display="block";
		document.getElementById("inp_01527").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[17].eCmd");
			document.getElementById("inp_171").style.display="none";
			document.getElementById("inp_172").style.display="none";
			document.getElementById("inp_173").style.display="none";
			document.getElementById("inp_174").style.display="none";
			document.getElementById("inp_175").style.display="none";
			document.getElementById("inp_176").style.display="none";
			document.getElementById("inp_177").style.display="none";
		document.getElementById("inp_01527").style.display="none";}
    }
    else if(id=="inp_171"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[17].x");
    }
    else if(id=="inp_172"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[17].y1");
    }
    else if(id=="inp_173"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[17].z1");
    }
    else if(id=="inp_175"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
	}else if(id=="inp_01527"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[17].P1");
		}
	}
    else if(id=="inp_176"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[17].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[17].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[17].P2");
		 }
	}
    else if(id=="inp_177"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[17].tMon");
	}
}
function writeSingleVar18(id){
    if(id=="inp_180"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].tMon");
		     document.getElementById("inp_181").style.display="none";
			 document.getElementById("inp_182").style.display="none";
			 document.getElementById("inp_183").style.display="none";
			 document.getElementById("inp_184").style.display="none";
			 document.getElementById("inp_185").style.display="none";
			 document.getElementById("inp_186").style.display="none";
			 document.getElementById("inp_187").style.display="none";
		document.getElementById("inp_01528").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
			document.getElementById("inp_181").style.display="block";
			document.getElementById("inp_182").style.display="block";
			document.getElementById("inp_183").style.display="block";
			document.getElementById("inp_184").style.display="block";
			document.getElementById("inp_185").style.display="none";
			document.getElementById("inp_186").style.display="none";
			document.getElementById("inp_187").style.display="block";
		document.getElementById("inp_01528").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
			document.getElementById("inp_181").style.display="none";
			document.getElementById("inp_182").style.display="none";
			document.getElementById("inp_183").style.display="none";
			document.getElementById("inp_184").style.display="none";
			document.getElementById("inp_185").style.display="none";
			document.getElementById("inp_186").style.display="none";
			document.getElementById("inp_187").style.display="block";
		document.getElementById("inp_01528").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
			document.getElementById("inp_181").style.display="none";
			document.getElementById("inp_182").style.display="none";
			document.getElementById("inp_183").style.display="none";
			document.getElementById("inp_184").style.display="none";
			document.getElementById("inp_185").style.display="block";
			document.getElementById("inp_186").style.display="block";
			document.getElementById("inp_187").style.display="block";
		document.getElementById("inp_01528").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
			document.getElementById("inp_181").style.display="none";
			document.getElementById("inp_182").style.display="none";
			document.getElementById("inp_183").style.display="none";
			document.getElementById("inp_184").style.display="none";
			document.getElementById("inp_185").style.display="none";
			document.getElementById("inp_186").style.display="block";
			document.getElementById("inp_187").style.display="block";
		document.getElementById("inp_01528").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[18].eCmd");
			document.getElementById("inp_181").style.display="none";
			document.getElementById("inp_182").style.display="none";
			document.getElementById("inp_183").style.display="none";
			document.getElementById("inp_184").style.display="none";
			document.getElementById("inp_185").style.display="none";
			document.getElementById("inp_186").style.display="none";
			document.getElementById("inp_187").style.display="none";
		document.getElementById("inp_01528").style.display="none";}
    }
    else if(id=="inp_181"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[18].x");
    }
    else if(id=="inp_182"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[18].y1");
    }
    else if(id=="inp_183"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[18].z1");
    }
    else if(id=="inp_185"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
	}else if(id=="inp_01528"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[18].P1");
		}
	}
    else if(id=="inp_186"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[18].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[18].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[18].P2");
		 }
	}
    else if(id=="inp_187"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[18].tMon");
	}
}
function writeSingleVar19(id){
    if(id=="inp_190"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].tMon");
		     document.getElementById("inp_191").style.display="none";
			 document.getElementById("inp_192").style.display="none";
			 document.getElementById("inp_193").style.display="none";
			 document.getElementById("inp_194").style.display="none";
			 document.getElementById("inp_195").style.display="none";
			 document.getElementById("inp_196").style.display="none";
			 document.getElementById("inp_197").style.display="none";
		document.getElementById("inp_01529").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
			document.getElementById("inp_191").style.display="block";
			document.getElementById("inp_192").style.display="block";
			document.getElementById("inp_193").style.display="block";
			document.getElementById("inp_194").style.display="block";
			document.getElementById("inp_195").style.display="none";
			document.getElementById("inp_196").style.display="none";
			document.getElementById("inp_197").style.display="block";
		document.getElementById("inp_01529").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
			document.getElementById("inp_191").style.display="none";
			document.getElementById("inp_192").style.display="none";
			document.getElementById("inp_193").style.display="none";
			document.getElementById("inp_194").style.display="none";
			document.getElementById("inp_195").style.display="none";
			document.getElementById("inp_196").style.display="none";
			document.getElementById("inp_197").style.display="block";
		document.getElementById("inp_01529").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
			document.getElementById("inp_191").style.display="none";
			document.getElementById("inp_192").style.display="none";
			document.getElementById("inp_193").style.display="none";
			document.getElementById("inp_194").style.display="none";
			document.getElementById("inp_195").style.display="block";
			document.getElementById("inp_196").style.display="block";
			document.getElementById("inp_197").style.display="block";
		document.getElementById("inp_01529").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
			document.getElementById("inp_191").style.display="none";
			document.getElementById("inp_192").style.display="none";
			document.getElementById("inp_193").style.display="none";
			document.getElementById("inp_194").style.display="none";
			document.getElementById("inp_195").style.display="none";
			document.getElementById("inp_196").style.display="block";
			document.getElementById("inp_197").style.display="block";
		document.getElementById("inp_01529").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[19].eCmd");
			document.getElementById("inp_191").style.display="none";
			document.getElementById("inp_192").style.display="none";
			document.getElementById("inp_193").style.display="none";
			document.getElementById("inp_194").style.display="none";
			document.getElementById("inp_195").style.display="none";
			document.getElementById("inp_196").style.display="none";
			document.getElementById("inp_197").style.display="none";
		document.getElementById("inp_01529").style.display="none";}
    }
    else if(id=="inp_191"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[19].x");
    }
    else if(id=="inp_192"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[19].y1");
    }
    else if(id=="inp_193"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[19].z1");
    }
    else if(id=="inp_195"){
	    if(document.getElementById(id).value=="3"){
	    writeValueFN("3", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="4"){
		writeValueFN("4", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
	    else if(document.getElementById(id).value=="5"){
		writeValueFN("5", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="6"){
		 writeValueFN("6", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		 }
		else if(document.getElementById(id).value=="7"){
		 writeValueFN("7", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		 }
		else if(document.getElementById(id).value=="8"){
		 writeValueFN("8", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		 }
		else if(document.getElementById(id).value=="9"){
		 writeValueFN("9", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		 }
		else if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
	}else if(id=="inp_01529"){
	    
		if(document.getElementById(id).value=="54"){
		writeValueFN("54", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="55"){
		writeValueFN("55", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="56"){
		writeValueFN("56", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="57"){
		writeValueFN("57", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="58"){
		writeValueFN("58", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="59"){
		writeValueFN("59", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="67"){
		writeValueFN("67", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="68"){
		writeValueFN("68", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="69"){
		writeValueFN("69", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="70"){
		writeValueFN("70", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="71"){
		writeValueFN("71", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="72"){
		writeValueFN("72", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="73"){
		writeValueFN("73", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="74"){
		writeValueFN("74", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
		else if(document.getElementById(id).value=="75"){
		writeValueFN("75", "unit/dHdGlobal.gsHMIdata.sStep[19].P1");
		}
	}
    else if(id=="inp_196"){
	    if(document.getElementById(id).value=="0"){
	    writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[19].P2");
		}
	     else if(document.getElementById(id).value=="1"){
		 writeValueFN("1", "unit/dHdGlobal.gsHMIdata.sStep[19].P2");
		 }
		 else if(document.getElementById(id).value=="2"){
		 writeValueFN("2", "unit/dHdGlobal.gsHMIdata.sStep[19].P2");
		 }
	}
    else if(id=="inp_197"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[19].tMon");
	}
}
function writeSingleVar20(id){
    if(id=="inp_200"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[20].tMon");
		     document.getElementById("inp_201").style.display="none";
			 document.getElementById("inp_202").style.display="none";
			 document.getElementById("inp_203").style.display="none";
			 document.getElementById("inp_204").style.display="none";
			 document.getElementById("inp_205").style.display="none";
			 document.getElementById("inp_206").style.display="none";
			 document.getElementById("inp_207").style.display="none";
		document.getElementById("inp_01530").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
			document.getElementById("inp_201").style.display="block";
			document.getElementById("inp_202").style.display="block";
			document.getElementById("inp_203").style.display="block";
			document.getElementById("inp_204").style.display="block";
			document.getElementById("inp_205").style.display="none";
			document.getElementById("inp_206").style.display="none";
			document.getElementById("inp_207").style.display="block";
		document.getElementById("inp_01530").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
			document.getElementById("inp_201").style.display="none";
			document.getElementById("inp_202").style.display="none";
			document.getElementById("inp_203").style.display="none";
			document.getElementById("inp_204").style.display="none";
			document.getElementById("inp_205").style.display="none";
			document.getElementById("inp_206").style.display="none";
			document.getElementById("inp_207").style.display="block";
		document.getElementById("inp_01530").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
			document.getElementById("inp_201").style.display="none";
			document.getElementById("inp_202").style.display="none";
			document.getElementById("inp_203").style.display="none";
			document.getElementById("inp_204").style.display="none";
			document.getElementById("inp_205").style.display="block";
			document.getElementById("inp_206").style.display="block";
			document.getElementById("inp_207").style.display="block";
		document.getElementById("inp_01530").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
			document.getElementById("inp_201").style.display="none";
			document.getElementById("inp_202").style.display="none";
			document.getElementById("inp_203").style.display="none";
			document.getElementById("inp_204").style.display="none";
			document.getElementById("inp_205").style.display="none";
			document.getElementById("inp_206").style.display="block";
			document.getElementById("inp_207").style.display="block";
		document.getElementById("inp_01530").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[20].eCmd");
			document.getElementById("inp_201").style.display="none";
			document.getElementById("inp_202").style.display="none";
			document.getElementById("inp_203").style.display="none";
			document.getElementById("inp_204").style.display="none";
			document.getElementById("inp_205").style.display="none";
			document.getElementById("inp_206").style.display="none";
			document.getElementById("inp_207").style.display="none";
		document.getElementById("inp_01530").style.display="none";}
    }
    else if(id=="inp_201"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].x");
    }
    else if(id=="inp_202"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].y1");
    }
    else if(id=="inp_203"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].z1");
    }
    else if(id=="inp_205"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].P1");
		

	}else if(id=="inp_01530"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].P1");
		
		
	}
    else if(id=="inp_206"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[20].P2");
	
	}
    else if(id=="inp_207"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[20].tMon");
	}
}
function writeSingleVar21(id){
    if(id=="inp_210"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[21].tMon");
		     document.getElementById("inp_211").style.display="none";
			 document.getElementById("inp_212").style.display="none";
			 document.getElementById("inp_213").style.display="none";
			 document.getElementById("inp_214").style.display="none";
			 document.getElementById("inp_215").style.display="none";
			 document.getElementById("inp_216").style.display="none";
			 document.getElementById("inp_217").style.display="none";
		document.getElementById("inp_01531").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
			document.getElementById("inp_211").style.display="block";
			document.getElementById("inp_212").style.display="block";
			document.getElementById("inp_213").style.display="block";
			document.getElementById("inp_214").style.display="block";
			document.getElementById("inp_215").style.display="none";
			document.getElementById("inp_216").style.display="none";
			document.getElementById("inp_217").style.display="block";
		document.getElementById("inp_01531").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
			document.getElementById("inp_211").style.display="none";
			document.getElementById("inp_212").style.display="none";
			document.getElementById("inp_213").style.display="none";
			document.getElementById("inp_214").style.display="none";
			document.getElementById("inp_215").style.display="none";
			document.getElementById("inp_216").style.display="none";
			document.getElementById("inp_217").style.display="block";
		document.getElementById("inp_01531").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
			document.getElementById("inp_211").style.display="none";
			document.getElementById("inp_212").style.display="none";
			document.getElementById("inp_213").style.display="none";
			document.getElementById("inp_214").style.display="none";
			document.getElementById("inp_215").style.display="block";
			document.getElementById("inp_216").style.display="block";
			document.getElementById("inp_217").style.display="block";
		document.getElementById("inp_01531").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
			document.getElementById("inp_211").style.display="none";
			document.getElementById("inp_212").style.display="none";
			document.getElementById("inp_213").style.display="none";
			document.getElementById("inp_214").style.display="none";
			document.getElementById("inp_215").style.display="none";
			document.getElementById("inp_216").style.display="block";
			document.getElementById("inp_217").style.display="block";
		document.getElementById("inp_01531").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[21].eCmd");
			document.getElementById("inp_211").style.display="none";
			document.getElementById("inp_212").style.display="none";
			document.getElementById("inp_213").style.display="none";
			document.getElementById("inp_214").style.display="none";
			document.getElementById("inp_215").style.display="none";
			document.getElementById("inp_216").style.display="none";
			document.getElementById("inp_217").style.display="none";
		document.getElementById("inp_01531").style.display="none";}
    }
    else if(id=="inp_211"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].x");
    }
    else if(id=="inp_212"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].y1");
    }
    else if(id=="inp_213"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].z1");
    }
    else if(id=="inp_215"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].P1");
		

	}else if(id=="inp_01531"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].P1");
		
		
	}
    else if(id=="inp_216"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[21].P2");
	
	}
    else if(id=="inp_217"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[21].tMon");
	}
}
function writeSingleVar22(id){
    if(id=="inp_220"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[22].tMon");
		     document.getElementById("inp_221").style.display="none";
			 document.getElementById("inp_222").style.display="none";
			 document.getElementById("inp_223").style.display="none";
			 document.getElementById("inp_224").style.display="none";
			 document.getElementById("inp_225").style.display="none";
			 document.getElementById("inp_226").style.display="none";
			 document.getElementById("inp_227").style.display="none";
		document.getElementById("inp_01532").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
			document.getElementById("inp_221").style.display="block";
			document.getElementById("inp_222").style.display="block";
			document.getElementById("inp_223").style.display="block";
			document.getElementById("inp_224").style.display="block";
			document.getElementById("inp_225").style.display="none";
			document.getElementById("inp_226").style.display="none";
			document.getElementById("inp_227").style.display="block";
		document.getElementById("inp_01532").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
			document.getElementById("inp_221").style.display="none";
			document.getElementById("inp_222").style.display="none";
			document.getElementById("inp_223").style.display="none";
			document.getElementById("inp_224").style.display="none";
			document.getElementById("inp_225").style.display="none";
			document.getElementById("inp_226").style.display="none";
			document.getElementById("inp_227").style.display="block";
		document.getElementById("inp_01532").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
			document.getElementById("inp_221").style.display="none";
			document.getElementById("inp_222").style.display="none";
			document.getElementById("inp_223").style.display="none";
			document.getElementById("inp_224").style.display="none";
			document.getElementById("inp_225").style.display="block";
			document.getElementById("inp_226").style.display="block";
			document.getElementById("inp_227").style.display="block";
		document.getElementById("inp_01532").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
			document.getElementById("inp_221").style.display="none";
			document.getElementById("inp_222").style.display="none";
			document.getElementById("inp_223").style.display="none";
			document.getElementById("inp_224").style.display="none";
			document.getElementById("inp_225").style.display="none";
			document.getElementById("inp_226").style.display="block";
			document.getElementById("inp_227").style.display="block";
		document.getElementById("inp_01532").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[22].eCmd");
			document.getElementById("inp_221").style.display="none";
			document.getElementById("inp_222").style.display="none";
			document.getElementById("inp_223").style.display="none";
			document.getElementById("inp_224").style.display="none";
			document.getElementById("inp_225").style.display="none";
			document.getElementById("inp_226").style.display="none";
			document.getElementById("inp_227").style.display="none";
		document.getElementById("inp_01532").style.display="none";}
    }
    else if(id=="inp_221"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].x");
    }
    else if(id=="inp_222"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].y1");
    }
    else if(id=="inp_223"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].z1");
    }
    else if(id=="inp_225"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].P1");
		

	}else if(id=="inp_01532"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].P1");
		
		
	}
    else if(id=="inp_226"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[22].P2");
	
	}
    else if(id=="inp_227"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[22].tMon");
	}
}
function writeSingleVar23(id){
    if(id=="inp_230"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[23].tMon");
		     document.getElementById("inp_231").style.display="none";
			 document.getElementById("inp_232").style.display="none";
			 document.getElementById("inp_233").style.display="none";
			 document.getElementById("inp_234").style.display="none";
			 document.getElementById("inp_235").style.display="none";
			 document.getElementById("inp_236").style.display="none";
			 document.getElementById("inp_237").style.display="none";
		document.getElementById("inp_01533").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
			document.getElementById("inp_231").style.display="block";
			document.getElementById("inp_232").style.display="block";
			document.getElementById("inp_233").style.display="block";
			document.getElementById("inp_234").style.display="block";
			document.getElementById("inp_235").style.display="none";
			document.getElementById("inp_236").style.display="none";
			document.getElementById("inp_237").style.display="block";
		document.getElementById("inp_01533").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
			document.getElementById("inp_231").style.display="none";
			document.getElementById("inp_232").style.display="none";
			document.getElementById("inp_233").style.display="none";
			document.getElementById("inp_234").style.display="none";
			document.getElementById("inp_235").style.display="none";
			document.getElementById("inp_236").style.display="none";
			document.getElementById("inp_237").style.display="block";
		document.getElementById("inp_01533").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
			document.getElementById("inp_231").style.display="none";
			document.getElementById("inp_232").style.display="none";
			document.getElementById("inp_233").style.display="none";
			document.getElementById("inp_234").style.display="none";
			document.getElementById("inp_235").style.display="block";
			document.getElementById("inp_236").style.display="block";
			document.getElementById("inp_237").style.display="block";
		document.getElementById("inp_01533").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
			document.getElementById("inp_231").style.display="none";
			document.getElementById("inp_232").style.display="none";
			document.getElementById("inp_233").style.display="none";
			document.getElementById("inp_234").style.display="none";
			document.getElementById("inp_235").style.display="none";
			document.getElementById("inp_236").style.display="block";
			document.getElementById("inp_237").style.display="block";
		document.getElementById("inp_01533").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[23].eCmd");
			document.getElementById("inp_231").style.display="none";
			document.getElementById("inp_232").style.display="none";
			document.getElementById("inp_233").style.display="none";
			document.getElementById("inp_234").style.display="none";
			document.getElementById("inp_235").style.display="none";
			document.getElementById("inp_236").style.display="none";
			document.getElementById("inp_237").style.display="none";
		document.getElementById("inp_01533").style.display="none";}
    }
    else if(id=="inp_231"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].x");
    }
    else if(id=="inp_232"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].y1");
    }
    else if(id=="inp_233"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].z1");
    }
    else if(id=="inp_235"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].P1");
		

	}else if(id=="inp_01533"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].P1");
		
		
	}
    else if(id=="inp_236"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[23].P2");
	
	}
    else if(id=="inp_237"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[23].tMon");
	}
}

function writeSingleVar24(id){
    if(id=="inp_240"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[24].tMon");
		     document.getElementById("inp_241").style.display="none";
			 document.getElementById("inp_242").style.display="none";
			 document.getElementById("inp_243").style.display="none";
			 document.getElementById("inp_244").style.display="none";
			 document.getElementById("inp_245").style.display="none";
			 document.getElementById("inp_246").style.display="none";
			 document.getElementById("inp_247").style.display="none";
		document.getElementById("inp_01534").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
			document.getElementById("inp_241").style.display="block";
			document.getElementById("inp_242").style.display="block";
			document.getElementById("inp_243").style.display="block";
			document.getElementById("inp_244").style.display="block";
			document.getElementById("inp_245").style.display="none";
			document.getElementById("inp_246").style.display="none";
			document.getElementById("inp_247").style.display="block";
		document.getElementById("inp_01534").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
			document.getElementById("inp_241").style.display="none";
			document.getElementById("inp_242").style.display="none";
			document.getElementById("inp_243").style.display="none";
			document.getElementById("inp_244").style.display="none";
			document.getElementById("inp_245").style.display="none";
			document.getElementById("inp_246").style.display="none";
			document.getElementById("inp_247").style.display="block";
		document.getElementById("inp_01534").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
			document.getElementById("inp_241").style.display="none";
			document.getElementById("inp_242").style.display="none";
			document.getElementById("inp_243").style.display="none";
			document.getElementById("inp_244").style.display="none";
			document.getElementById("inp_245").style.display="block";
			document.getElementById("inp_246").style.display="block";
			document.getElementById("inp_247").style.display="block";
		document.getElementById("inp_01534").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
			document.getElementById("inp_241").style.display="none";
			document.getElementById("inp_242").style.display="none";
			document.getElementById("inp_243").style.display="none";
			document.getElementById("inp_244").style.display="none";
			document.getElementById("inp_245").style.display="none";
			document.getElementById("inp_246").style.display="block";
			document.getElementById("inp_247").style.display="block";
		document.getElementById("inp_01534").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[24].eCmd");
			document.getElementById("inp_241").style.display="none";
			document.getElementById("inp_242").style.display="none";
			document.getElementById("inp_243").style.display="none";
			document.getElementById("inp_244").style.display="none";
			document.getElementById("inp_245").style.display="none";
			document.getElementById("inp_246").style.display="none";
			document.getElementById("inp_247").style.display="none";
		document.getElementById("inp_01534").style.display="none";}
    }
    else if(id=="inp_241"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].x");
    }
    else if(id=="inp_242"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].y1");
    }
    else if(id=="inp_243"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].z1");
    }
    else if(id=="inp_245"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].P1");
		

	}else if(id=="inp_01534"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].P1");
		
		
	}
    else if(id=="inp_246"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[24].P2");
	
	}
    else if(id=="inp_247"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[24].tMon");
	}
}

function writeSingleVar25(id){
    if(id=="inp_250"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[25].tMon");
		     document.getElementById("inp_251").style.display="none";
			 document.getElementById("inp_252").style.display="none";
			 document.getElementById("inp_253").style.display="none";
			 document.getElementById("inp_254").style.display="none";
			 document.getElementById("inp_255").style.display="none";
			 document.getElementById("inp_256").style.display="none";
			 document.getElementById("inp_257").style.display="none";
		document.getElementById("inp_01535").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
			document.getElementById("inp_251").style.display="block";
			document.getElementById("inp_252").style.display="block";
			document.getElementById("inp_253").style.display="block";
			document.getElementById("inp_254").style.display="block";
			document.getElementById("inp_255").style.display="none";
			document.getElementById("inp_256").style.display="none";
			document.getElementById("inp_257").style.display="block";
		document.getElementById("inp_01535").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
			document.getElementById("inp_251").style.display="none";
			document.getElementById("inp_252").style.display="none";
			document.getElementById("inp_253").style.display="none";
			document.getElementById("inp_254").style.display="none";
			document.getElementById("inp_255").style.display="none";
			document.getElementById("inp_256").style.display="none";
			document.getElementById("inp_257").style.display="block";
		document.getElementById("inp_01535").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
			document.getElementById("inp_251").style.display="none";
			document.getElementById("inp_252").style.display="none";
			document.getElementById("inp_253").style.display="none";
			document.getElementById("inp_254").style.display="none";
			document.getElementById("inp_255").style.display="block";
			document.getElementById("inp_256").style.display="block";
			document.getElementById("inp_257").style.display="block";
		document.getElementById("inp_01535").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
			document.getElementById("inp_251").style.display="none";
			document.getElementById("inp_252").style.display="none";
			document.getElementById("inp_253").style.display="none";
			document.getElementById("inp_254").style.display="none";
			document.getElementById("inp_255").style.display="none";
			document.getElementById("inp_256").style.display="block";
			document.getElementById("inp_257").style.display="block";
		document.getElementById("inp_01535").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[25].eCmd");
			document.getElementById("inp_251").style.display="none";
			document.getElementById("inp_252").style.display="none";
			document.getElementById("inp_253").style.display="none";
			document.getElementById("inp_254").style.display="none";
			document.getElementById("inp_255").style.display="none";
			document.getElementById("inp_256").style.display="none";
			document.getElementById("inp_257").style.display="none";
		document.getElementById("inp_01535").style.display="none";}
    }
    else if(id=="inp_251"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].x");
    }
    else if(id=="inp_252"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].y1");
    }
    else if(id=="inp_253"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].z1");
    }
    else if(id=="inp_255"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].P1");
		

	}else if(id=="inp_01535"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].P1");
		
		
	}
    else if(id=="inp_256"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[25].P2");
	
	}
    else if(id=="inp_257"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[25].tMon");
	}
}

function writeSingleVar26(id){
    if(id=="inp_260"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[26].tMon");
		     document.getElementById("inp_261").style.display="none";
			 document.getElementById("inp_262").style.display="none";
			 document.getElementById("inp_263").style.display="none";
			 document.getElementById("inp_264").style.display="none";
			 document.getElementById("inp_265").style.display="none";
			 document.getElementById("inp_266").style.display="none";
			 document.getElementById("inp_267").style.display="none";
		document.getElementById("inp_01536").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
			document.getElementById("inp_261").style.display="block";
			document.getElementById("inp_262").style.display="block";
			document.getElementById("inp_263").style.display="block";
			document.getElementById("inp_264").style.display="block";
			document.getElementById("inp_265").style.display="none";
			document.getElementById("inp_266").style.display="none";
			document.getElementById("inp_267").style.display="block";
		document.getElementById("inp_01536").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
			document.getElementById("inp_261").style.display="none";
			document.getElementById("inp_262").style.display="none";
			document.getElementById("inp_263").style.display="none";
			document.getElementById("inp_264").style.display="none";
			document.getElementById("inp_265").style.display="none";
			document.getElementById("inp_266").style.display="none";
			document.getElementById("inp_267").style.display="block";
		document.getElementById("inp_01536").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
			document.getElementById("inp_261").style.display="none";
			document.getElementById("inp_262").style.display="none";
			document.getElementById("inp_263").style.display="none";
			document.getElementById("inp_264").style.display="none";
			document.getElementById("inp_265").style.display="block";
			document.getElementById("inp_266").style.display="block";
			document.getElementById("inp_267").style.display="block";
		document.getElementById("inp_01536").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
			document.getElementById("inp_261").style.display="none";
			document.getElementById("inp_262").style.display="none";
			document.getElementById("inp_263").style.display="none";
			document.getElementById("inp_264").style.display="none";
			document.getElementById("inp_265").style.display="none";
			document.getElementById("inp_266").style.display="block";
			document.getElementById("inp_267").style.display="block";
		document.getElementById("inp_01536").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[26].eCmd");
			document.getElementById("inp_261").style.display="none";
			document.getElementById("inp_262").style.display="none";
			document.getElementById("inp_263").style.display="none";
			document.getElementById("inp_264").style.display="none";
			document.getElementById("inp_265").style.display="none";
			document.getElementById("inp_266").style.display="none";
			document.getElementById("inp_267").style.display="none";
		document.getElementById("inp_01536").style.display="none";}
    }
    else if(id=="inp_261"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].x");
    }
    else if(id=="inp_262"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].y1");
    }
    else if(id=="inp_263"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].z1");
    }
    else if(id=="inp_265"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].P1");
		

	}else if(id=="inp_01536"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].P1");
		
		
	}
    else if(id=="inp_266"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[26].P2");
	
	}
    else if(id=="inp_267"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[26].tMon");
	}
}

function writeSingleVar27(id){
    if(id=="inp_270"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[27].tMon");
		     document.getElementById("inp_271").style.display="none";
			 document.getElementById("inp_272").style.display="none";
			 document.getElementById("inp_273").style.display="none";
			 document.getElementById("inp_274").style.display="none";
			 document.getElementById("inp_275").style.display="none";
			 document.getElementById("inp_276").style.display="none";
			 document.getElementById("inp_277").style.display="none";
		document.getElementById("inp_01537").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
			document.getElementById("inp_271").style.display="block";
			document.getElementById("inp_272").style.display="block";
			document.getElementById("inp_273").style.display="block";
			document.getElementById("inp_274").style.display="block";
			document.getElementById("inp_275").style.display="none";
			document.getElementById("inp_276").style.display="none";
			document.getElementById("inp_277").style.display="block";
		document.getElementById("inp_01537").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
			document.getElementById("inp_271").style.display="none";
			document.getElementById("inp_272").style.display="none";
			document.getElementById("inp_273").style.display="none";
			document.getElementById("inp_274").style.display="none";
			document.getElementById("inp_275").style.display="none";
			document.getElementById("inp_276").style.display="none";
			document.getElementById("inp_277").style.display="block";
		document.getElementById("inp_01537").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
			document.getElementById("inp_271").style.display="none";
			document.getElementById("inp_272").style.display="none";
			document.getElementById("inp_273").style.display="none";
			document.getElementById("inp_274").style.display="none";
			document.getElementById("inp_275").style.display="block";
			document.getElementById("inp_276").style.display="block";
			document.getElementById("inp_277").style.display="block";
		document.getElementById("inp_01537").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
			document.getElementById("inp_271").style.display="none";
			document.getElementById("inp_272").style.display="none";
			document.getElementById("inp_273").style.display="none";
			document.getElementById("inp_274").style.display="none";
			document.getElementById("inp_275").style.display="none";
			document.getElementById("inp_276").style.display="block";
			document.getElementById("inp_277").style.display="block";
		document.getElementById("inp_01537").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[27].eCmd");
			document.getElementById("inp_271").style.display="none";
			document.getElementById("inp_272").style.display="none";
			document.getElementById("inp_273").style.display="none";
			document.getElementById("inp_274").style.display="none";
			document.getElementById("inp_275").style.display="none";
			document.getElementById("inp_276").style.display="none";
			document.getElementById("inp_277").style.display="none";
		document.getElementById("inp_01537").style.display="none";}
    }
    else if(id=="inp_271"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].x");
    }
    else if(id=="inp_272"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].y1");
    }
    else if(id=="inp_273"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].z1");
    }
    else if(id=="inp_275"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].P1");
		

	}else if(id=="inp_01537"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].P1");
		
		
	}
    else if(id=="inp_276"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[27].P2");
	
	}
    else if(id=="inp_277"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[27].tMon");
	}
}
function writeSingleVar28(id){
    if(id=="inp_280"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[28].tMon");
		     document.getElementById("inp_281").style.display="none";
			 document.getElementById("inp_282").style.display="none";
			 document.getElementById("inp_283").style.display="none";
			 document.getElementById("inp_284").style.display="none";
			 document.getElementById("inp_285").style.display="none";
			 document.getElementById("inp_286").style.display="none";
			 document.getElementById("inp_287").style.display="none";
		document.getElementById("inp_01538").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
			document.getElementById("inp_281").style.display="block";
			document.getElementById("inp_282").style.display="block";
			document.getElementById("inp_283").style.display="block";
			document.getElementById("inp_284").style.display="block";
			document.getElementById("inp_285").style.display="none";
			document.getElementById("inp_286").style.display="none";
			document.getElementById("inp_287").style.display="block";
		document.getElementById("inp_01538").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
			document.getElementById("inp_281").style.display="none";
			document.getElementById("inp_282").style.display="none";
			document.getElementById("inp_283").style.display="none";
			document.getElementById("inp_284").style.display="none";
			document.getElementById("inp_285").style.display="none";
			document.getElementById("inp_286").style.display="none";
			document.getElementById("inp_287").style.display="block";
		document.getElementById("inp_01538").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
			document.getElementById("inp_281").style.display="none";
			document.getElementById("inp_282").style.display="none";
			document.getElementById("inp_283").style.display="none";
			document.getElementById("inp_284").style.display="none";
			document.getElementById("inp_285").style.display="block";
			document.getElementById("inp_286").style.display="block";
			document.getElementById("inp_287").style.display="block";
		document.getElementById("inp_01538").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
			document.getElementById("inp_281").style.display="none";
			document.getElementById("inp_282").style.display="none";
			document.getElementById("inp_283").style.display="none";
			document.getElementById("inp_284").style.display="none";
			document.getElementById("inp_285").style.display="none";
			document.getElementById("inp_286").style.display="block";
			document.getElementById("inp_287").style.display="block";
		document.getElementById("inp_01538").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[28].eCmd");
			document.getElementById("inp_281").style.display="none";
			document.getElementById("inp_282").style.display="none";
			document.getElementById("inp_283").style.display="none";
			document.getElementById("inp_284").style.display="none";
			document.getElementById("inp_285").style.display="none";
			document.getElementById("inp_286").style.display="none";
			document.getElementById("inp_287").style.display="none";
		document.getElementById("inp_01538").style.display="none";}
    }
    else if(id=="inp_281"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].x");
    }
    else if(id=="inp_282"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].y1");
    }
    else if(id=="inp_283"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].z1");
    }
    else if(id=="inp_285"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].P1");
		

	}else if(id=="inp_01538"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].P1");
		
		
	}
    else if(id=="inp_286"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[28].P2");
	
	}
    else if(id=="inp_287"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[28].tMon");
	}
}
function writeSingleVar29(id){
    if(id=="inp_290"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[29].tMon");
		     document.getElementById("inp_291").style.display="none";
			 document.getElementById("inp_292").style.display="none";
			 document.getElementById("inp_293").style.display="none";
			 document.getElementById("inp_294").style.display="none";
			 document.getElementById("inp_295").style.display="none";
			 document.getElementById("inp_296").style.display="none";
			 document.getElementById("inp_297").style.display="none";
		document.getElementById("inp_01539").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
			document.getElementById("inp_291").style.display="block";
			document.getElementById("inp_292").style.display="block";
			document.getElementById("inp_293").style.display="block";
			document.getElementById("inp_294").style.display="block";
			document.getElementById("inp_295").style.display="none";
			document.getElementById("inp_296").style.display="none";
			document.getElementById("inp_297").style.display="block";
		document.getElementById("inp_01539").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
			document.getElementById("inp_291").style.display="none";
			document.getElementById("inp_292").style.display="none";
			document.getElementById("inp_293").style.display="none";
			document.getElementById("inp_294").style.display="none";
			document.getElementById("inp_295").style.display="none";
			document.getElementById("inp_296").style.display="none";
			document.getElementById("inp_297").style.display="block";
		document.getElementById("inp_01539").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
			document.getElementById("inp_291").style.display="none";
			document.getElementById("inp_292").style.display="none";
			document.getElementById("inp_293").style.display="none";
			document.getElementById("inp_294").style.display="none";
			document.getElementById("inp_295").style.display="block";
			document.getElementById("inp_296").style.display="block";
			document.getElementById("inp_297").style.display="block";
		document.getElementById("inp_01539").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
			document.getElementById("inp_291").style.display="none";
			document.getElementById("inp_292").style.display="none";
			document.getElementById("inp_293").style.display="none";
			document.getElementById("inp_294").style.display="none";
			document.getElementById("inp_295").style.display="none";
			document.getElementById("inp_296").style.display="block";
			document.getElementById("inp_297").style.display="block";
		document.getElementById("inp_01539").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[29].eCmd");
			document.getElementById("inp_291").style.display="none";
			document.getElementById("inp_292").style.display="none";
			document.getElementById("inp_293").style.display="none";
			document.getElementById("inp_294").style.display="none";
			document.getElementById("inp_295").style.display="none";
			document.getElementById("inp_296").style.display="none";
			document.getElementById("inp_297").style.display="none";
		document.getElementById("inp_01539").style.display="none";}
    }
    else if(id=="inp_291"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].x");
    }
    else if(id=="inp_292"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].y1");
    }
    else if(id=="inp_293"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].z1");
    }
    else if(id=="inp_295"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].P1");
		

	}else if(id=="inp_01539"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].P1");
		
		
	}
    else if(id=="inp_296"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[29].P2");
	
	}
    else if(id=="inp_297"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[29].tMon");
	}
}
function writeSingleVar30(id){
    if(id=="inp_300"){
	    if(document.getElementById(id).value=="0"){
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].x");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].y1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].z1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].P1");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].P2");
		     writeValueFN("0", "unit/dHdGlobal.gsHMIdata.sStep[30].tMon");
		     document.getElementById("inp_301").style.display="none";
			 document.getElementById("inp_302").style.display="none";
			 document.getElementById("inp_303").style.display="none";
			 document.getElementById("inp_304").style.display="none";
			 document.getElementById("inp_305").style.display="none";
			 document.getElementById("inp_306").style.display="none";
			 document.getElementById("inp_307").style.display="none";
		document.getElementById("inp_01540").style.display="none";}
		else if(document.getElementById(id).value=="1"){
		    writeValueFN("32", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
			document.getElementById("inp_301").style.display="block";
			document.getElementById("inp_302").style.display="block";
			document.getElementById("inp_303").style.display="block";
			document.getElementById("inp_304").style.display="block";
			document.getElementById("inp_305").style.display="none";
			document.getElementById("inp_306").style.display="none";
			document.getElementById("inp_307").style.display="block";
		document.getElementById("inp_01540").style.display="none";}
		else if(document.getElementById(id).value=="2"){
		    writeValueFN("28", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
			document.getElementById("inp_301").style.display="none";
			document.getElementById("inp_302").style.display="none";
			document.getElementById("inp_303").style.display="none";
			document.getElementById("inp_304").style.display="none";
			document.getElementById("inp_305").style.display="none";
			document.getElementById("inp_306").style.display="none";
			document.getElementById("inp_307").style.display="block";
		document.getElementById("inp_01540").style.display="none";}
		else if(document.getElementById(id).value=="3"){
		    writeValueFN("24", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
			document.getElementById("inp_301").style.display="none";
			document.getElementById("inp_302").style.display="none";
			document.getElementById("inp_303").style.display="none";
			document.getElementById("inp_304").style.display="none";
			document.getElementById("inp_305").style.display="block";
			document.getElementById("inp_306").style.display="block";
			document.getElementById("inp_307").style.display="block";
		document.getElementById("inp_01540").style.display="none";}
		else if(document.getElementById(id).value=="4"){
		    writeValueFN("66", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
			document.getElementById("inp_301").style.display="none";
			document.getElementById("inp_302").style.display="none";
			document.getElementById("inp_303").style.display="none";
			document.getElementById("inp_304").style.display="none";
			document.getElementById("inp_305").style.display="none";
			document.getElementById("inp_306").style.display="block";
			document.getElementById("inp_307").style.display="block";
		document.getElementById("inp_01540").style.display="block";}
		else if(document.getElementById(id).value=="5"){
		    writeValueFN("23", "unit/dHdGlobal.gsHMIdata.sStep[30].eCmd");
			document.getElementById("inp_301").style.display="none";
			document.getElementById("inp_302").style.display="none";
			document.getElementById("inp_303").style.display="none";
			document.getElementById("inp_304").style.display="none";
			document.getElementById("inp_305").style.display="none";
			document.getElementById("inp_306").style.display="none";
			document.getElementById("inp_307").style.display="none";
		document.getElementById("inp_01540").style.display="none";}
    }
    else if(id=="inp_301"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].x");
    }
    else if(id=="inp_302"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].y1");
    }
    else if(id=="inp_303"){
        writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].z1");
    }
    else if(id=="inp_305"){
	   
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].P1");
		

	}else if(id=="inp_01540"){
	    
		writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].P1");
		
		
	}
    else if(id=="inp_306"){
	    
	    writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sStep[30].P2");
	
	}
    else if(id=="inp_307"){
	writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sStep[30].tMon");
	}
}


function buildSubscription() {


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_X.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_X.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//¿ªÄ£Íê³É ¹ØÄ£°²È«	
   /* SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gbiMoldOpenComplete";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gboMoldCloseSafety";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;*/
//Y1/Z1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_Horizontal";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_Horizontal";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[23]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_Vertical";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_Vertical";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[24]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_TopLine";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_TopLine";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboNegLimitZ1";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//ÐÍÄÚ¡¢ÍâÏÞ
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_X_InnerLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboX_InnerLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboNegLimitX";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_X_OuterLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboX_OuterLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboPosLimitX";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

//¿ªÄ£
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[4]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//¹ØÄ£
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[3]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//×ËÌ¬
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose0";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[23]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose90";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[24]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose180";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[25]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;	
//Ä£Ê½1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MotionMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboAutomatic";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyMotionMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//Ä£Ê½2
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_OperationMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboModel";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyOperationMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "movestate";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.gi32stepNum";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

//Starte Aktualisierung
    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);

	ReadValueLine(id_1,var_1);
	ReadValueLine(id_2,var_2);
	ReadValueLine(id_3,var_3);
	ReadValueLine(id_4,var_4);
	ReadValueLine(id_5,var_5);
	ReadValueLine(id_6,var_6);
	ReadValueLine(id_7,var_7);
	ReadValueLine(id_8,var_8);
	ReadValueLine(id_9,var_9);
	ReadValueLine(id_10,var_10);
	ReadValueLine(id_11,var_11);
	ReadValueLine(id_12,var_12);
	ReadValueLine(id_13,var_13);
	ReadValueLine(id_14,var_14);
	ReadValueLine(id_15,var_15);
	ReadValueLine(id_16,var_16);
	ReadValueLine(id_17,var_17);
	ReadValueLine(id_18,var_18);
	ReadValueLine(id_19,var_19);
	ReadValueLine(id_20,var_20);
	ReadValueLine(id_021,var_021);//因會與readValue重疊，所以前面+0
	ReadValueLine(id_022,var_022);
	ReadValueLine(id_023,var_023);
	ReadValueLine(id_0024,var_0024);
	ReadValueLine(id_025,var_025);
	ReadValueLine(id_026,var_026);
	ReadValueLine(id_027,var_027);
	ReadValueLine(id_028,var_028);
	ReadValueLine(id_029,var_029);
	ReadValueLine(id_030,var_030);
	
	/*ReadValueONE(id_1, var_1);
	ReadValueFIVE(id_5, var_5);
	ReadValueSIX(id_6, var_6);
	ReadValueSEVEN(id_7, var_7);
	
	
	ReadValue(id_014, var_014);
	ReadValue(id_024, var_024);
	ReadValue(id_034, var_034);
	ReadValue(id_044, var_044);
	ReadValue(id_054, var_054);
	ReadValue(id_064, var_064);
	ReadValue(id_074, var_074);
	ReadValue(id_084, var_084);
    ReadValue(id_094, var_094);
	ReadValue(id_104, var_104);
	ReadValue(id_114, var_114);
	ReadValue(id_124, var_124);
	ReadValue(id_134, var_134);
	ReadValue(id_144, var_144);
	ReadValue(id_154, var_154);
	ReadValue(id_164, var_164);
	ReadValue(id_174, var_174);
	ReadValue(id_184, var_184);
    ReadValue(id_194, var_194);
	ReadValue(id_204, var_204);*/
}
var id_21=["inp_0151"]
var var_21=["unit/dHdGlobal.gsHMIdata.sStep[1].P1"]

var	id_22=["inp_0152"]
var var_22=["unit/dHdGlobal.gsHMIdata.sStep[2].P1"]

var	id_23=["inp_0153"]
var var_23=["unit/dHdGlobal.gsHMIdata.sStep[3].P1"]

var id_24=["inp_0154"]
var var_24=["unit/dHdGlobal.gsHMIdata.sStep[4].P1"]

var id_25=["inp_0155"]
var var_25=["unit/dHdGlobal.gsHMIdata.sStep[5].P1"]


var id_26=["inp_0156"]
var var_26=["unit/dHdGlobal.gsHMIdata.sStep[6].P1"]


var id_27=["inp_0157"]
var var_27=["unit/dHdGlobal.gsHMIdata.sStep[7].P1"]


var id_28=["inp_0158"]
var var_28=["unit/dHdGlobal.gsHMIdata.sStep[8].P1"]

var id_29=["inp_0159"]
var var_29=["unit/dHdGlobal.gsHMIdata.sStep[9].P1"]

var id_30=["inp_01520"]
var var_30=["unit/dHdGlobal.gsHMIdata.sStep[10].P1"]

var id_31=["inp_01521"]
var var_31=["unit/dHdGlobal.gsHMIdata.sStep[11].P1"]

var id_32=["inp_01522"]
var var_32=["unit/dHdGlobal.gsHMIdata.sStep[12].P1"]

var id_33=["inp_01523"]
var var_33=["unit/dHdGlobal.gsHMIdata.sStep[13].P1"]

var id_34=["inp_01524"]
var var_34=["unit/dHdGlobal.gsHMIdata.sStep[14].P1"]

var id_35=["inp_01525"]
var var_35=["unit/dHdGlobal.gsHMIdata.sStep[15].P1"]

var id_36=["inp_01526"]
var var_36=["unit/dHdGlobal.gsHMIdata.sStep[16].P1"]

var id_37=["inp_01527"]
var var_37=["unit/dHdGlobal.gsHMIdata.sStep[17].P1"]

var id_38=["inp_01528"]
var var_38=["unit/dHdGlobal.gsHMIdata.sStep[18].P1"]

var id_39=["inp_01529"]
var var_39=["unit/dHdGlobal.gsHMIdata.sStep[19].P1"]

var id_40=["inp_01530"]
var var_40=["unit/dHdGlobal.gsHMIdata.sStep[20].P1"]

var id_41=["inp_01531"]
var var_41=["unit/dHdGlobal.gsHMIdata.sStep[21].P1"]

var id_42=["inp_01532"]
var var_42=["unit/dHdGlobal.gsHMIdata.sStep[22].P1"]

var id_43=["inp_01533"]
var var_43=["unit/dHdGlobal.gsHMIdata.sStep[23].P1"]

var id_44=["inp_01534"]
var var_44=["unit/dHdGlobal.gsHMIdata.sStep[24].P1"]

var id_45=["inp_01535"]
var var_45=["unit/dHdGlobal.gsHMIdata.sStep[25].P1"]

var id_46=["inp_01536"]
var var_46=["unit/dHdGlobal.gsHMIdata.sStep[26].P1"]

var id_47=["inp_01537"]
var var_47=["unit/dHdGlobal.gsHMIdata.sStep[27].P1"]

var id_48=["inp_01538"]
var var_48=["unit/dHdGlobal.gsHMIdata.sStep[28].P1"]

var id_49=["inp_01539"]
var var_49=["unit/dHdGlobal.gsHMIdata.sStep[29].P1"]

var id_50=["inp_01540"]
var var_50=["unit/dHdGlobal.gsHMIdata.sStep[30].P1"]


var id_RealPosition = ["inp_X_Postion","inp_Y1_Postion","inp_Z1_Postion"];

var id_1=["inp_010","inp_011","inp_012","inp_013","inp_015","inp_016","inp_017"];
var var_1=["unit/dHdGlobal.gsHMIdata.sStep[1].eCmd","unit/dHdGlobal.gsHMIdata.sStep[1].x","unit/dHdGlobal.gsHMIdata.sStep[1].y1","unit/dHdGlobal.gsHMIdata.sStep[1].z1","unit/dHdGlobal.gsHMIdata.sStep[1].P1","unit/dHdGlobal.gsHMIdata.sStep[1].P2","unit/dHdGlobal.gsHMIdata.sStep[1].tMon"];
var id_2=["inp_020","inp_021","inp_022","inp_023","inp_025","inp_026","inp_027"];
var var_2=["unit/dHdGlobal.gsHMIdata.sStep[2].eCmd","unit/dHdGlobal.gsHMIdata.sStep[2].x","unit/dHdGlobal.gsHMIdata.sStep[2].y1","unit/dHdGlobal.gsHMIdata.sStep[2].z1","unit/dHdGlobal.gsHMIdata.sStep[2].P1","unit/dHdGlobal.gsHMIdata.sStep[2].P2","unit/dHdGlobal.gsHMIdata.sStep[2].tMon"];
var id_3=["inp_030","inp_031","inp_032","inp_033","inp_035","inp_036","inp_037"];
var var_3=["unit/dHdGlobal.gsHMIdata.sStep[3].eCmd","unit/dHdGlobal.gsHMIdata.sStep[3].x","unit/dHdGlobal.gsHMIdata.sStep[3].y1","unit/dHdGlobal.gsHMIdata.sStep[3].z1","unit/dHdGlobal.gsHMIdata.sStep[3].P1","unit/dHdGlobal.gsHMIdata.sStep[3].P2","unit/dHdGlobal.gsHMIdata.sStep[3].tMon"];
var id_4=["inp_040","inp_041","inp_042","inp_043","inp_045","inp_046","inp_047"];
var var_4=["unit/dHdGlobal.gsHMIdata.sStep[4].eCmd","unit/dHdGlobal.gsHMIdata.sStep[4].x","unit/dHdGlobal.gsHMIdata.sStep[4].y1","unit/dHdGlobal.gsHMIdata.sStep[4].z1","unit/dHdGlobal.gsHMIdata.sStep[4].P1","unit/dHdGlobal.gsHMIdata.sStep[4].P2","unit/dHdGlobal.gsHMIdata.sStep[4].tMon"];
var id_5=["inp_050","inp_051","inp_052","inp_053","inp_055","inp_056","inp_057"];
var var_5=["unit/dHdGlobal.gsHMIdata.sStep[5].eCmd","unit/dHdGlobal.gsHMIdata.sStep[5].x","unit/dHdGlobal.gsHMIdata.sStep[5].y1","unit/dHdGlobal.gsHMIdata.sStep[5].z1","unit/dHdGlobal.gsHMIdata.sStep[5].P1","unit/dHdGlobal.gsHMIdata.sStep[5].P2","unit/dHdGlobal.gsHMIdata.sStep[5].tMon"];
var id_6=["inp_060","inp_061","inp_062","inp_063","inp_065","inp_066","inp_067"];
var var_6=["unit/dHdGlobal.gsHMIdata.sStep[6].eCmd","unit/dHdGlobal.gsHMIdata.sStep[6].x","unit/dHdGlobal.gsHMIdata.sStep[6].y1","unit/dHdGlobal.gsHMIdata.sStep[6].z1","unit/dHdGlobal.gsHMIdata.sStep[6].P1","unit/dHdGlobal.gsHMIdata.sStep[6].P2","unit/dHdGlobal.gsHMIdata.sStep[6].tMon"];
var id_7=["inp_070","inp_071","inp_072","inp_073","inp_075","inp_076","inp_077"];
var var_7=["unit/dHdGlobal.gsHMIdata.sStep[7].eCmd","unit/dHdGlobal.gsHMIdata.sStep[7].x","unit/dHdGlobal.gsHMIdata.sStep[7].y1","unit/dHdGlobal.gsHMIdata.sStep[7].z1","unit/dHdGlobal.gsHMIdata.sStep[7].P1","unit/dHdGlobal.gsHMIdata.sStep[7].P2","unit/dHdGlobal.gsHMIdata.sStep[7].tMon"];
var id_8=["inp_080","inp_081","inp_082","inp_083","inp_085","inp_086","inp_087"];
var var_8=["unit/dHdGlobal.gsHMIdata.sStep[8].eCmd","unit/dHdGlobal.gsHMIdata.sStep[8].x","unit/dHdGlobal.gsHMIdata.sStep[8].y1","unit/dHdGlobal.gsHMIdata.sStep[8].z1","unit/dHdGlobal.gsHMIdata.sStep[8].P1","unit/dHdGlobal.gsHMIdata.sStep[8].P2","unit/dHdGlobal.gsHMIdata.sStep[8].tMon"];
var id_9=["inp_090","inp_091","inp_092","inp_093","inp_095","inp_096","inp_097"];
var var_9=["unit/dHdGlobal.gsHMIdata.sStep[9].eCmd","unit/dHdGlobal.gsHMIdata.sStep[9].x","unit/dHdGlobal.gsHMIdata.sStep[9].y1","unit/dHdGlobal.gsHMIdata.sStep[9].z1","unit/dHdGlobal.gsHMIdata.sStep[9].P1","unit/dHdGlobal.gsHMIdata.sStep[9].P2","unit/dHdGlobal.gsHMIdata.sStep[9].tMon"];
var id_10=["inp_100","inp_101","inp_102","inp_103","inp_105","inp_106","inp_107"];
var var_10=["unit/dHdGlobal.gsHMIdata.sStep[10].eCmd","unit/dHdGlobal.gsHMIdata.sStep[10].x","unit/dHdGlobal.gsHMIdata.sStep[10].y1","unit/dHdGlobal.gsHMIdata.sStep[10].z1","unit/dHdGlobal.gsHMIdata.sStep[10].P1","unit/dHdGlobal.gsHMIdata.sStep[10].P2","unit/dHdGlobal.gsHMIdata.sStep[10].tMon"];
var id_11=["inp_110","inp_111","inp_112","inp_113","inp_115","inp_116","inp_117"];
var var_11=["unit/dHdGlobal.gsHMIdata.sStep[11].eCmd","unit/dHdGlobal.gsHMIdata.sStep[11].x","unit/dHdGlobal.gsHMIdata.sStep[11].y1","unit/dHdGlobal.gsHMIdata.sStep[11].z1","unit/dHdGlobal.gsHMIdata.sStep[11].P1","unit/dHdGlobal.gsHMIdata.sStep[11].P2","unit/dHdGlobal.gsHMIdata.sStep[11].tMon"];
var id_12=["inp_120","inp_121","inp_122","inp_123","inp_125","inp_126","inp_127"];
var var_12=["unit/dHdGlobal.gsHMIdata.sStep[12].eCmd","unit/dHdGlobal.gsHMIdata.sStep[12].x","unit/dHdGlobal.gsHMIdata.sStep[12].y1","unit/dHdGlobal.gsHMIdata.sStep[12].z1","unit/dHdGlobal.gsHMIdata.sStep[12].P1","unit/dHdGlobal.gsHMIdata.sStep[12].P2","unit/dHdGlobal.gsHMIdata.sStep[12].tMon"];
var id_13=["inp_130","inp_131","inp_132","inp_133","inp_135","inp_136","inp_137"];
var var_13=["unit/dHdGlobal.gsHMIdata.sStep[13].eCmd","unit/dHdGlobal.gsHMIdata.sStep[13].x","unit/dHdGlobal.gsHMIdata.sStep[13].y1","unit/dHdGlobal.gsHMIdata.sStep[13].z1","unit/dHdGlobal.gsHMIdata.sStep[13].P1","unit/dHdGlobal.gsHMIdata.sStep[13].P2","unit/dHdGlobal.gsHMIdata.sStep[13].tMon"];
var id_14=["inp_140","inp_141","inp_142","inp_143","inp_145","inp_146","inp_147"];
var var_14=["unit/dHdGlobal.gsHMIdata.sStep[14].eCmd","unit/dHdGlobal.gsHMIdata.sStep[14].x","unit/dHdGlobal.gsHMIdata.sStep[14].y1","unit/dHdGlobal.gsHMIdata.sStep[14].z1","unit/dHdGlobal.gsHMIdata.sStep[14].P1","unit/dHdGlobal.gsHMIdata.sStep[14].P2","unit/dHdGlobal.gsHMIdata.sStep[14].tMon"];
var id_15=["inp_150","inp_151","inp_152","inp_153","inp_155","inp_156","inp_157"];
var var_15=["unit/dHdGlobal.gsHMIdata.sStep[15].eCmd","unit/dHdGlobal.gsHMIdata.sStep[15].x","unit/dHdGlobal.gsHMIdata.sStep[15].y1","unit/dHdGlobal.gsHMIdata.sStep[15].z1","unit/dHdGlobal.gsHMIdata.sStep[15].P1","unit/dHdGlobal.gsHMIdata.sStep[15].P2","unit/dHdGlobal.gsHMIdata.sStep[15].tMon"];
var id_16=["inp_160","inp_161","inp_162","inp_163","inp_165","inp_166","inp_167"];
var var_16=["unit/dHdGlobal.gsHMIdata.sStep[16].eCmd","unit/dHdGlobal.gsHMIdata.sStep[16].x","unit/dHdGlobal.gsHMIdata.sStep[16].y1","unit/dHdGlobal.gsHMIdata.sStep[16].z1","unit/dHdGlobal.gsHMIdata.sStep[16].P1","unit/dHdGlobal.gsHMIdata.sStep[16].P2","unit/dHdGlobal.gsHMIdata.sStep[16].tMon"];
var id_17=["inp_170","inp_171","inp_172","inp_173","inp_175","inp_176","inp_177"];
var var_17=["unit/dHdGlobal.gsHMIdata.sStep[17].eCmd","unit/dHdGlobal.gsHMIdata.sStep[17].x","unit/dHdGlobal.gsHMIdata.sStep[17].y1","unit/dHdGlobal.gsHMIdata.sStep[17].z1","unit/dHdGlobal.gsHMIdata.sStep[17].P1","unit/dHdGlobal.gsHMIdata.sStep[17].P2","unit/dHdGlobal.gsHMIdata.sStep[17].tMon"];
var id_18=["inp_180","inp_181","inp_182","inp_183","inp_185","inp_186","inp_187"];
var var_18=["unit/dHdGlobal.gsHMIdata.sStep[18].eCmd","unit/dHdGlobal.gsHMIdata.sStep[18].x","unit/dHdGlobal.gsHMIdata.sStep[18].y1","unit/dHdGlobal.gsHMIdata.sStep[18].z1","unit/dHdGlobal.gsHMIdata.sStep[18].P1","unit/dHdGlobal.gsHMIdata.sStep[18].P2","unit/dHdGlobal.gsHMIdata.sStep[18].tMon"];
var id_19=["inp_190","inp_191","inp_192","inp_193","inp_195","inp_196","inp_197"];
var var_19=["unit/dHdGlobal.gsHMIdata.sStep[19].eCmd","unit/dHdGlobal.gsHMIdata.sStep[19].x","unit/dHdGlobal.gsHMIdata.sStep[19].y1","unit/dHdGlobal.gsHMIdata.sStep[19].z1","unit/dHdGlobal.gsHMIdata.sStep[19].P1","unit/dHdGlobal.gsHMIdata.sStep[19].P2","unit/dHdGlobal.gsHMIdata.sStep[19].tMon"];
var id_20=["inp_200","inp_201","inp_202","inp_203","inp_205","inp_206","inp_207"];
var var_20=["unit/dHdGlobal.gsHMIdata.sStep[20].eCmd","unit/dHdGlobal.gsHMIdata.sStep[20].x","unit/dHdGlobal.gsHMIdata.sStep[20].y1","unit/dHdGlobal.gsHMIdata.sStep[20].z1","unit/dHdGlobal.gsHMIdata.sStep[20].P1","unit/dHdGlobal.gsHMIdata.sStep[20].P2","unit/dHdGlobal.gsHMIdata.sStep[20].tMon"];
var id_021=["inp_210","inp_211","inp_212","inp_213","inp_215","inp_216","inp_217"];
var var_021=["unit/dHdGlobal.gsHMIdata.sStep[21].eCmd","unit/dHdGlobal.gsHMIdata.sStep[21].x","unit/dHdGlobal.gsHMIdata.sStep[21].y1","unit/dHdGlobal.gsHMIdata.sStep[21].z1","unit/dHdGlobal.gsHMIdata.sStep[21].P1","unit/dHdGlobal.gsHMIdata.sStep[21].P2","unit/dHdGlobal.gsHMIdata.sStep[21].tMon"];
var id_022=["inp_220","inp_221","inp_222","inp_223","inp_225","inp_226","inp_227"];
var var_022=["unit/dHdGlobal.gsHMIdata.sStep[22].eCmd","unit/dHdGlobal.gsHMIdata.sStep[22].x","unit/dHdGlobal.gsHMIdata.sStep[22].y1","unit/dHdGlobal.gsHMIdata.sStep[22].z1","unit/dHdGlobal.gsHMIdata.sStep[22].P1","unit/dHdGlobal.gsHMIdata.sStep[22].P2","unit/dHdGlobal.gsHMIdata.sStep[22].tMon"];
var id_023=["inp_230","inp_231","inp_232","inp_233","inp_235","inp_236","inp_237"];
var var_023=["unit/dHdGlobal.gsHMIdata.sStep[23].eCmd","unit/dHdGlobal.gsHMIdata.sStep[23].x","unit/dHdGlobal.gsHMIdata.sStep[23].y1","unit/dHdGlobal.gsHMIdata.sStep[23].z1","unit/dHdGlobal.gsHMIdata.sStep[23].P1","unit/dHdGlobal.gsHMIdata.sStep[23].P2","unit/dHdGlobal.gsHMIdata.sStep[23].tMon"];
var id_0024=["inp_240","inp_241","inp_242","inp_243","inp_245","inp_246","inp_247"];
var var_0024=["unit/dHdGlobal.gsHMIdata.sStep[24].eCmd","unit/dHdGlobal.gsHMIdata.sStep[24].x","unit/dHdGlobal.gsHMIdata.sStep[24].y1","unit/dHdGlobal.gsHMIdata.sStep[24].z1","unit/dHdGlobal.gsHMIdata.sStep[24].P1","unit/dHdGlobal.gsHMIdata.sStep[24].P2","unit/dHdGlobal.gsHMIdata.sStep[24].tMon"];
var id_025=["inp_250","inp_251","inp_252","inp_253","inp_255","inp_256","inp_257"];
var var_025=["unit/dHdGlobal.gsHMIdata.sStep[25].eCmd","unit/dHdGlobal.gsHMIdata.sStep[25].x","unit/dHdGlobal.gsHMIdata.sStep[25].y1","unit/dHdGlobal.gsHMIdata.sStep[25].z1","unit/dHdGlobal.gsHMIdata.sStep[25].P1","unit/dHdGlobal.gsHMIdata.sStep[25].P2","unit/dHdGlobal.gsHMIdata.sStep[25].tMon"];
var id_026=["inp_260","inp_261","inp_262","inp_263","inp_265","inp_266","inp_267"];
var var_026=["unit/dHdGlobal.gsHMIdata.sStep[26].eCmd","unit/dHdGlobal.gsHMIdata.sStep[26].x","unit/dHdGlobal.gsHMIdata.sStep[26].y1","unit/dHdGlobal.gsHMIdata.sStep[26].z1","unit/dHdGlobal.gsHMIdata.sStep[26].P1","unit/dHdGlobal.gsHMIdata.sStep[26].P2","unit/dHdGlobal.gsHMIdata.sStep[26].tMon"];
var id_027=["inp_270","inp_271","inp_272","inp_273","inp_275","inp_276","inp_277"];
var var_027=["unit/dHdGlobal.gsHMIdata.sStep[27].eCmd","unit/dHdGlobal.gsHMIdata.sStep[27].x","unit/dHdGlobal.gsHMIdata.sStep[27].y1","unit/dHdGlobal.gsHMIdata.sStep[27].z1","unit/dHdGlobal.gsHMIdata.sStep[27].P1","unit/dHdGlobal.gsHMIdata.sStep[27].P2","unit/dHdGlobal.gsHMIdata.sStep[27].tMon"];
var id_028=["inp_280","inp_281","inp_282","inp_283","inp_285","inp_286","inp_287"];
var var_028=["unit/dHdGlobal.gsHMIdata.sStep[28].eCmd","unit/dHdGlobal.gsHMIdata.sStep[28].x","unit/dHdGlobal.gsHMIdata.sStep[28].y1","unit/dHdGlobal.gsHMIdata.sStep[28].z1","unit/dHdGlobal.gsHMIdata.sStep[28].P1","unit/dHdGlobal.gsHMIdata.sStep[28].P2","unit/dHdGlobal.gsHMIdata.sStep[28].tMon"];
var id_029=["inp_290","inp_291","inp_292","inp_293","inp_295","inp_296","inp_297"];
var var_029=["unit/dHdGlobal.gsHMIdata.sStep[29].eCmd","unit/dHdGlobal.gsHMIdata.sStep[29].x","unit/dHdGlobal.gsHMIdata.sStep[29].y1","unit/dHdGlobal.gsHMIdata.sStep[29].z1","unit/dHdGlobal.gsHMIdata.sStep[29].P1","unit/dHdGlobal.gsHMIdata.sStep[29].P2","unit/dHdGlobal.gsHMIdata.sStep[29].tMon"];
var id_030=["inp_300","inp_301","inp_302","inp_303","inp_305","inp_306","inp_307"];
var var_030=["unit/dHdGlobal.gsHMIdata.sStep[30].eCmd","unit/dHdGlobal.gsHMIdata.sStep[30].x","unit/dHdGlobal.gsHMIdata.sStep[30].y1","unit/dHdGlobal.gsHMIdata.sStep[30].z1","unit/dHdGlobal.gsHMIdata.sStep[30].P1","unit/dHdGlobal.gsHMIdata.sStep[30].P2","unit/dHdGlobal.gsHMIdata.sStep[30].tMon"];


/*

var id_1=["inp_020","inp_030","inp_040","inp_050","inp_060","inp_070","inp_080","inp_090","inp_100","inp_110","inp_120","inp_130","inp_140","inp_150","inp_160","inp_170","inp_180","inp_190","inp_200"];
var var_1=["unit/dHdGlobal.gsHMIdata.sStep[2].eCmd","unit/dHdGlobal.gsHMIdata.sStep[3].eCmd","unit/dHdGlobal.gsHMIdata.sStep[4].eCmd","unit/dHdGlobal.gsHMIdata.sStep[5].eCmd","unit/dHdGlobal.gsHMIdata.sStep[6].eCmd","unit/dHdGlobal.gsHMIdata.sStep[7].eCmd","unit/dHdGlobal.gsHMIdata.sStep[8].eCmd","unit/dHdGlobal.gsHMIdata.sStep[9].eCmd","unit/dHdGlobal.gsHMIdata.sStep[10].eCmd","unit/dHdGlobal.gsHMIdata.sStep[11].eCmd","unit/dHdGlobal.gsHMIdata.sStep[12].eCmd","unit/dHdGlobal.gsHMIdata.sStep[13].eCmd","unit/dHdGlobal.gsHMIdata.sStep[14].eCmd","unit/dHdGlobal.gsHMIdata.sStep[15].eCmd","unit/dHdGlobal.gsHMIdata.sStep[16].eCmd","unit/dHdGlobal.gsHMIdata.sStep[17].eCmd","unit/dHdGlobal.gsHMIdata.sStep[18].eCmd","unit/dHdGlobal.gsHMIdata.sStep[19].eCmd","unit/dHdGlobal.gsHMIdata.sStep[20].eCmd"];
var id_5=["inp_025","inp_035","inp_045","inp_055","inp_065","inp_075","inp_085","inp_095","inp_105","inp_115","inp_125","inp_135","inp_145","inp_155","inp_165","inp_175","inp_185","inp_195","inp_205"];
var var_5=["unit/dHdGlobal.gsHMIdata.sStep[2].P1","unit/dHdGlobal.gsHMIdata.sStep[3].P1","unit/dHdGlobal.gsHMIdata.sStep[4].P1","unit/dHdGlobal.gsHMIdata.sStep[5].P1","unit/dHdGlobal.gsHMIdata.sStep[6].P1","unit/dHdGlobal.gsHMIdata.sStep[7].P1","unit/dHdGlobal.gsHMIdata.sStep[8].P1","unit/dHdGlobal.gsHMIdata.sStep[9].P1","unit/dHdGlobal.gsHMIdata.sStep[10].P1","unit/dHdGlobal.gsHMIdata.sStep[11].P1","unit/dHdGlobal.gsHMIdata.sStep[12].P1","unit/dHdGlobal.gsHMIdata.sStep[13].P1","unit/dHdGlobal.gsHMIdata.sStep[14].P1","unit/dHdGlobal.gsHMIdata.sStep[15].P1","unit/dHdGlobal.gsHMIdata.sStep[16].P1","unit/dHdGlobal.gsHMIdata.sStep[17].P1","unit/dHdGlobal.gsHMIdata.sStep[18].P1","unit/dHdGlobal.gsHMIdata.sStep[19].P1","unit/dHdGlobal.gsHMIdata.sStep[20].P1"];
var id_6=["inp_026","inp_036","inp_046","inp_056","inp_066","inp_076","inp_086","inp_096","inp_106","inp_116","inp_126","inp_136","inp_146","inp_156","inp_166","inp_176","inp_186","inp_196","inp_206"];
var var_6=["unit/dHdGlobal.gsHMIdata.sStep[1].P2","unit/dHdGlobal.gsHMIdata.sStep[2].P2","unit/dHdGlobal.gsHMIdata.sStep[3].P2","unit/dHdGlobal.gsHMIdata.sStep[4].P2","unit/dHdGlobal.gsHMIdata.sStep[5].P2","unit/dHdGlobal.gsHMIdata.sStep[6].P2","unit/dHdGlobal.gsHMIdata.sStep[7].P2","unit/dHdGlobal.gsHMIdata.sStep[8].P2","unit/dHdGlobal.gsHMIdata.sStep[9].P2","unit/dHdGlobal.gsHMIdata.sStep[10].P2","unit/dHdGlobal.gsHMIdata.sStep[11].P2","unit/dHdGlobal.gsHMIdata.sStep[12].P2","unit/dHdGlobal.gsHMIdata.sStep[13].P2","unit/dHdGlobal.gsHMIdata.sStep[14].P2","unit/dHdGlobal.gsHMIdata.sStep[15].P2","unit/dHdGlobal.gsHMIdata.sStep[16].P2","unit/dHdGlobal.gsHMIdata.sStep[17].P2","unit/dHdGlobal.gsHMIdata.sStep[18].P2","unit/dHdGlobal.gsHMIdata.sStep[19].P2","unit/dHdGlobal.gsHMIdata.sStep[20].P2"];
var id_7=["inp_017","inp_027","inp_037","inp_047","inp_057","inp_067","inp_077","inp_087","inp_097","inp_107","inp_117","inp_127","inp_137","inp_147","inp_157","inp_167","inp_177","inp_187","inp_197","inp_207"];
var var_7=["unit/dHdGlobal.gsHMIdata.sStep[1].tMon","unit/dHdGlobal.gsHMIdata.sStep[2].tMon","unit/dHdGlobal.gsHMIdata.sStep[3].tMon","unit/dHdGlobal.gsHMIdata.sStep[4].tMon","unit/dHdGlobal.gsHMIdata.sStep[5].tMon","unit/dHdGlobal.gsHMIdata.sStep[6].tMon","unit/dHdGlobal.gsHMIdata.sStep[7].tMon","unit/dHdGlobal.gsHMIdata.sStep[8].tMon","unit/dHdGlobal.gsHMIdata.sStep[9].tMon","unit/dHdGlobal.gsHMIdata.sStep[10].tMon","unit/dHdGlobal.gsHMIdata.sStep[11].tMon","unit/dHdGlobal.gsHMIdata.sStep[12].tMon","unit/dHdGlobal.gsHMIdata.sStep[13].tMon","unit/dHdGlobal.gsHMIdata.sStep[14].tMon","unit/dHdGlobal.gsHMIdata.sStep[15].tMon","unit/dHdGlobal.gsHMIdata.sStep[16].tMon","unit/dHdGlobal.gsHMIdata.sStep[17].tMon","unit/dHdGlobal.gsHMIdata.sStep[18].tMon","unit/dHdGlobal.gsHMIdata.sStep[19].tMon","unit/dHdGlobal.gsHMIdata.sStep[20].tMon"];



*/
function Read(id)
{
	if(id == "inp_014")
	{$("#inp_011").val($("#inp_X_Postion").val());////////å°‡read(id[],var[])æ”¹ç‚º.valè®€å–å€¼ç‚ºäº†è§£æ±ºajax read é¡¯ç¤ºlagå•é¡Œ
    $("#inp_012").val($("#inp_Y1_Postion").val());
    $("#inp_013").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			
			writeValueFN(tmpValue, var_014[i]);
			
		}
		
	}
	else if(id == "inp_024")
{$("#inp_021").val($("#inp_X_Postion").val());
$("#inp_022").val($("#inp_Y1_Postion").val());
$("#inp_023").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_024[i]);
		}
		
	}
	else if(id == "inp_034")
	{$("#inp_031").val($("#inp_X_Postion").val());
$("#inp_032").val($("#inp_Y1_Postion").val());
$("#inp_033").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_034[i]);
		}
		
	}
	else if(id == "inp_044")
	{$("#inp_041").val($("#inp_X_Postion").val());
$("#inp_042").val($("#inp_Y1_Postion").val());
$("#inp_043").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_044[i]);
		}
		
	}
	else if(id == "inp_054")
	{$("#inp_051").val($("#inp_X_Postion").val());
$("#inp_052").val($("#inp_Y1_Postion").val());
$("#inp_053").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_054[i]);
		}
			
	}
	else if(id == "inp_064")
	{$("#inp_061").val($("#inp_X_Postion").val());
$("#inp_062").val($("#inp_Y1_Postion").val());
$("#inp_063").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_064[i]);
		}
		
	}
	else if(id == "inp_074")
	{$("#inp_071").val($("#inp_X_Postion").val());
$("#inp_072").val($("#inp_Y1_Postion").val());
$("#inp_073").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_074[i]);
		}
		
	}
	else if(id == "inp_084")
	{$("#inp_081").val($("#inp_X_Postion").val());
$("#inp_082").val($("#inp_Y1_Postion").val());
$("#inp_083").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_084[i]);
		}
			
	}
	else if(id == "inp_094")
	{$("#inp_091").val($("#inp_X_Postion").val());
$("#inp_092").val($("#inp_Y1_Postion").val());
$("#inp_093").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_094[i]);
		}
		
	}
	else if(id == "inp_104")
	{$("#inp_101").val($("#inp_X_Postion").val());
$("#inp_102").val($("#inp_Y1_Postion").val());
$("#inp_103").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_104[i]);
		}
		
	}
	else if(id == "inp_114")
	{$("#inp_111").val($("#inp_X_Postion").val());
$("#inp_112").val($("#inp_Y1_Postion").val());
$("#inp_113").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_114[i]);
		}
			
	}
	else if(id == "inp_124")
	{$("#inp_121").val($("#inp_X_Postion").val());
$("#inp_122").val($("#inp_Y1_Postion").val());
$("#inp_123").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_124[i]);
		}
		
	}
	else if(id == "inp_134")
	{$("#inp_131").val($("#inp_X_Postion").val());
$("#inp_132").val($("#inp_Y1_Postion").val());
$("#inp_133").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_134[i]);
		}
			
	}
	else if(id == "inp_144")
	{$("#inp_141").val($("#inp_X_Postion").val());
$("#inp_142").val($("#inp_Y1_Postion").val());
$("#inp_143").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_144[i]);
		}
			
	}
	else if(id == "inp_154")
	{$("#inp_151").val($("#inp_X_Postion").val());
$("#inp_152").val($("#inp_Y1_Postion").val());
$("#inp_153").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			//console.log(tmpValue);
			writeValueFN(tmpValue, var_154[i]);
		}
			
	}
	else if(id == "inp_164")
	{$("#inp_161").val($("#inp_X_Postion").val());
$("#inp_162").val($("#inp_Y1_Postion").val());
$("#inp_163").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_164[i]);
		}
		
	}
	else if(id == "inp_174")
	{$("#inp_171").val($("#inp_X_Postion").val());
$("#inp_172").val($("#inp_Y1_Postion").val());
$("#inp_173").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_174[i]);
		}
		
	}
	else if(id == "inp_184")
	{$("#inp_181").val($("#inp_X_Postion").val());
$("#inp_182").val($("#inp_Y1_Postion").val());
$("#inp_183").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_184[i]);
		}
			
	}
	else if(id == "inp_194")
	{$("#inp_191").val($("#inp_X_Postion").val());
$("#inp_192").val($("#inp_Y1_Postion").val());
$("#inp_193").val($("#inp_Z1_Postion").val());
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_194[i]);
		}
		
	}
	else if(id == "inp_204")
	{$("#inp_201").val($("#inp_X_Postion").val());
$("#inp_202").val($("#inp_Y1_Postion").val());
$("#inp_203").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_204[i]);
		}
			
	}
		else if(id == "inp_214")
	{$("#inp_211").val($("#inp_X_Postion").val());
$("#inp_212").val($("#inp_Y1_Postion").val());
$("#inp_213").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_214[i]);
		}
			
	}
		else if(id == "inp_224")
	{$("#inp_221").val($("#inp_X_Postion").val());
$("#inp_222").val($("#inp_Y1_Postion").val());
$("#inp_223").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_224[i]);
		}
			
	}
			else if(id == "inp_234")
	{$("#inp_231").val($("#inp_X_Postion").val());
$("#inp_232").val($("#inp_Y1_Postion").val());
$("#inp_233").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_234[i]);
		}
			
	}

			else if(id == "inp_244")
	{$("#inp_241").val($("#inp_X_Postion").val());
$("#inp_242").val($("#inp_Y1_Postion").val());
$("#inp_243").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_244[i]);
		}
			
	}
				else if(id == "inp_254")
	{$("#inp_251").val($("#inp_X_Postion").val());
$("#inp_252").val($("#inp_Y1_Postion").val());
$("#inp_253").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_254[i]);
		}
			
	}

			else if(id == "inp_264")
	{$("#inp_261").val($("#inp_X_Postion").val());
$("#inp_262").val($("#inp_Y1_Postion").val());
$("#inp_263").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_264[i]);
		}
			
	}
			else if(id == "inp_274")
	{$("#inp_271").val($("#inp_X_Postion").val());
$("#inp_272").val($("#inp_Y1_Postion").val());
$("#inp_273").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_274[i]);
		}
			
	}
			else if(id == "inp_284")
	{$("#inp_281").val($("#inp_X_Postion").val());
$("#inp_282").val($("#inp_Y1_Postion").val());
$("#inp_283").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_284[i]);
		}
			
	}
			else if(id == "inp_294")
	{$("#inp_291").val($("#inp_X_Postion").val());
$("#inp_292").val($("#inp_Y1_Postion").val());
$("#inp_293").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_294[i]);
		}
			
	}
			else if(id == "inp_304")
	{$("#inp_301").val($("#inp_X_Postion").val());
$("#inp_302").val($("#inp_Y1_Postion").val());
$("#inp_303").val($("#inp_Z1_Postion").val());
	    for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			writeValueFN(tmpValue, var_304[i]);
		}
			
	}

}

var id_014=["inp_011","inp_012","inp_013"];
var_014=["unit/dHdGlobal.gsHMIdata.sStep[1].x","unit/dHdGlobal.gsHMIdata.sStep[1].y1","unit/dHdGlobal.gsHMIdata.sStep[1].z1"];


var id_024=["inp_021","inp_022","inp_023"];
 var_024=["unit/dHdGlobal.gsHMIdata.sStep[2].x","unit/dHdGlobal.gsHMIdata.sStep[2].y1","unit/dHdGlobal.gsHMIdata.sStep[2].z1"];

var id_034=["inp_031","inp_032","inp_033"];
var_034=["unit/dHdGlobal.gsHMIdata.sStep[3].x","unit/dHdGlobal.gsHMIdata.sStep[3].y1","unit/dHdGlobal.gsHMIdata.sStep[3].z1"];

 var id_044=["inp_041","inp_042","inp_043"];
var_044=["unit/dHdGlobal.gsHMIdata.sStep[4].x","unit/dHdGlobal.gsHMIdata.sStep[4].y1","unit/dHdGlobal.gsHMIdata.sStep[4].z1"];

var id_054=["inp_051","inp_052","inp_053"];
var_054=["unit/dHdGlobal.gsHMIdata.sStep[5].x","unit/dHdGlobal.gsHMIdata.sStep[5].y1","unit/dHdGlobal.gsHMIdata.sStep[5].z1"];


var id_064=["inp_061","inp_062","inp_063"];
var_064=["unit/dHdGlobal.gsHMIdata.sStep[6].x","unit/dHdGlobal.gsHMIdata.sStep[6].y1","unit/dHdGlobal.gsHMIdata.sStep[6].z1"];


var id_074=["inp_071","inp_072","inp_073"]; var_074=["unit/dHdGlobal.gsHMIdata.sStep[7].x","unit/dHdGlobal.gsHMIdata.sStep[7].y1","unit/dHdGlobal.gsHMIdata.sStep[7].z1"];


var id_084=["inp_081","inp_082","inp_083"]; var_084=["unit/dHdGlobal.gsHMIdata.sStep[8].x","unit/dHdGlobal.gsHMIdata.sStep[8].y1","unit/dHdGlobal.gsHMIdata.sStep[8].z1"];


var id_094=["inp_091","inp_092","inp_093"]; var_094=["unit/dHdGlobal.gsHMIdata.sStep[9].x","unit/dHdGlobal.gsHMIdata.sStep[9].y1","unit/dHdGlobal.gsHMIdata.sStep[9].z1"];


var id_104=["inp_101","inp_102","inp_103"]; var_104=["unit/dHdGlobal.gsHMIdata.sStep[10].x","unit/dHdGlobal.gsHMIdata.sStep[10].y1","unit/dHdGlobal.gsHMIdata.sStep[10].z1"];


var id_114=["inp_111","inp_112","inp_113"]; var_114=["unit/dHdGlobal.gsHMIdata.sStep[11].x","unit/dHdGlobal.gsHMIdata.sStep[11].y1","unit/dHdGlobal.gsHMIdata.sStep[11].z1"];


var id_124=["inp_121","inp_122","inp_123"]; var_124=["unit/dHdGlobal.gsHMIdata.sStep[12].x","unit/dHdGlobal.gsHMIdata.sStep[12].y1","unit/dHdGlobal.gsHMIdata.sStep[12].z1"];


var id_134=["inp_131","inp_132","inp_133"]; var_134=["unit/dHdGlobal.gsHMIdata.sStep[13].x","unit/dHdGlobal.gsHMIdata.sStep[13].y1","unit/dHdGlobal.gsHMIdata.sStep[13].z1"];


var id_144=["inp_141","inp_142","inp_143"]; var_144=["unit/dHdGlobal.gsHMIdata.sStep[14].x","unit/dHdGlobal.gsHMIdata.sStep[14].y1","unit/dHdGlobal.gsHMIdata.sStep[14].z1"];


var id_154=["inp_151","inp_152","inp_153"]; var_154=["unit/dHdGlobal.gsHMIdata.sStep[15].x","unit/dHdGlobal.gsHMIdata.sStep[15].y1","unit/dHdGlobal.gsHMIdata.sStep[15].z1"];


var id_164=["inp_161","inp_162","inp_163"]; var_164=["unit/dHdGlobal.gsHMIdata.sStep[16].x","unit/dHdGlobal.gsHMIdata.sStep[16].y1","unit/dHdGlobal.gsHMIdata.sStep[16].z1"];


var id_174=["inp_171","inp_172","inp_173"]; var_174=["unit/dHdGlobal.gsHMIdata.sStep[17].x","unit/dHdGlobal.gsHMIdata.sStep[17].y1","unit/dHdGlobal.gsHMIdata.sStep[17].z1"];


var id_184=["inp_181","inp_182","inp_183"]; var_184=["unit/dHdGlobal.gsHMIdata.sStep[18].x","unit/dHdGlobal.gsHMIdata.sStep[18].y1","unit/dHdGlobal.gsHMIdata.sStep[18].z1"];


var id_194=["inp_191","inp_192","inp_193"]; var_194=["unit/dHdGlobal.gsHMIdata.sStep[19].x","unit/dHdGlobal.gsHMIdata.sStep[19].y1","unit/dHdGlobal.gsHMIdata.sStep[19].z1"];


var id_204=["inp_201","inp_202","inp_203"]; var_204=["unit/dHdGlobal.gsHMIdata.sStep[20].x","unit/dHdGlobal.gsHMIdata.sStep[20].y1","unit/dHdGlobal.gsHMIdata.sStep[20].z1"];

var id_214=["inp_211","inp_212","inp_213"]; var_214=["unit/dHdGlobal.gsHMIdata.sStep[21].x","unit/dHdGlobal.gsHMIdata.sStep[21].y1","unit/dHdGlobal.gsHMIdata.sStep[21].z1"];

var id_224=["inp_221","inp_222","inp_223"]; var_224=["unit/dHdGlobal.gsHMIdata.sStep[22].x","unit/dHdGlobal.gsHMIdata.sStep[22].y1","unit/dHdGlobal.gsHMIdata.sStep[22].z1"];

var id_234=["inp_231","inp_232","inp_233"]; var_234=["unit/dHdGlobal.gsHMIdata.sStep[23].x","unit/dHdGlobal.gsHMIdata.sStep[23].y1","unit/dHdGlobal.gsHMIdata.sStep[23].z1"];

var id_244=["inp_241","inp_242","inp_243"]; var_244=["unit/dHdGlobal.gsHMIdata.sStep[24].x","unit/dHdGlobal.gsHMIdata.sStep[24].y1","unit/dHdGlobal.gsHMIdata.sStep[24].z1"];

var id_254=["inp_251","inp_252","inp_253"]; var_254=["unit/dHdGlobal.gsHMIdata.sStep[25].x","unit/dHdGlobal.gsHMIdata.sStep[25].y1","unit/dHdGlobal.gsHMIdata.sStep[25].z1"];

var id_264=["inp_261","inp_262","inp_263"]; var_264=["unit/dHdGlobal.gsHMIdata.sStep[26].x","unit/dHdGlobal.gsHMIdata.sStep[26].y1","unit/dHdGlobal.gsHMIdata.sStep[26].z1"];

var id_274=["inp_271","inp_272","inp_273"]; var_274=["unit/dHdGlobal.gsHMIdata.sStep[27].x","unit/dHdGlobal.gsHMIdata.sStep[27].y1","unit/dHdGlobal.gsHMIdata.sStep[27].z1"];

var id_284=["inp_281","inp_282","inp_283"]; var_284=["unit/dHdGlobal.gsHMIdata.sStep[28].x","unit/dHdGlobal.gsHMIdata.sStep[28].y1","unit/dHdGlobal.gsHMIdata.sStep[28].z1"];

var id_294=["inp_291","inp_292","inp_293"]; var_294=["unit/dHdGlobal.gsHMIdata.sStep[29].x","unit/dHdGlobal.gsHMIdata.sStep[29].y1","unit/dHdGlobal.gsHMIdata.sStep[29].z1"];

var id_304=["inp_301","inp_302","inp_303"]; var_304=["unit/dHdGlobal.gsHMIdata.sStep[30].x","unit/dHdGlobal.gsHMIdata.sStep[30].y1","unit/dHdGlobal.gsHMIdata.sStep[30].z1"];






function BtnUp(){};



/*因需點第二次方向鍵才移動之問題故將之註解調改為compile.htm檔內的addEventListen
function browserRedirect(id)
{
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
	{
        BtnMobileDevices(id);
    }
	else 
	{
        BtnPcDevices(id);
    }
}
function BtnMobileDevices(id)
{
    //X1Y1
    if(id == "btn_Y1Z1_up")
	{	
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent1, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent1, false);
		function handleTouchEvent1(event1) {
            switch (event1.type) {
                case "touchstart":    
				    document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");

                    break;
                case "touchend":
				    document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
                    writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
                    break;   
            }
        }
	}	
	else if(id == "btn_Y1Z1_left")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent2, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent2, false);
		function handleTouchEvent2(event2) {   
            switch (event2.type) {
                case "touchstart":
				   document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
                    break;   
            }
        }
		
	}
	else if(id == "btn_Y1Z1_right")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent3, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent3, false);
		function handleTouchEvent3(event3) {     
            switch (event3.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
					writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
                    break;   
            }
        }	
	}
	else if(id == "btn_Y1Z1_down")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent4, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent4, false);
		function handleTouchEvent4(event4) {
            switch (event4.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
					writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
                    break;   
            }
        }	
	}
	//X
	else if(id == "btn_X_left")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent01, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent01, false);
		function handleTouchEvent01(event01) {  
            switch (event01.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_left8150.png)";
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_left8150.png)";
		            writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
                    break;   
            }
        }	
	}
	else if(id == "btn_X_right")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent02, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent02, false);
		function handleTouchEvent02(event02) {    
            switch (event02.type) {
                case "touchstart":
				    document.getElementById(id).style.background="url(../image/bg_BtnDown_right7550.png)";
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_right7550.png)";
		            writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
                    break;   
            }	
        }	
	}	
}
function BtnPcDevices(id)
{
    if(id == "btn_Y1Z1_up")
	{
	    document.getElementById(id).onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");

		}
		document.getElementById(id).onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
		}
	}
	else if(id == "btn_Y1Z1_left")
	{
	    btn_Y1Z1_left.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
		}
		btn_Y1Z1_left.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
		}
	}
	else if(id == "btn_Y1Z1_right")
	{
	    btn_Y1Z1_right.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
		}
		btn_Y1Z1_right.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
		}
	}
	else if(id == "btn_Y1Z1_down")
	{
	    btn_Y1Z1_down.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
		}
		btn_Y1Z1_down.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
		}
	}
	else if(id == "btn_X_left")
	{
	    btn_X_left.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left8150.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
		}
		btn_X_left.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left8150.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
		}
	}
	else if(id == "btn_X_right")
	{
	    btn_X_right.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right7550.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
		}
		btn_X_right.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right7550.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
		}
	}
}
*/
