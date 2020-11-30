import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class QuickCreateContact extends LightningElement {
    contactId;
    fname;
    lname;

    @wire(MessageContext) messageContext;

    setfName(event){
        this.fname = event.target.value;
    }

    setlName(event){
        this.lname = event.target.value;
    }

    handleSuccess(event){
        this.contactId = event.detail.id;
    }

    handlePublish(event){
        const message = {
            lmsData:{
                firstName: this.fname,
                lastName: this.lname
            }
        };
        publish(this.messageContext, SAMPLEMC, message);
    }
}