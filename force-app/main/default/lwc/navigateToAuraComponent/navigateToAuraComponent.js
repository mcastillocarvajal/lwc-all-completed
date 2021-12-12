import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:'standard__component',
            attributes:{
                componentName:'c__AuraTarget'
            },
            state:{
                "c__id":"397492594"
            }
        })
    }
}