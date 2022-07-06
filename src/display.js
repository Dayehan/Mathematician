export class Display{ 
    constructor(){
       this.root=document.querySelector('#root');
    }
   
   render(state,fNum,sNum){
       switch(state) {
           case 1: 
               root.innerHTML=`
               <div class="container" id="play">
                   <p>Do you want to play?</p>
                   <button id="start-button">PLAY!</button>
               </div>
               `
               break;
           case 2:
               root.innerHTML=`
               <div id="question-container" class="box"> 
                       <div class="fixedQuestion">Are you sure you are a Fabulous Mathematician?</div>    
                           <div class="insertValue"> 
                               <p id="firstNum" class="circle">${fNum}</p> 
                               <p>+</p>
                               <p id="secondNum" class="circle">${sNum}</p>  
                               <p><span>=</span></p>
                           </div>
                       <input class="answer" autofocus>
                   </div>
               </div>`
               break;
           case 3:
               root.innerHTML=`
                   <div class="container">
                   <video autoplay loop muted plays-inline class="video-back">
                   <source src="./confetti.html.mp4" type="video/mp4">
                   </video>
                   <p id="won">Congratulations you are a fabulous Mathematician!!!<p>
                   <br></br>
                   <p>GAME OVER! You spent ${fNum} milliseconds playing</p>
                   <button id="start-button">REPLAY?</button>
                  
               </div>`
               break;
       }
}

}
