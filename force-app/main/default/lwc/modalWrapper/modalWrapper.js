import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {

    isOpen=false

    openHandler(){
        this.isOpen=true
    }

    closeHandler(){
        this.isOpen=false
    }
}