import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Notifications extends LightningElement {
    
    toastHandler(){
        this.showToast('Success!', '{0} Account created {1}', 'success')
    }

    toastHandler2(){
        this.showToast('Error!', 'Error creating the account', 'error')
    }

    toastHandler3(){
        this.showToast('Info!', 'Summer 22 release is avalaible', 'info')
    }

    toastHandler4(){
        this.showToast('Warning!', 'Password should have 8 characters', 'warning')
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'Salesforce', {
                    url: 'http://www.salesforce.com/',
                    label: 'Click here'
                }
            ],
            mode: 'sticky'
        })
        this.dispatchEvent(event)
    }
}