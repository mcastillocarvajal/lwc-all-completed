import { LightningElement } from 'lwc';
import LABEL1 from '@salesforce/label/c.description1';
import LABEL2 from '@salesforce/label/c.description2';

export default class CustomLabels extends LightningElement {

    labels = {
        label1 : LABEL1,
        label2 : LABEL2
    }
}