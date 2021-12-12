import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    constructor(){
        super()
        console.log("Child constructor called")
    }

    //interval
    connectedCallback(){
        console.log("Child connectedCallback called")
        //window.addEventListener('click', this.handleClick)
        //const this.interval = window.setInterval()

        //ERROR TO CALL THE errorCallback HOOK IN THE PARENT COMPONENT
        throw new Error('Loadind of child component failed')
    }

    renderedCallback(){
        console.log("Child renderedCallback called")
    }

    disconnectedCallback(){
        alert('Child disconnectedCallback called')
        //window.removeEventListener('click', this.handleClick)
        //window.clearInterval(this.interval)
    }
}