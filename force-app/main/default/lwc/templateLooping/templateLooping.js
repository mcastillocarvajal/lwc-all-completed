import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    carList = ["Ford", "Audi", "Toyota", "Jeep", "BMW", "Mercedes"]

    ceoList = [
        {
            id:1,
            company:"IBM",
            name: "Arvind Krishna"
        },{
            id:2,
            company:"HP Inc.",
            name:"Enrique Lores"
        },{
            id:3,
            company:"NI",
            name:"Eric Starkloff"
        }
    ]
}