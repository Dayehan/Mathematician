const root=document.querySelector('#root');
import {Display} from "./display.js";
class Game{
    constructor(){
        this.firstNumber = null;
        this.secondNumber = null;
        this.answer = null;
        this.gameLevel = 1;
        this.time = new Date();
        this.display=new Display();
    }
    
    generateNumber(){
        this.firstNumber = Math.floor(Math.random() * 10) ;
        this.secondNumber = Math.floor(Math.random() * 10) ;
        this.answer = this.firstNumber + this.secondNumber;
        this.gameLevel++;
        
    }
    start(){
        this.generateNumber();
        this.display.render("SOLVE_QUESTION",this.firstNumber, this.secondNumber);
        
        this.gameLevel = 1;
      
    }
    validateAnswer(answer){
        if (answer == this.answer && this.gameLevel <= 3) {
            this.generateNumber();
            this.display.render("SOLVE_QUESTION",this.firstNumber, this.secondNumber);
            this.gameLevel++;
           
        } else if (answer == this.answer && this.gameLevel >= 3) {
          this.end();
    }
    
    }
    play(){
        this.validateAnswer();
        this.time = Date.now();
    }
    end(){
        this.display.render("GAME_OVER",Date.now()-this.time);   
        this.gameLevel=0;
        this.time=0;
        this.answer=0;
    }

}
const game = new Game();
game.display.render("START_GAME");

root.addEventListener('click', (e)=> {
    const target=e.target;
    if(target.matches('#start-button')){
      
        game.start();
    }
})

root.addEventListener('keyup', (e) => {
    const target=e.target;
    if(target.matches('.answer')){
        game.validateAnswer(document.querySelector('.answer').value);
    }
})
