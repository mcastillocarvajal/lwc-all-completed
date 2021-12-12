import { LightningElement } from 'lwc';

export default class ShadowDOMstyling extends LightningElement {

    isLoaded = false
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-shadow-d-o-m-styling .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true
    }
}