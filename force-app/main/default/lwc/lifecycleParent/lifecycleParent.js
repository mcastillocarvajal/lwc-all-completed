import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {

    isChildVisible = false

    constructor(){
        super()
        console.log("Parent constructor called")
    }

    connectedCallback(){
        console.log("Parent connectedCallback called")
    }

    renderedCallback(){
        console.log("Parent renderedCallback called")
    }

    handleClick(){
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}