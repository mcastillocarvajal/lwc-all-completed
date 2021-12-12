public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        
        return [SELECT id, name, type, industry FROM Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountType(String type){
        
        return [SELECT id, name, type, industry FROM Account WHERE Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        
        String key = '%'+String.escapeSingleQuotes(searchKey)+'%';
        return [SELECT id, name, type, industry FROM Account WHERE name LIKE :key LIMIT 5];
    }
}