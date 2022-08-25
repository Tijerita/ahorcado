

     var input = document.querySelector(".pantalla1");
	 var mostrarMensaje = document.querySelector(".pantalla2");
     
	
     input.focus();

    
    var filtro = ["a","e","i","o","u"];
    var a = "ai";
	 var e = "enter";
    var i = "imes";
	 var o = "ober";
	 var u = "ufat";

   
	function encriptarMensaje(){
      input.value = input.value.toLowerCase();
		var nuevoMensaje1 = [];
		console.log(nuevoMensaje1)
		var preguntar =false;

		for(var posicion = 0;posicion < input.value.length;posicion++){
	       var preguntar = false;

		   if(filtro[0] == input.value[posicion]){
			 console.log(input.value[posicion])
			 nuevoMensaje1.push(a);
			 posicion= posicion+1;
			
		    }
		    if(filtro[1] == input.value[posicion]){
			   console.log(input.value[posicion])
			   nuevoMensaje1.push(e);
			   preguntar=true;
		    }
			if(filtro[2] == input.value[posicion]){
			   console.log(input.value[posicion])
			   nuevoMensaje1.push(i);
			   preguntar=true;
			
		    }
			if(filtro[3] == input.value[posicion]){
			   console.log(input.value[posicion])
			   nuevoMensaje1.push(o);
			   preguntar=true;
			
		    }
			if(filtro[4] == input.value[posicion]){
			   console.log(input.value[posicion])
			   nuevoMensaje1.push(u);
			   preguntar=true;
	
		    }
		    if(preguntar== false){ 
			    nuevoMensaje1.push(input.value[posicion]);
			     console.log(input.value[posicion])
				
		   }
			   
	   }
			

		var encriptado = nuevoMensaje1.join("");
		console.log(nuevoMensaje1.join(""))

		//mostrar el mensaje encriptado
		mostrarMensaje.value = encriptado;
        mostrarMensaje.style.backgroundImage="none";

        //borrar mensaje escrito y datos guardados
		input.value=("");
		nuevoMensaje1= [ ];
		
	   	
   }




    
    var filtro = ["a","e","i","o","u"];
    var ai = "a";
    var enter = "e";
    var imes = "i";
    var ober = "o";
    var ufat = "u";

    

function desencriptarMensaje(){

    var nuevoMensaje2 = [];
    input.value = input.value.toLowerCase();

    
    var preguntar =false;

    for(var posicion = 0;posicion <= input.value.length;posicion++){
       preguntar= false;
      if(filtro[0] == input.value[posicion]){
         nuevoMensaje2.push(ai);
         posicion= posicion+2;
        
        }
        if(filtro[1] == input.value[posicion]){
           nuevoMensaje2.push(enter);
           posicion=posicion+4;
           preguntar=true;
        }
        if(filtro[2] == input.value[posicion]){
           nuevoMensaje2.push(imes);
           posicion=posicion+3;
           preguntar=true;
        
        }
        if(filtro[3] == input.value[posicion]){
           nuevoMensaje2.push(ober);
           posicion=posicion+3;
           preguntar=true;
        
        }
        if(filtro[4] == input.value[posicion]){
           nuevoMensaje2.push(ufat);
           posicion=posicion+3;
           preguntar=true;

        }
        if(preguntar== false){ 
            nuevoMensaje2.push(input.value[posicion]);
            
        }
   }


    var desencriptado = nuevoMensaje2.join("");

    //mostrar el mensaje encriptado
    mostrarMensaje.value = desencriptado;
    mostrarMensaje.style.backgroundImage = "none";

    //borrar mensaje escrito y datos guardados
    input.value=("");
    nuevoMensaje2= [];
       
}


	function copiarTexto(){
	
			
			mostrarMensaje.select()
			navigator.clipboard.writeText(mostrarMensaje.value)
			mostrarMensaje.value = "";
		
        

	}

