import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';
export default class StaticResourceLWCExample extends LightningElement {
    ImageTom="https://i.pinimg.com/originals/9f/ba/ae/9fbaaefb449e248ed975e1fde1169f8d.png";
    ImageJerry="https://i.pinimg.com/originals/83/56/96/835696578e94b4f710f241e81f19b8cf.png";
    Tom = true;
    handleClick(){
        this.Tom = !this.Tom;
    }
}
