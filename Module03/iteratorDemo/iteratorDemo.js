import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
    contacts=[
        {
            index:0,
            Id:'C1', 
            Name:'John Abraham', 
            Email:'ja@gmail.com',
        },
        {
            index:1,
            Id:'C2', 
            Name:'Brad Pitt', 
            Email:'bpitt@gmail.com',
        },
        {
            index:2,
            Id:'C3', 
            Name:'Angelina Jolie', 
            Email:'angelj@gmail.com',
        },
        {
            index:3,
            Id:'C4', 
            Name:'Peter Parker', 
            Email:'spiderman@marvelcomics.com',
        },
    ];
}