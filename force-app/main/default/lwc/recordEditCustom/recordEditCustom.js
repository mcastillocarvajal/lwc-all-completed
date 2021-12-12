import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class RecordEditCustom extends LightningElement {

    objectName = ACCOUNT_OBJECT
    inputValue = ''

    handleChange(event){
        this.inputValue = event.target.value
    }

    handleSubmit(e){
        e.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity('The Account name must include \'Australia\'')
        }else{
            inputCmp.setCustomValidity('')
            const fields = e.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }    

    successHandler(e){
        const toast = new ShowToastEvent({
            title:'Account created',
            message:'Record ID: '+e.detail.id,
            variant:'success'
        })
        this.dispatchEvent(toast)
    }

    handleError(e){
        const toast = new ShowToastEvent({
            title:'Error creating the account',
            message:e.detail.message,
            variant:'error'
        })
        this.dispatchEvent(toast)
    }
}