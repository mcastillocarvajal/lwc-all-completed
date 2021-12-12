import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import MYPERMISSION from '@salesforce/customPermission/showDetails';

export default class CheckPermissionDemo extends LightningElement {

    get hasViewAllDataAvailable(){
        return hasViewAllData
    }

    get hasCustomPermission(){
        return MYPERMISSION
    }
}