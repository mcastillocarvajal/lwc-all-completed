import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {

    startDate
    endDate
    error

    dateHandler(event){
        const {name, value} = event.target
        this[name] = value 
    }

    submitHandler(e){
        e.preventDefault()

        if(this.validateDate(this.startDate, this.endDate)){
            console.log('Data is valid')
        }else{
            this.error = 'End date cannot be greater than start date'
        }
    }

    validateDate(start, end){
        return new Date(start).getTime() < new Date(this.endDate).getTime()
    }
}