import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

export default class ApexImperativeWithParamsDemo extends LightningElement {

    searchKey=''
    accounts
    timer

    searchHandler(e){
        window.clearTimeout(this.timer)
        this.searchKey = e.target.value
        this.timer = setTimeout(()=>{
            this.callApex()
        }, 1000)
    }

    callApex(){
        findAccounts({searchKey:this.searchKey})
        .then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}