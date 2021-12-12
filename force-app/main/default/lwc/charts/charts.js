import { LightningElement,api } from 'lwc';
import chartJS from '@salesforce/resourceUrl/chartJS';
import {loadScript} from 'lightning/platformResourceLoader';

export default class Charts extends LightningElement {

    isChartInitialized
    chart

    @api type
    @api chartHeading
    @api chartData
    @api chartLabels

    renderedCallback(){
        if(this.isChartInitialized){
            return
        }
        loadScript(this, chartJS+'/chartJs/Chart.js').then(()=>{
            console.log('ChartJS loaded successfully')
            this.isChartInitialized=true
            this.loadCharts()
        }).catch(error=>{
            console.error(error)
        })
    }

    loadCharts(){

        window.Chart.platform.disableCSSInjection = true

        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)
        const context = canvas.getContext('2d')
        this.chart = new window.Chart(context, this.config())
    }
    config(){
        return {
            type: this.type,
            data: {
                labels: this.chartLabels ? this.chartLabels:[],
                datasets: [{
                    label: this.chartHeading,
                    data: this.chartData ? this.chartData:[],
                    backgroundColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)',
                        'rgba(255, 159, 64)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive:true,
                legend:{
                    position:'right'
                },
                animation:{
                    animateScale:true,
                    animateRotate:true
                }
            }
        }
    }
}