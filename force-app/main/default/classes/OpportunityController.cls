public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpps(){
        return [SELECT StageName FROM Opportunity];
    }
}