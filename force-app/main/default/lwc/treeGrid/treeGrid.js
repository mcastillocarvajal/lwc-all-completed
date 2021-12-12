import { LightningElement, wire } from 'lwc';
import allAccountsWithContact from '@salesforce/apex/AccountContact.allAccountsWithContact';

export default class TreeGrid extends LightningElement {

    gridData=[]

    @wire(allAccountsWithContact)
    wireHandler({data,error}){
        if(data){
            //console.log(data)
            this.formatGridData(data)
        }
        if(error){
            console.error(error)
        }
    }

    /**COLUMS*/

    gridColumns=[
        {label:'Name',fieldName:'Name',type:'text'},
        {label:'Phone',fieldName:'Phone',type:'text'},
        {label:'Account website',fieldName:'Website',type:'url',typeAttributes:{target:'_isblank'}}
    ]

    dummyData=[
        {Name:'Salesforce',Email:'salesforce@sf.com',Website:'salesforce.com'},
        {Name:'IBM',Email:'ibm@sf.com',Website:'ibm.com'}
    ]

    formatGridData(data){
        this.gridData = data.map(i=>{
            const {Contacts, ...accounts} = i
            const updatedContact = Contacts.map(con=>{
                return {...con, '_children':this.dummyData}
            })
            return {...accounts, '_children':updatedContact}
        })
    }

}