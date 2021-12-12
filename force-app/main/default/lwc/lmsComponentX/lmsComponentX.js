import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {

    receivedMsg
    subscription

    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){

        //subscribe(MessageContext, messageChannel, listener, subscribeOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMsg(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMsg(message){
        this.receivedMsg = message.lmsData.value ? message.lmsData.value : 'There is no any message'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
}