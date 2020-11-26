import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    status1 = "Deselected";
    status2 = "Deselected";
    status3 = "Deselected";
    selected1 = false;
    selected2 = false;
    selected3 = false;
    numSelect = 0;

    handleChildClick(event){
        this.numSelect = event.detail.numSelect;
        this.status1 = event.detail.status1;
        this.status2 = event.detail.status2;
        this.status3 = event.detail.status3;
        this.selected1 = event.detail.selected1;
        this.selected2 = event.detail.selected2;
        this.selected3 = event.detail.selected3;
    }
    
    handleReset(){
        this.numSelect = 0;
        this.template.querySelector('c-parent').ParentReset();
    }
}