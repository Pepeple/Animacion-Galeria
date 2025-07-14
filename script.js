const element = document.getElementsByClassName("element")
const botonright = document.getElementById("botonright")
const botonleft = document.getElementById("botonleft")
let item = 0
let zIndex = -10000

//posicion del primer item a la izquierda
element.item(0).style.transform = "rotateY(" + (180) + "deg)"
element.item(0).style.left = (490) + "px"

//boton derecha
botonright.addEventListener("click", () => {
    // coloca el item siguiente a la derecha
    let prev = item+1
    if(prev == 3) prev = 0
    element.item(prev).style.zIndex = zIndex-1
    element.item(prev).style.transform = "rotateY(" + (180) + "deg)"
    element.item(prev).style.left = (490) + "px"

    //animacion a la derecha
    zIndex++
    for(let i = 0; i < 180; i++){
    setTimeout(() => {
        if(i  > 90){
            element.item(item).style.transform = "rotateY(" + i + "deg) skewY(" + (180-i)*0.2 + "deg) translateY(" + (180-i)*.5 + "px)" 
        }
        else{
            element.item(item).style.transform = "rotateY(" + i + "deg) skewY(" + i*.2 + "deg) translateY(" + i*.5 + "px) " 
        }
        element.item(item).style.left = ((-i*3) +1030) + "px"
        element.item(item).style.zIndex = zIndex
    }, 1805-(i * 10));
    }   

    //enfoca el item siguiente
    setTimeout(() => {
        item++
        if(item == 3) item = 0

    }, 1900);
})

//boton izquierdo
botonleft.addEventListener("click", () => {
    //enfoca el item anterior
    item--
    if(item == -1) item = 2
    

    //coloca el item anterior a la izquierda
    let prev = item - 1
    if(prev == -1) prev = 2
    element.item(prev).style.zIndex = zIndex-1
    element.item(prev).style.transform = "rotateY(" + 0 + "deg)"
    element.item(prev).style.left = (1030) + "px"
    
    //animacion a  la  izquierda
    zIndex++
    for(let i = 0; i < 180; i++){
        setTimeout(() => {
            if(i  > 90){
            element.item(item).style.transform = "rotateY(" + (180-i) + "deg) skewY(" + (180-i)*0.2 + "deg)  translateY(" + (180-i)*.5 + "px)"
            }
            else{
                element.item(item).style.transform = "rotateY(" + (180-i) + "deg) skewY(" + i*.2 + "deg)  translateY(" + i*.5 + "px)"
            }
            element.item(item).style.left = (i*3 + 490 ) + "px"
            element.item(item).style.zIndex = zIndex
        }, 1800-(i * 10));
        }   
    })





const canciones = [
  "acoustic-breeze.mp3",
  "memories.mp3",
  "once-again.mp3",
  "sunny.mp3",
  "tenderness.mp3",
  "the-lounge.mp3",
  
  ]
var indiceActual = 0

//cambia el icono a play o pause
function toggleIcon() {
     var element = document.getElementById("iconPlay");
     element.classList.toggle("fa-pause-circle");
     element.classList.toggle("fa-play-circle");
  }
 //cambia el icono a play
  function classIconPlay(){
    var element = document.getElementById("iconPlay")
    element.classList.remove("fa-play-circle");
    element.classList.add("fa-pause-circle");
  }
//para pausa o play 
  function togglePlay() {
    if (player.paused){
      toggleIcon();
      return player.play();
    } else {
      toggleIcon();
      return player.pause();
    }
  }

 //carga las canciones en el reproductor
  function loadMusic(ruta){
    var source = document.getElementById('source')
    source.src= "audio/"+ruta
    player.load()
  }

  //cancion anterior
  function prevMusic(){  
    const source = document.getElementById('source');
    if (indiceActual==0){
      indiceActual = canciones.length - 1
    } else {
      indiceActual = indiceActual - 1
    }
    loadMusic(canciones[indiceActual]);
    player.play()
    classIconPlay()
  }


  //proxima cancion
  function nextMusic(){  
    const source = document.getElementById('source');
    if (canciones.length == (indiceActual+1)){
      indiceActual = 0
    } else {
      indiceActual++
    }
    loadMusic(canciones[indiceActual]);
    player.play()
    classIconPlay()
  }

  
  //actualiza la barra de progreso
  const updateProgress = () =>{
    if (player.currentTime >0){
      const barra = document.getElementById('progress')
      barra.value = (player.currentTime / player.duration) * 100
    }
    if (player.ended){
      nextMusic();
    } 
  }
   //adelantar en la barra de progreso
  progress.addEventListener('click', adelantar);
  function adelantar(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
    player.currentTime = scrubTime;
    sonsole.log(e);
  }

   //Funcion para control del volumen
  const volumen= document.getElementById("volumen")
  volumen.oninput= (e) =>{
    const vol = e.target.value
    player.volume =vol
  }
  loadMusic(canciones[0])