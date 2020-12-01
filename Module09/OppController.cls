public with sharing class OppController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> findOpportunity(String searchKey, string recordId) {
        string key = '%' + searchKey + '%';
        List<Opportunity> oppList = [SELECT Id, Name, AccountId, CloseDate, Amount FROM Opportunity WHERE Name LIKE :key AND AccountId =: recordId LIMIT 10];
        if(oppList.size()>0){
            return oppList;
        }
        return null;
    }
}
