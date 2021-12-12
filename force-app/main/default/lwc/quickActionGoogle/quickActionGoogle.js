import { LightningElement,api } from 'lwc';

export default class QuickActionGoogle extends LightningElement {

    @api recordId
    @api invoke(){
        console.log('invoked', this.recordId)
        window.open('https://google.com', '_blank')
    }
}