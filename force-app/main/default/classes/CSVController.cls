public with sharing class CSVController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id,Name,Phone,AnnualRevenue,Industry FROM Account];
    }
}