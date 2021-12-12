import { LightningElement, api } from 'lwc';

export default class ConfigFile extends LightningElement {

    @api heading
    @api recordId
    @api age
    @api levels
}