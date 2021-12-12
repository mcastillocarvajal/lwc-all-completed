import { LightningElement } from 'lwc';

export default class ReusableCustomLightningCard extends LightningElement {

    handleSlotFooter(){
        const footerElem = this.template.querySelector('footer')
        if(footerElem){
            footerElem.classList.remove('slds-hide')
        }
    }
}