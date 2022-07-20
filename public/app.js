
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
   'use strict';

   class Display {
     constructor() {
       this.root = document.querySelector('#root');
     }

     render(gameState, firstNumber, secondNumber) {
       switch (gameState) {
         case "START_GAME":
           root.innerHTML = `
               <div class="container" id="play">
                   <p>Do you want to play?</p>
                   <button id="start-button">PLAY!</button>
               </div>
               `;
           break;

         case "SOLVE_QUESTION":
           root.innerHTML = `
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
               </div>`;
           break;

         case "GAME_OVER":
           root.innerHTML = `
                   <div class="container">
                   <video autoplay loop muted plays-inline class="video-back">
                   <source src="./confetti.html.mp4" type="video/mp4">
                   </video>
                   <p id="won">Congratulations you are a fabulous Mathematician!!!<p>
                   <br></br>
                   <p>GAME OVER! You spent ${firstNumber} milliseconds playing</p>
                   <button id="start-button">REPLAY?</button>
                  
               </div>`;
           break;
       }
     }

   }

   const root$1 = document.querySelector('#root');

   class Game {
     constructor() {
       this.firstNumber = null;
       this.secondNumber = null;
       this.answer = null;
       this.gameLevel = 1;
       this.time = new Date();
       this.display = new Display();
     }

     generateNumber() {
       this.firstNumber = Math.floor(Math.random() * 10);
       this.secondNumber = Math.floor(Math.random() * 10);
       this.answer = this.firstNumber + this.secondNumber;
       this.gameLevel++;
     }

     start() {
       this.generateNumber();
       this.display.render("SOLVE_QUESTION", this.firstNumber, this.secondNumber);
       this.gameLevel = 1;
     }

     validateAnswer(answer) {
       if (answer == this.answer && this.gameLevel <= 3) {
         this.generateNumber();
         this.display.render("SOLVE_QUESTION", this.firstNumber, this.secondNumber);
         this.gameLevel++;
       } else if (answer == this.answer && this.gameLevel >= 3) {
         this.end();
       }
     }

     play() {
       this.validateAnswer();
       this.time = Date.now();
     }

     end() {
       this.display.render("GAME_OVER", Date.now() - this.time);
       this.gameLevel = 0;
       this.time = 0;
       this.answer = 0;
     }

   }

   const game = new Game();
   game.display.render("START_GAME");
   root$1.addEventListener('click', e => {
     const target = e.target;

     if (target.matches('#start-button')) {
       game.start();
     }
   });
   root$1.addEventListener('keyup', e => {
     const target = e.target;

     if (target.matches('.answer')) {
       game.validateAnswer(document.querySelector('.answer').value);
     }
   });

})();
//# sourceMappingURL=app.js.map
