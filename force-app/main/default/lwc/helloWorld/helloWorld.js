import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // Two way data binding
    fullname = "Moises Castillo"
    title = "Admin"

    handle(event){
        this.title = event.target.value
    }

    // track binding example
    @track address = {
        city: "San Jose",
        postcode: 10105,
        country: "Costa Rica"
    }

    trackHandle(event){
        this.address.city = event.target.value
    }

    // GETTER EXAMPLE
    users = ["John", "Charlie", "Maria"]
    num1 = 10 
    num2 = 20

    get firstUser(){
        return this.users[0]
    }

    get multiply(){
        return this.num1 * this.num2
    }
}