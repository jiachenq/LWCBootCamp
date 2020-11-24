import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {
    @api
    status1 = "Deselected";
    @api
    status2 = "Deselected";
    @api
    status3 = "Deselected";

    handleChildClick(event){
        this.status1 = event.target.status1;
        this.status2 = event.target.status2;
        this.status3 = event.target.status3;
    }

    @api
    ParentReset(){
        this.status1 = "Deselected";
        this.status2 = "Deselected";
        this.status3 = "Deselected";
        this.template.querySelector('c-child').ChildReset();
    }
}