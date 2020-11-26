import { LightningElement } from 'lwc';

export default class QuickCreate extends LightningElement {
    showAllAccount=false;
    showAllContact=false;
    showAllOpp=false;
    handleAccSuccess(event){
        this.handleAccReset();
    }

    handleConSuccess(event){
        this.handleConReset();
    }

    handleOppSuccess(event){
        this.handleOppReset();
    }

    handleShow(event){
        if(event.target.name === "allAcc"){
            this.showAllAccount = !this.showAllAccount;
        }
        else if(event.target.name === "allCon"){
            this.showAllContact = !this.showAllContact;
        }
        else if(event.target.name === "allOpp"){
            this.showAllOpp = !this.showAllOpp;
        }
    }

    handleAccReset(){
        const accinputFields = this.template.querySelectorAll('.acc');
        if(accinputFields){
            accinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleConReset(){
        const coninputFields = this.template.querySelectorAll('.con');
        if(coninputFields){
            coninputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleOppReset(){
        const oppinputFields = this.template.querySelectorAll('.opp');
        if(oppinputFields){
            oppinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleSave(event){
        if(event.target.name === "saveAcc"){
            this.template.querySelectorAll('.acc').submit();
            
        }
        else if(event.target.name === "saveCon"){
            this.template.querySelectorAll('.con').submit();
            
        }
        else if(event.target.name === "saveOpp"){
            this.template.querySelectorAll('.opp').submit();
            
        }
    }
}