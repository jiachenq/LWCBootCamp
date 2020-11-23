import { LightningElement} from 'lwc';

export default class App extends LightningElement {
   numEnter = '';
   result = 0;
   
   handleClear(){
        this.numEnter = '';
        this.result = 0;
    }

    handleClick(event){
        this.numEnter += event.target.label;
        if(this.numEnter.startsWith('+') || this.numEnter.startsWith('-') || this.numEnter.startsWith('*') || this.numEnter.startsWith('/')){
            this.result = "Invalid Expression";
        }
    }

    handleCalculate(){
        try{
            this.result = eval(this.numEnter);
        }catch(e){
            this.result = "Invalid Expression";
        }
    }
}