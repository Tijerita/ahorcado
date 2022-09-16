var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");		

pincel.fillStyle="#061124" //color del fillrect
pincel.fillRect(0,0,600,600); 

	function limpiar(){

     pincel.clearRect(0, 0, 600, 600);
     base();
     lineas();
  }

//ESCRIBIR LAS LETRAS
function escribirLetra(texto, x){ 
  pincel.font="36px Georgia";
  pincel.fillStyle="rgb(24, 243, 243)";
  pincel.fillText(texto, x, 528);
}

///>>>>>>>>LINEAS DE LAS LETRAS<<<<

function lineas(){
  pincel.lineWidth= 6;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00FF00";
  
  
  var anchura=500/palabraOculta.length;
  for(var i=1;i<=palabraOculta.length;i++){
    pincel.moveTo(0+(anchura*i),540)
    pincel.lineTo(40+(anchura*i),540)
  }
  pincel.stroke();
  pincel.closePath();
}


function base(){
  pincel.lineWidth= 20;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="maroon"
 
  pincel.beginPath()
  pincel.moveTo(100, 450);
  pincel.lineTo(250, 450);
  pincel.stroke();
  pincel.closePath();
   
}


/////////<>>>>POSTE DEL AHORCADO

function poste(){

  pincel.lineWidth= 10;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="maroon";
    
    
  pincel.beginPath()
  pincel.moveTo(175, 440);
  pincel.lineTo(175, 100);
  pincel.stroke();
  pincel.closePath();
     
}
  
function postePequenho(){
  pincel.lineWidth= 8;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="maroon";
    
  pincel.beginPath()
  pincel.moveTo(175, 100);
  pincel.lineTo(350, 100);
  pincel.stroke();
  pincel.closePath();
}
  
function soga(){
  pincel.lineWidth= 7;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.fillStyle="yellow";
  pincel.strokeStyle="yellow";
    
  pincel.beginPath()
  pincel.moveTo(350, 100);
  pincel.lineTo(350, 150);
  pincel.stroke();
  pincel.closePath();
  
    
}


function cabeza(){
  pincel.lineWidth=3;
	pincel.fillStyle = "#00FF00";
  pincel.strokeStyle="black"
	pincel.beginPath();
	pincel.arc(350,182,30,0,2*Math.PI);
	pincel.fill();
  pincel.stroke();
	//OJO<<<<	
	pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.arc(337,175,5,0,2*Math.PI);
	pincel.fill();
	//>OJO<<<<
  pincel.beginPath();
  pincel.arc(363,175,5,0,2*Math.PI);
	pincel.fill();
		
	//BOCA<<<<
	pincel.beginPath();
  pincel.arc(350,196,8,0,2*Math.PI);
	pincel.fill();
	//BOCA<<<<<
		
	pincel.beginPath();
  pincel.fillStyle="#00FF00";
  pincel.arc(350,200,8,0,2*Math.PI);
	pincel.fill();
    
}	
//CUERPO<<<<<<<<<<<<<<<
	
function cuerpo(){
	pincel.lineWidth= 11;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="yellow";
    
    
  pincel.beginPath()
  pincel.moveTo(350, 216);
  pincel.lineTo(350, 217);
  pincel.stroke();
  pincel.closePath();
          
  pincel.lineWidth= 10;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00ff00";
          
  pincel.beginPath()
  pincel.moveTo(350, 225);
  pincel.lineTo(350, 290);
  pincel.stroke();
  pincel.closePath();
}
			
function pieDerecho(){
  pincel.lineWidth= 8;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00FF00";
          
  pincel.beginPath()
  pincel.moveTo(350, 290);
  pincel.lineTo(355, 295);
  pincel.stroke();
  pincel.closePath();
          
  pincel.beginPath()
  pincel.moveTo(355, 295);
  pincel.lineTo(357, 360);
  pincel.stroke();
  pincel.closePath();
          
  pincel.beginPath()
  pincel.moveTo(357, 360);
  pincel.lineTo(370, 365);
  pincel.stroke();
  pincel.closePath();
          
}

function pieIzquierdo(){
  pincel.lineWidth= 8;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00FF00";
          
  pincel.beginPath()
  pincel.moveTo(350, 290);
  pincel.lineTo(345, 295);
  pincel.stroke();
  pincel.closePath();
          
  pincel.beginPath()
  pincel.moveTo(345, 295);
  pincel.lineTo(345, 360);
  pincel.stroke();
  pincel.closePath();
          
  pincel.beginPath()
  pincel.moveTo(345, 360);
  pincel.lineTo(333, 365);
  pincel.stroke();
  pincel.closePath();
          
}
     
function brazoDerecho(){
       
  pincel.lineWidth= 8;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00FF00";
      
          
  pincel.beginPath()
  pincel.moveTo(345, 225);
  pincel.lineTo(325, 280);
  pincel.stroke();
  pincel.closePath();
}
     

function brazoIzquierdo(){

       
  pincel.lineWidth= 8;
  pincel.lineCap= "round";
  pincel.lineJoin="round";
  pincel.strokeStyle="#00FF00";
      
          
  pincel.beginPath()
  pincel.moveTo(355, 225);
  pincel.lineTo(375, 280);
  pincel.stroke();
  pincel.closePath();
}
//GANASTE
function victoria(){ 
  pincel.font="36px Georgia";
  pincel.fillStyle="rgb(24, 243, 243)";
  pincel.fillText("¡¡¡ G A N A S T E !!!",175 ,70);
}
//PERDISTE
function derrota(){ 
  pincel.font="36px Georgia";
  pincel.fillStyle="rgb(24, 243, 243)";
  pincel.fillText("¡¡¡ P E R D I S T E !!!",175 ,70);
}