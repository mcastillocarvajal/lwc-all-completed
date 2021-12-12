public with sharing class MapController {

    @AuraEnabled(cacheable=true) //whenever it is a get request
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Description, BillingState, BillingStreet, BillingCountry, BillingCity, BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
    }
}