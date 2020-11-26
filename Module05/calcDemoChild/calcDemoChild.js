import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api
    numEnter = '';

    @api
    result = 0;
}