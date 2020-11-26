import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    @api
    selected1;
    @api
    selected2;
    @api
    selected3;

    @api
    status1 = 'Deselected';
    @api
    status2 = 'Deselected';
    @api
    status3 = 'Deselected';
    @api
    numSelect = 0;
    
    handleClick(event){
        if(event.target.name === "button1"){
            this.selected1 = !this.selected1;
            if(this.selected1){
                this.status1 = "Selected";
                this.numSelect += 1;
            }
            else{
                this.status1 = "Deselected";
                this.numSelect -= 1;
            }
        }
        else if(event.target.name === "button2"){
            this.selected2 = !this.selected2;
            if(this.selected2){
                this.status2 = "Selected";
                this.numSelect += 1;
            }
            else{
                this.status2 = "Deselected";
                this.numSelect -= 1;
            }
        }
        else if(event.target.name === "button3"){
            this.selected3 = !this.selected3;
            if(this.selected3){
                this.status3 = "Selected";
                this.numSelect += 1;
            }
            else{
                this.status3 = "Deselected";
                this.numSelect -= 1;
            }
        }
        const dataevent = new CustomEvent('customclick',
                        {
                            bubbles:true,
                            composed:true,
                            detail : {numSelect : this.numSelect, status1 : this.status1,
                            status2 : this.status2, status3 : this.status3, selected1 : this.selected1, 
                            selected2 : this.selected2, selected3 : this.selected3}
                        });
        
        this.dispatchEvent(dataevent);
    }

    @api
    ChildReset(){
        this.numSelect = 0;
        this.selected1 = false;
        this.selected2 = false;
        this.selected3 = false;
    }
}