import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class ThirdPartyJsFiles extends LightningElement {

    currentDate = ''
    isLoaded = false

    // SINGLE PROMISE WITHOUT PROMISE.ALL()
    // renderedCallback(){
    //     if(this.isLoaded){
    //         return
    //     } else{
    //         loadScript(this, MOMENT + '/moment/moment.min.js').then(()=>{
    //             //success
    //             this.setDataOnScreen()
    //         }).catch(err=>{
    //             console.log(err);
    //         })
    //         this.isLoaded = true
    //     }
    // }

    // 2 PROMISES WITH PROMISE.ALL()
    renderedCallback(){
        if(this.isLoaded){
            return
        } else{

            Promise.all([
                loadStyle(this, ANIMATE + '/animate/animate.min.css'),
                loadScript(this, MOMENT + '/moment/moment.min.js')
            ]).then(()=>{
                //success
                this.setDataOnScreen()
            }).catch(err=>{
                console.log(err);
            })
            this.isLoaded = true
        }
    }

    setDataOnScreen(){
        this.currentDate = moment().format('LLLL')
    }
}