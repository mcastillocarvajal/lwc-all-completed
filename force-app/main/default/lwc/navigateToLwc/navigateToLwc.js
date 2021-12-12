import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLWC(){
        let definition = {
            componentDef:'c:navigateTargetComponent',
            attributes: {
                recordId: '9279324900'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
}