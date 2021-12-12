import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    userNames= ["John", "Rick", "Sam", "Mike"]

    fetchDetailsHandler(){
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)
        elem.style.border="1px solid red";

        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).forEach(item => {
            console.log(item.innerText)
            item.setAttribute("title", item.innerText)
        })

        //LWC:MANUAL DEMO
    
        const childElem = this.template.querySelector('.child')
        childElem.innerHTML = '<p>Hey I am a child element</p>'
    }

}