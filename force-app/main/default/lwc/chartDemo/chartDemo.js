import { LightningElement,wire } from 'lwc';
import getOpps from '@salesforce/apex/OpportunityController.getOpps';

export default class ChartDemo extends LightningElement {

    pieChartLabels=[]
    pieChartData=[]

    @wire(getOpps)
    oppHandler({data,error}){
        if(data){
            //console.log(data)
            const result = data.reduce((json, value)=>({...json, [value.StageName]:(json[value.StageName]|0)+1}), {})
            if(Object.keys(result).length){
                this.pieChartLabels = Object.keys(result)
                this.pieChartData = Object.values(result)
            }
        }
        if(error){
            console.error(error)
        }
    }
}