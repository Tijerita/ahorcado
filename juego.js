

     
    var letraTecleada=document.querySelector(".teclado");

    function enfocar(){ 
      letraTecleada.focus();

    }
    document.querySelector(".teclado").disabled=true;
    document.querySelector(".juego").style.display="none";
    document.querySelector(".nueva-palabra").style.display="none";

    //BOTON INICIAR EL JUEGO
    function iniciarJuego(){
      
      document.querySelector(".inicio").style.display="none";
      document.querySelector(".juego").style.display="block";
      document.querySelector(".teclado").disabled=false;
      letraTecleada.focus();
      sortearPalabra();
      limpiar();
    }

    //BOTON NUEVA PARTIDA
    function nuevoJuego(){
      Lacertadas.splice(0, Lacertadas.length);
      Lerradas.splice(0, Lerradas.length);
      sortearPalabra();
      document.querySelector(".almacen").value="";
      limpiar();
      document.querySelector(".teclado").disabled=false;
      letraTecleada.focus();
    }
 
    //BOTON DESISTIR
    function desistir(){
      location.reload();
    }
    // PALABRAS PARA ADIVINAR
    var palabras =["HOLA","PARLANTE","FLECHA","DIODO","JACOB","METRO","REDIMIDO","EMPATIA","CIELO","BONDAD","ARENA","VIRTUD"];
   
  

    function sortearPalabra() {

     palabraOculta.splice(0, palabraOculta.length);
     var palabra=palabras[Math.floor(Math.random()*palabras.length)];
     var palabraSorteada = palabra.split("");
     Array.prototype.push.apply(palabraOculta,palabraSorteada);
     
    }
    
    var palabraOculta = [];
      
        
    var Lpermitidas=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
    //FILTRAR SOLO LETRAS
  
   
    function soloLetras(){
      var letraOprimida= letraTecleada.value.toUpperCase();
      
     for (var i= 0; i< Lpermitidas.length;i++){
        if (letraOprimida.includes(Lpermitidas[i])) {
         var letraElegida =Lpermitidas[i];
          verificar(letraElegida);
        
        }
        letraTecleada.value="";
      }
      
      letraTecleada.focus();
    }
    
    
    //VERIFICAMOS SI ES IGUAL A LA PALABRA OCULTA
    function verificar(letraElegida){

  
      var letra= letraElegida;
      
      var encontrado = false;
      for (var i= 0; i< palabraOculta.length;i++){

        if (letra.includes(palabraOculta[i])){
          var letter=palabraOculta[i];
          Lacertadas.push(letra);
          var position=i;
          var posicion= (5+((500/palabraOculta.length)*position));
          var lugar=(500/palabraOculta.length)+posicion;
          escribirLetra(letter, lugar);
          ganaste();
        
          encontrado = true;
        }
      }
      if(encontrado == false){
      
        Lerradas.push(letra);
        mostrarErradas();
      
      }   
      letraTecleada.focus();
  
    }
    
    //MOVEMOS TODAS LAS LETRAS ERRADAS A LERRADAS Y LUEGO LO VISUALIZAMOS
    var Lerradas =[];   
    
    function mostrarErradas(){
  
     var mostrar=Lerradas.filter((item,index)=>{
     return Lerradas.indexOf(item)===index;
     })
  
     var reflejar=mostrar.join("")
     document.querySelector(".almacen").value=reflejar;
     totalErrores(reflejar);

    } 

  //CONTAMOS EL NUMERO DE ERRORES Y DIBUJAMOS EL MUÑECO
  function totalErrores(reflejar) {
    var intento1=1;
    var intento2=2;
    var intento3=3;
    var intento4=4;
    var intento5=5;
    var intento6=6;
    var intento7=7;
    var intento8=8;
    var intento9=9;
    
    if(reflejar.length==intento1){
    poste();
    }
        if(reflejar.length==intento2){
    postePequenho();
    }
    if(reflejar.length==intento3){
    soga();
    }
    if(reflejar.length==intento4){
    cabeza();
    }
    if(reflejar.length==intento5){
    cuerpo();
    }
    if(reflejar.length==intento6){
    pieDerecho();
    }
    if(reflejar.length==intento7){
    pieIzquierdo();
    }
    if(reflejar.length==intento8){
    brazoDerecho();
    }
    if(reflejar.length==intento9){
    brazoIzquierdo();
    derrota();
    document.querySelector(".teclado").disabled = true;
    }
    
  }
  
  //>>>MOVEMOS TODAS LAS LETRAS ACERTADAS A LACERTADAS Y COMPARAMOS CON LA PALABRA OCULTA
  
    
  var Lacertadas=[];

  function ganaste(){
    var mostrar=Lacertadas.filter((item,index)=>{
      return Lacertadas.indexOf(item)===index;
    })
  
    var comparar=palabraOculta.filter((item,index)=>{
      return palabraOculta.indexOf(item)===index;
    })
   

    if(comparar.length==mostrar.length){
      document.querySelector(".teclado").disabled = true;
      victoria();
    }
    
  }

  function nuevaPalabra(){

   document.querySelector(".inicio").style.display="none";
   document.querySelector(".nueva-palabra").style.display="block"; 

  }

  function agregarPalabra(){

    var escribir =document.querySelector(".ingreseTexto").value;
    var nuevaP =escribir.toUpperCase();
    var ingresado = nuevaP.split("");
   while(ingresado.length>=4 && ingresado.length<=8){
      Array.prototype.push.apply(palabraOculta,ingresado);
      document.querySelector(".ingreseTexto").value="";
      limpiar();
      document.querySelector(".nueva-palabra").style.display="none";
      document.querySelector(".juego").style.display="block";
      document.querySelector(".teclado").disabled=false;
      letraTecleada.focus();
      break;
    }

  }
  function cancelar(){

    location.reload();

  } 
