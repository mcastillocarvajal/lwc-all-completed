import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToVF extends NavigationMixin(LightningElement) {

    navigateToVF(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navigateTargetVF'
            }
        }).then(resultUrl=>{
            window.open(resultUrl)
        })
    }
}