import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class FilteringAndSortingDemo extends LightningElement {

    headings=['Id','Name', 'Title', 'Email']
    fullTableData=[]
    filteredData=[]
    timer
    filterBy='Name'

    sortedBy='Name'
    sortDirection='asc'

    @wire(getContactList)
    wireHandler({data,error}){
        if(data){
            //console.log(data)
            this.fullTableData = data
            this.filteredData = [...this.sortBy(data)]
        }
        if(error){
            console.error(error)
        }
    }

    get filterByOptions(){
        return [
            {label:'All',value:'All'},
            {label:'Id',value:'Id'},
            {label:'Name',value:'Name'},
            {label:'Title',value:'Title'},
            {label:'Email',value:'Email'}
        ]
    }

    get sortByOptions(){
        return [
            {label:'Id',value:'Id'},
            {label:'Name',value:'Name'},
            {label:'Title',value:'Title'},
            {label:'Email',value:'Email'}
        ]
    }

    filterByHandler(e){
        this.filterBy = e.target.value
    }

    filterHandler(event){
        const {value} = event.target
        this.timer = window.clearTimeout(this.timer)
        if(value){
            this.timer = window.setTimeout(()=>{
                //console.log(value)
                this.filteredData = this.fullTableData.filter(i=>{
                    if(this.filterBy === 'All'){
                        /**THIS FILTER IN EVERY PROPERTY OF THE DATA**/
                        return Object.keys(i).some(key=>{
                            return i[key].toLowerCase().includes(value)
                        })
                    }else{  
                        const keyValue = i[this.filterBy] ? i[this.filterBy] : ''
                        return keyValue.toLowerCase().includes(value)
                    }
                })
            },500)
        }else{
            this.filteredData = [...this.fullTableData]
        }
    }

    sortByHandler(e){
        this.sortedBy = e.target.value
        this.filteredData = [...this.sortBy(this.filteredData)]
    }

    sortBy(data){
        const cloneData = [...data]
        cloneData.sort((a,b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0
            }
            return this.sortDirection === 'desc' ? 
                a[this.sortedBy] > b[this.sortedBy] ? -1 : 1 :
                    a[this.sortedBy] < b[this.sortedBy] ? -1 : 1
        })
        return cloneData
    }
}