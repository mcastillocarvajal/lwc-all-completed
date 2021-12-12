import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isVisible = false
    name

    handleClick(){
        this.isVisible = !this.isVisible
    }

    handler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
    }

    //falsy values
    // x = 0, null, undefined, false, ""
}