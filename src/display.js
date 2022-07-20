export class Display{ 
    constructor(){
       this.root=document.querySelector('#root');
    }
   
   render(gameState,firstNumber,secondNumber){
       switch(gameState) {
           case "START_GAME": 
               root.innerHTML=`
               <div class="container" id="play">
                   <p>Do you want to play?</p>
                   <button id="start-button">PLAY!</button>
               </div>
               `
               break;
           case "SOLVE_QUESTION":
               root.innerHTML=`
               <div id="question-container" class="box"> 
                       <div class="fixedQuestion">Are you sure you are a Fabulous Mathematician?</div>    
                           <div class="insertValue"> 
                               <p id="firstNum" class="circle">${firstNumber}</p> 
                               <p>+</p>
                               <p id="secondNum" class="circle">${secondNumber}</p>  
                               <p><span>=</span></p>
                           </div>
                       <input class="answer" autofocus>
                   </div>
               </div>`
               break;
           case "GAME_OVER":
               root.innerHTML=`
                   <div class="container">
                   <video autoplay loop muted plays-inline class="video-back">
                   <source src="./confetti.html.mp4" type="video/mp4">
                   </video>
                   <p id="won">Congratulations you are a fabulous Mathematician!!!<p>
                   <br></br>
                   <p>GAME OVER! You spent ${firstNumber} milliseconds playing</p>
                   <button id="start-button">REPLAY?</button>
                  
               </div>`
               break;
       }
}

}
