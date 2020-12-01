import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class QuickCreate extends NavigationMixin(LightningElement) {
    showAllAccount=false;
    showAllContact=false;
    showAllOpp=false;
    createAcc = false;
    createCon = false;
    createOpp = false;
    selectedOption = "None";

    changeHandler(event){
        const field = event.target.name;
        if (field === 'optionSelect') {
            this.selectedOption = event.target.value;
        }
    }

    handleCreate(){
        if(this.selectedOption === "Account"){
            this.createAcc = true;
            this.createCon = false;
            this.createOpp = false;
        }
        else if(this.selectedOption === "Contact"){
            this.createAcc = false;
            this.createCon = true;
            this.createOpp = false;
        }
        else if(this.selectedOption === "Opportunity"){
            this.createAcc = false;
            this.createCon = false;
            this.createOpp = true;
        }
        else if(this.selectedOption === "None"){
            alert("Please select an object");
        }
    }

    handleNew(){
        if(this.selectedOption === "Account"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedOption === "Contact"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedOption === "Opportunity"){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Opportunity',
                    actionName: 'new'
                }
            })
        }
        else if(this.selectedOption === "None"){
            alert("Please select an object");
        }
    }

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